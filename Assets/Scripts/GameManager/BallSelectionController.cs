using System;
using UnityEngine;

public class BallSelectionController : MonoBehaviour
{
    public GameObject selectionPanel;
    public Action<int> onSelectionConfirmed;

    private float prevTimeScale = 1f;
    private bool isPaused = false;

    public void Show()
    {
        if (selectionPanel != null) selectionPanel.SetActive(true);
        prevTimeScale = Time.timeScale;
        Time.timeScale = 0f;
        isPaused = true;
    }

    public void Hide(bool confirmed = false, int selectedIndex = -1)
    {
        if (selectionPanel != null) selectionPanel.SetActive(false);
        Time.timeScale = prevTimeScale;
        isPaused = false;

        if (confirmed && selectedIndex >= 0)
            onSelectionConfirmed?.Invoke(selectedIndex);
    }
}