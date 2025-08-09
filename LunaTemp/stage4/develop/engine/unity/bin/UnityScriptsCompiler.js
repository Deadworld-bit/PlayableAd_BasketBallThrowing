if ( TRACE ) { TRACE( JSON.parse( '["BallCollisionSound#init","BallCollisionSound#OnCollisionEnter","BallDragAndThrow#init","BallDragAndThrow#Update","BallDragAndThrow#BeginDrag","BallDragAndThrow#ContinueDrag","BallDragAndThrow#EndDrag","BallDragAndThrow#Cleanup","BallItem#init","BallItem#Awake","BallItem#SetSelected","BallWheelController#init","BallWheelController#Start","BallWheelController#CollectItems","BallWheelController#ArrangeItems","BallWheelController#Update","BallWheelController#OnPointerDown","BallWheelController#OnDrag","BallWheelController#OnEndDrag","BallWheelController#SnapToNearest","BallWheelController#SmoothRotateTo","BallWheelController#UpdateAllSelection","BallWheelController#ApplySelectionVisuals","BallWheelController#GetSelectedIndex","BallWheelController#GetSelectedTransform","BallWheelController#OnConfirm","BallWheelController#OnRandomPick","BallWheelController#SpinToIndexThenSnapAndConfirm","BasketRingMover#init","BasketRingMover#Awake","BasketRingMover#StartMovement","BasketRingMover#StopMovement","BasketRingMover#Update","DunkDetector#init","DunkDetector#TriggerEnter","DunkDetector#MarkRimTouched","DunkDetector#RegisterDunk","DunkDetector#RemoveScoreFlagAfter","DunkDetector#Update","DunkTriggerRelay#init","DunkTriggerRelay#OnTriggerEnter","GameManager#init","GameManager#Awake","GameManager#OnDestroy","GameManager#UpdateHighscoreUI","GameManager#SetTextSafe","GameManager#UpdateScoreUI","GameManager#UpdateTimeUI","GameManager#StartGame","GameManager#EndGame","GameManager#AddScore","GameManager#GetDifficultyMultiplier","GameManager#GameTimerCoroutine","GameManager#ShowPerfectPopup","GameManager#PerfectPopupCoroutine","GameManager#ToggleRingMovement","GameManager#SetRingMovement","GameManager#ShowBallSelection","GameManager#HideBallSelection","GameManager#ApplySelectedBall","GameManager#PlayButtonClickSound","GameManager#DebugStartGame","GameManager#DebugEndGame","GameManager#DebugResetHighscore","RimTouch#OnCollisionEnter","RimTouch#OnTriggerEnter","RotateRing#init","RotateRing#Update","UIMovement#init","UIMovement#Start","UIMovement#Update"]' ) ); }
/**
 * @version 1.0.9353.6957
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BallCollisionSound start.*/
    Bridge.define("BallCollisionSound", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _audioSource: null,
            _collisionSound: null,
            _minImpactSpeed: 0,
            _volumeScale: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallCollisionSound#init", this ); }

                this._minImpactSpeed = 2.0;
                this._volumeScale = 0.5;
            }
        },
        methods: {
            /*BallCollisionSound.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "BallCollisionSound#OnCollisionEnter", this ); }

                if (UnityEngine.Component.op_Inequality(collision.collider, null)) {
                    var impactSpeed = collision.relativeVelocity.length();
                    if (impactSpeed >= this._minImpactSpeed && UnityEngine.Component.op_Inequality(this._audioSource, null) && this._collisionSound != null) {
                        var volume = Math.max(0, Math.min(1, impactSpeed / 10.0)) * this._volumeScale;
                        this._audioSource.PlayOneShot$1(this._collisionSound, volume);
                    }
                }
            },
            /*BallCollisionSound.OnCollisionEnter end.*/


        }
    });
    /*BallCollisionSound end.*/

    /*BallDragAndThrow start.*/
    Bridge.define("BallDragAndThrow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _camera: null,
            _ballLayer: null,
            _touchTrail: null,
            _audioSource: null,
            _clickSound: null,
            _releaseSound: null,
            _maxLaunchForce: 0,
            _dragSensitivity: 0,
            _upwardBiasFactor: 0,
            _gentleFactor: 0,
            _selectedBall: null,
            _selectedRb: null,
            _initialScreenPos: null,
            _dragStartScreenPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallDragAndThrow#init", this ); }

                this._ballLayer = new UnityEngine.LayerMask();
                this._initialScreenPos = new UnityEngine.Vector3();
                this._dragStartScreenPos = new UnityEngine.Vector3();
                this._maxLaunchForce = 200.0;
                this._dragSensitivity = 10.0;
                this._upwardBiasFactor = 1.0;
                this._gentleFactor = 0.2;
            }
        },
        methods: {
            /*BallDragAndThrow.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallDragAndThrow#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.BeginDrag(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }

                if (UnityEngine.Component.op_Inequality(this._selectedBall, null)) {
                    this.ContinueDrag(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }

                if (UnityEngine.Component.op_Inequality(this._selectedBall, null) && UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.EndDrag();
                }
            },
            /*BallDragAndThrow.Update end.*/

            /*BallDragAndThrow.BeginDrag start.*/
            BeginDrag: function (screenPos) {
if ( TRACE ) { TRACE( "BallDragAndThrow#BeginDrag", this ); }

                var ray = this._camera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPos));
                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$1(ray, hit, window.Infinity, UnityEngine.LayerMask.op_Implicit(this._ballLayer.$clone()))) {
                    this._selectedBall = hit.v.transform;
                    this._selectedRb = this._selectedBall.GetComponent(UnityEngine.Rigidbody);
                    this._selectedRb.isKinematic = true;
                    this._selectedRb.useGravity = true;

                    this._initialScreenPos = this._camera.WorldToScreenPoint(this._selectedBall.position);
                    this._dragStartScreenPos = UnityEngine.Vector3.FromVector2(screenPos.$clone());

                    this._touchTrail.SetActive(true);

                    if (UnityEngine.Component.op_Inequality(this._audioSource, null) && this._clickSound != null) {
                        this._audioSource.PlayOneShot(this._clickSound);
                    }
                }
            },
            /*BallDragAndThrow.BeginDrag end.*/

            /*BallDragAndThrow.ContinueDrag start.*/
            ContinueDrag: function (screenPos) {
if ( TRACE ) { TRACE( "BallDragAndThrow#ContinueDrag", this ); }

                var sp = new pc.Vec3( screenPos.x, screenPos.y, this._initialScreenPos.z );
                var wp = this._camera.ScreenToWorldPoint(sp);

                this._selectedBall.position = new pc.Vec3().lerp( this._selectedBall.position, wp, UnityEngine.Time.deltaTime * this._dragSensitivity );
                this._touchTrail.transform.position = wp.$clone();
            },
            /*BallDragAndThrow.ContinueDrag end.*/

            /*BallDragAndThrow.EndDrag start.*/
            EndDrag: function () {
if ( TRACE ) { TRACE( "BallDragAndThrow#EndDrag", this ); }

                var dragDelta = UnityEngine.Vector3.FromVector2(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition).sub( UnityEngine.Vector2.FromVector3(this._dragStartScreenPos) ));
                var dragDist = dragDelta.length();
                if (dragDist < 5.0) {
                    this.Cleanup();
                    if (UnityEngine.Component.op_Inequality(this._audioSource, null) && this._releaseSound != null) {
                        this._audioSource.PlayOneShot(this._releaseSound);
                    }
                    return;
                }

                var verticalRatio = Math.max(0, Math.min(1, dragDelta.y / dragDist)) * this._upwardBiasFactor;
                var forwardRatio = 1.0 - verticalRatio;
                var dir = (this._camera.transform.forward.$clone().clone().scale( forwardRatio ).add( this._camera.transform.up.$clone().clone().scale( verticalRatio ) )).clone().normalize().$clone();

                var forceMag = dragDist * (this._maxLaunchForce / UnityEngine.Screen.dpi) * this._gentleFactor;
                var launchForce = dir.$clone().clone().scale( forceMag );

                this._selectedRb.isKinematic = false;
                this._selectedRb.AddForce$1(launchForce, UnityEngine.ForceMode.Impulse);

                if (UnityEngine.Component.op_Inequality(this._audioSource, null) && this._releaseSound != null) {
                    this._audioSource.PlayOneShot(this._releaseSound);
                }

                this.Cleanup();
            },
            /*BallDragAndThrow.EndDrag end.*/

            /*BallDragAndThrow.Cleanup start.*/
            Cleanup: function () {
if ( TRACE ) { TRACE( "BallDragAndThrow#Cleanup", this ); }

                this._touchTrail.SetActive(false);
                this._selectedBall = null;
                this._selectedRb = null;
            },
            /*BallDragAndThrow.Cleanup end.*/


        }
    });
    /*BallDragAndThrow end.*/

    /*BallItem start.*/
    Bridge.define("BallItem", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            meshRenderer: null,
            outlineObject: null,
            selectedScale: 0,
            _baseScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallItem#init", this ); }

                this._baseScale = new UnityEngine.Vector3();
                this.selectedScale = 1.15;
            }
        },
        methods: {
            /*BallItem.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BallItem#Awake", this ); }

                this._baseScale = this.transform.localScale.$clone();
                this.SetSelected(false);
            },
            /*BallItem.Awake end.*/

            /*BallItem.SetSelected start.*/
            SetSelected: function (selected) {
if ( TRACE ) { TRACE( "BallItem#SetSelected", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.outlineObject, null)) {
                    this.outlineObject.SetActive(selected);
                }

                this.transform.localScale = selected ? this._baseScale.$clone().clone().scale( this.selectedScale ) : this._baseScale.$clone();
            },
            /*BallItem.SetSelected end.*/


        }
    });
    /*BallItem end.*/

    /*BallWheelController start.*/
    Bridge.define("BallWheelController", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IEndDragHandler],
        fields: {
            wheelContainer: null,
            okButton: null,
            randomButton: null,
            radius: 0,
            zOffset: 0,
            startAngleDeg: 0,
            zRotationPerItem: 0,
            angularFriction: 0,
            snapSpeed: 0,
            minFlingVelocity: 0,
            _items: null,
            _itemScripts: null,
            _count: 0,
            _anglePerItem: 0,
            _rotationDeg: 0,
            _angularVelocity: 0,
            _lastPointerPos: null,
            _lastDragTime: 0,
            _dragging: false,
            _selectedIndex: 0
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnEndDrag", "UnityEngine$EventSystems$IEndDragHandler$OnEndDrag"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallWheelController#init", this ); }

                this._lastPointerPos = new UnityEngine.Vector2();
                this.radius = 2.0;
                this.zOffset = 0.0;
                this.startAngleDeg = 0.0;
                this.zRotationPerItem = 0.0;
                this.angularFriction = 800.0;
                this.snapSpeed = 10.0;
                this.minFlingVelocity = 15.0;
                this._items = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this._itemScripts = new (System.Collections.Generic.List$1(BallItem)).ctor();
                this._count = 0;
                this._anglePerItem = 0.0;
                this._rotationDeg = 0.0;
                this._angularVelocity = 0.0;
                this._dragging = false;
                this._selectedIndex = 0;
            }
        },
        methods: {
            /*BallWheelController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallWheelController#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.okButton, null)) {
                    this.okButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnConfirm));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.randomButton, null)) {
                    this.randomButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnRandomPick));
                }
                this.CollectItems();
            },
            /*BallWheelController.Start end.*/

            /*BallWheelController.CollectItems start.*/
            CollectItems: function () {
if ( TRACE ) { TRACE( "BallWheelController#CollectItems", this ); }

                var $t;
                this._items.clear();
                this._itemScripts.clear();
                if (UnityEngine.Component.op_Equality(this.wheelContainer, null)) {
                    UnityEngine.Debug.LogError$2("BallWheelController: wheelContainer not assigned.");
                    return;
                }
                $t = Bridge.getEnumerator(this.wheelContainer);
                try {
                    while ($t.moveNext()) {
                        var t = Bridge.cast($t.Current, UnityEngine.Transform);
                        this._items.add(t);
                        var bi = t.GetComponent(BallItem);
                        this._itemScripts.add(bi);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this._count = this._items.Count;
                this._anglePerItem = this._count > 0 ? 360.0 / this._count : 360.0;
                this.ArrangeItems();
                this.UpdateAllSelection();
            },
            /*BallWheelController.CollectItems end.*/

            /*BallWheelController.ArrangeItems start.*/
            ArrangeItems: function () {
if ( TRACE ) { TRACE( "BallWheelController#ArrangeItems", this ); }

                for (var i = 0; i < this._count; i = (i + 1) | 0) {
                    var angleDeg = this.startAngleDeg + i * this._anglePerItem + this._rotationDeg;
                    var rad = angleDeg * UnityEngine.Mathf.Deg2Rad;
                    var p = new pc.Vec3( Math.sin(rad) * this.radius, Math.cos(rad) * this.radius, this.zOffset );
                    this._items.getItem(i).localPosition = p.$clone();
                    if (this.zRotationPerItem !== 0.0) {
                        this._items.getItem(i).localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, angleDeg + this.zRotationPerItem );
                    } else {
                        this._items.getItem(i).localRotation = pc.Quat.IDENTITY.clone();
                    }
                }
            },
            /*BallWheelController.ArrangeItems end.*/

            /*BallWheelController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallWheelController#Update", this ); }

                if (!this._dragging) {
                    if (Math.abs(this._angularVelocity) > 0.0) {
                        var delta = this._angularVelocity * UnityEngine.Time.deltaTime;
                        this._rotationDeg += delta;
                        // friction
                        this._angularVelocity = UnityEngine.Mathf.MoveTowards(this._angularVelocity, 0.0, this.angularFriction * UnityEngine.Time.deltaTime);

                        this.ArrangeItems();

                        if (Math.abs(this._angularVelocity) <= this.minFlingVelocity) {
                            this.SnapToNearest();
                        }
                    }
                }
                this._rotationDeg = this._rotationDeg - Math.floor(this._rotationDeg / 360.0) * 360.0;
                this.UpdateAllSelection();
            },
            /*BallWheelController.Update end.*/

            /*BallWheelController.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "BallWheelController#OnPointerDown", this ); }

                this._dragging = true;
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.as(this.transform, UnityEngine.RectTransform), eventData.position, eventData.pressEventCamera, Bridge.ref(this, "_lastPointerPos"));
                this._lastDragTime = UnityEngine.Time.time;
                this._angularVelocity = 0.0;
            },
            /*BallWheelController.OnPointerDown end.*/

            /*BallWheelController.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "BallWheelController#OnDrag", this ); }

                var newPos = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.as(this.transform, UnityEngine.RectTransform), eventData.position, eventData.pressEventCamera, newPos);

                var center = (Bridge.as(this.transform, UnityEngine.RectTransform)).rect.center.$clone();
                var a = this._lastPointerPos.$clone().sub( center );
                var b = newPos.v.$clone().sub( center );
                if (a.lengthSq() < 0.0001 || b.lengthSq() < 0.0001) {
                    this._lastPointerPos = newPos.v.$clone();
                    this._lastDragTime = UnityEngine.Time.time;
                    return;
                }

                var angleA = Math.atan2(a.y, a.x) * UnityEngine.Mathf.Rad2Deg;
                var angleB = Math.atan2(b.y, b.x) * UnityEngine.Mathf.Rad2Deg;
                var deltaAngle = UnityEngine.Mathf.DeltaAngle(angleA, angleB);
                this._rotationDeg += deltaAngle;
                this.ArrangeItems();

                var dt = UnityEngine.Mathf.Max(0.0001, UnityEngine.Time.time - this._lastDragTime);
                this._angularVelocity = deltaAngle / dt;

                this._lastPointerPos = newPos.v.$clone();
                this._lastDragTime = UnityEngine.Time.time;
            },
            /*BallWheelController.OnDrag end.*/

            /*BallWheelController.OnEndDrag start.*/
            OnEndDrag: function (eventData) {
if ( TRACE ) { TRACE( "BallWheelController#OnEndDrag", this ); }

                this._dragging = false;
            },
            /*BallWheelController.OnEndDrag end.*/

            /*BallWheelController.SnapToNearest start.*/
            SnapToNearest: function () {
if ( TRACE ) { TRACE( "BallWheelController#SnapToNearest", this ); }

                var $t, $t1;
                var normalizedRotation = this._rotationDeg - Math.floor(this._rotationDeg / 360.0) * 360.0;
                var bestDiff = 360.0;
                var bestIndex = 0;
                for (var i = 0; i < this._count; i = (i + 1) | 0) {
                    var ang = ($t = this.startAngleDeg + i * this._anglePerItem + normalizedRotation, $t - Math.floor($t / 360.0) * 360.0);
                    var diff = Math.abs(UnityEngine.Mathf.DeltaAngle(ang, 0.0));
                    if (diff < bestDiff) {
                        bestDiff = diff;
                        bestIndex = i;
                    }
                }
                var desiredRotation = ($t1 = -(this.startAngleDeg + bestIndex * this._anglePerItem), $t1 - Math.floor($t1 / 360.0) * 360.0);
                this.StopAllCoroutines();
                this.StartCoroutine$1(this.SmoothRotateTo(desiredRotation));
            },
            /*BallWheelController.SnapToNearest end.*/

            /*BallWheelController.SmoothRotateTo start.*/
            SmoothRotateTo: function (targetRotation) {
if ( TRACE ) { TRACE( "BallWheelController#SmoothRotateTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    current,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    current = this._rotationDeg;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( Math.abs(UnityEngine.Mathf.DeltaAngle(current, targetRotation)) > 0.25 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    current = UnityEngine.Mathf.LerpAngle(current, targetRotation, UnityEngine.Time.deltaTime * this.snapSpeed);
                                        this._rotationDeg = current;
                                        this.ArrangeItems();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._rotationDeg = targetRotation;
                                        this.ArrangeItems();
                                        this._angularVelocity = 0.0;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BallWheelController.SmoothRotateTo end.*/

            /*BallWheelController.UpdateAllSelection start.*/
            UpdateAllSelection: function () {
if ( TRACE ) { TRACE( "BallWheelController#UpdateAllSelection", this ); }

                var $t;
                if (this._count === 0) {
                    return;
                }
                var normalizedRotation = this._rotationDeg - Math.floor(this._rotationDeg / 360.0) * 360.0;
                var bestIndex = 0;
                var bestDiff = 360.0;
                for (var i = 0; i < this._count; i = (i + 1) | 0) {
                    var ang = ($t = this.startAngleDeg + i * this._anglePerItem + normalizedRotation, $t - Math.floor($t / 360.0) * 360.0);
                    var diff = Math.abs(UnityEngine.Mathf.DeltaAngle(ang, 0.0));
                    if (diff < bestDiff) {
                        bestDiff = diff;
                        bestIndex = i;
                    }
                }
                if (bestIndex !== this._selectedIndex) {
                    this._selectedIndex = bestIndex;
                    this.ApplySelectionVisuals();
                }
            },
            /*BallWheelController.UpdateAllSelection end.*/

            /*BallWheelController.ApplySelectionVisuals start.*/
            ApplySelectionVisuals: function () {
if ( TRACE ) { TRACE( "BallWheelController#ApplySelectionVisuals", this ); }

                for (var i = 0; i < this._count; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this._itemScripts.getItem(i), null)) {
                        this._itemScripts.getItem(i).SetSelected(i === this._selectedIndex);
                    }
                }
            },
            /*BallWheelController.ApplySelectionVisuals end.*/

            /*BallWheelController.GetSelectedIndex start.*/
            GetSelectedIndex: function () {
if ( TRACE ) { TRACE( "BallWheelController#GetSelectedIndex", this ); }

                return this._selectedIndex;
            },
            /*BallWheelController.GetSelectedIndex end.*/

            /*BallWheelController.GetSelectedTransform start.*/
            GetSelectedTransform: function () {
if ( TRACE ) { TRACE( "BallWheelController#GetSelectedTransform", this ); }

                return this._items.Count > this._selectedIndex ? this._items.getItem(this._selectedIndex) : null;
            },
            /*BallWheelController.GetSelectedTransform end.*/

            /*BallWheelController.OnConfirm start.*/
            OnConfirm: function () {
if ( TRACE ) { TRACE( "BallWheelController#OnConfirm", this ); }

                UnityEngine.Debug.Log$1("Confirmed ball index: " + this._selectedIndex);
                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager._Instance, null)) {
                    GameManager._Instance.HideBallSelection(true, this._selectedIndex);
                }
            },
            /*BallWheelController.OnConfirm end.*/

            /*BallWheelController.OnRandomPick start.*/
            OnRandomPick: function () {
if ( TRACE ) { TRACE( "BallWheelController#OnRandomPick", this ); }

                var $t;
                if (this._count === 0) {
                    return;
                }
                var rnd = UnityEngine.Random.Range(0, this._count);
                var desiredRotation = ($t = -(this.startAngleDeg + rnd * this._anglePerItem), $t - Math.floor($t / 360.0) * 360.0);
                this.StopAllCoroutines();
                this.StartCoroutine$1(this.SpinToIndexThenSnapAndConfirm(desiredRotation, rnd));
            },
            /*BallWheelController.OnRandomPick end.*/

            /*BallWheelController.SpinToIndexThenSnapAndConfirm start.*/
            SpinToIndexThenSnapAndConfirm: function (desiredRotation, finalIndex) {
if ( TRACE ) { TRACE( "BallWheelController#SpinToIndexThenSnapAndConfirm", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    extra,
                    start,
                    target,
                    $t,
                    elapsed,
                    dur,
                    t,
                    angle,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    extra = 720.0;
                                        start = this._rotationDeg;
                                        target = ($t = desiredRotation - extra, $t - Math.floor($t / 360.0) * 360.0);
                                        elapsed = 0.0;
                                        dur = 1.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = pc.math.smoothstep(0.0, 1.0, elapsed / dur);
                                        angle = UnityEngine.Mathf.LerpAngle(start, target, t);
                                        this._rotationDeg = angle;
                                        this.ArrangeItems();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._rotationDeg = desiredRotation;
                                        this.ArrangeItems();
                                        this.UpdateAllSelection();

                                        if (UnityEngine.MonoBehaviour.op_Inequality(GameManager._Instance, null)) {
                                            GameManager._Instance.HideBallSelection(true, finalIndex);
                                        } else {
                                            this.OnConfirm();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BallWheelController.SpinToIndexThenSnapAndConfirm end.*/


        }
    });
    /*BallWheelController end.*/

    /*BasketRingMover start.*/
    Bridge.define("BasketRingMover", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ringTransform: null,
            minX: 0,
            maxX: 0,
            speed: 0,
            _moving: false,
            _startTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BasketRingMover#init", this ); }

                this.minX = -2.0;
                this.maxX = 2.0;
                this.speed = 1.5;
                this._moving = false;
            }
        },
        methods: {
            /*BasketRingMover.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BasketRingMover#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.ringTransform, null)) {
                    this.ringTransform = this.transform;
                }
            },
            /*BasketRingMover.Awake end.*/

            /*BasketRingMover.StartMovement start.*/
            StartMovement: function () {
if ( TRACE ) { TRACE( "BasketRingMover#StartMovement", this ); }

                if (this._moving) {
                    return;
                }
                this._moving = true;
                this._startTime = UnityEngine.Time.time;
            },
            /*BasketRingMover.StartMovement end.*/

            /*BasketRingMover.StopMovement start.*/
            StopMovement: function () {
if ( TRACE ) { TRACE( "BasketRingMover#StopMovement", this ); }

                this._moving = false;
                var p = this.ringTransform.localPosition.$clone();
                p.x = (this.minX + this.maxX) * 0.5;
                this.ringTransform.localPosition = p.$clone();
            },
            /*BasketRingMover.StopMovement end.*/

            /*BasketRingMover.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BasketRingMover#Update", this ); }

                if (!this._moving || UnityEngine.Component.op_Equality(this.ringTransform, null)) {
                    return;
                }
                var t = (UnityEngine.Time.time - this._startTime) * this.speed;
                var p = UnityEngine.Mathf.PingPong(t, 1.0); // 0..1
                var x = pc.math.lerp(this.minX, this.maxX, p);
                var pos = this.ringTransform.localPosition.$clone();
                pos.x = x;
                this.ringTransform.localPosition = pos.$clone();
            },
            /*BasketRingMover.Update end.*/


        }
    });
    /*BasketRingMover end.*/

    /*DunkDetector start.*/
    Bridge.define("DunkDetector", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _acceptWindow: 0,
            _cleanupInterval: 0,
            _dunkParticles: null,
            _perfectDunkParticles: null,
            _audioSource: null,
            _dunkSound: null,
            _perfectDunkSound: null,
            _normalDunkScore: 0,
            _perfectDunkScore: 0,
            _topEnteredAt: null,
            _rimTouched: null,
            _alreadyScored: null,
            _lastCleanup: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DunkDetector#init", this ); }

                this._acceptWindow = 1.0;
                this._cleanupInterval = 2.0;
                this._normalDunkScore = 1;
                this._perfectDunkScore = 2;
                this._topEnteredAt = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,System.Single)).ctor();
                this._rimTouched = new (System.Collections.Generic.HashSet$1(UnityEngine.GameObject)).ctor();
                this._alreadyScored = new (System.Collections.Generic.HashSet$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*DunkDetector.TriggerEnter start.*/
            TriggerEnter: function (isTop, other) {
if ( TRACE ) { TRACE( "DunkDetector#TriggerEnter", this ); }

                if (!other.CompareTag("ballTag")) {
                    return;
                }
                var ballGO = other.gameObject;

                if (isTop) {
                    this._topEnteredAt.setItem(ballGO, UnityEngine.Time.time);
                } else {
                    if (this._alreadyScored.contains(ballGO)) {
                        return;
                    }
                    var t = { };

                    if (this._topEnteredAt.tryGetValue(ballGO, t)) {
                        if (UnityEngine.Time.time - t.v <= this._acceptWindow) {
                            var perfect = !this._rimTouched.contains(ballGO);
                            this.RegisterDunk(ballGO, perfect);
                        }

                        this._topEnteredAt.remove(ballGO);
                        this._rimTouched.remove(ballGO);
                    }
                }
            },
            /*DunkDetector.TriggerEnter end.*/

            /*DunkDetector.MarkRimTouched start.*/
            MarkRimTouched: function (ball) {
if ( TRACE ) { TRACE( "DunkDetector#MarkRimTouched", this ); }

                if (UnityEngine.GameObject.op_Equality(ball, null)) {
                    return;
                }
                this._rimTouched.add(ball);
            },
            /*DunkDetector.MarkRimTouched end.*/

            /*DunkDetector.RegisterDunk start.*/
            RegisterDunk: function (ball, perfect) {
if ( TRACE ) { TRACE( "DunkDetector#RegisterDunk", this ); }

                if (UnityEngine.GameObject.op_Equality(ball, null)) {
                    UnityEngine.Debug.LogWarning$1("RegisterDunk called with null ball.");
                    return;
                }
                UnityEngine.Debug.Log$1(System.String.format("RegisterDunk: ball={0}, perfect={1}, time={2}", ball.name, Bridge.box(perfect, System.Boolean, System.Boolean.toString), Bridge.box(UnityEngine.Time.time, System.Single, System.Single.format, System.Single.getHashCode)));

                if (UnityEngine.Component.op_Inequality(this._audioSource, null)) {
                    var soundToPlay = perfect ? this._perfectDunkSound : this._dunkSound;
                    if (soundToPlay != null) {
                        this._audioSource.PlayOneShot(soundToPlay);
                    } else {
                        UnityEngine.Debug.LogWarning$1(System.String.format("No audio clip assigned for {0}", [(perfect ? "perfectDunkSound" : "dunkSound")]));
                    }
                } else {
                    UnityEngine.Debug.LogWarning$1("AudioSource is not assigned in DunkDetector.");
                }

                var prefab = perfect ? this._perfectDunkParticles : this._dunkParticles;
                if (UnityEngine.Component.op_Equality(prefab, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("No particle prefab assigned for {0}", [(perfect ? "perfectDunkParticles" : "dunkParticles")]));
                } else {
                    var go = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, prefab.gameObject, this.transform.position, pc.Quat.IDENTITY.clone());
                    var ps = go.GetComponent(UnityEngine.ParticleSystem);
                    if (UnityEngine.Component.op_Inequality(ps, null)) {
                        var main = ps.main;
                        main.simulationSpace = UnityEngine.ParticleSystemSimulationSpace.World;
                        if (!ps.isPlaying) {
                            ps.Play();
                        }
                        var maxLifetime = 0.0;
                        try {
                            maxLifetime = main.startLifetime.constantMax;
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                            maxLifetime = main.duration;
                        }
                        var life = UnityEngine.Mathf.Max(main.duration, maxLifetime);
                        this.Destroy(go, life + 0.5);
                    } else {
                        UnityEngine.Debug.LogWarning$1("Instantiated particle prefab has no ParticleSystem component.");
                        this.Destroy(go, 3.0);
                    }
                }

                var scoreToAdd = perfect ? this._perfectDunkScore : this._normalDunkScore;
                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager._Instance, null)) {
                    GameManager._Instance.AddScore(scoreToAdd, perfect);
                } else {
                    UnityEngine.Debug.LogWarning$1(System.String.format("GameManager.Instance is null. Would have added {0} points.", [Bridge.box(scoreToAdd, System.Int32)]));
                }

                this._alreadyScored.add(ball);
                this.StartCoroutine$1(this.RemoveScoreFlagAfter(ball, 2.0));
            },
            /*DunkDetector.RegisterDunk end.*/

            /*DunkDetector.RemoveScoreFlagAfter start.*/
            RemoveScoreFlagAfter: function (ball, delay) {
if ( TRACE ) { TRACE( "DunkDetector#RemoveScoreFlagAfter", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._alreadyScored.remove(ball);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DunkDetector.RemoveScoreFlagAfter end.*/

            /*DunkDetector.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DunkDetector#Update", this ); }

                var $t;
                if (UnityEngine.Time.time - this._lastCleanup > this._cleanupInterval) {
                    var now = UnityEngine.Time.time;
                    var keys = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).$ctor1(this._topEnteredAt.Keys);
                    $t = Bridge.getEnumerator(keys);
                    try {
                        while ($t.moveNext()) {
                            var k = $t.Current;
                            if (now - this._topEnteredAt.getItem(k) > this._acceptWindow + 0.5) {
                                this._topEnteredAt.remove(k);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    this._rimTouched.RemoveWhere(function (go) {
                        return UnityEngine.GameObject.op_Equality(go, null);
                    });
                    this._alreadyScored.RemoveWhere(function (go) {
                        return UnityEngine.GameObject.op_Equality(go, null);
                    });

                    this._lastCleanup = UnityEngine.Time.time;
                }
            },
            /*DunkDetector.Update end.*/


        }
    });
    /*DunkDetector end.*/

    /*DunkTriggerRelay start.*/
    Bridge.define("DunkTriggerRelay", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _detector: null,
            _isTop: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DunkTriggerRelay#init", this ); }

                this._isTop = true;
            }
        },
        methods: {
            /*DunkTriggerRelay.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "DunkTriggerRelay#OnTriggerEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._detector, null)) {
                    UnityEngine.Debug.LogWarning$1("DunkTriggerRelay has no DunkDetector assigned.");
                    return;
                }

                this._detector.TriggerEnter(this._isTop, other);
            },
            /*DunkTriggerRelay.OnTriggerEnter end.*/


        }
    });
    /*DunkTriggerRelay end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _Instance: null
            }
        },
        fields: {
            _gameDuration: 0,
            difficultyCurve: null,
            _highestText: null,
            _timeText: null,
            _scoreText: null,
            _perfectPopup: null,
            _perfectPopupDuration: 0,
            _highscoreKey: null,
            _startPanel: null,
            _endPanel: null,
            _startButton: null,
            _retryButton: null,
            _endScoreText: null,
            _moveRingButton: null,
            _basketRingMover: null,
            _openBallSelectButton: null,
            _ballSelectionPanel: null,
            _ballWheelController: null,
            _audioSource: null,
            _buttonClickSound: null,
            _gameCompleteSound: null,
            _isRunning: false,
            _timeRemaining: 0,
            _score: 0,
            _highscore: 0,
            _scoreMultiplier: 0,
            _timerCoroutine: null,
            _perfectCoroutine: null,
            _ringMovementActive: false,
            _isPausedByBallSelection: false,
            _prevTimeScale: 0
        },
        events: {
            OnTimeChanged: null,
            OnScoreChanged: null,
            OnDifficultyChanged: null,
            OnGameStarted: null,
            OnGameEnded: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this._gameDuration = 120.0;
                this.difficultyCurve = pc.AnimationCurve.createLinear(0.0, 1.0, 1.0, 1.6);
                this._perfectPopupDuration = 1.0;
                this._highscoreKey = "Highscore";
                this._score = 0;
                this._highscore = 0;
                this._scoreMultiplier = 1.0;
                this._ringMovementActive = false;
                this._isPausedByBallSelection = false;
                this._prevTimeScale = 1.0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager._Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager._Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                GameManager._Instance = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);

                if (UnityEngine.MonoBehaviour.op_Equality(this._highestText, null)) {
                    UnityEngine.Debug.LogError$2("GameManager: highestText is not assigned in the Inspector!");
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this._timeText, null)) {
                    UnityEngine.Debug.LogError$2("GameManager: timeText is not assigned in the Inspector!");
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this._scoreText, null)) {
                    UnityEngine.Debug.LogError$2("GameManager: scoreText is not assigned in the Inspector!");
                }
                if (UnityEngine.GameObject.op_Equality(this._startPanel, null) || UnityEngine.GameObject.op_Equality(this._endPanel, null) || UnityEngine.MonoBehaviour.op_Equality(this._startButton, null) || UnityEngine.MonoBehaviour.op_Equality(this._retryButton, null) || UnityEngine.MonoBehaviour.op_Equality(this._endScoreText, null)) {
                    UnityEngine.Debug.LogError$2("GameManager: One or more start/end UI elements are not assigned!");
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._moveRingButton, null)) {
                    this._moveRingButton.gameObject.SetActive(false);
                    this._moveRingButton.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.PlayButtonClickSound();
                        this.ToggleRingMovement();
                    }));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._openBallSelectButton, null)) {
                    this._openBallSelectButton.gameObject.SetActive(false);
                    this._openBallSelectButton.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.PlayButtonClickSound();
                        this.ShowBallSelection();
                    }));
                }
                if (UnityEngine.GameObject.op_Inequality(this._ballSelectionPanel, null)) {
                    this._ballSelectionPanel.SetActive(false);
                }

                this._highscore = UnityEngine.PlayerPrefs.GetInt(this._highscoreKey, 0);
                this.UpdateHighscoreUI();
                if (UnityEngine.GameObject.op_Inequality(this._perfectPopup, null)) {
                    this._perfectPopup.SetActive(false);
                }

                if (UnityEngine.GameObject.op_Inequality(this._startPanel, null)) {
                    this._startPanel.SetActive(true);
                }
                if (UnityEngine.GameObject.op_Inequality(this._endPanel, null)) {
                    this._endPanel.SetActive(false);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._startButton, null)) {
                    this._startButton.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.PlayButtonClickSound();
                        this.StartGame();
                        if (UnityEngine.GameObject.op_Inequality(this._startPanel, null)) {
                            this._startPanel.SetActive(false);
                        }
                    }));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._retryButton, null)) {
                    this._retryButton.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.PlayButtonClickSound();
                        this.StartGame();
                        if (UnityEngine.GameObject.op_Inequality(this._endPanel, null)) {
                            this._endPanel.SetActive(false);
                        }
                    }));
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "GameManager#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager._Instance, this)) {
                    GameManager._Instance = null;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._moveRingButton, null)) {
                    this._moveRingButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.ToggleRingMovement));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._openBallSelectButton, null)) {
                    this._openBallSelectButton.onClick.RemoveAllListeners();
                }
            },
            /*GameManager.OnDestroy end.*/

            /*GameManager.UpdateHighscoreUI start.*/
            UpdateHighscoreUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateHighscoreUI", this ); }

                this.SetTextSafe(this._highestText, System.String.format("{0}", [Bridge.box(this._highscore, System.Int32)]));
            },
            /*GameManager.UpdateHighscoreUI end.*/

            /*GameManager.SetTextSafe start.*/
            SetTextSafe: function (uiText, text) {
if ( TRACE ) { TRACE( "GameManager#SetTextSafe", this ); }

                if (uiText == null) {
                    return;
                }
                var t;
                if (UnityEngine.MonoBehaviour.op_Inequality(((t = Bridge.as(uiText, TMPro.TMP_Text))), null)) {
                    t.text = text;
                } else {
                    var u;
                    if (UnityEngine.MonoBehaviour.op_Inequality(((u = Bridge.as(uiText, UnityEngine.UI.Text))), null)) {
                        u.text = text;
                    }
                }
            },
            /*GameManager.SetTextSafe end.*/

            /*GameManager.UpdateScoreUI start.*/
            UpdateScoreUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateScoreUI", this ); }

                this.SetTextSafe(this._scoreText, System.String.format("{0}", [Bridge.box(this._score, System.Int32)]));
            },
            /*GameManager.UpdateScoreUI end.*/

            /*GameManager.UpdateTimeUI start.*/
            UpdateTimeUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateTimeUI", this ); }

                var sec = Math.ceil(this._timeRemaining);
                var minutes = (Bridge.Int.div(sec, 60)) | 0;
                var seconds = sec % 60;
                this.SetTextSafe(this._timeText, System.String.format("{0:00}:{1:00}", Bridge.box(minutes, System.Int32), Bridge.box(seconds, System.Int32)));
            },
            /*GameManager.UpdateTimeUI end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameManager#StartGame", this ); }

                this._score = 0;
                this._timeRemaining = this._gameDuration;
                this._isRunning = true;
                this.UpdateScoreUI();
                this.UpdateTimeUI();

                if (UnityEngine.GameObject.op_Inequality(this._endPanel, null)) {
                    this._endPanel.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._moveRingButton, null)) {
                    this._moveRingButton.gameObject.SetActive(true);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._openBallSelectButton, null)) {
                    this._openBallSelectButton.gameObject.SetActive(true);
                }

                !Bridge.staticEquals(this.OnGameStarted, null) ? this.OnGameStarted() : null;

                if (this._timerCoroutine != null) {
                    this.StopCoroutine$2(this._timerCoroutine);
                }
                this._timerCoroutine = this.StartCoroutine$1(this.GameTimerCoroutine());
            },
            /*GameManager.StartGame end.*/

            /*GameManager.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "GameManager#EndGame", this ); }

                if (!this._isRunning) {
                    return;
                }

                this._isRunning = false;
                if (this._timerCoroutine != null) {
                    this.StopCoroutine$2(this._timerCoroutine);
                }
                this._timerCoroutine = null;
                this.SetRingMovement(false);

                if (UnityEngine.Component.op_Inequality(this._audioSource, null) && this._gameCompleteSound != null) {
                    this._audioSource.PlayOneShot(this._gameCompleteSound);
                }

                if (this._score > this._highscore) {
                    this._highscore = this._score;
                    UnityEngine.PlayerPrefs.SetInt(this._highscoreKey, this._highscore);
                    UnityEngine.PlayerPrefs.Save();
                    this.UpdateHighscoreUI();
                }

                if (UnityEngine.GameObject.op_Inequality(this._endPanel, null)) {
                    this._endPanel.SetActive(true);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._endScoreText, null)) {
                    this._endScoreText.text = System.String.format("Score: {0}", [Bridge.box(this._score, System.Int32)]);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._moveRingButton, null)) {
                    this._moveRingButton.gameObject.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this._ballSelectionPanel, null)) {
                    this._ballSelectionPanel.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._openBallSelectButton, null)) {
                    this._openBallSelectButton.gameObject.SetActive(false);
                }

                if (this._isPausedByBallSelection) {
                    UnityEngine.Time.timeScale = this._prevTimeScale;
                    this._isPausedByBallSelection = false;
                }

                !Bridge.staticEquals(this.OnGameEnded, null) ? this.OnGameEnded() : null;
            },
            /*GameManager.EndGame end.*/

            /*GameManager.AddScore start.*/
            AddScore: function (points, perfect) {
if ( TRACE ) { TRACE( "GameManager#AddScore", this ); }

                if (perfect === void 0) { perfect = false; }
                if (!this._isRunning) {
                    UnityEngine.Debug.Log$1("AddScore called while game is not running; ignoring.");
                    return;
                }

                if (this._isPausedByBallSelection) {
                    UnityEngine.Debug.Log$1("AddScore ignored because game is paused by ball selector.");
                    return;
                }

                var pointsToAdd = Math.round(points * this._scoreMultiplier);
                this._score = (this._score + pointsToAdd) | 0;
                this.UpdateScoreUI();
                !Bridge.staticEquals(this.OnScoreChanged, null) ? this.OnScoreChanged(this._score) : null;

                if (perfect) {
                    this.ShowPerfectPopup();
                }
            },
            /*GameManager.AddScore end.*/

            /*GameManager.GetDifficultyMultiplier start.*/
            GetDifficultyMultiplier: function () {
if ( TRACE ) { TRACE( "GameManager#GetDifficultyMultiplier", this ); }

                if (!this._isRunning) {
                    return this.difficultyCurve.value(0.0);
                }
                var normalized = 1.0 - (this._timeRemaining / UnityEngine.Mathf.Max(1.0, this._gameDuration));
                var mul = this.difficultyCurve.value(Math.max(0, Math.min(1, normalized)));
                return mul;
            },
            /*GameManager.GetDifficultyMultiplier end.*/

            /*GameManager.GameTimerCoroutine start.*/
            GameTimerCoroutine: function () {
if ( TRACE ) { TRACE( "GameManager#GameTimerCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._timeRemaining > 0.0 && this._isRunning ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._timeRemaining -= UnityEngine.Time.deltaTime;

                                        if (this._timeRemaining < 0.0) {
                                            this._timeRemaining = 0.0;
                                        }
                                        this.UpdateTimeUI();

                                        !Bridge.staticEquals(this.OnDifficultyChanged, null) ? this.OnDifficultyChanged(this.GetDifficultyMultiplier()) : null;

                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.EndGame();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.GameTimerCoroutine end.*/

            /*GameManager.ShowPerfectPopup start.*/
            ShowPerfectPopup: function () {
if ( TRACE ) { TRACE( "GameManager#ShowPerfectPopup", this ); }

                if (UnityEngine.GameObject.op_Equality(this._perfectPopup, null)) {
                    UnityEngine.Debug.LogWarning$1("GameManager: perfectPopup is not assigned, cannot show popup.");
                    return;
                }

                if (this._perfectCoroutine != null) {
                    this.StopCoroutine$2(this._perfectCoroutine);
                }
                this._perfectCoroutine = this.StartCoroutine$1(this.PerfectPopupCoroutine());
            },
            /*GameManager.ShowPerfectPopup end.*/

            /*GameManager.PerfectPopupCoroutine start.*/
            PerfectPopupCoroutine: function () {
if ( TRACE ) { TRACE( "GameManager#PerfectPopupCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._perfectPopup.SetActive(true);

                                        timer = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this._perfectPopupDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._perfectPopup.SetActive(false);
                                        this._perfectCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.PerfectPopupCoroutine end.*/

            /*GameManager.ToggleRingMovement start.*/
            ToggleRingMovement: function () {
if ( TRACE ) { TRACE( "GameManager#ToggleRingMovement", this ); }

                this.SetRingMovement(!this._ringMovementActive);
            },
            /*GameManager.ToggleRingMovement end.*/

            /*GameManager.SetRingMovement start.*/
            SetRingMovement: function (active) {
if ( TRACE ) { TRACE( "GameManager#SetRingMovement", this ); }

                this._ringMovementActive = active;
                this._scoreMultiplier = active ? 2.0 : 1.0;

                if (UnityEngine.MonoBehaviour.op_Inequality(this._basketRingMover, null)) {
                    if (active) {
                        this._basketRingMover.StartMovement();
                    } else {
                        this._basketRingMover.StopMovement();
                    }
                }
            },
            /*GameManager.SetRingMovement end.*/

            /*GameManager.ShowBallSelection start.*/
            ShowBallSelection: function () {
if ( TRACE ) { TRACE( "GameManager#ShowBallSelection", this ); }

                if (!this._isRunning) {
                    return;
                }

                if (UnityEngine.GameObject.op_Inequality(this._ballSelectionPanel, null)) {
                    this._ballSelectionPanel.SetActive(true);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._ballWheelController, null)) {
                    this._ballWheelController.CollectItems();
                }

                this._prevTimeScale = UnityEngine.Time.timeScale;
                UnityEngine.Time.timeScale = 0.0;
                this._isPausedByBallSelection = true;
            },
            /*GameManager.ShowBallSelection end.*/

            /*GameManager.HideBallSelection start.*/
            HideBallSelection: function (confirmed, selectedIndex) {
if ( TRACE ) { TRACE( "GameManager#HideBallSelection", this ); }

                if (confirmed === void 0) { confirmed = false; }
                if (selectedIndex === void 0) { selectedIndex = -1; }
                if (UnityEngine.GameObject.op_Inequality(this._ballSelectionPanel, null)) {
                    this._ballSelectionPanel.SetActive(false);
                }

                UnityEngine.Time.timeScale = this._prevTimeScale;
                this._isPausedByBallSelection = false;

                if (confirmed && selectedIndex >= 0) {
                    this.ApplySelectedBall(selectedIndex);
                }
            },
            /*GameManager.HideBallSelection end.*/

            /*GameManager.ApplySelectedBall start.*/
            ApplySelectedBall: function (index) {
if ( TRACE ) { TRACE( "GameManager#ApplySelectedBall", this ); }

                UnityEngine.Debug.Log$1(System.String.format("GameManager: ApplySelectedBall({0}) called.", [Bridge.box(index, System.Int32)]));
            },
            /*GameManager.ApplySelectedBall end.*/

            /*GameManager.PlayButtonClickSound start.*/
            PlayButtonClickSound: function () {
if ( TRACE ) { TRACE( "GameManager#PlayButtonClickSound", this ); }

                if (UnityEngine.Component.op_Inequality(this._audioSource, null) && this._buttonClickSound != null) {
                    this._audioSource.PlayOneShot(this._buttonClickSound);
                }
            },
            /*GameManager.PlayButtonClickSound end.*/

            /*GameManager.DebugStartGame start.*/
            DebugStartGame: function () {
if ( TRACE ) { TRACE( "GameManager#DebugStartGame", this ); }

                this.StartGame();
            },
            /*GameManager.DebugStartGame end.*/

            /*GameManager.DebugEndGame start.*/
            DebugEndGame: function () {
if ( TRACE ) { TRACE( "GameManager#DebugEndGame", this ); }

                this.EndGame();
            },
            /*GameManager.DebugEndGame end.*/

            /*GameManager.DebugResetHighscore start.*/
            DebugResetHighscore: function () {
if ( TRACE ) { TRACE( "GameManager#DebugResetHighscore", this ); }

                UnityEngine.PlayerPrefs.DeleteKey(this._highscoreKey);
                this._highscore = 0;
                this.UpdateHighscoreUI();
            },
            /*GameManager.DebugResetHighscore end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*RimTouch start.*/
    Bridge.define("RimTouch", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _detector: null
        },
        methods: {
            /*RimTouch.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "RimTouch#OnCollisionEnter", this ); }

                if (collision.collider.CompareTag("ballTag")) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this._detector, null)) {
                        this._detector.MarkRimTouched(collision.collider.gameObject);
                    }
                }
            },
            /*RimTouch.OnCollisionEnter end.*/

            /*RimTouch.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "RimTouch#OnTriggerEnter", this ); }

                if (other.CompareTag("ballTag") && UnityEngine.MonoBehaviour.op_Inequality(this._detector, null)) {
                    this._detector.MarkRimTouched(other.gameObject);
                }
            },
            /*RimTouch.OnTriggerEnter end.*/


        }
    });
    /*RimTouch end.*/

    /*RotateRing start.*/
    Bridge.define("RotateRing", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _rotationSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RotateRing#init", this ); }

                this._rotationSpeed = 50.0;
            }
        },
        methods: {
            /*RotateRing.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RotateRing#Update", this ); }

                this.transform.Rotate(0, 0, -this._rotationSpeed * UnityEngine.Time.deltaTime);
            },
            /*RotateRing.Update end.*/


        }
    });
    /*RotateRing end.*/

    /*UIMovement start.*/
    Bridge.define("UIMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveDistance: 0,
            speed: 0,
            rectTransform: null,
            originalPosition: null,
            timeOffset: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UIMovement#init", this ); }

                this.originalPosition = new UnityEngine.Vector2();
                this.moveDistance = 20.0;
                this.speed = 2.0;
            }
        },
        methods: {
            /*UIMovement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UIMovement#Start", this ); }

                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this.originalPosition = this.rectTransform.anchoredPosition.$clone();
                this.timeOffset = UnityEngine.Random.Range$1(0.0, 6.28318548);
            },
            /*UIMovement.Start end.*/

            /*UIMovement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UIMovement#Update", this ); }

                var newX = this.originalPosition.x + Math.sin(UnityEngine.Time.unscaledTime * this.speed + this.timeOffset) * this.moveDistance;
                this.rectTransform.anchoredPosition = new pc.Vec2( newX, this.originalPosition.y );
            },
            /*UIMovement.Update end.*/


        }
    });
    /*UIMovement end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","UnityEngine.EventSystems","System.Collections","System.Collections.Generic","UnityEngine.UI","TMPro"];

    /*BallDragAndThrow start.*/
    $m("BallDragAndThrow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BeginDrag","t":8,"pi":[{"n":"screenPos","pt":$n[0].Vector2,"ps":0}],"sn":"BeginDrag","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"Cleanup","t":8,"sn":"Cleanup","rt":$n[1].Void},{"a":1,"n":"ContinueDrag","t":8,"pi":[{"n":"screenPos","pt":$n[0].Vector2,"ps":0}],"sn":"ContinueDrag","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"EndDrag","t":8,"sn":"EndDrag","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[0].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballLayer","t":4,"rt":$n[0].LayerMask,"sn":"_ballLayer"},{"at":[new UnityEngine.HeaderAttribute("Setup"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_camera","t":4,"rt":$n[0].Camera,"sn":"_camera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_clickSound","t":4,"rt":$n[0].AudioClip,"sn":"_clickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragSensitivity","t":4,"rt":$n[1].Single,"sn":"_dragSensitivity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_dragStartScreenPos","t":4,"rt":$n[0].Vector3,"sn":"_dragStartScreenPos"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.TooltipAttribute("How much the drag force is scaled down overall"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gentleFactor","t":4,"rt":$n[1].Single,"sn":"_gentleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_initialScreenPos","t":4,"rt":$n[0].Vector3,"sn":"_initialScreenPos"},{"at":[new UnityEngine.HeaderAttribute("Launch Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxLaunchForce","t":4,"rt":$n[1].Single,"sn":"_maxLaunchForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_releaseSound","t":4,"rt":$n[0].AudioClip,"sn":"_releaseSound"},{"a":1,"n":"_selectedBall","t":4,"rt":$n[0].Transform,"sn":"_selectedBall"},{"a":1,"n":"_selectedRb","t":4,"rt":$n[0].Rigidbody,"sn":"_selectedRb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_touchTrail","t":4,"rt":$n[0].GameObject,"sn":"_touchTrail"},{"at":[new UnityEngine.TooltipAttribute("How much vertical drag maps to vertical throw"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_upwardBiasFactor","t":4,"rt":$n[1].Single,"sn":"_upwardBiasFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallDragAndThrow end.*/

    /*BallItem start.*/
    $m("BallItem", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Transform)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"SetSelected","t":8,"pi":[{"n":"selected","pt":$n[1].Boolean,"ps":0}],"sn":"SetSelected","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"_baseScale","t":4,"rt":$n[0].Vector3,"sn":"_baseScale"},{"at":[new UnityEngine.TooltipAttribute("Assign the MeshRenderer for the ball (visual).")],"a":2,"n":"meshRenderer","t":4,"rt":$n[0].MeshRenderer,"sn":"meshRenderer"},{"at":[new UnityEngine.TooltipAttribute("Optional: an object (duplicate mesh or UI ring) that will be activated when this ball is the center/selected.")],"a":2,"n":"outlineObject","t":4,"rt":$n[0].GameObject,"sn":"outlineObject"},{"at":[new UnityEngine.TooltipAttribute("Scale when selected (visual pop).")],"a":2,"n":"selectedScale","t":4,"rt":$n[1].Single,"sn":"selectedScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallItem end.*/

    /*BallWheelController start.*/
    $m("BallWheelController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplySelectionVisuals","t":8,"sn":"ApplySelectionVisuals","rt":$n[1].Void},{"a":1,"n":"ArrangeItems","t":8,"sn":"ArrangeItems","rt":$n[1].Void},{"a":2,"n":"CollectItems","t":8,"sn":"CollectItems","rt":$n[1].Void},{"a":2,"n":"GetSelectedIndex","t":8,"sn":"GetSelectedIndex","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetSelectedTransform","t":8,"sn":"GetSelectedTransform","rt":$n[0].Transform},{"a":1,"n":"OnConfirm","t":8,"sn":"OnConfirm","rt":$n[1].Void},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[1].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"OnEndDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnEndDrag","rt":$n[1].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[2].PointerEventData]},{"a":1,"n":"OnRandomPick","t":8,"sn":"OnRandomPick","rt":$n[1].Void},{"a":1,"n":"SmoothRotateTo","t":8,"pi":[{"n":"targetRotation","pt":$n[1].Single,"ps":0}],"sn":"SmoothRotateTo","rt":$n[3].IEnumerator,"p":[$n[1].Single]},{"a":1,"n":"SnapToNearest","t":8,"sn":"SnapToNearest","rt":$n[1].Void},{"a":1,"n":"SpinToIndexThenSnapAndConfirm","t":8,"pi":[{"n":"desiredRotation","pt":$n[1].Single,"ps":0},{"n":"finalIndex","pt":$n[1].Int32,"ps":1}],"sn":"SpinToIndexThenSnapAndConfirm","rt":$n[3].IEnumerator,"p":[$n[1].Single,$n[1].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateAllSelection","t":8,"sn":"UpdateAllSelection","rt":$n[1].Void},{"a":1,"n":"_anglePerItem","t":4,"rt":$n[1].Single,"sn":"_anglePerItem","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_angularVelocity","t":4,"rt":$n[1].Single,"sn":"_angularVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_count","t":4,"rt":$n[1].Int32,"sn":"_count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_dragging","t":4,"rt":$n[1].Boolean,"sn":"_dragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_itemScripts","t":4,"rt":$n[4].List$1(BallItem),"sn":"_itemScripts"},{"a":1,"n":"_items","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"_items"},{"a":1,"n":"_lastDragTime","t":4,"rt":$n[1].Single,"sn":"_lastDragTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_lastPointerPos","t":4,"rt":$n[0].Vector2,"sn":"_lastPointerPos"},{"a":1,"n":"_rotationDeg","t":4,"rt":$n[1].Single,"sn":"_rotationDeg","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_selectedIndex","t":4,"rt":$n[1].Int32,"sn":"_selectedIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Spin Physics")],"a":2,"n":"angularFriction","t":4,"rt":$n[1].Single,"sn":"angularFriction","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minFlingVelocity","t":4,"rt":$n[1].Single,"sn":"minFlingVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"okButton","t":4,"rt":$n[5].Button,"sn":"okButton"},{"at":[new UnityEngine.HeaderAttribute("Layout")],"a":2,"n":"radius","t":4,"rt":$n[1].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"randomButton","t":4,"rt":$n[5].Button,"sn":"randomButton"},{"a":2,"n":"snapSpeed","t":4,"rt":$n[1].Single,"sn":"snapSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startAngleDeg","t":4,"rt":$n[1].Single,"sn":"startAngleDeg","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("References")],"a":2,"n":"wheelContainer","t":4,"rt":$n[0].Transform,"sn":"wheelContainer"},{"a":2,"n":"zOffset","t":4,"rt":$n[1].Single,"sn":"zOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zRotationPerItem","t":4,"rt":$n[1].Single,"sn":"zRotationPerItem","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallWheelController end.*/

    /*BasketRingMover start.*/
    $m("BasketRingMover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"StartMovement","t":8,"sn":"StartMovement","rt":$n[1].Void},{"a":2,"n":"StopMovement","t":8,"sn":"StopMovement","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"_moving","t":4,"rt":$n[1].Boolean,"sn":"_moving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_startTime","t":4,"rt":$n[1].Single,"sn":"_startTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Local X max (right)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxX","t":4,"rt":$n[1].Single,"sn":"maxX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Local X min (left)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minX","t":4,"rt":$n[1].Single,"sn":"minX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Transform of the ring that will be moved. If null, the component's transform will be used."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ringTransform","t":4,"rt":$n[0].Transform,"sn":"ringTransform"},{"at":[new UnityEngine.TooltipAttribute("Speed (how fast it travels back and forth)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BasketRingMover end.*/

    /*DunkDetector start.*/
    $m("DunkDetector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"MarkRimTouched","t":8,"pi":[{"n":"ball","pt":$n[0].GameObject,"ps":0}],"sn":"MarkRimTouched","rt":$n[1].Void,"p":[$n[0].GameObject]},{"a":1,"n":"RegisterDunk","t":8,"pi":[{"n":"ball","pt":$n[0].GameObject,"ps":0},{"n":"perfect","pt":$n[1].Boolean,"ps":1}],"sn":"RegisterDunk","rt":$n[1].Void,"p":[$n[0].GameObject,$n[1].Boolean]},{"a":1,"n":"RemoveScoreFlagAfter","t":8,"pi":[{"n":"ball","pt":$n[0].GameObject,"ps":0},{"n":"delay","pt":$n[1].Single,"ps":1}],"sn":"RemoveScoreFlagAfter","rt":$n[3].IEnumerator,"p":[$n[0].GameObject,$n[1].Single]},{"a":2,"n":"TriggerEnter","t":8,"pi":[{"n":"isTop","pt":$n[1].Boolean,"ps":0},{"n":"other","pt":$n[0].Collider,"ps":1}],"sn":"TriggerEnter","rt":$n[1].Void,"p":[$n[1].Boolean,$n[0].Collider]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.HeaderAttribute("Timing"),new UnityEngine.TooltipAttribute("Time between top and bottom trigger to count as dunk"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_acceptWindow","t":4,"rt":$n[1].Single,"sn":"_acceptWindow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_alreadyScored","t":4,"rt":$n[4].HashSet$1(UnityEngine.GameObject),"sn":"_alreadyScored","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[0].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.TooltipAttribute("How often to clean up old entries")],"a":2,"n":"_cleanupInterval","t":4,"rt":$n[1].Single,"sn":"_cleanupInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Effects"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dunkParticles","t":4,"rt":$n[0].ParticleSystem,"sn":"_dunkParticles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dunkSound","t":4,"rt":$n[0].AudioClip,"sn":"_dunkSound"},{"a":1,"n":"_lastCleanup","t":4,"rt":$n[1].Single,"sn":"_lastCleanup","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Scoring"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_normalDunkScore","t":4,"rt":$n[1].Int32,"sn":"_normalDunkScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectDunkParticles","t":4,"rt":$n[0].ParticleSystem,"sn":"_perfectDunkParticles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectDunkScore","t":4,"rt":$n[1].Int32,"sn":"_perfectDunkScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectDunkSound","t":4,"rt":$n[0].AudioClip,"sn":"_perfectDunkSound"},{"a":1,"n":"_rimTouched","t":4,"rt":$n[4].HashSet$1(UnityEngine.GameObject),"sn":"_rimTouched","ro":true},{"a":1,"n":"_topEnteredAt","t":4,"rt":$n[4].Dictionary$2(UnityEngine.GameObject,System.Single),"sn":"_topEnteredAt","ro":true}]}; }, $n);
    /*DunkDetector end.*/

    /*DunkTriggerRelay start.*/
    $m("DunkTriggerRelay", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[0].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[0].Collider]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_detector","t":4,"rt":DunkDetector,"sn":"_detector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_isTop","t":4,"rt":$n[1].Boolean,"sn":"_isTop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DunkTriggerRelay end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddScore","t":8,"pi":[{"n":"points","pt":$n[1].Int32,"ps":0},{"n":"perfect","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"AddScore","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"ApplySelectedBall","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"ApplySelectedBall","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"at":[new UnityEngine.ContextMenu.ctor("Debug: End Game")],"a":2,"n":"DebugEndGame","t":8,"sn":"DebugEndGame","rt":$n[1].Void},{"at":[new UnityEngine.ContextMenu.ctor("Debug: Reset Highscore")],"a":2,"n":"DebugResetHighscore","t":8,"sn":"DebugResetHighscore","rt":$n[1].Void},{"at":[new UnityEngine.ContextMenu.ctor("Debug: Start Game")],"a":2,"n":"DebugStartGame","t":8,"sn":"DebugStartGame","rt":$n[1].Void},{"a":2,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[1].Void},{"a":1,"n":"GameTimerCoroutine","t":8,"sn":"GameTimerCoroutine","rt":$n[3].IEnumerator},{"a":2,"n":"GetDifficultyMultiplier","t":8,"sn":"GetDifficultyMultiplier","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"HideBallSelection","t":8,"pi":[{"n":"confirmed","dv":false,"o":true,"pt":$n[1].Boolean,"ps":0},{"n":"selectedIndex","dv":-1,"o":true,"pt":$n[1].Int32,"ps":1}],"sn":"HideBallSelection","rt":$n[1].Void,"p":[$n[1].Boolean,$n[1].Int32]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"PerfectPopupCoroutine","t":8,"sn":"PerfectPopupCoroutine","rt":$n[3].IEnumerator},{"a":1,"n":"PlayButtonClickSound","t":8,"sn":"PlayButtonClickSound","rt":$n[1].Void},{"a":1,"n":"SetRingMovement","t":8,"pi":[{"n":"active","pt":$n[1].Boolean,"ps":0}],"sn":"SetRingMovement","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"SetTextSafe","t":8,"pi":[{"n":"uiText","pt":$n[1].Object,"ps":0},{"n":"text","pt":$n[1].String,"ps":1}],"sn":"SetTextSafe","rt":$n[1].Void,"p":[$n[1].Object,$n[1].String]},{"a":2,"n":"ShowBallSelection","t":8,"sn":"ShowBallSelection","rt":$n[1].Void},{"a":1,"n":"ShowPerfectPopup","t":8,"sn":"ShowPerfectPopup","rt":$n[1].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[1].Void},{"a":1,"n":"ToggleRingMovement","t":8,"sn":"ToggleRingMovement","rt":$n[1].Void},{"a":1,"n":"UpdateHighscoreUI","t":8,"sn":"UpdateHighscoreUI","rt":$n[1].Void},{"a":1,"n":"UpdateScoreUI","t":8,"sn":"UpdateScoreUI","rt":$n[1].Void},{"a":1,"n":"UpdateTimeUI","t":8,"sn":"UpdateTimeUI","rt":$n[1].Void},{"a":2,"n":"_Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get__Instance","t":8,"rt":GameManager,"fg":"_Instance","is":true},"s":{"a":1,"n":"set__Instance","t":8,"p":[GameManager],"rt":$n[1].Void,"fs":"_Instance","is":true},"fn":"_Instance"},{"a":2,"n":"_highscore","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get__highscore","t":8,"rt":$n[1].Int32,"fg":"_highscore","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set__highscore","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"_highscore"},"fn":"_highscore"},{"a":2,"n":"_isRunning","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get__isRunning","t":8,"rt":$n[1].Boolean,"fg":"_isRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set__isRunning","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"_isRunning"},"fn":"_isRunning"},{"a":2,"n":"_score","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get__score","t":8,"rt":$n[1].Int32,"fg":"_score","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set__score","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"_score"},"fn":"_score"},{"a":2,"n":"_scoreMultiplier","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get__scoreMultiplier","t":8,"rt":$n[1].Single,"fg":"_scoreMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set__scoreMultiplier","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"_scoreMultiplier"},"fn":"_scoreMultiplier"},{"a":2,"n":"_timeRemaining","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get__timeRemaining","t":8,"rt":$n[1].Single,"fg":"_timeRemaining","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set__timeRemaining","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"_timeRemaining"},"fn":"_timeRemaining"},{"a":1,"n":"__Property__Initializer___highscore","t":4,"rt":$n[1].Int32,"sn":"__Property__Initializer___highscore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"__Property__Initializer___score","t":4,"rt":$n[1].Int32,"sn":"__Property__Initializer___score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"__Property__Initializer___scoreMultiplier","t":4,"rt":$n[1].Single,"sn":"__Property__Initializer___scoreMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Sound Effects"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[0].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballSelectionPanel","t":4,"rt":$n[0].GameObject,"sn":"_ballSelectionPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballWheelController","t":4,"rt":BallWheelController,"sn":"_ballWheelController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_basketRingMover","t":4,"rt":BasketRingMover,"sn":"_basketRingMover"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buttonClickSound","t":4,"rt":$n[0].AudioClip,"sn":"_buttonClickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_endPanel","t":4,"rt":$n[0].GameObject,"sn":"_endPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_endScoreText","t":4,"rt":$n[6].TMP_Text,"sn":"_endScoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameCompleteSound","t":4,"rt":$n[0].AudioClip,"sn":"_gameCompleteSound"},{"at":[new UnityEngine.HeaderAttribute("Game settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameDuration","t":4,"rt":$n[1].Single,"sn":"_gameDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("UI for the Machine"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_highestText","t":4,"rt":$n[6].TMP_Text,"sn":"_highestText"},{"at":[new UnityEngine.HeaderAttribute("Highscore"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_highscoreKey","t":4,"rt":$n[1].String,"sn":"_highscoreKey"},{"a":1,"n":"_isPausedByBallSelection","t":4,"rt":$n[1].Boolean,"sn":"_isPausedByBallSelection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Ring movement "),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveRingButton","t":4,"rt":$n[5].Button,"sn":"_moveRingButton"},{"at":[new UnityEngine.HeaderAttribute("Ball selection UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_openBallSelectButton","t":4,"rt":$n[5].Button,"sn":"_openBallSelectButton"},{"a":1,"n":"_perfectCoroutine","t":4,"rt":$n[0].Coroutine,"sn":"_perfectCoroutine"},{"at":[new UnityEngine.HeaderAttribute("Perfect dunk popup"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectPopup","t":4,"rt":$n[0].GameObject,"sn":"_perfectPopup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectPopupDuration","t":4,"rt":$n[1].Single,"sn":"_perfectPopupDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_prevTimeScale","t":4,"rt":$n[1].Single,"sn":"_prevTimeScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_retryButton","t":4,"rt":$n[5].Button,"sn":"_retryButton"},{"a":1,"n":"_ringMovementActive","t":4,"rt":$n[1].Boolean,"sn":"_ringMovementActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scoreText","t":4,"rt":$n[6].TMP_Text,"sn":"_scoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_startButton","t":4,"rt":$n[5].Button,"sn":"_startButton"},{"at":[new UnityEngine.HeaderAttribute("Start/End Screens"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_startPanel","t":4,"rt":$n[0].GameObject,"sn":"_startPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_timeText","t":4,"rt":$n[6].TMP_Text,"sn":"_timeText"},{"a":1,"n":"_timerCoroutine","t":4,"rt":$n[0].Coroutine,"sn":"_timerCoroutine"},{"at":[new UnityEngine.TooltipAttribute("Curve 0..1 over normalized time (0=start,1=end) used to compute difficulty multiplier"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"difficultyCurve","t":4,"rt":pc.AnimationCurve,"sn":"difficultyCurve"},{"a":2,"n":"OnDifficultyChanged","t":2,"ad":{"a":2,"n":"add_OnDifficultyChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnDifficultyChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnDifficultyChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnDifficultyChanged","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnGameEnded","t":2,"ad":{"a":2,"n":"add_OnGameEnded","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameEnded","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameEnded","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameEnded","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnGameStarted","t":2,"ad":{"a":2,"n":"add_OnGameStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameStarted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameStarted","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnScoreChanged","t":2,"ad":{"a":2,"n":"add_OnScoreChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnScoreChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnScoreChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnScoreChanged","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnTimeChanged","t":2,"ad":{"a":2,"n":"add_OnTimeChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTimeChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTimeChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTimeChanged","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<_Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"_Instance"},{"a":1,"backing":true,"n":"<_highscore>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"_highscore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<_isRunning>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"_isRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<_score>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"_score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<_scoreMultiplier>k__BackingField","t":4,"rt":$n[1].Single,"sn":"_scoreMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<_timeRemaining>k__BackingField","t":4,"rt":$n[1].Single,"sn":"_timeRemaining","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GameManager end.*/

    /*RimTouch start.*/
    $m("RimTouch", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[0].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[1].Void,"p":[$n[0].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[0].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[0].Collider]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_detector","t":4,"rt":DunkDetector,"sn":"_detector"}]}; }, $n);
    /*RimTouch end.*/

    /*BallCollisionSound start.*/
    $m("BallCollisionSound", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[0].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[1].Void,"p":[$n[0].Collision]},{"at":[new UnityEngine.HeaderAttribute("Collision Sound Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[0].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collisionSound","t":4,"rt":$n[0].AudioClip,"sn":"_collisionSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_minImpactSpeed","t":4,"rt":$n[1].Single,"sn":"_minImpactSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"_volumeScale","t":4,"rt":$n[1].Single,"sn":"_volumeScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallCollisionSound end.*/

    /*RotateRing start.*/
    $m("RotateRing", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotationSpeed","t":4,"rt":$n[1].Single,"sn":"_rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RotateRing end.*/

    /*UIMovement start.*/
    $m("UIMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDistance","t":4,"rt":$n[1].Single,"sn":"moveDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalPosition","t":4,"rt":$n[0].Vector2,"sn":"originalPosition"},{"a":1,"n":"rectTransform","t":4,"rt":$n[0].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeOffset","t":4,"rt":$n[1].Single,"sn":"timeOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UIMovement end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
