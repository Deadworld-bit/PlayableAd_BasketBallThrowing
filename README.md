[![Create a PlayableAd_BasketBallThrowing with Unity | © 2025 by Deadworld ]](https://github.com/Deadworld-bit/PlayableAd_BasketBallThrowing.git)
# Welcome to PlayableAd_BasketBallThrowing repository
## This repo stores unity projects. You will find in this repo the following stuff
* A Unity mini-game built with Luna Plugin for playable ad deployment. The game challenges players to score dunks and perfect dunks by dragging and throwing a ball.


## Gameplay
### Ball Drag-and-Throw 
  - Touch or mouse drag to aim and throw.
  - Natural ball trajectory under gravity.
  - Adjustable throw parameters (force, sensitivity, arc bias) in the Unity Inspector.
### Dunk Detection & Scoring
  - Detects regular dunks (x1 score) and perfect dunks (x2 score).
  - Special mode: Moving basket that multiplies all scores by 2.
  - Real-time score display and perfect dunk announcements.

## Sound & Visual Effects
  - Impact sounds for ball hits, dunks, and perfect dunks.
  - Extra effects for basket movement, button clicks, and game end.
  - Particle effects for slam dunks.

## UI
  - Start screen with play button.
  - End screen showing score and retry option.
  - Real-time scoreboard during gameplay.

## Controls
  - Aim & Throw:	Drag & release (mouse/touch)
  - Enable Basket Movement Mode:	Click/tap difficulty button
  - Retry Game:	Click/tap retry button

## Logic
### Trajectory & Force Calculation
  #### Drag Delta: determines throw direction and throw strength.
  ```bash
   dragDelta = releasePosition − dragStartPosition.
  ```

  #### Drag distance (dragDist) is proportional to force magnitude:
  ```bash
   forceMag = dragDist × (maxLaunchForce/Screen.dpi) × gentleFactor.
  ```
  - maxLaunchForce → caps max throw power.
  - gentleFactor → scales force for smoother throws.
  - Screen.dpi → normalizes throw speed across devices.

  #### Forward & Upward Motion: Direction vector combines camera forward and camera up
  ```bash
    dir = normalize(F × forwardRatio + U × upwardRatio).
  ```
  ```bash
    forwardRatio = 1 − verticalRatio.
  ```
  ```bash
    verticalRatio = Clamp01(dragDelta.y/dragDist) x upwardBiasFactor.
  ```
  - This ensures the ball always has both forward push and upward arc, simulating a real basketball throw.
## Defect Feature In Fix
  - Choosing balls.

## Screenshots:



##### © Deadworld 2025


