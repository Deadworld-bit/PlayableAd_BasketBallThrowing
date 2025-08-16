using UnityEngine;

public class RimTouch : MonoBehaviour
{
    [SerializeField] private DunkDetector _detector;

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.collider.CompareTag("ballTag"))
        {
            if (_detector != null)
                _detector.MarkRimTouched(collision.collider.gameObject);
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("ballTag") && _detector != null)
            _detector.MarkRimTouched(other.gameObject);
    }
}
