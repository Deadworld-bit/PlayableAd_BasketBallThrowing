using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIMovement : MonoBehaviour
{
    [SerializeField] private float moveDistance = 20f; 
    [SerializeField] private float speed = 2f; 

    private RectTransform rectTransform;
    private Vector2 originalPosition;
    private float timeOffset;

    void Start()
    {
        rectTransform = GetComponent<RectTransform>();
        originalPosition = rectTransform.anchoredPosition;
        timeOffset = Random.Range(0f, 2f * Mathf.PI);
    }

    void Update()
    {
        float newX = originalPosition.x + Mathf.Sin(Time.unscaledTime * speed + timeOffset) * moveDistance;
        rectTransform.anchoredPosition = new Vector2(newX, originalPosition.y);
    }
}
