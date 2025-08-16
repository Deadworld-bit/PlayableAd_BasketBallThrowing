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
    public ScoreManager scoreManager;
    public TimerManager timerManager;
    public UIManager uiManager;
    public RingMovementController ringMovementController;
    public BallSelectionController ballSelectionController;
    public SoundManager soundManager;

    [Header("Game settings")]
    public int maxPlays = 2;

    public bool IsRunning { get; private set; }

    private int gamesPlayed = 0;

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

        if (uiManager != null)
        {
            uiManager._onStartButtonPressed += StartGame;
            uiManager._onRetryButtonPressed += StartGame;
        }
        else
        {
            Debug.LogWarning("GameManager: uiManager is null after TryAutoFindReferences(). Assign it in Inspector or ensure a UIManager exists in the scene.");
        }

        if (ballSelectionController != null)
            ballSelectionController.onSelectionConfirmed += index => ApplySelectedBall(index);

        SubscribeScoreToUI();    
        uiManager?.ShowStartUI();
    }

    private void TryAutoFindReferences()
    {
        if (uiManager == null)
        {
            uiManager = FindObjectOfType<UIManager>();
            Debug.Log($"GameManager: auto-found UIManager -> {(uiManager != null ? "found" : "NOT FOUND")}");
        }
        if (timerManager == null)
        {
            timerManager = FindObjectOfType<TimerManager>();
            Debug.Log($"GameManager: auto-found TimerManager -> {(timerManager != null ? "found" : "NOT FOUND")}");
        }
        if (scoreManager == null)
        {
            scoreManager = FindObjectOfType<ScoreManager>();
            Debug.Log($"GameManager: auto-found ScoreManager -> {(scoreManager != null ? "found" : "NOT FOUND")}");
        }
        if (ringMovementController == null)
        {
            ringMovementController = FindObjectOfType<RingMovementController>();
            Debug.Log($"GameManager: auto-found RingMovementController -> {(ringMovementController != null ? "found" : "NOT FOUND")}");
        }
        if (ballSelectionController == null)
        {
            ballSelectionController = FindObjectOfType<BallSelectionController>();
            Debug.Log($"GameManager: auto-found BallSelectionController -> {(ballSelectionController != null ? "found" : "NOT FOUND")}");
        }
        if (soundManager == null)
        {
            soundManager = FindObjectOfType<SoundManager>();
            Debug.Log($"GameManager: auto-found SoundManager -> {(soundManager != null ? "found" : "NOT FOUND")}");
        }
    }

    public void StartGame()
    {
        Debug.Log("GameManager: StartGame called");
        if (gamesPlayed >= maxPlays)
        {
            Debug.Log("GameManager: max plays reached");
            return;
        }

        IsRunning = true;

        // Reset & enable scoring
        scoreManager?.ResetScore();
        scoreManager?.EnableScoring(true);
        timerManager?.StartTimer();
        SubscribeUIToTimer();

        if (uiManager != null)
        {
            if (scoreManager != null) uiManager.UpdateScore(scoreManager._score);
            if (timerManager != null) uiManager.UpdateTime(timerManager._timeRemaining);
            uiManager.ShowGameUI();
        }

        soundManager?.PlayButtonClick();

        OnGameStarted?.Invoke();

#if UNITY_WEBGL && !UNITY_EDITOR
        try { GameStarted(); } catch (Exception e) { Debug.LogWarning($"GameManager: GameStarted JS call failed: {e.Message}"); }
#endif
    }

    public void EndGame()
    {
        Debug.Log("GameManager: EndGame called");
        if (!IsRunning) return;
        IsRunning = false;

        timerManager?.StopTimer();
        scoreManager?.EnableScoring(false);
        ringMovementController?.StopMovement();

        soundManager?.PlayGameComplete();
        uiManager?.ShowEndUI(scoreManager != null ? scoreManager._score : 0);
        OnGameEnded?.Invoke();
        gamesPlayed++;

        UnsubscribeUIFromTimer();
        FireLifeCycleGameEnded();

#if UNITY_WEBGL && !UNITY_EDITOR
        try { GameEnded(); } catch (Exception e) { Debug.LogWarning($"GameManager: GameEnded JS call failed: {e.Message}"); }
#endif
    }

    private void SubscribeUIToTimer()
    {
        if (timerManager == null || uiManager == null)
        {
            Debug.LogWarning("GameManager: SubscribeUIToTimer failed because timerManager or uiManager is null.");
            return;
        }

        timerManager.OnTimeUpdated -= uiManager.UpdateTime;
        timerManager.OnTimeUpdated += uiManager.UpdateTime;
        timerManager.OnTimeUp -= EndGame;
        timerManager.OnTimeUp += EndGame;
    }

    private void UnsubscribeUIFromTimer()
    {
        if (timerManager == null || uiManager == null) return;

        timerManager.OnTimeUpdated -= uiManager.UpdateTime;
        timerManager.OnTimeUp -= EndGame;
    }

private void SubscribeScoreToUI()
{
    if (scoreManager == null || uiManager == null)
    {
        Debug.LogWarning("GameManager: SubscribeScoreToUI failed because scoreManager or uiManager is null.");
        return;
    }

    scoreManager.OnScoreChanged -= uiManager.UpdateScore;
    scoreManager.OnScoreChanged += uiManager.UpdateScore;

    scoreManager.OnHighscoreChanged -= uiManager.UpdateHighscore;
    scoreManager.OnHighscoreChanged += uiManager.UpdateHighscore;
    
    uiManager.UpdateScore(scoreManager._score);
    uiManager.UpdateHighscore(scoreManager._highscore);

    Debug.Log("GameManager: Subscribed ScoreManager -> UIManager");
}

private void UnsubscribeScoreFromUI()
{
    if (scoreManager == null || uiManager == null) return;

    scoreManager.OnScoreChanged -= uiManager.UpdateScore;
    scoreManager.OnHighscoreChanged -= uiManager.UpdateHighscore;
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
