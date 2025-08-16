using System;
using UnityEngine;

public class BasketRingMover : MonoBehaviour
{
    [Header("Movement Settings")]
    [Tooltip("Transform of the ring to move. Defaults to this GameObject's transform if null.")]
    [SerializeField] private Transform _ringTransform;

    [Tooltip("Local X range (left to right).")]
    [SerializeField] private Vector2 _xRange = new Vector2(-2f, 2f);

    [Tooltip("Speed at which the ring moves left and right.")]
    [SerializeField] private float _speed = 1.5f;

    private bool _isMoving;
    private float _startTime;
    private float GetCenterX() => (_xRange.x + _xRange.y) * 0.5f;

    public bool IsMoving => _isMoving;

    private void Awake()
    {
        if (!_ringTransform) _ringTransform = transform;
    }

    private void Update()
    {
        if (!_isMoving) return;
        MoveRing();
    }

    public void StartMovement()
    {
        if (_isMoving) return;
        _isMoving = true;
        _startTime = Time.time;
    }

    public void StopMovement()
    {
        if (!_isMoving) { SetLocalX(GetCenterX()); return; }
        _isMoving = false;
        SetLocalX(GetCenterX());
    }

    private void MoveRing()
    {
        float time = (Time.time - _startTime) * _speed;
        float normalized = Mathf.PingPong(time, 1f);
        float targetX = Mathf.Lerp(_xRange.x, _xRange.y, normalized);
        SetLocalX(targetX);
    }

    private void SetLocalX(float x)
    {
        Vector3 pos = _ringTransform.localPosition;
        pos.x = x;
        _ringTransform.localPosition = pos;
    }
}
