using UnityEngine;

public class DunkTriggerRelay : MonoBehaviour
{
    [SerializeField] private DunkDetector _detector;
    [SerializeField] private bool _isTop = true;

    private void OnTriggerEnter(Collider other)
    {
        if (_detector == null)
        {
            Debug.LogWarning("DunkTriggerRelay has no DunkDetector assigned.");
            return;
        }

        _detector.TriggerEnter(_isTop, other);
    }
}