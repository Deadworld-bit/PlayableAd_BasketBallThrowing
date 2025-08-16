using System;
using System.Collections;
using UnityEngine;

public class TimerManager : MonoBehaviour
{
    [SerializeField] private float _duration = 120f;
    public float _timeRemaining { get; private set; }

    public event Action<float> OnTimeUpdated; 
    public event Action OnTimeUp;

    private Coroutine timerCoroutine;

    public void StartTimer(float overrideDuration = -1)
    {
        StopTimer();
        _timeRemaining = overrideDuration > 0 ? overrideDuration : _duration;

        OnTimeUpdated?.Invoke(_timeRemaining);

        timerCoroutine = StartCoroutine(TimerCoroutine());
        Debug.Log($"TimerManager: StartTimer({_timeRemaining})");
    }

    public void StopTimer()
    {
        if (timerCoroutine != null) { StopCoroutine(timerCoroutine); timerCoroutine = null; Debug.Log("TimerManager: StopTimer()"); }
    }

    private IEnumerator TimerCoroutine()
    {
        while (_timeRemaining > 0f)
        {
            yield return null;
            _timeRemaining -= Time.deltaTime;
            if (_timeRemaining < 0f) _timeRemaining = 0f;
            OnTimeUpdated?.Invoke(_timeRemaining);
        }

        Debug.Log("TimerManager: Time is up.");
        OnTimeUp?.Invoke();
    }
}
