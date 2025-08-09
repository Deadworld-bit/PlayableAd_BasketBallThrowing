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

    [Header("Ring movement")]
    [SerializeField] private Button _moveRingButton;                   
    [SerializeField] private BasketRingMover _basketRingMover;
    public float ScoreMultiplier { get; private set; } = 1f;

    public bool _IsRunning { get; private set; }
    public float _TimeRemaining { get; private set; }
    public int _Score { get; private set; } = 0;
    public int _Highscore { get; private set; } = 0;

    public event Action<float> _OnTimeChanged;
    public event Action<int> _OnScoreChanged;
    public event Action<float> _OnDifficultyChanged;
    public event Action _OnGameStarted;
    public event Action _OnGameEnded;

    private Coroutine _timerCoroutine;
    private bool _ringMovementActive = false;

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
        if (_startPanel == null || _endPanel == null || _startButton == null || _retryButton == null || _endScoreText == null)
        {
            Debug.LogError("GameManager: One or more start/end UI elements are not assigned!");
        }

        if (_moveRingButton == null)
        {
            Debug.LogWarning("GameManager: moveRingButton not assigned - ring move UI will not work.");
        }
        else
        {
            _moveRingButton.gameObject.SetActive(false);
            _moveRingButton.onClick.AddListener(ToggleRingMovement);
        }

        _Highscore = PlayerPrefs.GetInt(_highscoreKey, 0);
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
        if (_moveRingButton != null)
        {
            _moveRingButton.onClick.RemoveListener(ToggleRingMovement);
        }
    }

    private void UpdateHighscoreUI()
    {
        SetTextSafe(_highestText, $"{_Highscore}");
    }

    private void SetTextSafe(object uiText, string text)
    {
        if (uiText == null) return;
        if (uiText is TMP_Text t) t.text = text;
        else if (uiText is Text u) u.text = text;
    }

    private void UpdateScoreUI()
    {
        SetTextSafe(_scoreText, $"{_Score}");
    }

    private void UpdateTimeUI()
    {
        int sec = Mathf.CeilToInt(_TimeRemaining);
        int minutes = sec / 60;
        int seconds = sec % 60;
        SetTextSafe(_timeText, $"{minutes:00}:{seconds:00}");
    }

    public void StartGame()
    {
        _Score = 0;
        _TimeRemaining = _gameDuration;
        _IsRunning = true;
        UpdateScoreUI();
        UpdateTimeUI();

        if (_endPanel != null) _endPanel.SetActive(false);
        if (_moveRingButton != null) _moveRingButton.gameObject.SetActive(true);

        _OnGameStarted?.Invoke();

        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = StartCoroutine(GameTimerCoroutine());
    }

    public void EndGame()
    {
        if (!_IsRunning) return;

        _IsRunning = false;
        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = null;
        SetRingMovement(false);

        if (_Score > _Highscore)
        {
            _Highscore = _Score;
            PlayerPrefs.SetInt(_highscoreKey, _Highscore);
            PlayerPrefs.Save();
            UpdateHighscoreUI();
        }
        if (_endPanel != null) _endPanel.SetActive(true);
        if (_endScoreText != null) _endScoreText.text = $"Score: {_Score}";
        if (_moveRingButton != null) _moveRingButton.gameObject.SetActive(false);

        _OnGameEnded?.Invoke();
    }

    private void SetRingMovement(bool active)
    {
        _ringMovementActive = active;
        ScoreMultiplier = active ? 2f : 1f;

        if (_basketRingMover != null)
        {
            if (active) _basketRingMover.StartMovement();
            else _basketRingMover.StopMovement();
        }
    }

    public void AddScore(int points, bool perfect = false)
    {
        if (!_IsRunning)
        {
            Debug.Log("AddScore called while game is not running; ignoring.");
            return;
        }

        int pointsToAdd = Mathf.RoundToInt(points * ScoreMultiplier);
        _Score += pointsToAdd;
        UpdateScoreUI();
        _OnScoreChanged?.Invoke(_Score);
        if (perfect)
        {
            ShowPerfectPopup();
        }
    }

    private void ToggleRingMovement()
    {
        SetRingMovement(!_ringMovementActive);
    }

    public float GetDifficultyMultiplier()
    {
        if (!_IsRunning) return difficultyCurve.Evaluate(0f);
        float normalized = 1f - (_TimeRemaining / Mathf.Max(1f, _gameDuration));
        float mul = difficultyCurve.Evaluate(Mathf.Clamp01(normalized));
        return mul;
    }

    private IEnumerator GameTimerCoroutine()
    {
        while (_TimeRemaining > 0f && _IsRunning)
        {
            yield return null;
            _TimeRemaining -= Time.deltaTime;

            if (_TimeRemaining < 0f) _TimeRemaining = 0f;
            UpdateTimeUI();

            _OnDifficultyChanged?.Invoke(GetDifficultyMultiplier());
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
        _Highscore = 0;
        UpdateHighscoreUI();
    }
}