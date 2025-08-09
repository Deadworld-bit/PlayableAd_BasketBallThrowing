using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class BallWheelController : MonoBehaviour, IPointerDownHandler, IDragHandler, IEndDragHandler
{
    [Header("References")]
    public Transform wheelContainer;           // the parent that contains ball transforms (immediate children)
    public Button okButton;
    public Button randomButton;

    [Header("Layout")]
    public float radius = 2.0f;                // local units for circle radius
    public float zOffset = 0f;
    public float startAngleDeg = 0f;           // 0 = up (selection at up)
    public float zRotationPerItem = 0f;        // optional rotation of each ball

    [Header("Spin Physics")]
    public float angularFriction = 800f;       // degrees per second^2
    public float snapSpeed = 10f;              // snap lerp speed
    public float minFlingVelocity = 15f;       // threshold to snap

    // runtime
    private List<Transform> _items = new List<Transform>();
    private List<BallItem> _itemScripts = new List<BallItem>();
    private int _count = 0;
    private float _anglePerItem = 0f;
    private float _rotationDeg = 0f;
    private float _angularVelocity = 0f;

    // drag tracking
    private Vector2 _lastPointerPos;
    private float _lastDragTime;
    private bool _dragging = false;

    // selection
    private int _selectedIndex = 0;

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
                // friction
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

    // UI pointer events
    public void OnPointerDown(PointerEventData eventData)
    {
        _dragging = true;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(transform as RectTransform, eventData.position, eventData.pressEventCamera, out _lastPointerPos);
        _lastDragTime = Time.time;
        _angularVelocity = 0f;
    }

    public void OnDrag(PointerEventData eventData)
    {
        Vector2 newPos;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(transform as RectTransform, eventData.position, eventData.pressEventCamera, out newPos);

        Vector2 center = (transform as RectTransform).rect.center;
        Vector2 a = _lastPointerPos - center;
        Vector2 b = newPos - center;
        if (a.sqrMagnitude < 0.0001f || b.sqrMagnitude < 0.0001f)
        {
            _lastPointerPos = newPos;
            _lastDragTime = Time.time;
            return;
        }

        float angleA = Mathf.Atan2(a.y, a.x) * Mathf.Rad2Deg;
        float angleB = Mathf.Atan2(b.y, b.x) * Mathf.Rad2Deg;
        float deltaAngle = Mathf.DeltaAngle(angleA, angleB);
        _rotationDeg += deltaAngle;
        ArrangeItems();

        float dt = Mathf.Max(0.0001f, Time.time - _lastDragTime);
        _angularVelocity = deltaAngle / dt;

        _lastPointerPos = newPos;
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
        float desiredRotation = Mathf.Repeat(- (startAngleDeg + bestIndex * _anglePerItem), 360f);
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

    // Confirm button
    private void OnConfirm()
    {
        Debug.Log("Confirmed ball index: " + _selectedIndex);
        if (GameManager._Instance != null)
        {
            GameManager._Instance.HideBallSelection(true, _selectedIndex);
        }
    }

    // Random pick: spin & auto-confirm
    private void OnRandomPick()
    {
        if (_count == 0) return;
        int rnd = Random.Range(0, _count);
        float desiredRotation = Mathf.Repeat(- (startAngleDeg + rnd * _anglePerItem), 360f);
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
