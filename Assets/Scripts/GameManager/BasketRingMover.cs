using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasketRingMover : MonoBehaviour
{
    [Tooltip("Transform of the ring that will be moved. If null, the component's transform will be used.")]
    [SerializeField] private Transform ringTransform;

    [Tooltip("Local X min (left)")]
    [SerializeField] private float minX = -2f;

    [Tooltip("Local X max (right)")]
    [SerializeField] private float maxX = 2f;

    [Tooltip("Speed (how fast it travels back and forth)")]
    [SerializeField] private float speed = 1.5f;

    private bool _moving = false;
    private float _startTime;

    private void Awake()
    {
        if (ringTransform == null) ringTransform = transform;
    }

    public void StartMovement()
    {
        if (_moving) return;
        _moving = true;
        _startTime = Time.time;
    }

    public void StopMovement()
    {
        _moving = false;
        Vector3 p = ringTransform.localPosition; p.x = (minX + maxX) * 0.5f; ringTransform.localPosition = p;
    }

    private void Update()
    {
        if (!_moving || ringTransform == null) return;
        float t = (Time.time - _startTime) * speed;
        float p = Mathf.PingPong(t, 1f); // 0..1
        float x = Mathf.Lerp(minX, maxX, p);
        Vector3 pos = ringTransform.localPosition;
        pos.x = x;
        ringTransform.localPosition = pos;
    }
}
