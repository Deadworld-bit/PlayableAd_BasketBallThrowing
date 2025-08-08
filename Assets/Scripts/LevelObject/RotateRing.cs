using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateRing : MonoBehaviour
{
   [SerializeField] private float _rotationSpeed = 50f; 

    void Update()
    {
        transform.Rotate(0, 0, -_rotationSpeed * Time.deltaTime);
    }
}
