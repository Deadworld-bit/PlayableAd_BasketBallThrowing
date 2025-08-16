using UnityEngine;

[RequireComponent(typeof(Transform))]
public class BallItem : MonoBehaviour
{
    [Tooltip("Assign the MeshRenderer for the ball (visual).")]
    public MeshRenderer meshRenderer;

    [Tooltip("Optional: an object (duplicate mesh or UI ring) that will be activated when this ball is the center/selected.")]
    public GameObject outlineObject;

    [Tooltip("Scale when selected (visual pop).")]
    public float selectedScale = 1.15f;

    private Vector3 _baseScale;

    private void Awake()
    {
        _baseScale = transform.localScale;
        SetSelected(false);
    }

    public void SetSelected(bool selected)
    {
        if (outlineObject != null)
            outlineObject.SetActive(selected);

        transform.localScale = selected ? _baseScale * selectedScale : _baseScale;
    }
}
