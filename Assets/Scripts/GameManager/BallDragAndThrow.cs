using UnityEngine;

public class BallDragAndThrow : MonoBehaviour
{
    [Header("Setup")]
    [Tooltip("Camera used for raycasting to detect ball clicks")]
    [SerializeField] private Camera _camera;
    [SerializeField] private LayerMask _ballLayer;
    [Tooltip("Trail effect to show during drag")]
    [SerializeField] private GameObject _touchTrail;

    [Header("Launch Settings")]
    [SerializeField] private float _maxLaunchForce = 18f;
    [SerializeField] private float _dragSensitivity = 10f;
    [Tooltip("Extra vertical bias for upward throws")]
    [SerializeField] private float _upwardBiasFactor = 1.2f;
    [Range(0f, 1f)]
    [SerializeField] private float _gentleFactor = 0.35f;

    [Header("Mapping")]
    [Tooltip("Upward drag → forward velocity")]
    [SerializeField] private float _forwardMultiplier = 0.09f;
    [Tooltip("Upward drag → vertical arc velocity")]
    [SerializeField] private float _verticalMultiplier = 0.045f;
    [Tooltip("Horizontal drag → sideways velocity")]
    [SerializeField] private float _horizontalMultiplier = 0.02f;

    [Header("Audio")]
    [SerializeField] private AudioSource _audioSource;
    [SerializeField] private AudioClip _clickSound;
    [SerializeField] private AudioClip _releaseSound;

    [Header("Extras")]
    [SerializeField] private float _spinTorque = 2f;

    private Transform _selectedBall;
    private Rigidbody _selectedRb;
    private Vector3 _initialScreenPos;
    private Vector2 _dragStartScreenPos;
    private Vector3 _dragStartWorldPoint;
    private Vector3 _dragTargetPos;

    private const float MIN_DRAG_DISTANCE = 0.02f;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
            TryBeginDrag(Input.mousePosition);

        if (_selectedBall != null)
        {
            ContinueDrag(Input.mousePosition);

            if (Input.GetMouseButtonUp(0))
                EndDrag(Input.mousePosition);
        }
    }

    // Move the kinematic rigidbody toward the target in FixedUpdate (physics step)
    private void FixedUpdate()
    {
        if (_selectedRb != null && _selectedRb.isKinematic)
        {
            Vector3 nextPos = Vector3.Lerp(_selectedRb.position, _dragTargetPos, Time.fixedDeltaTime * _dragSensitivity);
            _selectedRb.MovePosition(nextPos);
        }
    }

    // Start dragging the ball
    private void TryBeginDrag(Vector2 screenPos)
    {
        if (!Physics.Raycast(_camera.ScreenPointToRay(screenPos), out var hit, Mathf.Infinity, _ballLayer))
            return;

        _selectedBall = hit.transform;
        _selectedRb = _selectedBall.GetComponent<Rigidbody>();
        if (_selectedRb == null)
        {
            Debug.LogWarning("BallDragAndThrow: selected object has no Rigidbody.");
            _selectedBall = null;
            return;
        }

        _selectedRb.isKinematic = true;
        _selectedRb.useGravity = false;
        _initialScreenPos = _camera.WorldToScreenPoint(_selectedBall.position);
        _dragStartScreenPos = screenPos;
        _dragStartWorldPoint = ScreenToWorldAtDepth(_dragStartScreenPos, _initialScreenPos.z);
        _dragTargetPos = _selectedRb.position;

        if (_touchTrail != null)
        {
            _touchTrail.SetActive(true);
            _touchTrail.transform.position = _dragTargetPos;
        }

        PlaySound(_clickSound);
    }

    // Move the ball with the drag 
    private void ContinueDrag(Vector2 screenPos)
    {
        _dragTargetPos = ScreenToWorldAtDepth(screenPos, _initialScreenPos.z);

        if (_touchTrail != null)
            _touchTrail.transform.position = _dragTargetPos;
    }

    // Release the ball and apply force
    private void EndDrag(Vector2 releaseScreenPos)
    {
        if (_selectedRb == null)
        {
            Cleanup();
            PlaySound(_releaseSound);
            return;
        }

        Vector3 releaseWorldPoint = ScreenToWorldAtDepth(releaseScreenPos, _initialScreenPos.z);
        Vector3 worldDelta = releaseWorldPoint - _dragStartWorldPoint;

        if (worldDelta.magnitude < MIN_DRAG_DISTANCE)
        {
            RestorePhysicsAfterDrag();
            Cleanup();
            PlaySound(_releaseSound);
            return;
        }

        ApplyThrowForce(_dragStartScreenPos, releaseScreenPos, worldDelta);
        PlaySound(_releaseSound);
        Cleanup();
    }

    // Convert screen position to world position at given depth
    private Vector3 ScreenToWorldAtDepth(Vector2 screenPos, float depth)
    {
        return _camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, depth));
    }

    // Apply calculated velocity and spin to the ball
    private void ApplyThrowForce(Vector2 dragStart, Vector2 dragEnd, Vector3 worldDelta)
    {
        if (_selectedRb == null) return;

        Vector2 screenDelta = dragEnd - dragStart;
        float dpi = (Screen.dpi > 0) ? Screen.dpi : 160f;
        float baseScale = (_maxLaunchForce / dpi) * _gentleFactor;

        // Calculate velocity components
        float forwardMag = screenDelta.y * _forwardMultiplier * baseScale;
        float verticalMag = screenDelta.y * _verticalMultiplier * baseScale * _upwardBiasFactor;
        float horizontalMag = screenDelta.x * _horizontalMultiplier * baseScale;

        Vector3 launchVelocity =
            (_camera.transform.forward * forwardMag) +
            (_camera.transform.up * verticalMag) +
            (_camera.transform.right * horizontalMag);

        // Clamp velocity
        float maxSpeed = _maxLaunchForce * 2f;
        if (launchVelocity.magnitude > maxSpeed)
            launchVelocity = launchVelocity.normalized * maxSpeed;

        // Restore physics and apply velocity
        _selectedRb.isKinematic = false;
        _selectedRb.useGravity = true;

        _selectedRb.velocity = Vector3.zero;
        _selectedRb.AddForce(launchVelocity, ForceMode.VelocityChange);

        if (_spinTorque != 0f)
        {
            Vector3 spin = new Vector3(-worldDelta.z, 0f, worldDelta.x).normalized * _spinTorque;
            _selectedRb.AddTorque(spin, ForceMode.Impulse);
        }
    }

    // Play sound
    private void PlaySound(AudioClip clip)
    {
        if (_audioSource != null && clip != null)
            _audioSource.PlayOneShot(clip);
    }

    // Restore physics state in case we bail out without throwing
    private void RestorePhysicsAfterDrag()
    {
        if (_selectedRb == null) return;
        _selectedRb.isKinematic = false;
        _selectedRb.useGravity = true;
    }

    // Reset drag state
    private void Cleanup()
    {
        if (_touchTrail != null) _touchTrail.SetActive(false);
        _selectedBall = null;
        _selectedRb = null;
        _dragTargetPos = Vector3.zero;
    }

    private void OnDisable()
    {
        if (_selectedRb != null)
        {
            _selectedRb.isKinematic = false;
            _selectedRb.useGravity = true;
        }
    }
}
