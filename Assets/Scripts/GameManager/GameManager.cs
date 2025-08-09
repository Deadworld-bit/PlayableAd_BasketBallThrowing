using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager _Instance { get; private set; }

    [Header("Game settings")]
    [SerializeField] private float _gameDuration = 120f;
    [Tooltip("Curve 0..1 over normalized time (0=start,1=end) used to compute difficulty multiplier")]
    [SerializeField] private AnimationCurve difficultyCurve = AnimationCurve.Linear(0f, 1f, 1f, 1.6f);

    [Header("UI for the Machine")]
    [SerializeField] private TMP_Text _highestText;
    [SerializeField] private TMP_Text _timeText;
    [SerializeField] private TMP_Text _scoreText;

    [Header("Perfect dunk popup")]
    [SerializeField] private GameObject _perfectPopup;
    [SerializeField] private float _perfectPopupDuration = 1.0f;

    [Header("Highscore")]
    [SerializeField] private string _highscoreKey = "Highscore";

    [Header("Start/End Screens")]
    [SerializeField] private GameObject _startPanel;
    [SerializeField] private GameObject _endPanel;
    [SerializeField] private Button _startButton;
    [SerializeField] private Button _retryButton;
    [SerializeField] private TMP_Text _endScoreText;

    public bool IsRunning { get; private set; }
    public float TimeRemaining { get; private set; }
    public int Score { get; private set; } = 0;
    public int Highscore { get; private set; } = 0;

    public event Action<float> OnTimeChanged;
    public event Action<int> OnScoreChanged;
    public event Action<float> OnDifficultyChanged;
    public event Action OnGameStarted;
    public event Action OnGameEnded;

    private Coroutine _timerCoroutine;

    private void Awake()
    {
        if (_Instance != null && _Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        _Instance = this;
        DontDestroyOnLoad(gameObject);

        if (_highestText == null)
        {
            Debug.LogError("GameManager: highestText is not assigned in the Inspector!");
        }
        if (_timeText == null)
        {
            Debug.LogError("GameManager: timeText is not assigned in the Inspector!");
        }
        if (_scoreText == null)
        {
            Debug.LogError("GameManager: scoreText is not assigned in the Inspector!");
        }
        // NEW: Check new UI references
        if (_startPanel == null || _endPanel == null || _startButton == null || _retryButton == null || _endScoreText == null)
        {
            Debug.LogError("GameManager: One or more start/end UI elements are not assigned!");
        }

        Highscore = PlayerPrefs.GetInt(_highscoreKey, 0);
        UpdateHighscoreUI();
        if (_perfectPopup != null) _perfectPopup.SetActive(false);

        if (_startPanel != null) _startPanel.SetActive(true);
        if (_endPanel != null) _endPanel.SetActive(false);

        if (_startButton != null)
        {
            _startButton.onClick.AddListener(() =>
            {
                StartGame();
                if (_startPanel != null) _startPanel.SetActive(false);
            });
        }
        if (_retryButton != null)
        {
            _retryButton.onClick.AddListener(() =>
            {
                StartGame();
                if (_endPanel != null) _endPanel.SetActive(false);
            });
        }
    }

    private void OnDestroy()
    {
        if (_Instance == this) _Instance = null;
    }

    private void UpdateHighscoreUI()
    {
        SetTextSafe(_highestText, $"{Highscore}");
    }

    private void SetTextSafe(object uiText, string text)
    {
        if (uiText == null) return;
        if (uiText is TMP_Text t) t.text = text;
        else if (uiText is Text u) u.text = text;
    }

    private void UpdateScoreUI()
    {
        SetTextSafe(_scoreText, $"{Score}");
    }

    private void UpdateTimeUI()
    {
        int sec = Mathf.CeilToInt(TimeRemaining);
        int minutes = sec / 60;
        int seconds = sec % 60;
        SetTextSafe(_timeText, $"{minutes:00}:{seconds:00}");
    }

    public void StartGame()
    {
        Score = 0;
        TimeRemaining = _gameDuration;
        IsRunning = true;
        UpdateScoreUI();
        UpdateTimeUI();

        if (_endPanel != null) _endPanel.SetActive(false);

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
            PlayerPrefs.SetInt(_highscoreKey, Highscore);
            PlayerPrefs.Save();
            UpdateHighscoreUI();
        }
        if (_endPanel != null) _endPanel.SetActive(true);
        if (_endScoreText != null) _endScoreText.text = $"Score: {Score}";

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
        float normalized = 1f - (TimeRemaining / Mathf.Max(1f, _gameDuration));
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
        if (_perfectPopup == null)
        {
            Debug.LogWarning("GameManager: perfectPopup is not assigned, cannot show popup.");
            return;
        }

        if (_perfectCoroutine != null) StopCoroutine(_perfectCoroutine);
        _perfectCoroutine = StartCoroutine(PerfectPopupCoroutine());
    }

    private IEnumerator PerfectPopupCoroutine()
    {
        _perfectPopup.SetActive(true);

        float timer = 0f;
        while (timer < _perfectPopupDuration)
        {
            timer += Time.deltaTime;
            yield return null;
        }

        _perfectPopup.SetActive(false);
        _perfectCoroutine = null;
    }

    [ContextMenu("Debug: Start Game")]
    public void DebugStartGame() => StartGame();

    [ContextMenu("Debug: End Game")]
    public void DebugEndGame() => EndGame();

    [ContextMenu("Debug: Reset Highscore")]
    public void DebugResetHighscore()
    {
        PlayerPrefs.DeleteKey(_highscoreKey);
        Highscore = 0;
        UpdateHighscoreUI();
    }
}