using UnityEngine;

public class SoundManager : MonoBehaviour
{
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip buttonClick;
    [SerializeField] private AudioClip gameComplete;

    public void PlayButtonClick()
    {
        if (audioSource != null && buttonClick != null) audioSource.PlayOneShot(buttonClick);
    }

    public void PlayGameComplete()
    {
        if (audioSource != null && gameComplete != null) audioSource.PlayOneShot(gameComplete);
    }
}