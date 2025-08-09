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

    [Header("Ring movement ")]
    [SerializeField] private Button _moveRingButton;                 
    [SerializeField] private BasketRingMover _basketRingMover;   

    [Header("Ball selection UI")]
    [SerializeField] private Button _openBallSelectButton;    
    [SerializeField] private GameObject _ballSelectionPanel;  
    [SerializeField] private BallWheelController _ballWheelController; 

    [Header("Sound Effects")]
    [SerializeField] private AudioSource _audioSource; 
    [SerializeField] private AudioClip _buttonClickSound; 
    [SerializeField] private AudioClip _gameCompleteSound; 

    public bool _isRunning { get; private set; }
    public float _timeRemaining { get; private set; }
    public int _score { get; private set; } = 0;
    public int _highscore { get; private set; } = 0;

    // 1 = normal, 2 = double
    public float _scoreMultiplier { get; private set; } = 1f;

    public event Action<int> OnScoreChanged;
    public event Action OnGameStarted;
    public event Action OnGameEnded;

    private Coroutine _timerCoroutine;
    private Coroutine _perfectCoroutine = null;
    private bool _ringMovementActive = false;


    private bool _isPausedByBallSelection = false;
    private float _prevTimeScale = 1f;

    private void Awake()
    {
        if (_Instance != null && _Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        _Instance = this;
        DontDestroyOnLoad(gameObject);

        if (_highestText == null) Debug.LogError("GameManager: highestText is not assigned in the Inspector!");
        if (_timeText == null) Debug.LogError("GameManager: timeText is not assigned in the Inspector!");
        if (_scoreText == null) Debug.LogError("GameManager: scoreText is not assigned in the Inspector!");
        if (_startPanel == null || _endPanel == null || _startButton == null || _retryButton == null || _endScoreText == null)
        {
            Debug.LogError("GameManager: One or more start/end UI elements are not assigned!");
        }

        if (_moveRingButton != null)
        {
            _moveRingButton.gameObject.SetActive(false);
            _moveRingButton.onClick.AddListener(() =>
            {
                PlayButtonClickSound();
                ToggleRingMovement();
            });
        }

        if (_openBallSelectButton != null)
        {
            _openBallSelectButton.gameObject.SetActive(false);
            _openBallSelectButton.onClick.AddListener(() =>
            {
                PlayButtonClickSound();
                ShowBallSelection();
            });
        }
        if (_ballSelectionPanel != null)
            _ballSelectionPanel.SetActive(false);

        _highscore = PlayerPrefs.GetInt(_highscoreKey, 0);
        UpdateHighscoreUI();
        if (_perfectPopup != null) _perfectPopup.SetActive(false);

        if (_startPanel != null) _startPanel.SetActive(true);
        if (_endPanel != null) _endPanel.SetActive(false);

        if (_startButton != null)
        {
            _startButton.onClick.AddListener(() =>
            {
                PlayButtonClickSound();
                StartGame();
                if (_startPanel != null) _startPanel.SetActive(false);
            });
        }
        if (_retryButton != null)
        {
            _retryButton.onClick.AddListener(() =>
            {
                PlayButtonClickSound();
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
        if (_openBallSelectButton != null)
        {
            _openBallSelectButton.onClick.RemoveAllListeners();
        }
    }

    #region UI Helpers
    private void UpdateHighscoreUI()
    {
        SetTextSafe(_highestText, $"{_highscore}");
    }

    private void SetTextSafe(object uiText, string text)
    {
        if (uiText == null) return;
        if (uiText is TMP_Text t) t.text = text;
        else if (uiText is Text u) u.text = text;
    }

    private void UpdateScoreUI()
    {
        SetTextSafe(_scoreText, $"{_score}");
    }

    private void UpdateTimeUI()
    {
        int sec = Mathf.CeilToInt(_timeRemaining);
        int minutes = sec / 60;
        int seconds = sec % 60;
        SetTextSafe(_timeText, $"{minutes:00}:{seconds:00}");
    }
    #endregion

    #region Game Control
    public void StartGame()
    {
        _score = 0;
        _timeRemaining = _gameDuration;
        _isRunning = true;
        UpdateScoreUI();
        UpdateTimeUI();

        if (_endPanel != null) _endPanel.SetActive(false);
        if (_moveRingButton != null) _moveRingButton.gameObject.SetActive(true);
        if (_openBallSelectButton != null) _openBallSelectButton.gameObject.SetActive(true);

        OnGameStarted?.Invoke();

        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = StartCoroutine(GameTimerCoroutine());
    }

    public void EndGame()
    {
        if (!_isRunning) return;

        _isRunning = false;
        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = null;
        SetRingMovement(false);

        if (_audioSource != null && _gameCompleteSound != null)
        {
            _audioSource.PlayOneShot(_gameCompleteSound);
        }

        if (_score > _highscore)
        {
            _highscore = _score;
            PlayerPrefs.SetInt(_highscoreKey, _highscore);
            PlayerPrefs.Save();
            UpdateHighscoreUI();
        }

        if (_endPanel != null) _endPanel.SetActive(true);
        if (_endScoreText != null) _endScoreText.text = $"Score: {_score}";
        if (_moveRingButton != null) _moveRingButton.gameObject.SetActive(false);
        if (_ballSelectionPanel != null) _ballSelectionPanel.SetActive(false);
        if (_openBallSelectButton != null) _openBallSelectButton.gameObject.SetActive(false);

        if (_isPausedByBallSelection)
        {
            Time.timeScale = _prevTimeScale;
            _isPausedByBallSelection = false;
        }

        OnGameEnded?.Invoke();
    }
    #endregion

    #region Scoring
    public void AddScore(int points, bool perfect = false)
    {
        if (!_isRunning)
        {
            Debug.Log("AddScore called while game is not running; ignoring.");
            return;
        }

        if (_isPausedByBallSelection)
        {
            Debug.Log("AddScore ignored because game is paused by ball selector.");
            return;
        }

        int pointsToAdd = Mathf.RoundToInt(points * _scoreMultiplier);
        _score += pointsToAdd;
        UpdateScoreUI();
        OnScoreChanged?.Invoke(_score);

        if (perfect)
        {
            ShowPerfectPopup();
        }
    }
    #endregion

    #region Timer
    private IEnumerator GameTimerCoroutine()
    {
        while (_timeRemaining > 0f && _isRunning)
        {
            yield return null;
            _timeRemaining -= Time.deltaTime;

            if (_timeRemaining < 0f) _timeRemaining = 0f;
            UpdateTimeUI();
        }
        EndGame();
    }
    #endregion

    #region Perfect Popup
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
    #endregion

    #region Ring movement
    private void ToggleRingMovement()
    {
        SetRingMovement(!_ringMovementActive);
    }

    private void SetRingMovement(bool active)
    {
        _ringMovementActive = active;
        _scoreMultiplier = active ? 2f : 1f;

        if (_basketRingMover != null)
        {
            if (active) _basketRingMover.StartMovement();
            else _basketRingMover.StopMovement();
        }
    }
    #endregion

    #region Ball selection panel control (pause/resume)
    public void ShowBallSelection()
    {
        if (!_isRunning) return; 

        if (_ballSelectionPanel != null)
            _ballSelectionPanel.SetActive(true);
        if (_ballWheelController != null)
            _ballWheelController.CollectItems();

        _prevTimeScale = Time.timeScale;
        Time.timeScale = 0f;
        _isPausedByBallSelection = true;
    }

    public void HideBallSelection(bool confirmed = false, int selectedIndex = -1)
    {
        if (_ballSelectionPanel != null)
            _ballSelectionPanel.SetActive(false);

        Time.timeScale = _prevTimeScale;
        _isPausedByBallSelection = false;

        if (confirmed && selectedIndex >= 0)
        {
            ApplySelectedBall(selectedIndex);
        }
    }

    public void ApplySelectedBall(int index)
    {
        Debug.Log($"GameManager: ApplySelectedBall({index}) called.");
    }
    #endregion

    #region Sound Helpers
    private void PlayButtonClickSound()
    {
        if (_audioSource != null && _buttonClickSound != null)
        {
            _audioSource.PlayOneShot(_buttonClickSound);
        }
    }
    #endregion

    #region Debug Utilities
    [ContextMenu("Debug: Start Game")]
    public void DebugStartGame() => StartGame();

    [ContextMenu("Debug: End Game")]
    public void DebugEndGame() => EndGame();

    [ContextMenu("Debug: Reset Highscore")]
    public void DebugResetHighscore()
    {
        PlayerPrefs.DeleteKey(_highscoreKey);
        _highscore = 0;
        UpdateHighscoreUI();
    }
    #endregion
}