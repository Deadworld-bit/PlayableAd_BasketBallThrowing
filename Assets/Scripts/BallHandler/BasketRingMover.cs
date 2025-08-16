using UnityEngine;

public class BasketRingMover : MonoBehaviour
{
    [Header("Movement Settings")]
    [Tooltip("Transform of the ring to move. Defaults to this GameObject's transform if null.")]
    [SerializeField] private Transform ringTransform;

    [Tooltip("Local X range (left to right).")]
    [SerializeField] private Vector2 xRange = new Vector2(-2f, 2f);

    [Tooltip("Speed at which the ring moves left and right.")]
    [SerializeField] private float speed = 1.5f;

    private bool isMoving;
    private float startTime;
    private float GetCenterX() => (xRange.x + xRange.y) * 0.5f;

    private void Awake()
    {
        if (!ringTransform) ringTransform = transform;
    }

    private void Update()
    {
        if (!isMoving) return;
        MoveRing();
    }

    public void StartMovement()
    {
        if (isMoving) return;
        isMoving = true;
        startTime = Time.time;
    }

    public void StopMovement()
    {
        isMoving = false;
        SetLocalX(GetCenterX());
    }

    private void MoveRing()
    {
        float time = (Time.time - startTime) * speed;
        float normalized = Mathf.PingPong(time, 1f); 
        float targetX = Mathf.Lerp(xRange.x, xRange.y, normalized);
        SetLocalX(targetX);
    }

    private void SetLocalX(float x)
    {
        Vector3 pos = ringTransform.localPosition;
        pos.x = x;
        ringTransform.localPosition = pos;
    }
}
