using UnityEngine;

public class BallDragAndThrow : MonoBehaviour
{
    [Header("Setup")]
    [SerializeField] private Camera _camera;
    [SerializeField] private LayerMask _ballLayer;
    [SerializeField] private GameObject _touchTrail;

    [Header("Launch Settings")]
    [SerializeField] private float _maxLaunchForce = 200f;
    [SerializeField] private float _dragSensitivity = 10f;
    [Tooltip("How much vertical drag maps to vertical throw")]
    [SerializeField] private float _upwardBiasFactor = 1f;
    [Range(0f, 1f)]
    [Tooltip("How much the drag force is scaled down overall")]
    [SerializeField] private float _gentleFactor = 0.2f;

    private Transform _selectedBall;
    private Rigidbody _selectedRb;
    private Vector3 _initialScreenPos;
    private Vector3 _dragStartScreenPos;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
            BeginDrag(Input.mousePosition);

        if (_selectedBall != null)
            ContinueDrag(Input.mousePosition);

        if (_selectedBall != null && Input.GetMouseButtonUp(0))
            EndDrag();
    }

    void BeginDrag(Vector2 screenPos)
    {
        Ray ray = _camera.ScreenPointToRay(screenPos);
        if (Physics.Raycast(ray, out var hit, Mathf.Infinity, _ballLayer))
        {
            _selectedBall = hit.transform;
            _selectedRb = _selectedBall.GetComponent<Rigidbody>();
            _selectedRb.isKinematic = true;
            _selectedRb.useGravity = true;

            _initialScreenPos = _camera.WorldToScreenPoint(_selectedBall.position);
            _dragStartScreenPos = screenPos;

            _touchTrail.SetActive(true);
        }
    }

    void ContinueDrag(Vector2 screenPos)
    {
        Vector3 sp = new Vector3(screenPos.x, screenPos.y, _initialScreenPos.z);
        Vector3 wp = _camera.ScreenToWorldPoint(sp);

        _selectedBall.position = Vector3.Lerp(
            _selectedBall.position,
            wp,
            Time.deltaTime * _dragSensitivity
        );
        _touchTrail.transform.position = wp;
    }

    void EndDrag()
    {
        Vector3 dragDelta = (Vector2)Input.mousePosition - (Vector2)_dragStartScreenPos;
        float dragDist = dragDelta.magnitude;
        if (dragDist < 5f) { Cleanup(); return; }

        float verticalRatio = Mathf.Clamp01(dragDelta.y / dragDist) * _upwardBiasFactor;
        float forwardRatio = 1f - verticalRatio;
        Vector3 dir = (_camera.transform.forward * forwardRatio +
                       _camera.transform.up * verticalRatio).normalized;

        float forceMag = dragDist * (_maxLaunchForce / Screen.dpi) * _gentleFactor;
        Vector3 launchForce = dir * forceMag;

        _selectedRb.isKinematic = false;
        _selectedRb.AddForce(launchForce, ForceMode.Impulse);

        Cleanup();
    }

    void Cleanup()
    {
        _touchTrail.SetActive(false);
        _selectedBall = null;
        _selectedRb = null;
    }
}
