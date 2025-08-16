using System;
using UnityEngine;

public class ScoreManager : MonoBehaviour
{
    public int _score { get; private set; } = 0;
    public int _highscore { get; private set; } = 0;
    public float _multiplier { get; private set; } = 1f;

    public string _highscoreKey = "Highscore";

    public bool _scoringEnabled { get; private set; } = false;

    public event Action<int> OnScoreChanged;
    public event Action<int> OnHighscoreChanged; 

    private void Awake()
    {
        _highscore = PlayerPrefs.GetInt(_highscoreKey, 0);
        Debug.Log($"ScoreManager: Awake loaded highscore={_highscore}");
        OnHighscoreChanged?.Invoke(_highscore);
    }

    public void ResetScore()
    {
        _score = 0;
        OnScoreChanged?.Invoke(_score);
        Debug.Log("ScoreManager: ResetScore -> 0");
    }

    public void EnableScoring(bool enable)
    {
        _scoringEnabled = enable;
    }

    public void AddScore(int points, bool perfect = false)
    {
        if (!_scoringEnabled) 
        {
            Debug.Log("ScoreManager: AddScore ignored because scoring disabled.");
            return;
        }

        int pointsToAdd = Mathf.RoundToInt(points * _multiplier);
        _score += pointsToAdd;
        Debug.Log($"ScoreManager: AddScore({points}) -> added {pointsToAdd}, total {_score}");
        OnScoreChanged?.Invoke(_score);

        if (_score > _highscore)
        {
            _highscore = _score;
            PlayerPrefs.SetInt(_highscoreKey, _highscore);
            PlayerPrefs.Save();
            Debug.Log($"ScoreManager: New highscore {_highscore} saved to PlayerPrefs");
            OnHighscoreChanged?.Invoke(_highscore);
        }
    }

    public void SetMultiplier(float value)
    {
        _multiplier = value;
    }
}
