using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class UIManager : MonoBehaviour
{
    [Header("Text fields")]
    [SerializeField] private TMP_Text _highestText;
    [SerializeField] private TMP_Text _timeText;
    [SerializeField] private TMP_Text _scoreText;

    [Header("Panels & Buttons")]
    [SerializeField] private GameObject _startPanel;
    [SerializeField] private GameObject _endPanel;
    [SerializeField] private Button _startButton;
    [SerializeField] private Button _retryButton;
    [SerializeField] private TMP_Text _endScoreText;

    // Move button (assign in inspector)
    [SerializeField] private Button _moveButton;
    [SerializeField] private TMP_Text _moveButtonText;

    [Header("Perfect popup")]
    [SerializeField] private GameObject _perfectPopup;
    [SerializeField] private float _perfectPopupDuration = 1f;

    public Action _onStartButtonPressed;
    public Action _onRetryButtonPressed;
    public Action _onMoveButtonPressed;

    private void Awake()
    {
        if (EventSystem.current == null)
            Debug.LogWarning("UIManager: No EventSystem found in scene. Add one for button clicks to work.");

        if (_startButton != null) _startButton.onClick.AddListener(() => { Debug.Log("UIManager: Start button clicked"); _onStartButtonPressed?.Invoke(); });
        else Debug.LogWarning("UIManager: _startButton is not assigned in inspector.");

        if (_retryButton != null) _retryButton.onClick.AddListener(() => { Debug.Log("UIManager: Retry button clicked"); _onRetryButtonPressed?.Invoke(); });
        else Debug.LogWarning("UIManager: _retryButton is not assigned in inspector.");

        if (_moveButton != null) _moveButton.onClick.AddListener(() => { Debug.Log("UIManager: Move button clicked"); _onMoveButtonPressed?.Invoke(); });
        else Debug.Log("UIManager: _moveButton not assigned (optional).");

        if (_perfectPopup != null) _perfectPopup.SetActive(false);

        if (_startPanel != null)
        {
            _startPanel.SetActive(true);
            Debug.Log("UIManager: Activating start panel on Awake.");
        }

        if (_endPanel != null) _endPanel.SetActive(false);
        if (_moveButton != null)
            _moveButton.gameObject.SetActive(false);
        SetMoveButtonLabel(false);
    }

    public void ShowStartUI()
    {
        Debug.Log("UIManager: ShowStartUI()");
        if (_startPanel != null) _startPanel.SetActive(true);
        if (_endPanel != null) _endPanel.SetActive(false);
        if (_moveButton != null)
            _moveButton.gameObject.SetActive(false);

        SetMoveButtonLabel(false);
    }

    public void ShowGameUI()
    {
        Debug.Log("UIManager: ShowGameUI()");
        if (_startPanel != null) _startPanel.SetActive(false);
        if (_endPanel != null) _endPanel.SetActive(false);
        if (_moveButton != null)
            _moveButton.gameObject.SetActive(true);
    }

    public void ShowEndUI(int score)
    {
        Debug.Log($"UIManager: ShowEndUI(score={score})");
        if (_endPanel != null) _endPanel.SetActive(true);
        if (_endScoreText != null) _endScoreText.text = $"Score: {score}";
        if (_moveButton != null)
            _moveButton.gameObject.SetActive(false);
    }

    public void UpdateScore(int score)
    {
        if (_scoreText != null) _scoreText.text = score.ToString();
    }

    public void UpdateHighscore(int high)
    {
        if (_highestText != null) _highestText.text = high.ToString();
    }

    public void UpdateTime(float secondsRemaining)
    {
        int sec = Mathf.CeilToInt(secondsRemaining);
        int minutes = sec / 60;
        int seconds = sec % 60;
        if (_timeText != null) _timeText.text = $"{minutes:00}:{seconds:00}";
    }

    public void ShowPerfectPopup()
    {
        if (_perfectPopup == null) return;
        StopAllCoroutines();
        StartCoroutine(PerfectCoroutine());
    }

    private System.Collections.IEnumerator PerfectCoroutine()
    {
        _perfectPopup.SetActive(true);
        float t = 0f;
        while (t < _perfectPopupDuration) { t += Time.deltaTime; yield return null; }
        _perfectPopup.SetActive(false);
    }

    public void SetMoveButtonLabel(bool isMoving)
    {
        if (_moveButtonText != null)
            _moveButtonText.text = isMoving ? "Stop Basket" : "Move Basket";
    }
}
