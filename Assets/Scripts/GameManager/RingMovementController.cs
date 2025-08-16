using UnityEngine;

public class RingMovementController : MonoBehaviour
{
    public float activeMultiplier = 2f;
    public bool IsMoving { get; private set; } = false;

    public void StartMovement()
    {
        IsMoving = true;
    }

    public void StopMovement()
    {
        IsMoving = false;
    }
}