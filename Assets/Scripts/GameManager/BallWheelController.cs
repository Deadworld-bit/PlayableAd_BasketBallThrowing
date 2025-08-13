using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class BallWheelController : MonoBehaviour, IPointerDownHandler, IDragHandler, IEndDragHandler
{
    [Header("References")]
    public Transform wheelContainer;           
    public Button okButton;
    public Button randomButton;

    [Header("Layout")]
    public float radius = 2.0f;                
    public float zOffset = 0f;
    public float startAngleDeg = 0f;           
    public float zRotationPerItem = 0f;        

    [Header("Spin Physics")]
    public float angularFriction = 800f;      
    public float snapSpeed = 10f;              
    public float minFlingVelocity = 15f;       

    private List<Transform> _items = new List<Transform>();
    private List<BallItem> _itemScripts = new List<BallItem>();
    private int _count = 0;
    private float _anglePerItem = 0f;
    private float _rotationDeg = 0f;
    private float _angularVelocity = 0f;


    private Vector2 _lastPointerPos;
    private float _lastDragTime;
    private bool _dragging = false;

    private int _selectedIndex = 0;

    private Camera _cam;

    private void Awake()
    {
        _cam = Camera.main;
        if (_cam == null)
        {
            Debug.LogWarning("BallWheelController: Camera.main is null. Pointer math may not work correctly.");
        }
    }

    private void Start()
    {
        if (okButton != null) okButton.onClick.AddListener(OnConfirm);
        if (randomButton != null) randomButton.onClick.AddListener(OnRandomPick);
        CollectItems();
    }

    public void CollectItems()
    {
        _items.Clear();
        _itemScripts.Clear();
        if (wheelContainer == null)
        {
            Debug.LogError("BallWheelController: wheelContainer not assigned.");
            return;
        }

        foreach (Transform t in wheelContainer)
        {
            _items.Add(t);
            BallItem bi = t.GetComponent<BallItem>();
            _itemScripts.Add(bi);
        }

        _count = _items.Count;
        _anglePerItem = _count > 0 ? 360f / _count : 360f;
        ArrangeItems();
        UpdateAllSelection();
    }

    private void ArrangeItems()
    {
        for (int i = 0; i < _count; i++)
        {
            float angleDeg = startAngleDeg + i * _anglePerItem + _rotationDeg;
            float rad = angleDeg * Mathf.Deg2Rad;
            Vector3 p = new Vector3(Mathf.Sin(rad) * radius, Mathf.Cos(rad) * radius, zOffset);
            _items[i].localPosition = p;
            if (zRotationPerItem != 0f)
                _items[i].localRotation = Quaternion.Euler(0f, 0f, angleDeg + zRotationPerItem);
            else
                _items[i].localRotation = Quaternion.identity;
        }
    }

    private void Update()
    {
        if (!_dragging)
        {
            if (Mathf.Abs(_angularVelocity) > 0f)
            {
                float delta = _angularVelocity * Time.deltaTime;
                _rotationDeg += delta;
                _angularVelocity = Mathf.MoveTowards(_angularVelocity, 0f, angularFriction * Time.deltaTime);

                ArrangeItems();

                if (Mathf.Abs(_angularVelocity) <= minFlingVelocity)
                {
                    SnapToNearest();
                }
            }
        }

        _rotationDeg = Mathf.Repeat(_rotationDeg, 360f);
        UpdateAllSelection();
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        _dragging = true;
        _lastPointerPos = eventData.position; 
        _lastDragTime = Time.time;
        _angularVelocity = 0f;
    }

    public void OnDrag(PointerEventData eventData)
    {
        Vector2 newScreenPos = eventData.position;

        if (wheelContainer == null)
        {
            _lastPointerPos = newScreenPos;
            _lastDragTime = Time.time;
            return;
        }

        // compute wheel center in screen space. Support both world-space and UI RectTransform wheelContainers.
        Vector2 wheelScreenCenter;
        RectTransform rectT = wheelContainer as RectTransform;
        if (rectT != null)
        {
            // wheelContainer is a UI element (RectTransform)
            if (_cam != null)
                wheelScreenCenter = RectTransformUtility.WorldToScreenPoint(_cam, rectT.position);
            else
                wheelScreenCenter = RectTransformUtility.WorldToScreenPoint(null, rectT.position);
        }
        else
        {
            // wheelContainer is a world-space Transform
            if (_cam != null)
            {
                Vector3 sc = _cam.WorldToScreenPoint(wheelContainer.position);
                wheelScreenCenter = new Vector2(sc.x, sc.y);
            }
            else
            {
                // fallback: use canvas center (0.5,0.5) in screen coords
                wheelScreenCenter = new Vector2(Screen.width * 0.5f, Screen.height * 0.5f);
            }
        }

        Vector2 a = _lastPointerPos - wheelScreenCenter;
        Vector2 b = newScreenPos - wheelScreenCenter;

        if (a.sqrMagnitude < 0.0001f || b.sqrMagnitude < 0.0001f)
        {
            _lastPointerPos = newScreenPos;
            _lastDragTime = Time.time;
            return;
        }

        float angleA = Mathf.Atan2(a.y, a.x) * Mathf.Rad2Deg;
        float angleB = Mathf.Atan2(b.y, b.x) * Mathf.Rad2Deg;
        float deltaAngle = Mathf.DeltaAngle(angleA, angleB);

        // rotate wheel by deltaAngle
        _rotationDeg += deltaAngle;
        ArrangeItems();

        float dt = Mathf.Max(0.0001f, Time.time - _lastDragTime);
        _angularVelocity = deltaAngle / dt;

        _lastPointerPos = newScreenPos;
        _lastDragTime = Time.time;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        _dragging = false;
    }

    private void SnapToNearest()
    {
        float normalizedRotation = Mathf.Repeat(_rotationDeg, 360f);
        float bestDiff = 360f;
        int bestIndex = 0;
        for (int i = 0; i < _count; i++)
        {
            float ang = Mathf.Repeat(startAngleDeg + i * _anglePerItem + normalizedRotation, 360f);
            float diff = Mathf.Abs(Mathf.DeltaAngle(ang, 0f));
            if (diff < bestDiff)
            {
                bestDiff = diff;
                bestIndex = i;
            }
        }
        float desiredRotation = Mathf.Repeat(-(startAngleDeg + bestIndex * _anglePerItem), 360f);
        StopAllCoroutines();
        StartCoroutine(SmoothRotateTo(desiredRotation));
    }

    private IEnumerator SmoothRotateTo(float targetRotation)
    {
        float current = _rotationDeg;
        while (Mathf.Abs(Mathf.DeltaAngle(current, targetRotation)) > 0.25f)
        {
            current = Mathf.LerpAngle(current, targetRotation, Time.deltaTime * snapSpeed);
            _rotationDeg = current;
            ArrangeItems();
            yield return null;
        }
        _rotationDeg = targetRotation;
        ArrangeItems();
        _angularVelocity = 0f;
    }

    private void UpdateAllSelection()
    {
        if (_count == 0) return;
        float normalizedRotation = Mathf.Repeat(_rotationDeg, 360f);
        int bestIndex = 0;
        float bestDiff = 360f;
        for (int i = 0; i < _count; i++)
        {
            float ang = Mathf.Repeat(startAngleDeg + i * _anglePerItem + normalizedRotation, 360f);
            float diff = Mathf.Abs(Mathf.DeltaAngle(ang, 0f));
            if (diff < bestDiff)
            {
                bestDiff = diff;
                bestIndex = i;
            }
        }
        if (bestIndex != _selectedIndex)
        {
            _selectedIndex = bestIndex;
            ApplySelectionVisuals();
        }
    }

    private void ApplySelectionVisuals()
    {
        for (int i = 0; i < _count; i++)
        {
            if (_itemScripts[i] != null)
                _itemScripts[i].SetSelected(i == _selectedIndex);
        }
    }

    public int GetSelectedIndex() => _selectedIndex;
    public Transform GetSelectedTransform() => _items.Count > _selectedIndex ? _items[_selectedIndex] : null;


    private void OnConfirm()
    {
        Debug.Log("Confirmed ball index: " + _selectedIndex);
        if (GameManager._Instance != null)
        {
            GameManager._Instance.HideBallSelection(true, _selectedIndex);
        }
    }

    private void OnRandomPick()
    {
        if (_count == 0) return;
        int rnd = Random.Range(0, _count);
        float desiredRotation = Mathf.Repeat(-(startAngleDeg + rnd * _anglePerItem), 360f);
        StopAllCoroutines();
        StartCoroutine(SpinToIndexThenSnapAndConfirm(desiredRotation, rnd));
    }

    private IEnumerator SpinToIndexThenSnapAndConfirm(float desiredRotation, int finalIndex)
    {
        float extra = 360f * 2f;
        float start = _rotationDeg;
        float target = Mathf.Repeat(desiredRotation - extra, 360f);
        float elapsed = 0f;
        float dur = 1.0f;
        while (elapsed < dur)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.SmoothStep(0f, 1f, elapsed / dur);
            float angle = Mathf.LerpAngle(start, target, t);
            _rotationDeg = angle;
            ArrangeItems();
            yield return null;
        }
        _rotationDeg = desiredRotation;
        ArrangeItems();
        UpdateAllSelection();

        if (GameManager._Instance != null)
        {
            GameManager._Instance.HideBallSelection(true, finalIndex);
        }
        else
        {
            OnConfirm();
        }
    }
}
