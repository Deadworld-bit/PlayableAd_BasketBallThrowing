using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallCollisionSound : MonoBehaviour
{
    [Header("Collision Sound Settings")]
    [SerializeField] private AudioSource _audioSource; 
    [SerializeField] private AudioClip _collisionSound; 
    [SerializeField] private float _minImpactSpeed = 2f; 
    [SerializeField] [Range(0f, 1f)] private float _volumeScale = 0.5f; 

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.collider != null)
        {
            float impactSpeed = collision.relativeVelocity.magnitude;
            if (impactSpeed >= _minImpactSpeed && _audioSource != null && _collisionSound != null)
            {
                float volume = Mathf.Clamp01(impactSpeed / 10f) * _volumeScale;
                _audioSource.PlayOneShot(_collisionSound, volume);
            }
        }
    }
}
