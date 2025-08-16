using System;
using UnityEngine;

#if UNITY_WEBGL && !UNITY_EDITOR
using System.Runtime.InteropServices;
#endif

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

#if UNITY_WEBGL && !UNITY_EDITOR
    [DllImport("__Internal")]
    private static extern void GameStarted();

    [DllImport("__Internal")]
    private static extern void GameEnded();

    [DllImport("__Internal")]
    private static extern void _registerLifeCycleUnload();
#endif

    [Header("References (assign in inspector or will be found automatically)")]
    public ScoreManager _scoreManager;
    [SerializeField] private TimerManager _timerManager;
    public UIManager _uiManager;
    [SerializeField] private BasketRingMover _ringMovementController;
    [SerializeField] private BallSelectionController _ballSelectionController;
    public SoundManager _soundManager;

    [Header("Game settings")]
    [SerializeField] private int _maxPlays = 2;

    public bool _isRunning { get; private set; }

    private int _gamesPlayed = 0;
    private bool _ringIsMoving = false;

    public event Action OnGameStarted;
    public event Action OnGameEnded;

    private void Awake()
    {
        if (Instance != null && Instance != this) { Destroy(gameObject); return; }
        Instance = this;
        DontDestroyOnLoad(gameObject);

#if UNITY_WEBGL && !UNITY_EDITOR
        try { _registerLifeCycleUnload(); } catch (Exception e) { Debug.LogWarning($"GameManager: registerLifeCycleUnload JS call failed: {e.Message}"); }
#endif
    }

    private void Start()
    {
        TryAutoFindReferences();

        if (_uiManager != null)
        {
            _uiManager._onStartButtonPressed += StartGame;
            _uiManager._onRetryButtonPressed += StartGame;
            _uiManager._onMoveButtonPressed += ToggleRingMovement;
        }
        else
        {
            Debug.LogWarning("GameManager: uiManager is null after TryAutoFindReferences(). Assign it in Inspector or ensure a UIManager exists in the scene.");
        }

        if (_ballSelectionController != null)
            _ballSelectionController.onSelectionConfirmed += index => ApplySelectedBall(index);

        SubscribeScoreToUI();
        _uiManager?.ShowStartUI();
    }

    private void TryAutoFindReferences()
    {
        if (_uiManager == null)
        {
            _uiManager = FindObjectOfType<UIManager>();
            Debug.Log($"GameManager: auto-found UIManager -> {(_uiManager != null ? "found" : "NOT FOUND")}");
        }
        if (_timerManager == null)
        {
            _timerManager = FindObjectOfType<TimerManager>();
            Debug.Log($"GameManager: auto-found TimerManager -> {(_timerManager != null ? "found" : "NOT FOUND")}");
        }
        if (_scoreManager == null)
        {
            _scoreManager = FindObjectOfType<ScoreManager>();
            Debug.Log($"GameManager: auto-found ScoreManager -> {(_scoreManager != null ? "found" : "NOT FOUND")}");
        }
        if (_ringMovementController == null)
        {
            _ringMovementController = FindObjectOfType<BasketRingMover>();
            Debug.Log($"GameManager: auto-found BasketRingMover -> {(_ringMovementController != null ? "found" : "NOT FOUND")}");
        }
        if (_ballSelectionController == null)
        {
            _ballSelectionController = FindObjectOfType<BallSelectionController>();
            Debug.Log($"GameManager: auto-found BallSelectionController -> {(_ballSelectionController != null ? "found" : "NOT FOUND")}");
        }
        if (_soundManager == null)
        {
            _soundManager = FindObjectOfType<SoundManager>();
            Debug.Log($"GameManager: auto-found SoundManager -> {(_soundManager != null ? "found" : "NOT FOUND")}");
        }
    }

    public void StartGame()
    {
        Debug.Log("GameManager: StartGame called");
        if (_gamesPlayed >= _maxPlays)
        {
            Debug.Log("GameManager: max plays reached");
            return;
        }

        _isRunning = true;

        _scoreManager?.ResetScore();
        _scoreManager?.EnableScoring(true);
        _timerManager?.StartTimer();
        SubscribeUIToTimer();

        if (_uiManager != null)
        {
            if (_scoreManager != null) _uiManager.UpdateScore(_scoreManager._score);
            if (_timerManager != null) _uiManager.UpdateTime(_timerManager._timeRemaining);
            _uiManager.ShowGameUI();
        }

        _soundManager?.PlayButtonClick();

        OnGameStarted?.Invoke();

#if UNITY_WEBGL && !UNITY_EDITOR
        try { GameStarted(); } catch (Exception e) { Debug.LogWarning($"GameManager: GameStarted JS call failed: {e.Message}"); }
#endif
    }

    public void EndGame()
    {
        Debug.Log("GameManager: EndGame called");
        if (!_isRunning) return;
        _isRunning = false;

        _timerManager?.StopTimer();
        _scoreManager?.EnableScoring(false);

        if (_ringMovementController != null && _ringMovementController.IsMoving)
            _ringMovementController.StopMovement();

        _scoreManager?.SetMultiplier(1f);
        _ringIsMoving = false;
        _uiManager?.SetMoveButtonLabel(false);

        _soundManager?.PlayGameComplete();
        _uiManager?.ShowEndUI(_scoreManager != null ? _scoreManager._score : 0);
        OnGameEnded?.Invoke();
        _gamesPlayed++;

        UnsubscribeUIFromTimer();
        FireLifeCycleGameEnded();

#if UNITY_WEBGL && !UNITY_EDITOR
        try { GameEnded(); } catch (Exception e) { Debug.LogWarning($"GameManager: GameEnded JS call failed: {e.Message}"); }
#endif
    }

    private void ToggleRingMovement()
    {
        if (_ringMovementController == null)
        {
            Debug.LogWarning("GameManager: ToggleRingMovement - ringMovementController is null.");
            return;
        }

        if (_ringMovementController.IsMoving)
        {
            _ringMovementController.StopMovement();
            _scoreManager?.SetMultiplier(1f);
            _ringIsMoving = false;
        }
        else
        {
            _ringMovementController.StartMovement();
            _scoreManager?.SetMultiplier(2f);
            _ringIsMoving = true;
        }

        _uiManager?.SetMoveButtonLabel(_ringIsMoving);
        _soundManager?.PlayButtonClick();
        Debug.Log($"GameManager: ToggleRingMovement -> moving={_ringIsMoving}");
    }

    private void SubscribeUIToTimer()
    {
        if (_timerManager == null || _uiManager == null)
        {
            Debug.LogWarning("GameManager: SubscribeUIToTimer failed because timerManager or uiManager is null.");
            return;
        }

        _timerManager.OnTimeUpdated -= _uiManager.UpdateTime;
        _timerManager.OnTimeUpdated += _uiManager.UpdateTime;
        _timerManager.OnTimeUp -= EndGame;
        _timerManager.OnTimeUp += EndGame;
    }

    private void UnsubscribeUIFromTimer()
    {
        if (_timerManager == null || _uiManager == null) return;

        _timerManager.OnTimeUpdated -= _uiManager.UpdateTime;
        _timerManager.OnTimeUp -= EndGame;
    }

    private void SubscribeScoreToUI()
    {
        if (_scoreManager == null || _uiManager == null)
        {
            Debug.LogWarning("GameManager: SubscribeScoreToUI failed because scoreManager or uiManager is null.");
            return;
        }

        _scoreManager.OnScoreChanged -= _uiManager.UpdateScore;
        _scoreManager.OnScoreChanged += _uiManager.UpdateScore;

        _scoreManager.OnHighscoreChanged -= _uiManager.UpdateHighscore;
        _scoreManager.OnHighscoreChanged += _uiManager.UpdateHighscore;

        _uiManager.UpdateScore(_scoreManager._score);
        _uiManager.UpdateHighscore(_scoreManager._highscore);

        Debug.Log("GameManager: Subscribed ScoreManager -> UIManager");
    }

    private void UnsubscribeScoreFromUI()
    {
        if (_scoreManager == null || _uiManager == null) return;

        _scoreManager.OnScoreChanged -= _uiManager.UpdateScore;
        _scoreManager.OnHighscoreChanged -= _uiManager.UpdateHighscore;
        Debug.Log("GameManager: Unsubscribed ScoreManager -> UIManager");
    }

    private void FireLifeCycleGameEnded()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        try { GameEnded(); } catch (Exception e) { Debug.LogWarning($"GameManager: GameEnded JS call failed: {e.Message}"); }
#endif
    }

    public void ApplySelectedBall(int index)
    {
        Debug.Log($"GameManager: ApplySelectedBall({index})");
    }

    private void OnApplicationQuit()
    {
        FireLifeCycleGameEnded();
    }

    private void OnDisable()
    {
        FireLifeCycleGameEnded();
    }
}
