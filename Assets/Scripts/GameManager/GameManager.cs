using System;
using System.Collections;
using TMPro;
using UnityEngine;
#if TMP_PRESENT
using TMPro;
#endif
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Header("Game settings")]
    public float gameDuration = 60f;               
    [Tooltip("Curve 0..1 over normalized time (0=start,1=end) used to compute difficulty multiplier")]
    public AnimationCurve difficultyCurve = AnimationCurve.Linear(0f, 1f, 1f, 1.6f);

    [Header("UI - use TextMeshPro if available; otherwise assign Unity UI Text")]

    public TMP_Text highestText;
    public TMP_Text timeText;
    public TMP_Text scoreText;

    [Header("Perfect dunk popup")]
    public GameObject perfectPopup;                
    public float perfectPopupDuration = 1.0f;

    [Header("Highscore")]
    public string highscoreKey = "Highscore";

    // runtime state
    public bool IsRunning { get; private set; }
    public float TimeRemaining { get; private set; }
    public int Score { get; private set; } = 0;
    public int Highscore { get; private set; } = 0;

    // events
    public event Action<float> OnTimeChanged;
    public event Action<int> OnScoreChanged;
    public event Action<float> OnDifficultyChanged;
    public event Action OnGameStarted;
    public event Action OnGameEnded;

    private Coroutine _timerCoroutine;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);

        if (highestText == null)
        {
            Debug.LogError("GameManager: highestText is not assigned in the Inspector!");
        }
        if (timeText == null)
        {
            Debug.LogError("GameManager: timeText is not assigned in the Inspector!");
        }
        if (scoreText == null)
        {
            Debug.LogError("GameManager: scoreText is not assigned in the Inspector!");
        }
        Highscore = PlayerPrefs.GetInt(highscoreKey, 0);
        UpdateHighscoreUI();
        if (perfectPopup != null) perfectPopup.SetActive(false);
    }

    private void Start()
    {
        StartGame();
    }

    private void OnDestroy()
    {
        if (Instance == this) Instance = null;
    }

    private void UpdateHighscoreUI()
    {
        SetTextSafe(highestText, $"HIGHEST\n{Highscore}");
    }

    private void SetTextSafe(object uiText, string text)
    {
        if (uiText == null) return;
        if (uiText is TMP_Text t) t.text = text;
        else if (uiText is Text u) u.text = text;
    }

    private void UpdateScoreUI()
    {
        SetTextSafe(scoreText, $"SCORE\n{Score}");
    }

    private void UpdateTimeUI()
    {
        int sec = Mathf.CeilToInt(TimeRemaining);
        int minutes = sec / 60;
        int seconds = sec % 60;
        SetTextSafe(timeText, $"{minutes:00}:{seconds:00}");
    }

    public void StartGame()
    {
        Score = 0;
        TimeRemaining = gameDuration;
        IsRunning = true;
        UpdateScoreUI();
        UpdateTimeUI();

        OnGameStarted?.Invoke();

        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = StartCoroutine(GameTimerCoroutine());
    }

    public void EndGame()
    {
        if (!IsRunning) return;

        IsRunning = false;
        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = null;
        if (Score > Highscore)
        {
            Highscore = Score;
            PlayerPrefs.SetInt(highscoreKey, Highscore);
            PlayerPrefs.Save();
            UpdateHighscoreUI();
        }

        OnGameEnded?.Invoke();
    }

    public void AddScore(int points, bool perfect = false)
    {
        if (!IsRunning)
        {
            Debug.Log("AddScore called while game is not running; ignoring.");
            return;
        }

        Score += points;
        UpdateScoreUI();
        OnScoreChanged?.Invoke(Score);

        if (perfect)
        {
            ShowPerfectPopup();
        }
    }

    public float GetDifficultyMultiplier()
    {
        if (!IsRunning) return difficultyCurve.Evaluate(0f);
        float normalized = 1f - (TimeRemaining / Mathf.Max(1f, gameDuration));
        float mul = difficultyCurve.Evaluate(Mathf.Clamp01(normalized));
        return mul;
    }

    private IEnumerator GameTimerCoroutine()
    {
        while (TimeRemaining > 0f && IsRunning)
        {
            yield return null;
            TimeRemaining -= Time.deltaTime;

            if (TimeRemaining < 0f) TimeRemaining = 0f;
            UpdateTimeUI();

            OnDifficultyChanged?.Invoke(GetDifficultyMultiplier());
        }
        EndGame();
    }

    private Coroutine _perfectCoroutine = null;
    private void ShowPerfectPopup()
    {
        if (perfectPopup == null) 
        {
            Debug.LogWarning("GameManager: perfectPopup is not assigned, cannot show popup.");
            return;
        }

        if (_perfectCoroutine != null) StopCoroutine(_perfectCoroutine);
        _perfectCoroutine = StartCoroutine(PerfectPopupCoroutine());
    }

    private IEnumerator PerfectPopupCoroutine()
    {
        perfectPopup.SetActive(true);

        float timer = 0f;
        while (timer < perfectPopupDuration)
        {
            timer += Time.deltaTime;
            yield return null;
        }

        perfectPopup.SetActive(false);
        _perfectCoroutine = null;
    }

    [ContextMenu("Debug: Start Game")]
    public void DebugStartGame() => StartGame();

    [ContextMenu("Debug: End Game")]
    public void DebugEndGame() => EndGame();

    [ContextMenu("Debug: Reset Highscore")]
    public void DebugResetHighscore()
    {
        PlayerPrefs.DeleteKey(highscoreKey);
        Highscore = 0;
        UpdateHighscoreUI();
    }
}