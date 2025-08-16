using System.Collections.Generic;
using UnityEngine;

public class DunkDetector : MonoBehaviour
{
    [Header("Timing")]
    [Tooltip("Time between top and bottom trigger to count as dunk")]
    [SerializeField] private float _acceptWindow = 1f;
    [Tooltip("How often to clean up old entries")]
    public float _cleanupInterval = 2f;

    [Header("Effects")]
    [SerializeField] private ParticleSystem _dunkParticles;
    [SerializeField] private ParticleSystem _perfectDunkParticles;

    [Header("Audio")]
    [SerializeField] private AudioSource _audioSource;
    [SerializeField] private AudioClip _dunkSound;
    [SerializeField] private AudioClip _perfectDunkSound;

    [Header("Scoring")]
    [SerializeField] private int _normalDunkScore = 1;
    [SerializeField] private int _perfectDunkScore = 2;

    [Header("Manager references")]
    [SerializeField] private ScoreManager _scoreManager;
    [SerializeField] private UIManager _uiManager;
    [SerializeField] private SoundManager _soundManager;

    private readonly Dictionary<GameObject, float> _topEnteredAt = new Dictionary<GameObject, float>();
    private readonly HashSet<GameObject> _rimTouched = new HashSet<GameObject>();
    private readonly HashSet<GameObject> _alreadyScored = new HashSet<GameObject>();

    private float _lastCleanup;

    private void Awake()
    {
        if (_scoreManager == null)
        {
            if (GameManager.Instance != null && GameManager.Instance.scoreManager != null)
                _scoreManager = GameManager.Instance.scoreManager;
            else
                _scoreManager = FindObjectOfType<ScoreManager>();
        }

        if (_uiManager == null)
        {
            if (GameManager.Instance != null && GameManager.Instance.uiManager != null)
                _uiManager = GameManager.Instance.uiManager;
            else
                _uiManager = FindObjectOfType<UIManager>();
        }

        if (_soundManager == null)
        {
            if (GameManager.Instance != null && GameManager.Instance.soundManager != null)
                _soundManager = GameManager.Instance.soundManager;
            else
                _soundManager = FindObjectOfType<SoundManager>();
        }

        if (_audioSource == null && _soundManager == null)
        {
            _audioSource = GetComponent<AudioSource>() ?? FindObjectOfType<AudioSource>();
        }
    }

    public void TriggerEnter(bool isTop, Collider other)
    {
        if (!other.CompareTag("ballTag")) return;
        GameObject ballGO = other.gameObject;

        if (isTop)
        {
            _topEnteredAt[ballGO] = Time.time;
        }
        else
        {
            if (_alreadyScored.Contains(ballGO))
                return;

            if (_topEnteredAt.TryGetValue(ballGO, out float t))
            {
                if (Time.time - t <= _acceptWindow)
                {
                    bool perfect = !_rimTouched.Contains(ballGO);
                    RegisterDunk(ballGO, perfect);
                }

                _topEnteredAt.Remove(ballGO);
                _rimTouched.Remove(ballGO);
            }
        }
    }

    public void MarkRimTouched(GameObject ball)
    {
        if (ball == null) return;
        _rimTouched.Add(ball);
    }

    private void RegisterDunk(GameObject ball, bool perfect)
    {
        if (ball == null)
        {
            Debug.LogWarning("RegisterDunk called with null ball.");
            return;
        }
        Debug.Log($"RegisterDunk: ball={ball.name}, perfect={perfect}, time={Time.time}");

        if (_soundManager != null)
        {
            if (perfect)
                _soundManager.PlayGameComplete(); 
            else
                _soundManager.PlayButtonClick();  
        }
        else if (_audioSource != null)
        {
            AudioClip soundToPlay = perfect ? _perfectDunkSound : _dunkSound;
            if (soundToPlay != null)
            {
                _audioSource.PlayOneShot(soundToPlay);
            }
            else
            {
                Debug.LogWarning($"No audio clip assigned for {(perfect ? "perfectDunkSound" : "dunkSound")}");
            }
        }
        else
        {
            Debug.LogWarning("No audio source available to play dunk sound.");
        }

        ParticleSystem prefab = perfect ? _perfectDunkParticles : _dunkParticles;
        if (prefab == null)
        {
            Debug.LogWarning($"No particle prefab assigned for {(perfect ? "perfectDunkParticles" : "dunkParticles")}");
        }
        else
        {
            GameObject go = Instantiate(prefab.gameObject, transform.position, Quaternion.identity);
            var ps = go.GetComponent<ParticleSystem>();
            if (ps != null)
            {
                var main = ps.main;
                main.simulationSpace = ParticleSystemSimulationSpace.World;
                if (!ps.isPlaying) ps.Play();

                float maxLifetime = 0f;
                try
                {
                    maxLifetime = main.startLifetime.constantMax;
                }
                catch
                {
                    maxLifetime = main.duration;
                }
                float life = Mathf.Max(main.duration, maxLifetime);
                Destroy(go, life + 0.5f);
            }
            else
            {
                Debug.LogWarning("Instantiated particle prefab has no ParticleSystem component.");
                Destroy(go, 3f);
            }
        }

        int scoreToAdd = perfect ? _perfectDunkScore : _normalDunkScore;
        if (_scoreManager != null)
        {
            _scoreManager.AddScore(scoreToAdd, perfect);
        }
        else if (GameManager.Instance != null && GameManager.Instance.scoreManager != null)
        {
            GameManager.Instance.scoreManager.AddScore(scoreToAdd, perfect);
        }
        else
        {
            Debug.LogWarning($"ScoreManager not found. Would have added {scoreToAdd} points.");
        }

        if (perfect)
        {
            if (_uiManager != null)
                _uiManager.ShowPerfectPopup();
            else if (GameManager.Instance != null && GameManager.Instance.uiManager != null)
                GameManager.Instance.uiManager.ShowPerfectPopup();
        }

        _alreadyScored.Add(ball);
        StartCoroutine(RemoveScoreFlagAfter(ball, 2f));
    }

    private System.Collections.IEnumerator RemoveScoreFlagAfter(GameObject ball, float delay)
    {
        yield return new WaitForSeconds(delay);
        _alreadyScored.Remove(ball);
    }

    private void Update()
    {
        if (Time.time - _lastCleanup > _cleanupInterval)
        {
            float now = Time.time;
            var keys = new List<GameObject>(_topEnteredAt.Keys);
            foreach (var k in keys)
            {
                if (now - _topEnteredAt[k] > _acceptWindow + 0.5f)
                    _topEnteredAt.Remove(k);
            }

            _rimTouched.RemoveWhere(go => go == null);
            _alreadyScored.RemoveWhere(go => go == null);

            _lastCleanup = Time.time;
        }
    }
}
