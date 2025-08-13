var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSpring' )
  var i543 = data
  i542.spring = i543[0]
  i542.damper = i543[1]
  i542.targetPosition = i543[2]
  return i542
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor' )
  var i545 = data
  i544.m_TargetVelocity = i545[0]
  i544.m_Force = i545[1]
  i544.m_FreeSpin = i545[2]
  return i544
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointLimits' )
  var i547 = data
  i546.m_Min = i547[0]
  i546.m_Max = i547[1]
  i546.m_Bounciness = i547[2]
  i546.m_BounceMinVelocity = i547[3]
  i546.m_ContactDistance = i547[4]
  i546.minBounce = i547[5]
  i546.maxBounce = i547[6]
  return i546
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointDrive' )
  var i549 = data
  i548.m_PositionSpring = i549[0]
  i548.m_PositionDamper = i549[1]
  i548.m_MaximumForce = i549[2]
  i548.m_UseAcceleration = i549[3]
  return i548
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i551 = data
  i550.m_Spring = i551[0]
  i550.m_Damper = i551[1]
  return i550
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i553 = data
  i552.m_Limit = i553[0]
  i552.m_Bounciness = i553[1]
  i552.m_ContactDistance = i553[2]
  return i552
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i555 = data
  i554.m_ExtremumSlip = i555[0]
  i554.m_ExtremumValue = i555[1]
  i554.m_AsymptoteSlip = i555[2]
  i554.m_AsymptoteValue = i555[3]
  i554.m_Stiffness = i555[4]
  return i554
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i557 = data
  i556.m_LowerAngle = i557[0]
  i556.m_UpperAngle = i557[1]
  return i556
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i559 = data
  i558.m_MotorSpeed = i559[0]
  i558.m_MaximumMotorTorque = i559[1]
  return i558
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i561 = data
  i560.m_DampingRatio = i561[0]
  i560.m_Frequency = i561[1]
  i560.m_Angle = i561[2]
  return i560
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i563 = data
  i562.m_LowerTranslation = i563[0]
  i562.m_UpperTranslation = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i564 = root || new pc.UnityMaterial()
  var i565 = data
  i564.name = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'shader')
  i564.renderQueue = i565[3]
  i564.enableInstancing = !!i565[4]
  var i567 = i565[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i567[i + 0]) );
  }
  i564.floatParameters = i566
  var i569 = i565[6]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i569[i + 0]) );
  }
  i564.colorParameters = i568
  var i571 = i565[7]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i571[i + 0]) );
  }
  i564.vectorParameters = i570
  var i573 = i565[8]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i573[i + 0]) );
  }
  i564.textureParameters = i572
  var i575 = i565[9]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i575[i + 0]) );
  }
  i564.materialFlags = i574
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i583 = data
  i582.name = i583[0]
  i582.value = new pc.Color(i583[1], i583[2], i583[3], i583[4])
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i587 = data
  i586.name = i587[0]
  i586.value = new pc.Vec4( i587[1], i587[2], i587[3], i587[4] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i591 = data
  i590.name = i591[0]
  request.r(i591[1], i591[2], 0, i590, 'value')
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i595 = data
  i594.name = i595[0]
  i594.enabled = !!i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i597 = data
  i596.name = i597[0]
  i596.halfPrecision = !!i597[1]
  i596.useUInt32IndexFormat = !!i597[2]
  i596.vertexCount = i597[3]
  i596.aabb = i597[4]
  var i599 = i597[5]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( !!i599[i + 0] );
  }
  i596.streams = i598
  i596.vertices = i597[6]
  var i601 = i597[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i601[i + 0]) );
  }
  i596.subMeshes = i600
  var i603 = i597[8]
  var i602 = []
  for(var i = 0; i < i603.length; i += 16) {
    i602.push( new pc.Mat4().setData(i603[i + 0], i603[i + 1], i603[i + 2], i603[i + 3],  i603[i + 4], i603[i + 5], i603[i + 6], i603[i + 7],  i603[i + 8], i603[i + 9], i603[i + 10], i603[i + 11],  i603[i + 12], i603[i + 13], i603[i + 14], i603[i + 15]) );
  }
  i596.bindposes = i602
  var i605 = i597[9]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i605[i + 0]) );
  }
  i596.blendShapes = i604
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i611 = data
  i610.triangles = i611[0]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i617 = data
  i616.name = i617[0]
  var i619 = i617[1]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i619[i + 0]) );
  }
  i616.frames = i618
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i621 = data
  i620.name = i621[0]
  i620.width = i621[1]
  i620.height = i621[2]
  i620.mipmapCount = i621[3]
  i620.anisoLevel = i621[4]
  i620.filterMode = i621[5]
  i620.hdr = !!i621[6]
  i620.format = i621[7]
  i620.wrapMode = i621[8]
  i620.alphaIsTransparency = !!i621[9]
  i620.alphaSource = i621[10]
  i620.graphicsFormat = i621[11]
  i620.sRGBTexture = !!i621[12]
  i620.desiredColorSpace = i621[13]
  i620.wrapU = i621[14]
  i620.wrapV = i621[15]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i623 = data
  i622.position = new pc.Vec3( i623[0], i623[1], i623[2] )
  i622.scale = new pc.Vec3( i623[3], i623[4], i623[5] )
  i622.rotation = new pc.Quat(i623[6], i623[7], i623[8], i623[9])
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'sharedMesh')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'additionalVertexStreams')
  i626.enabled = !!i627[2]
  request.r(i627[3], i627[4], 0, i626, 'sharedMaterial')
  var i629 = i627[5]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.sharedMaterials = i628
  i626.receiveShadows = !!i627[6]
  i626.shadowCastingMode = i627[7]
  i626.sortingLayerID = i627[8]
  i626.sortingOrder = i627[9]
  i626.lightmapIndex = i627[10]
  i626.lightmapSceneIndex = i627[11]
  i626.lightmapScaleOffset = new pc.Vec4( i627[12], i627[13], i627[14], i627[15] )
  i626.lightProbeUsage = i627[16]
  i626.reflectionProbeUsage = i627[17]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i633 = data
  i632.name = i633[0]
  i632.tagId = i633[1]
  i632.enabled = !!i633[2]
  i632.isStatic = !!i633[3]
  i632.layer = i633[4]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i635 = data
  i634.name = i635[0]
  i634.atlasId = i635[1]
  i634.mipmapCount = i635[2]
  i634.hdr = !!i635[3]
  i634.size = i635[4]
  i634.anisoLevel = i635[5]
  i634.filterMode = i635[6]
  var i637 = i635[7]
  var i636 = []
  for(var i = 0; i < i637.length; i += 4) {
    i636.push( UnityEngine.Rect.MinMaxRect(i637[i + 0], i637[i + 1], i637[i + 2], i637[i + 3]) );
  }
  i634.rects = i636
  i634.wrapU = i635[8]
  i634.wrapV = i635[9]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i641 = data
  i640.name = i641[0]
  i640.index = i641[1]
  i640.startup = !!i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i643 = data
  i642.center = new pc.Vec3( i643[0], i643[1], i643[2] )
  i642.size = new pc.Vec3( i643[3], i643[4], i643[5] )
  i642.enabled = !!i643[6]
  i642.isTrigger = !!i643[7]
  request.r(i643[8], i643[9], 0, i642, 'material')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i645 = data
  i644.enabled = !!i645[0]
  i644.type = i645[1]
  i644.color = new pc.Color(i645[2], i645[3], i645[4], i645[5])
  i644.cullingMask = i645[6]
  i644.intensity = i645[7]
  i644.range = i645[8]
  i644.spotAngle = i645[9]
  i644.shadows = i645[10]
  i644.shadowNormalBias = i645[11]
  i644.shadowBias = i645[12]
  i644.shadowStrength = i645[13]
  i644.shadowResolution = i645[14]
  i644.lightmapBakeType = i645[15]
  i644.renderMode = i645[16]
  request.r(i645[17], i645[18], 0, i644, 'cookie')
  i644.cookieSize = i645[19]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.aspect = i647[1]
  i646.orthographic = !!i647[2]
  i646.orthographicSize = i647[3]
  i646.backgroundColor = new pc.Color(i647[4], i647[5], i647[6], i647[7])
  i646.nearClipPlane = i647[8]
  i646.farClipPlane = i647[9]
  i646.fieldOfView = i647[10]
  i646.depth = i647[11]
  i646.clearFlags = i647[12]
  i646.cullingMask = i647[13]
  i646.rect = i647[14]
  request.r(i647[15], i647[16], 0, i646, 'targetTexture')
  i646.usePhysicalProperties = !!i647[17]
  i646.focalLength = i647[18]
  i646.sensorSize = new pc.Vec2( i647[19], i647[20] )
  i646.lensShift = new pc.Vec2( i647[21], i647[22] )
  i646.gateFit = i647[23]
  i646.commandBufferCount = i647[24]
  i646.cameraType = i647[25]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i649 = data
  i648.enabled = !!i649[0]
  i648.isTrigger = !!i649[1]
  request.r(i649[2], i649[3], 0, i648, 'material')
  i648.center = new pc.Vec3( i649[4], i649[5], i649[6] )
  i648.radius = i649[7]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i651 = data
  i650.mass = i651[0]
  i650.drag = i651[1]
  i650.angularDrag = i651[2]
  i650.useGravity = !!i651[3]
  i650.isKinematic = !!i651[4]
  i650.constraints = i651[5]
  i650.maxAngularVelocity = i651[6]
  i650.collisionDetectionMode = i651[7]
  i650.interpolation = i651[8]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i653 = data
  i652.enabled = !!i653[0]
  request.r(i653[1], i653[2], 0, i652, 'sharedMaterial')
  var i655 = i653[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.sharedMaterials = i654
  i652.receiveShadows = !!i653[4]
  i652.shadowCastingMode = i653[5]
  i652.sortingLayerID = i653[6]
  i652.sortingOrder = i653[7]
  i652.lightmapIndex = i653[8]
  i652.lightmapSceneIndex = i653[9]
  i652.lightmapScaleOffset = new pc.Vec4( i653[10], i653[11], i653[12], i653[13] )
  i652.lightProbeUsage = i653[14]
  i652.reflectionProbeUsage = i653[15]
  var i657 = i653[16]
  var i656 = []
  for(var i = 0; i < i657.length; i += 3) {
    i656.push( new pc.Vec3( i657[i + 0], i657[i + 1], i657[i + 2] ) );
  }
  i652.positions = i656
  i652.positionCount = i653[17]
  i652.time = i653[18]
  i652.startWidth = i653[19]
  i652.endWidth = i653[20]
  i652.widthMultiplier = i653[21]
  i652.autodestruct = !!i653[22]
  i652.emitting = !!i653[23]
  i652.numCornerVertices = i653[24]
  i652.numCapVertices = i653[25]
  i652.minVertexDistance = i653[26]
  i652.colorGradient = i653[27] ? new pc.ColorGradient(i653[27][0], i653[27][1], i653[27][2]) : null
  i652.startColor = new pc.Color(i653[28], i653[29], i653[30], i653[31])
  i652.endColor = new pc.Color(i653[32], i653[33], i653[34], i653[35])
  i652.generateLightingData = !!i653[36]
  i652.textureMode = i653[37]
  i652.alignment = i653[38]
  i652.widthCurve = new pc.AnimationCurve( { keys_flow: i653[39] } )
  return i652
}

Deserializers["BallCollisionSound"] = function (request, data, root) {
  var i660 = root || request.c( 'BallCollisionSound' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, '_audioSource')
  request.r(i661[2], i661[3], 0, i660, '_collisionSound')
  i660._minImpactSpeed = i661[4]
  i660._volumeScale = i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'clip')
  request.r(i663[2], i663[3], 0, i662, 'outputAudioMixerGroup')
  i662.playOnAwake = !!i663[4]
  i662.loop = !!i663[5]
  i662.time = i663[6]
  i662.volume = i663[7]
  i662.pitch = i663[8]
  i662.enabled = !!i663[9]
  return i662
}

Deserializers["RotateRing"] = function (request, data, root) {
  var i664 = root || request.c( 'RotateRing' )
  var i665 = data
  i664._rotationSpeed = i665[0]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i667 = data
  i666.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i667[0], i666.main)
  i666.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i667[1], i666.colorBySpeed)
  i666.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i667[2], i666.colorOverLifetime)
  i666.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i667[3], i666.emission)
  i666.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i667[4], i666.rotationBySpeed)
  i666.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i667[5], i666.rotationOverLifetime)
  i666.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i667[6], i666.shape)
  i666.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i667[7], i666.sizeBySpeed)
  i666.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i667[8], i666.sizeOverLifetime)
  i666.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i667[9], i666.textureSheetAnimation)
  i666.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i667[10], i666.velocityOverLifetime)
  i666.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i667[11], i666.noise)
  i666.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i667[12], i666.inheritVelocity)
  i666.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i667[13], i666.forceOverLifetime)
  i666.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i667[14], i666.limitVelocityOverLifetime)
  i666.useAutoRandomSeed = !!i667[15]
  i666.randomSeed = i667[16]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemMain()
  var i669 = data
  i668.duration = i669[0]
  i668.loop = !!i669[1]
  i668.prewarm = !!i669[2]
  i668.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.startDelay)
  i668.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[4], i668.startLifetime)
  i668.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[5], i668.startSpeed)
  i668.startSize3D = !!i669[6]
  i668.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[7], i668.startSizeX)
  i668.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[8], i668.startSizeY)
  i668.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[9], i668.startSizeZ)
  i668.startRotation3D = !!i669[10]
  i668.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[11], i668.startRotationX)
  i668.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[12], i668.startRotationY)
  i668.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[13], i668.startRotationZ)
  i668.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i669[14], i668.startColor)
  i668.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[15], i668.gravityModifier)
  i668.simulationSpace = i669[16]
  request.r(i669[17], i669[18], 0, i668, 'customSimulationSpace')
  i668.simulationSpeed = i669[19]
  i668.useUnscaledTime = !!i669[20]
  i668.scalingMode = i669[21]
  i668.playOnAwake = !!i669[22]
  i668.maxParticles = i669[23]
  i668.emitterVelocityMode = i669[24]
  i668.stopAction = i669[25]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i670 = root || new pc.MinMaxCurve()
  var i671 = data
  i670.mode = i671[0]
  i670.curveMin = new pc.AnimationCurve( { keys_flow: i671[1] } )
  i670.curveMax = new pc.AnimationCurve( { keys_flow: i671[2] } )
  i670.curveMultiplier = i671[3]
  i670.constantMin = i671[4]
  i670.constantMax = i671[5]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i672 = root || new pc.MinMaxGradient()
  var i673 = data
  i672.mode = i673[0]
  i672.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i673[1], i672.gradientMin)
  i672.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i673[2], i672.gradientMax)
  i672.colorMin = new pc.Color(i673[3], i673[4], i673[5], i673[6])
  i672.colorMax = new pc.Color(i673[7], i673[8], i673[9], i673[10])
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i675 = data
  i674.mode = i675[0]
  var i677 = i675[1]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i677[i + 0]) );
  }
  i674.colorKeys = i676
  var i679 = i675[2]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i679[i + 0]) );
  }
  i674.alphaKeys = i678
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i683 = data
  i682.color = new pc.Color(i683[0], i683[1], i683[2], i683[3])
  i682.time = i683[4]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i687 = data
  i686.alpha = i687[0]
  i686.time = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemColorBySpeed()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i689[1], i688.color)
  i688.range = new pc.Vec2( i689[2], i689[3] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemColorOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i691[1], i690.color)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemEmitter()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.rateOverTime)
  i692.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.rateOverDistance)
  var i695 = i693[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i695[i + 0]) );
  }
  i692.bursts = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemBurst()
  var i699 = data
  i698.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[0], i698.count)
  i698.cycleCount = i699[1]
  i698.minCount = i699[2]
  i698.maxCount = i699[3]
  i698.repeatInterval = i699[4]
  i698.time = i699[5]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemRotationBySpeed()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[1], i700.x)
  i700.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.y)
  i700.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.z)
  i700.separateAxes = !!i701[4]
  i700.range = new pc.Vec2( i701[5], i701[6] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemRotationOverLifetime()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.x)
  i702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.y)
  i702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[3], i702.z)
  i702.separateAxes = !!i703[4]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemShape()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.shapeType = i705[1]
  i704.randomDirectionAmount = i705[2]
  i704.sphericalDirectionAmount = i705[3]
  i704.randomPositionAmount = i705[4]
  i704.alignToDirection = !!i705[5]
  i704.radius = i705[6]
  i704.radiusMode = i705[7]
  i704.radiusSpread = i705[8]
  i704.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[9], i704.radiusSpeed)
  i704.radiusThickness = i705[10]
  i704.angle = i705[11]
  i704.length = i705[12]
  i704.boxThickness = new pc.Vec3( i705[13], i705[14], i705[15] )
  i704.meshShapeType = i705[16]
  request.r(i705[17], i705[18], 0, i704, 'mesh')
  request.r(i705[19], i705[20], 0, i704, 'meshRenderer')
  request.r(i705[21], i705[22], 0, i704, 'skinnedMeshRenderer')
  i704.useMeshMaterialIndex = !!i705[23]
  i704.meshMaterialIndex = i705[24]
  i704.useMeshColors = !!i705[25]
  i704.normalOffset = i705[26]
  i704.arc = i705[27]
  i704.arcMode = i705[28]
  i704.arcSpread = i705[29]
  i704.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[30], i704.arcSpeed)
  i704.donutRadius = i705[31]
  i704.position = new pc.Vec3( i705[32], i705[33], i705[34] )
  i704.rotation = new pc.Vec3( i705[35], i705[36], i705[37] )
  i704.scale = new pc.Vec3( i705[38], i705[39], i705[40] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemSizeBySpeed()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[1], i706.x)
  i706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.y)
  i706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.z)
  i706.separateAxes = !!i707[4]
  i706.range = new pc.Vec2( i707[5], i707[6] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemSizeOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.separateAxes = !!i709[4]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.mode = i711[1]
  i710.animation = i711[2]
  i710.numTilesX = i711[3]
  i710.numTilesY = i711[4]
  i710.useRandomRow = !!i711[5]
  i710.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[6], i710.frameOverTime)
  i710.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[7], i710.startFrame)
  i710.cycleCount = i711[8]
  i710.rowIndex = i711[9]
  i710.flipU = i711[10]
  i710.flipV = i711[11]
  i710.spriteCount = i711[12]
  var i713 = i711[13]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.sprites = i712
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.x)
  i716.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.y)
  i716.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.z)
  i716.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.radial)
  i716.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[5], i716.speedModifier)
  i716.space = i717[6]
  i716.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[7], i716.orbitalX)
  i716.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[8], i716.orbitalY)
  i716.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[9], i716.orbitalZ)
  i716.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[10], i716.orbitalOffsetX)
  i716.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[11], i716.orbitalOffsetY)
  i716.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[12], i716.orbitalOffsetZ)
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemNoise()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.separateAxes = !!i719[1]
  i718.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.strengthX)
  i718.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.strengthY)
  i718.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[4], i718.strengthZ)
  i718.frequency = i719[5]
  i718.damping = !!i719[6]
  i718.octaveCount = i719[7]
  i718.octaveMultiplier = i719[8]
  i718.octaveScale = i719[9]
  i718.quality = i719[10]
  i718.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[11], i718.scrollSpeed)
  i718.scrollSpeedMultiplier = i719[12]
  i718.remapEnabled = !!i719[13]
  i718.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[14], i718.remapX)
  i718.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[15], i718.remapY)
  i718.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[16], i718.remapZ)
  i718.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[17], i718.positionAmount)
  i718.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[18], i718.rotationAmount)
  i718.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[19], i718.sizeAmount)
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemInheritVelocity()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.mode = i721[1]
  i720.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[2], i720.curve)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemForceOverLifetime()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[1], i722.x)
  i722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[2], i722.y)
  i722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[3], i722.z)
  i722.space = i723[4]
  i722.randomized = !!i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.limit)
  i724.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.limitX)
  i724.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.limitY)
  i724.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[4], i724.limitZ)
  i724.dampen = i725[5]
  i724.separateAxes = !!i725[6]
  i724.space = i725[7]
  i724.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[8], i724.drag)
  i724.multiplyDragByParticleSize = !!i725[9]
  i724.multiplyDragByParticleVelocity = !!i725[10]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i727 = data
  i726.enabled = !!i727[0]
  request.r(i727[1], i727[2], 0, i726, 'sharedMaterial')
  var i729 = i727[3]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.sharedMaterials = i728
  i726.receiveShadows = !!i727[4]
  i726.shadowCastingMode = i727[5]
  i726.sortingLayerID = i727[6]
  i726.sortingOrder = i727[7]
  i726.lightmapIndex = i727[8]
  i726.lightmapSceneIndex = i727[9]
  i726.lightmapScaleOffset = new pc.Vec4( i727[10], i727[11], i727[12], i727[13] )
  i726.lightProbeUsage = i727[14]
  i726.reflectionProbeUsage = i727[15]
  request.r(i727[16], i727[17], 0, i726, 'mesh')
  i726.meshCount = i727[18]
  i726.activeVertexStreamsCount = i727[19]
  i726.alignment = i727[20]
  i726.renderMode = i727[21]
  i726.sortMode = i727[22]
  i726.lengthScale = i727[23]
  i726.velocityScale = i727[24]
  i726.cameraVelocityScale = i727[25]
  i726.normalDirection = i727[26]
  i726.sortingFudge = i727[27]
  i726.minParticleSize = i727[28]
  i726.maxParticleSize = i727[29]
  i726.pivot = new pc.Vec3( i727[30], i727[31], i727[32] )
  request.r(i727[33], i727[34], 0, i726, 'trailMaterial')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i731 = data
  i730.useMotor = !!i731[0]
  i730.useLimits = !!i731[1]
  i730.useSpring = !!i731[2]
  i730.limits = request.d('UnityEngine.JointLimits', i731[3], i730.limits)
  i730.motor = request.d('UnityEngine.JointMotor', i731[4], i730.motor)
  i730.spring = request.d('UnityEngine.JointSpring', i731[5], i730.spring)
  request.r(i731[6], i731[7], 0, i730, 'connectedBody')
  i730.axis = new pc.Vec3( i731[8], i731[9], i731[10] )
  i730.anchor = new pc.Vec3( i731[11], i731[12], i731[13] )
  i730.connectedAnchor = new pc.Vec3( i731[14], i731[15], i731[16] )
  i730.autoConfigureConnectedAnchor = !!i731[17]
  i730.massScale = i731[18]
  i730.connectedMassScale = i731[19]
  i730.enableCollision = !!i731[20]
  i730.breakForce = i731[21]
  i730.breakTorque = i731[22]
  return i730
}

Deserializers["DunkDetector"] = function (request, data, root) {
  var i732 = root || request.c( 'DunkDetector' )
  var i733 = data
  i732._cleanupInterval = i733[0]
  i732._acceptWindow = i733[1]
  request.r(i733[2], i733[3], 0, i732, '_dunkParticles')
  request.r(i733[4], i733[5], 0, i732, '_perfectDunkParticles')
  request.r(i733[6], i733[7], 0, i732, '_audioSource')
  request.r(i733[8], i733[9], 0, i732, '_dunkSound')
  request.r(i733[10], i733[11], 0, i732, '_perfectDunkSound')
  i732._normalDunkScore = i733[12]
  i732._perfectDunkScore = i733[13]
  return i732
}

Deserializers["BasketRingMover"] = function (request, data, root) {
  var i734 = root || request.c( 'BasketRingMover' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'ringTransform')
  i734.minX = i735[2]
  i734.maxX = i735[3]
  i734.speed = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i737 = data
  i736.center = new pc.Vec3( i737[0], i737[1], i737[2] )
  i736.radius = i737[3]
  i736.height = i737[4]
  i736.direction = i737[5]
  i736.enabled = !!i737[6]
  i736.isTrigger = !!i737[7]
  request.r(i737[8], i737[9], 0, i736, 'material')
  return i736
}

Deserializers["RimTouch"] = function (request, data, root) {
  var i738 = root || request.c( 'RimTouch' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, '_detector')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i741 = data
  i740.enabled = !!i741[0]
  request.r(i741[1], i741[2], 0, i740, 'sharedMaterial')
  var i743 = i741[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.sharedMaterials = i742
  i740.receiveShadows = !!i741[4]
  i740.shadowCastingMode = i741[5]
  i740.sortingLayerID = i741[6]
  i740.sortingOrder = i741[7]
  i740.lightmapIndex = i741[8]
  i740.lightmapSceneIndex = i741[9]
  i740.lightmapScaleOffset = new pc.Vec4( i741[10], i741[11], i741[12], i741[13] )
  i740.lightProbeUsage = i741[14]
  i740.reflectionProbeUsage = i741[15]
  request.r(i741[16], i741[17], 0, i740, 'sharedMesh')
  var i745 = i741[18]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i740.bones = i744
  i740.updateWhenOffscreen = !!i741[19]
  i740.localBounds = i741[20]
  request.r(i741[21], i741[22], 0, i740, 'rootBone')
  var i747 = i741[23]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i747[i + 0]) );
  }
  i740.blendShapesWeights = i746
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i753 = data
  i752.weight = i753[0]
  return i752
}

Deserializers["DunkTriggerRelay"] = function (request, data, root) {
  var i754 = root || request.c( 'DunkTriggerRelay' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, '_detector')
  i754._isTop = !!i755[2]
  return i754
}

Deserializers["BallDragAndThrow"] = function (request, data, root) {
  var i756 = root || request.c( 'BallDragAndThrow' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, '_camera')
  i756._ballLayer = UnityEngine.LayerMask.FromIntegerValue( i757[2] )
  request.r(i757[3], i757[4], 0, i756, '_touchTrail')
  request.r(i757[5], i757[6], 0, i756, '_audioSource')
  request.r(i757[7], i757[8], 0, i756, '_clickSound')
  request.r(i757[9], i757[10], 0, i756, '_releaseSound')
  i756._maxLaunchForce = i757[11]
  i756._dragSensitivity = i757[12]
  i756._upwardBiasFactor = i757[13]
  i756._gentleFactor = i757[14]
  return i756
}

Deserializers["GameManager"] = function (request, data, root) {
  var i758 = root || request.c( 'GameManager' )
  var i759 = data
  i758._gameDuration = i759[0]
  request.r(i759[1], i759[2], 0, i758, '_highestText')
  request.r(i759[3], i759[4], 0, i758, '_timeText')
  request.r(i759[5], i759[6], 0, i758, '_scoreText')
  request.r(i759[7], i759[8], 0, i758, '_perfectPopup')
  i758._perfectPopupDuration = i759[9]
  i758._highscoreKey = i759[10]
  request.r(i759[11], i759[12], 0, i758, '_startPanel')
  request.r(i759[13], i759[14], 0, i758, '_endPanel')
  request.r(i759[15], i759[16], 0, i758, '_startButton')
  request.r(i759[17], i759[18], 0, i758, '_retryButton')
  request.r(i759[19], i759[20], 0, i758, '_endScoreText')
  request.r(i759[21], i759[22], 0, i758, '_moveRingButton')
  request.r(i759[23], i759[24], 0, i758, '_basketRingMover')
  request.r(i759[25], i759[26], 0, i758, '_openBallSelectButton')
  request.r(i759[27], i759[28], 0, i758, '_ballSelectionPanel')
  request.r(i759[29], i759[30], 0, i758, '_ballWheelController')
  request.r(i759[31], i759[32], 0, i758, '_audioSource')
  request.r(i759[33], i759[34], 0, i758, '_buttonClickSound')
  request.r(i759[35], i759[36], 0, i758, '_gameCompleteSound')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i761 = data
  i760.pivot = new pc.Vec2( i761[0], i761[1] )
  i760.anchorMin = new pc.Vec2( i761[2], i761[3] )
  i760.anchorMax = new pc.Vec2( i761[4], i761[5] )
  i760.sizeDelta = new pc.Vec2( i761[6], i761[7] )
  i760.anchoredPosition3D = new pc.Vec3( i761[8], i761[9], i761[10] )
  i760.rotation = new pc.Quat(i761[11], i761[12], i761[13], i761[14])
  i760.scale = new pc.Vec3( i761[15], i761[16], i761[17] )
  return i760
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TextMeshPro' )
  var i763 = data
  i762._SortingLayer = i763[0]
  i762._SortingLayerID = i763[1]
  i762._SortingOrder = i763[2]
  i762.m_hasFontAssetChanged = !!i763[3]
  request.r(i763[4], i763[5], 0, i762, 'm_renderer')
  i762.m_maskType = i763[6]
  i762.m_text = i763[7]
  i762.m_isRightToLeft = !!i763[8]
  request.r(i763[9], i763[10], 0, i762, 'm_fontAsset')
  request.r(i763[11], i763[12], 0, i762, 'm_sharedMaterial')
  var i765 = i763[13]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.m_fontSharedMaterials = i764
  request.r(i763[14], i763[15], 0, i762, 'm_fontMaterial')
  var i767 = i763[16]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i762.m_fontMaterials = i766
  i762.m_fontColor32 = UnityEngine.Color32.ConstructColor(i763[17], i763[18], i763[19], i763[20])
  i762.m_fontColor = new pc.Color(i763[21], i763[22], i763[23], i763[24])
  i762.m_enableVertexGradient = !!i763[25]
  i762.m_colorMode = i763[26]
  i762.m_fontColorGradient = request.d('TMPro.VertexGradient', i763[27], i762.m_fontColorGradient)
  request.r(i763[28], i763[29], 0, i762, 'm_fontColorGradientPreset')
  request.r(i763[30], i763[31], 0, i762, 'm_spriteAsset')
  i762.m_tintAllSprites = !!i763[32]
  request.r(i763[33], i763[34], 0, i762, 'm_StyleSheet')
  i762.m_TextStyleHashCode = i763[35]
  i762.m_overrideHtmlColors = !!i763[36]
  i762.m_faceColor = UnityEngine.Color32.ConstructColor(i763[37], i763[38], i763[39], i763[40])
  i762.m_fontSize = i763[41]
  i762.m_fontSizeBase = i763[42]
  i762.m_fontWeight = i763[43]
  i762.m_enableAutoSizing = !!i763[44]
  i762.m_fontSizeMin = i763[45]
  i762.m_fontSizeMax = i763[46]
  i762.m_fontStyle = i763[47]
  i762.m_HorizontalAlignment = i763[48]
  i762.m_VerticalAlignment = i763[49]
  i762.m_textAlignment = i763[50]
  i762.m_characterSpacing = i763[51]
  i762.m_wordSpacing = i763[52]
  i762.m_lineSpacing = i763[53]
  i762.m_lineSpacingMax = i763[54]
  i762.m_paragraphSpacing = i763[55]
  i762.m_charWidthMaxAdj = i763[56]
  i762.m_enableWordWrapping = !!i763[57]
  i762.m_wordWrappingRatios = i763[58]
  i762.m_overflowMode = i763[59]
  request.r(i763[60], i763[61], 0, i762, 'm_linkedTextComponent')
  request.r(i763[62], i763[63], 0, i762, 'parentLinkedComponent')
  i762.m_enableKerning = !!i763[64]
  i762.m_enableExtraPadding = !!i763[65]
  i762.checkPaddingRequired = !!i763[66]
  i762.m_isRichText = !!i763[67]
  i762.m_parseCtrlCharacters = !!i763[68]
  i762.m_isOrthographic = !!i763[69]
  i762.m_isCullingEnabled = !!i763[70]
  i762.m_horizontalMapping = i763[71]
  i762.m_verticalMapping = i763[72]
  i762.m_uvLineOffset = i763[73]
  i762.m_geometrySortingOrder = i763[74]
  i762.m_IsTextObjectScaleStatic = !!i763[75]
  i762.m_VertexBufferAutoSizeReduction = !!i763[76]
  i762.m_useMaxVisibleDescender = !!i763[77]
  i762.m_pageToDisplay = i763[78]
  i762.m_margin = new pc.Vec4( i763[79], i763[80], i763[81], i763[82] )
  i762.m_isUsingLegacyAnimationComponent = !!i763[83]
  i762.m_isVolumetricText = !!i763[84]
  request.r(i763[85], i763[86], 0, i762, 'm_Material')
  i762.m_Maskable = !!i763[87]
  i762.m_Color = new pc.Color(i763[88], i763[89], i763[90], i763[91])
  i762.m_RaycastTarget = !!i763[92]
  i762.m_RaycastPadding = new pc.Vec4( i763[93], i763[94], i763[95], i763[96] )
  return i762
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i768 = root || request.c( 'TMPro.VertexGradient' )
  var i769 = data
  i768.topLeft = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.topRight = new pc.Color(i769[4], i769[5], i769[6], i769[7])
  i768.bottomLeft = new pc.Color(i769[8], i769[9], i769[10], i769[11])
  i768.bottomRight = new pc.Color(i769[12], i769[13], i769[14], i769[15])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i771 = data
  i770.enabled = !!i771[0]
  i770.planeDistance = i771[1]
  i770.referencePixelsPerUnit = i771[2]
  i770.isFallbackOverlay = !!i771[3]
  i770.renderMode = i771[4]
  i770.renderOrder = i771[5]
  i770.sortingLayerName = i771[6]
  i770.sortingOrder = i771[7]
  i770.scaleFactor = i771[8]
  request.r(i771[9], i771[10], 0, i770, 'worldCamera')
  i770.overrideSorting = !!i771[11]
  i770.pixelPerfect = !!i771[12]
  i770.targetDisplay = i771[13]
  i770.overridePixelPerfect = !!i771[14]
  return i770
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i773 = data
  i772.m_UiScaleMode = i773[0]
  i772.m_ReferencePixelsPerUnit = i773[1]
  i772.m_ScaleFactor = i773[2]
  i772.m_ReferenceResolution = new pc.Vec2( i773[3], i773[4] )
  i772.m_ScreenMatchMode = i773[5]
  i772.m_MatchWidthOrHeight = i773[6]
  i772.m_PhysicalUnit = i773[7]
  i772.m_FallbackScreenDPI = i773[8]
  i772.m_DefaultSpriteDPI = i773[9]
  i772.m_DynamicPixelsPerUnit = i773[10]
  i772.m_PresetInfoIsWorld = !!i773[11]
  return i772
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i775 = data
  i774.m_IgnoreReversedGraphics = !!i775[0]
  i774.m_BlockingObjects = i775[1]
  i774.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i775[2] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i777 = data
  i776.cullTransparentMesh = !!i777[0]
  return i776
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Image' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_Sprite')
  i778.m_Type = i779[2]
  i778.m_PreserveAspect = !!i779[3]
  i778.m_FillCenter = !!i779[4]
  i778.m_FillMethod = i779[5]
  i778.m_FillAmount = i779[6]
  i778.m_FillClockwise = !!i779[7]
  i778.m_FillOrigin = i779[8]
  i778.m_UseSpriteMesh = !!i779[9]
  i778.m_PixelsPerUnitMultiplier = i779[10]
  request.r(i779[11], i779[12], 0, i778, 'm_Material')
  i778.m_Maskable = !!i779[13]
  i778.m_Color = new pc.Color(i779[14], i779[15], i779[16], i779[17])
  i778.m_RaycastTarget = !!i779[18]
  i778.m_RaycastPadding = new pc.Vec4( i779[19], i779[20], i779[21], i779[22] )
  return i778
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.Button' )
  var i781 = data
  i780.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i781[0], i780.m_OnClick)
  i780.m_Navigation = request.d('UnityEngine.UI.Navigation', i781[1], i780.m_Navigation)
  i780.m_Transition = i781[2]
  i780.m_Colors = request.d('UnityEngine.UI.ColorBlock', i781[3], i780.m_Colors)
  i780.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i781[4], i780.m_SpriteState)
  i780.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i781[5], i780.m_AnimationTriggers)
  i780.m_Interactable = !!i781[6]
  request.r(i781[7], i781[8], 0, i780, 'm_TargetGraphic')
  return i780
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i783 = data
  i782.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i783[0], i782.m_PersistentCalls)
  return i782
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('UnityEngine.Events.PersistentCall', i787[i + 0]));
  }
  i784.m_Calls = i786
  return i784
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Target')
  i790.m_TargetAssemblyTypeName = i791[2]
  i790.m_MethodName = i791[3]
  i790.m_Mode = i791[4]
  i790.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i791[5], i790.m_Arguments)
  i790.m_CallState = i791[6]
  return i790
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i793 = data
  i792.m_Mode = i793[0]
  i792.m_WrapAround = !!i793[1]
  request.r(i793[2], i793[3], 0, i792, 'm_SelectOnUp')
  request.r(i793[4], i793[5], 0, i792, 'm_SelectOnDown')
  request.r(i793[6], i793[7], 0, i792, 'm_SelectOnLeft')
  request.r(i793[8], i793[9], 0, i792, 'm_SelectOnRight')
  return i792
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i795 = data
  i794.m_NormalColor = new pc.Color(i795[0], i795[1], i795[2], i795[3])
  i794.m_HighlightedColor = new pc.Color(i795[4], i795[5], i795[6], i795[7])
  i794.m_PressedColor = new pc.Color(i795[8], i795[9], i795[10], i795[11])
  i794.m_SelectedColor = new pc.Color(i795[12], i795[13], i795[14], i795[15])
  i794.m_DisabledColor = new pc.Color(i795[16], i795[17], i795[18], i795[19])
  i794.m_ColorMultiplier = i795[20]
  i794.m_FadeDuration = i795[21]
  return i794
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_HighlightedSprite')
  request.r(i797[2], i797[3], 0, i796, 'm_PressedSprite')
  request.r(i797[4], i797[5], 0, i796, 'm_SelectedSprite')
  request.r(i797[6], i797[7], 0, i796, 'm_DisabledSprite')
  return i796
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i799 = data
  i798.m_NormalTrigger = i799[0]
  i798.m_HighlightedTrigger = i799[1]
  i798.m_PressedTrigger = i799[2]
  i798.m_SelectedTrigger = i799[3]
  i798.m_DisabledTrigger = i799[4]
  return i798
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i801 = data
  i800.m_hasFontAssetChanged = !!i801[0]
  request.r(i801[1], i801[2], 0, i800, 'm_baseMaterial')
  i800.m_maskOffset = new pc.Vec4( i801[3], i801[4], i801[5], i801[6] )
  i800.m_text = i801[7]
  i800.m_isRightToLeft = !!i801[8]
  request.r(i801[9], i801[10], 0, i800, 'm_fontAsset')
  request.r(i801[11], i801[12], 0, i800, 'm_sharedMaterial')
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.m_fontSharedMaterials = i802
  request.r(i801[14], i801[15], 0, i800, 'm_fontMaterial')
  var i805 = i801[16]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i800.m_fontMaterials = i804
  i800.m_fontColor32 = UnityEngine.Color32.ConstructColor(i801[17], i801[18], i801[19], i801[20])
  i800.m_fontColor = new pc.Color(i801[21], i801[22], i801[23], i801[24])
  i800.m_enableVertexGradient = !!i801[25]
  i800.m_colorMode = i801[26]
  i800.m_fontColorGradient = request.d('TMPro.VertexGradient', i801[27], i800.m_fontColorGradient)
  request.r(i801[28], i801[29], 0, i800, 'm_fontColorGradientPreset')
  request.r(i801[30], i801[31], 0, i800, 'm_spriteAsset')
  i800.m_tintAllSprites = !!i801[32]
  request.r(i801[33], i801[34], 0, i800, 'm_StyleSheet')
  i800.m_TextStyleHashCode = i801[35]
  i800.m_overrideHtmlColors = !!i801[36]
  i800.m_faceColor = UnityEngine.Color32.ConstructColor(i801[37], i801[38], i801[39], i801[40])
  i800.m_fontSize = i801[41]
  i800.m_fontSizeBase = i801[42]
  i800.m_fontWeight = i801[43]
  i800.m_enableAutoSizing = !!i801[44]
  i800.m_fontSizeMin = i801[45]
  i800.m_fontSizeMax = i801[46]
  i800.m_fontStyle = i801[47]
  i800.m_HorizontalAlignment = i801[48]
  i800.m_VerticalAlignment = i801[49]
  i800.m_textAlignment = i801[50]
  i800.m_characterSpacing = i801[51]
  i800.m_wordSpacing = i801[52]
  i800.m_lineSpacing = i801[53]
  i800.m_lineSpacingMax = i801[54]
  i800.m_paragraphSpacing = i801[55]
  i800.m_charWidthMaxAdj = i801[56]
  i800.m_enableWordWrapping = !!i801[57]
  i800.m_wordWrappingRatios = i801[58]
  i800.m_overflowMode = i801[59]
  request.r(i801[60], i801[61], 0, i800, 'm_linkedTextComponent')
  request.r(i801[62], i801[63], 0, i800, 'parentLinkedComponent')
  i800.m_enableKerning = !!i801[64]
  i800.m_enableExtraPadding = !!i801[65]
  i800.checkPaddingRequired = !!i801[66]
  i800.m_isRichText = !!i801[67]
  i800.m_parseCtrlCharacters = !!i801[68]
  i800.m_isOrthographic = !!i801[69]
  i800.m_isCullingEnabled = !!i801[70]
  i800.m_horizontalMapping = i801[71]
  i800.m_verticalMapping = i801[72]
  i800.m_uvLineOffset = i801[73]
  i800.m_geometrySortingOrder = i801[74]
  i800.m_IsTextObjectScaleStatic = !!i801[75]
  i800.m_VertexBufferAutoSizeReduction = !!i801[76]
  i800.m_useMaxVisibleDescender = !!i801[77]
  i800.m_pageToDisplay = i801[78]
  i800.m_margin = new pc.Vec4( i801[79], i801[80], i801[81], i801[82] )
  i800.m_isUsingLegacyAnimationComponent = !!i801[83]
  i800.m_isVolumetricText = !!i801[84]
  request.r(i801[85], i801[86], 0, i800, 'm_Material')
  i800.m_Maskable = !!i801[87]
  i800.m_Color = new pc.Color(i801[88], i801[89], i801[90], i801[91])
  i800.m_RaycastTarget = !!i801[92]
  i800.m_RaycastPadding = new pc.Vec4( i801[93], i801[94], i801[95], i801[96] )
  return i800
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'm_ObjectArgument')
  i806.m_ObjectArgumentAssemblyTypeName = i807[2]
  i806.m_IntArgument = i807[3]
  i806.m_FloatArgument = i807[4]
  i806.m_StringArgument = i807[5]
  i806.m_BoolArgument = !!i807[6]
  return i806
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_Texture')
  i808.m_UVRect = UnityEngine.Rect.MinMaxRect(i809[2], i809[3], i809[4], i809[5])
  request.r(i809[6], i809[7], 0, i808, 'm_Material')
  i808.m_Maskable = !!i809[8]
  i808.m_Color = new pc.Color(i809[9], i809[10], i809[11], i809[12])
  i808.m_RaycastTarget = !!i809[13]
  i808.m_RaycastPadding = new pc.Vec4( i809[14], i809[15], i809[16], i809[17] )
  return i808
}

Deserializers["BallWheelController"] = function (request, data, root) {
  var i810 = root || request.c( 'BallWheelController' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'wheelContainer')
  request.r(i811[2], i811[3], 0, i810, 'okButton')
  request.r(i811[4], i811[5], 0, i810, 'randomButton')
  i810.radius = i811[6]
  i810.zOffset = i811[7]
  i810.startAngleDeg = i811[8]
  i810.zRotationPerItem = i811[9]
  i810.angularFriction = i811[10]
  i810.snapSpeed = i811[11]
  i810.minFlingVelocity = i811[12]
  return i810
}

Deserializers["UIMovement"] = function (request, data, root) {
  var i812 = root || request.c( 'UIMovement' )
  var i813 = data
  i812.moveDistance = i813[0]
  i812.speed = i813[1]
  return i812
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_FirstSelected')
  i814.m_sendNavigationEvents = !!i815[2]
  i814.m_DragThreshold = i815[3]
  return i814
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i817 = data
  i816.m_HorizontalAxis = i817[0]
  i816.m_VerticalAxis = i817[1]
  i816.m_SubmitButton = i817[2]
  i816.m_CancelButton = i817[3]
  i816.m_InputActionsPerSecond = i817[4]
  i816.m_RepeatDelay = i817[5]
  i816.m_ForceModuleActive = !!i817[6]
  i816.m_SendPointerHoverToParent = !!i817[7]
  return i816
}

Deserializers["BallItem"] = function (request, data, root) {
  var i818 = root || request.c( 'BallItem' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'meshRenderer')
  request.r(i819[2], i819[3], 0, i818, 'outlineObject')
  i818.selectedScale = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i821 = data
  i820.ambientIntensity = i821[0]
  i820.reflectionIntensity = i821[1]
  i820.ambientMode = i821[2]
  i820.ambientLight = new pc.Color(i821[3], i821[4], i821[5], i821[6])
  i820.ambientSkyColor = new pc.Color(i821[7], i821[8], i821[9], i821[10])
  i820.ambientGroundColor = new pc.Color(i821[11], i821[12], i821[13], i821[14])
  i820.ambientEquatorColor = new pc.Color(i821[15], i821[16], i821[17], i821[18])
  i820.fogColor = new pc.Color(i821[19], i821[20], i821[21], i821[22])
  i820.fogEndDistance = i821[23]
  i820.fogStartDistance = i821[24]
  i820.fogDensity = i821[25]
  i820.fog = !!i821[26]
  request.r(i821[27], i821[28], 0, i820, 'skybox')
  i820.fogMode = i821[29]
  var i823 = i821[30]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i823[i + 0]) );
  }
  i820.lightmaps = i822
  i820.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i821[31], i820.lightProbes)
  i820.lightmapsMode = i821[32]
  i820.mixedBakeMode = i821[33]
  i820.environmentLightingMode = i821[34]
  i820.ambientProbe = new pc.SphericalHarmonicsL2(i821[35])
  i820.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i821[36])
  i820.useReferenceAmbientProbe = !!i821[37]
  request.r(i821[38], i821[39], 0, i820, 'customReflection')
  request.r(i821[40], i821[41], 0, i820, 'defaultReflection')
  i820.defaultReflectionMode = i821[42]
  i820.defaultReflectionResolution = i821[43]
  i820.sunLightObjectId = i821[44]
  i820.pixelLightCount = i821[45]
  i820.defaultReflectionHDR = !!i821[46]
  i820.hasLightDataAsset = !!i821[47]
  i820.hasManualGenerate = !!i821[48]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'lightmapColor')
  request.r(i827[2], i827[3], 0, i826, 'lightmapDirection')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i828 = root || new UnityEngine.LightProbes()
  var i829 = data
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i835 = data
  i834.name = i835[0]
  i834.bounciness = i835[1]
  i834.dynamicFriction = i835[2]
  i834.staticFriction = i835[3]
  i834.frictionCombine = i835[4]
  i834.bounceCombine = i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i839[i + 0]));
  }
  i836.ShaderCompilationErrors = i838
  i836.name = i837[1]
  i836.guid = i837[2]
  var i841 = i837[3]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i836.shaderDefinedKeywords = i840
  var i843 = i837[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i843[i + 0]) );
  }
  i836.passes = i842
  var i845 = i837[5]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i845[i + 0]) );
  }
  i836.usePasses = i844
  var i847 = i837[6]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i847[i + 0]) );
  }
  i836.defaultParameterValues = i846
  request.r(i837[7], i837[8], 0, i836, 'unityFallbackShader')
  i836.readDepth = !!i837[9]
  i836.isCreatedByShaderGraph = !!i837[10]
  i836.compiled = !!i837[11]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i851 = data
  i850.shaderName = i851[0]
  i850.errorMessage = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i856 = root || new pc.UnityShaderPass()
  var i857 = data
  i856.id = i857[0]
  i856.subShaderIndex = i857[1]
  i856.name = i857[2]
  i856.passType = i857[3]
  i856.grabPassTextureName = i857[4]
  i856.usePass = !!i857[5]
  i856.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[6], i856.zTest)
  i856.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[7], i856.zWrite)
  i856.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[8], i856.culling)
  i856.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i857[9], i856.blending)
  i856.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i857[10], i856.alphaBlending)
  i856.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[11], i856.colorWriteMask)
  i856.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[12], i856.offsetUnits)
  i856.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[13], i856.offsetFactor)
  i856.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[14], i856.stencilRef)
  i856.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[15], i856.stencilReadMask)
  i856.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[16], i856.stencilWriteMask)
  i856.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[17], i856.stencilOp)
  i856.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[18], i856.stencilOpFront)
  i856.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[19], i856.stencilOpBack)
  var i859 = i857[20]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i859[i + 0]) );
  }
  i856.tags = i858
  var i861 = i857[21]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.passDefinedKeywords = i860
  var i863 = i857[22]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i863[i + 0]) );
  }
  i856.passDefinedKeywordGroups = i862
  var i865 = i857[23]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i865[i + 0]) );
  }
  i856.variants = i864
  var i867 = i857[24]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i867[i + 0]) );
  }
  i856.excludedVariants = i866
  i856.hasDepthReader = !!i857[25]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i869 = data
  i868.val = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i871 = data
  i870.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[0], i870.src)
  i870.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[1], i870.dst)
  i870.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[2], i870.op)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i873 = data
  i872.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[0], i872.pass)
  i872.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[1], i872.fail)
  i872.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[2], i872.zFail)
  i872.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[3], i872.comp)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i877 = data
  i876.name = i877[0]
  i876.value = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i880.keywords = i882
  i880.hasDiscard = !!i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i887 = data
  i886.passId = i887[0]
  i886.subShaderIndex = i887[1]
  var i889 = i887[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i886.keywords = i888
  i886.vertexProgram = i887[3]
  i886.fragmentProgram = i887[4]
  i886.exportedForWebGl2 = !!i887[5]
  i886.readDepth = !!i887[6]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'shader')
  i892.pass = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i897 = data
  i896.name = i897[0]
  i896.type = i897[1]
  i896.value = new pc.Vec4( i897[2], i897[3], i897[4], i897[5] )
  i896.textureValue = i897[6]
  i896.shaderPropertyFlag = i897[7]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i899 = data
  i898.name = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'texture')
  i898.aabb = i899[3]
  i898.vertices = i899[4]
  i898.triangles = i899[5]
  i898.textureRect = UnityEngine.Rect.MinMaxRect(i899[6], i899[7], i899[8], i899[9])
  i898.packedRect = UnityEngine.Rect.MinMaxRect(i899[10], i899[11], i899[12], i899[13])
  i898.border = new pc.Vec4( i899[14], i899[15], i899[16], i899[17] )
  i898.transparency = i899[18]
  i898.bounds = i899[19]
  i898.pixelsPerUnit = i899[20]
  i898.textureWidth = i899[21]
  i898.textureHeight = i899[22]
  i898.nativeSize = new pc.Vec2( i899[23], i899[24] )
  i898.pivot = new pc.Vec2( i899[25], i899[26] )
  i898.textureRectOffset = new pc.Vec2( i899[27], i899[28] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i901 = data
  i900.name = i901[0]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i903 = data
  i902.name = i903[0]
  i902.ascent = i903[1]
  i902.originalLineHeight = i903[2]
  i902.fontSize = i903[3]
  var i905 = i903[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i905[i + 0]) );
  }
  i902.characterInfo = i904
  request.r(i903[5], i903[6], 0, i902, 'texture')
  i902.originalFontSize = i903[7]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i909 = data
  i908.index = i909[0]
  i908.advance = i909[1]
  i908.bearing = i909[2]
  i908.glyphWidth = i909[3]
  i908.glyphHeight = i909[4]
  i908.minX = i909[5]
  i908.maxX = i909[6]
  i908.minY = i909[7]
  i908.maxY = i909[8]
  i908.uvBottomLeftX = i909[9]
  i908.uvBottomLeftY = i909[10]
  i908.uvBottomRightX = i909[11]
  i908.uvBottomRightY = i909[12]
  i908.uvTopLeftX = i909[13]
  i908.uvTopLeftY = i909[14]
  i908.uvTopRightX = i909[15]
  i908.uvTopRightY = i909[16]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i911 = data
  i910.name = i911[0]
  i910.bytes64 = i911[1]
  i910.data = i911[2]
  return i910
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i913 = data
  i912.hashCode = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'material')
  i912.materialHashCode = i913[3]
  request.r(i913[4], i913[5], 0, i912, 'atlas')
  i912.normalStyle = i913[6]
  i912.normalSpacingOffset = i913[7]
  i912.boldStyle = i913[8]
  i912.boldSpacing = i913[9]
  i912.italicStyle = i913[10]
  i912.tabSize = i913[11]
  i912.m_Version = i913[12]
  i912.m_SourceFontFileGUID = i913[13]
  request.r(i913[14], i913[15], 0, i912, 'm_SourceFontFile_EditorRef')
  request.r(i913[16], i913[17], 0, i912, 'm_SourceFontFile')
  i912.m_AtlasPopulationMode = i913[18]
  i912.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i913[19], i912.m_FaceInfo)
  var i915 = i913[20]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('UnityEngine.TextCore.Glyph', i915[i + 0]));
  }
  i912.m_GlyphTable = i914
  var i917 = i913[21]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.TMP_Character', i917[i + 0]));
  }
  i912.m_CharacterTable = i916
  var i919 = i913[22]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i912.m_AtlasTextures = i918
  i912.m_AtlasTextureIndex = i913[23]
  i912.m_IsMultiAtlasTexturesEnabled = !!i913[24]
  i912.m_ClearDynamicDataOnBuild = !!i913[25]
  var i921 = i913[26]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('UnityEngine.TextCore.GlyphRect', i921[i + 0]));
  }
  i912.m_UsedGlyphRects = i920
  var i923 = i913[27]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('UnityEngine.TextCore.GlyphRect', i923[i + 0]));
  }
  i912.m_FreeGlyphRects = i922
  i912.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i913[28], i912.m_fontInfo)
  i912.m_AtlasWidth = i913[29]
  i912.m_AtlasHeight = i913[30]
  i912.m_AtlasPadding = i913[31]
  i912.m_AtlasRenderMode = i913[32]
  var i925 = i913[33]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('TMPro.TMP_Glyph', i925[i + 0]));
  }
  i912.m_glyphInfoList = i924
  i912.m_KerningTable = request.d('TMPro.KerningTable', i913[34], i912.m_KerningTable)
  i912.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i913[35], i912.m_FontFeatureTable)
  var i927 = i913[36]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 1, i926, '')
  }
  i912.fallbackFontAssets = i926
  var i929 = i913[37]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i912.m_FallbackFontAssetTable = i928
  i912.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i913[38], i912.m_CreationSettings)
  var i931 = i913[39]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('TMPro.TMP_FontWeightPair', i931[i + 0]) );
  }
  i912.m_FontWeightTable = i930
  var i933 = i913[40]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('TMPro.TMP_FontWeightPair', i933[i + 0]) );
  }
  i912.fontWeights = i932
  return i912
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i935 = data
  i934.m_FaceIndex = i935[0]
  i934.m_FamilyName = i935[1]
  i934.m_StyleName = i935[2]
  i934.m_PointSize = i935[3]
  i934.m_Scale = i935[4]
  i934.m_UnitsPerEM = i935[5]
  i934.m_LineHeight = i935[6]
  i934.m_AscentLine = i935[7]
  i934.m_CapLine = i935[8]
  i934.m_MeanLine = i935[9]
  i934.m_Baseline = i935[10]
  i934.m_DescentLine = i935[11]
  i934.m_SuperscriptOffset = i935[12]
  i934.m_SuperscriptSize = i935[13]
  i934.m_SubscriptOffset = i935[14]
  i934.m_SubscriptSize = i935[15]
  i934.m_UnderlineOffset = i935[16]
  i934.m_UnderlineThickness = i935[17]
  i934.m_StrikethroughOffset = i935[18]
  i934.m_StrikethroughThickness = i935[19]
  i934.m_TabWidth = i935[20]
  return i934
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i939 = data
  i938.m_Index = i939[0]
  i938.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i939[1], i938.m_Metrics)
  i938.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i939[2], i938.m_GlyphRect)
  i938.m_Scale = i939[3]
  i938.m_AtlasIndex = i939[4]
  i938.m_ClassDefinitionType = i939[5]
  return i938
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i941 = data
  i940.m_Width = i941[0]
  i940.m_Height = i941[1]
  i940.m_HorizontalBearingX = i941[2]
  i940.m_HorizontalBearingY = i941[3]
  i940.m_HorizontalAdvance = i941[4]
  return i940
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i943 = data
  i942.m_X = i943[0]
  i942.m_Y = i943[1]
  i942.m_Width = i943[2]
  i942.m_Height = i943[3]
  return i942
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Character' )
  var i947 = data
  i946.m_ElementType = i947[0]
  i946.m_Unicode = i947[1]
  i946.m_GlyphIndex = i947[2]
  i946.m_Scale = i947[3]
  return i946
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i953 = data
  i952.Name = i953[0]
  i952.PointSize = i953[1]
  i952.Scale = i953[2]
  i952.CharacterCount = i953[3]
  i952.LineHeight = i953[4]
  i952.Baseline = i953[5]
  i952.Ascender = i953[6]
  i952.CapHeight = i953[7]
  i952.Descender = i953[8]
  i952.CenterLine = i953[9]
  i952.SuperscriptOffset = i953[10]
  i952.SubscriptOffset = i953[11]
  i952.SubSize = i953[12]
  i952.Underline = i953[13]
  i952.UnderlineThickness = i953[14]
  i952.strikethrough = i953[15]
  i952.strikethroughThickness = i953[16]
  i952.TabWidth = i953[17]
  i952.Padding = i953[18]
  i952.AtlasWidth = i953[19]
  i952.AtlasHeight = i953[20]
  return i952
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_Glyph' )
  var i957 = data
  i956.id = i957[0]
  i956.x = i957[1]
  i956.y = i957[2]
  i956.width = i957[3]
  i956.height = i957[4]
  i956.xOffset = i957[5]
  i956.yOffset = i957[6]
  i956.xAdvance = i957[7]
  i956.scale = i957[8]
  return i956
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.KerningTable' )
  var i959 = data
  var i961 = i959[0]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.KerningPair', i961[i + 0]));
  }
  i958.kerningPairs = i960
  return i958
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.KerningPair' )
  var i965 = data
  i964.xOffset = i965[0]
  i964.m_FirstGlyph = i965[1]
  i964.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i965[2], i964.m_FirstGlyphAdjustments)
  i964.m_SecondGlyph = i965[3]
  i964.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i965[4], i964.m_SecondGlyphAdjustments)
  i964.m_IgnoreSpacingAdjustments = !!i965[5]
  return i964
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i969[i + 0]));
  }
  i966.m_GlyphPairAdjustmentRecords = i968
  return i966
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i973 = data
  i972.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i973[0], i972.m_FirstAdjustmentRecord)
  i972.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i973[1], i972.m_SecondAdjustmentRecord)
  i972.m_FeatureLookupFlags = i973[2]
  return i972
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i977 = data
  i976.sourceFontFileName = i977[0]
  i976.sourceFontFileGUID = i977[1]
  i976.pointSizeSamplingMode = i977[2]
  i976.pointSize = i977[3]
  i976.padding = i977[4]
  i976.packingMode = i977[5]
  i976.atlasWidth = i977[6]
  i976.atlasHeight = i977[7]
  i976.characterSetSelectionMode = i977[8]
  i976.characterSequence = i977[9]
  i976.referencedFontAssetGUID = i977[10]
  i976.referencedTextAssetGUID = i977[11]
  i976.fontStyle = i977[12]
  i976.fontStyleModifier = i977[13]
  i976.renderMode = i977[14]
  i976.includeFontFeatures = !!i977[15]
  return i976
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'regularTypeface')
  request.r(i981[2], i981[3], 0, i980, 'italicTypeface')
  return i980
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i983 = data
  i982.m_GlyphIndex = i983[0]
  i982.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i983[1], i982.m_GlyphValueRecord)
  return i982
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i985 = data
  i984.m_XPlacement = i985[0]
  i984.m_YPlacement = i985[1]
  i984.m_XAdvance = i985[2]
  i984.m_YAdvance = i985[3]
  return i984
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Settings' )
  var i987 = data
  i986.m_enableWordWrapping = !!i987[0]
  i986.m_enableKerning = !!i987[1]
  i986.m_enableExtraPadding = !!i987[2]
  i986.m_enableTintAllSprites = !!i987[3]
  i986.m_enableParseEscapeCharacters = !!i987[4]
  i986.m_EnableRaycastTarget = !!i987[5]
  i986.m_GetFontFeaturesAtRuntime = !!i987[6]
  i986.m_missingGlyphCharacter = i987[7]
  i986.m_warningsDisabled = !!i987[8]
  request.r(i987[9], i987[10], 0, i986, 'm_defaultFontAsset')
  i986.m_defaultFontAssetPath = i987[11]
  i986.m_defaultFontSize = i987[12]
  i986.m_defaultAutoSizeMinRatio = i987[13]
  i986.m_defaultAutoSizeMaxRatio = i987[14]
  i986.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i987[15], i987[16] )
  i986.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i987[17], i987[18] )
  i986.m_autoSizeTextContainer = !!i987[19]
  i986.m_IsTextObjectScaleStatic = !!i987[20]
  var i989 = i987[21]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.m_fallbackFontAssets = i988
  i986.m_matchMaterialPreset = !!i987[22]
  request.r(i987[23], i987[24], 0, i986, 'm_defaultSpriteAsset')
  i986.m_defaultSpriteAssetPath = i987[25]
  i986.m_enableEmojiSupport = !!i987[26]
  i986.m_MissingCharacterSpriteUnicode = i987[27]
  i986.m_defaultColorGradientPresetsPath = i987[28]
  request.r(i987[29], i987[30], 0, i986, 'm_defaultStyleSheet')
  i986.m_StyleSheetsResourcePath = i987[31]
  request.r(i987[32], i987[33], 0, i986, 'm_leadingCharacters')
  request.r(i987[34], i987[35], 0, i986, 'm_followingCharacters')
  i986.m_UseModernHangulLineBreakingRules = !!i987[36]
  return i986
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i991 = data
  i990.hashCode = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'material')
  i990.materialHashCode = i991[3]
  request.r(i991[4], i991[5], 0, i990, 'spriteSheet')
  var i993 = i991[6]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_Sprite', i993[i + 0]));
  }
  i990.spriteInfoList = i992
  var i995 = i991[7]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i990.fallbackSpriteAssets = i994
  i990.m_Version = i991[8]
  i990.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i991[9], i990.m_FaceInfo)
  var i997 = i991[10]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.TMP_SpriteCharacter', i997[i + 0]));
  }
  i990.m_SpriteCharacterTable = i996
  var i999 = i991[11]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('TMPro.TMP_SpriteGlyph', i999[i + 0]));
  }
  i990.m_SpriteGlyphTable = i998
  return i990
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.hashCode = i1003[1]
  i1002.unicode = i1003[2]
  i1002.pivot = new pc.Vec2( i1003[3], i1003[4] )
  request.r(i1003[5], i1003[6], 0, i1002, 'sprite')
  i1002.id = i1003[7]
  i1002.x = i1003[8]
  i1002.y = i1003[9]
  i1002.width = i1003[10]
  i1002.height = i1003[11]
  i1002.xOffset = i1003[12]
  i1002.yOffset = i1003[13]
  i1002.xAdvance = i1003[14]
  i1002.scale = i1003[15]
  return i1002
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1009 = data
  i1008.m_Name = i1009[0]
  i1008.m_HashCode = i1009[1]
  i1008.m_ElementType = i1009[2]
  i1008.m_Unicode = i1009[3]
  i1008.m_GlyphIndex = i1009[4]
  i1008.m_Scale = i1009[5]
  return i1008
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'sprite')
  i1012.m_Index = i1013[2]
  i1012.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1013[3], i1012.m_Metrics)
  i1012.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1013[4], i1012.m_GlyphRect)
  i1012.m_Scale = i1013[5]
  i1012.m_AtlasIndex = i1013[6]
  i1012.m_ClassDefinitionType = i1013[7]
  return i1012
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('TMPro.TMP_Style', i1017[i + 0]));
  }
  i1014.m_StyleList = i1016
  return i1014
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_Style' )
  var i1021 = data
  i1020.m_Name = i1021[0]
  i1020.m_HashCode = i1021[1]
  i1020.m_OpeningDefinition = i1021[2]
  i1020.m_ClosingDefinition = i1021[3]
  i1020.m_OpeningTagArray = i1021[4]
  i1020.m_ClosingTagArray = i1021[5]
  i1020.m_OpeningTagUnicodeArray = i1021[6]
  i1020.m_ClosingTagUnicodeArray = i1021[7]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1025[i + 0]) );
  }
  i1022.files = i1024
  i1022.componentToPrefabIds = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1029 = data
  i1028.path = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'unityObject')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1033[i + 0]) );
  }
  i1030.scriptsExecutionOrder = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1035[i + 0]) );
  }
  i1030.sortingLayers = i1034
  var i1037 = i1031[2]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1037[i + 0]) );
  }
  i1030.cullingLayers = i1036
  i1030.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1031[3], i1030.timeSettings)
  i1030.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1031[4], i1030.physicsSettings)
  i1030.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1031[5], i1030.physics2DSettings)
  i1030.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1031[6], i1030.qualitySettings)
  i1030.enableRealtimeShadows = !!i1031[7]
  i1030.enableAutoInstancing = !!i1031[8]
  i1030.enableDynamicBatching = !!i1031[9]
  i1030.lightmapEncodingQuality = i1031[10]
  i1030.desiredColorSpace = i1031[11]
  var i1039 = i1031[12]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1030.allTags = i1038
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.value = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  i1046.value = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.name = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1053 = data
  i1052.fixedDeltaTime = i1053[0]
  i1052.maximumDeltaTime = i1053[1]
  i1052.timeScale = i1053[2]
  i1052.maximumParticleTimestep = i1053[3]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1055 = data
  i1054.gravity = new pc.Vec3( i1055[0], i1055[1], i1055[2] )
  i1054.defaultSolverIterations = i1055[3]
  i1054.bounceThreshold = i1055[4]
  i1054.autoSyncTransforms = !!i1055[5]
  i1054.autoSimulation = !!i1055[6]
  var i1057 = i1055[7]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1057[i + 0]) );
  }
  i1054.collisionMatrix = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.layerId = i1061[1]
  i1060.otherLayerId = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'material')
  i1062.gravity = new pc.Vec2( i1063[2], i1063[3] )
  i1062.positionIterations = i1063[4]
  i1062.velocityIterations = i1063[5]
  i1062.velocityThreshold = i1063[6]
  i1062.maxLinearCorrection = i1063[7]
  i1062.maxAngularCorrection = i1063[8]
  i1062.maxTranslationSpeed = i1063[9]
  i1062.maxRotationSpeed = i1063[10]
  i1062.baumgarteScale = i1063[11]
  i1062.baumgarteTOIScale = i1063[12]
  i1062.timeToSleep = i1063[13]
  i1062.linearSleepTolerance = i1063[14]
  i1062.angularSleepTolerance = i1063[15]
  i1062.defaultContactOffset = i1063[16]
  i1062.autoSimulation = !!i1063[17]
  i1062.queriesHitTriggers = !!i1063[18]
  i1062.queriesStartInColliders = !!i1063[19]
  i1062.callbacksOnDisable = !!i1063[20]
  i1062.reuseCollisionCallbacks = !!i1063[21]
  i1062.autoSyncTransforms = !!i1063[22]
  var i1065 = i1063[23]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1065[i + 0]) );
  }
  i1062.collisionMatrix = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.layerId = i1069[1]
  i1068.otherLayerId = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1073[i + 0]) );
  }
  i1070.qualityLevels = i1072
  var i1075 = i1071[1]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.names = i1074
  i1070.shadows = i1071[2]
  i1070.anisotropicFiltering = i1071[3]
  i1070.antiAliasing = i1071[4]
  i1070.lodBias = i1071[5]
  i1070.shadowCascades = i1071[6]
  i1070.shadowDistance = i1071[7]
  i1070.shadowmaskMode = i1071[8]
  i1070.shadowProjection = i1071[9]
  i1070.shadowResolution = i1071[10]
  i1070.softParticles = !!i1071[11]
  i1070.softVegetation = !!i1071[12]
  i1070.activeColorSpace = i1071[13]
  i1070.desiredColorSpace = i1071[14]
  i1070.masterTextureLimit = i1071[15]
  i1070.maxQueuedFrames = i1071[16]
  i1070.particleRaycastBudget = i1071[17]
  i1070.pixelLightCount = i1071[18]
  i1070.realtimeReflectionProbes = !!i1071[19]
  i1070.shadowCascade2Split = i1071[20]
  i1070.shadowCascade4Split = new pc.Vec3( i1071[21], i1071[22], i1071[23] )
  i1070.streamingMipmapsActive = !!i1071[24]
  i1070.vSyncCount = i1071[25]
  i1070.asyncUploadBufferSize = i1071[26]
  i1070.asyncUploadTimeSlice = i1071[27]
  i1070.billboardsFaceCameraPosition = !!i1071[28]
  i1070.shadowNearPlaneOffset = i1071[29]
  i1070.streamingMipmapsMemoryBudget = i1071[30]
  i1070.maximumLODLevel = i1071[31]
  i1070.streamingMipmapsAddAllCameras = !!i1071[32]
  i1070.streamingMipmapsMaxLevelReduction = i1071[33]
  i1070.streamingMipmapsRenderersPerFrame = i1071[34]
  i1070.resolutionScalingFixedDPIFactor = i1071[35]
  i1070.streamingMipmapsMaxFileIORequests = i1071[36]
  i1070.currentQualityLevel = i1071[37]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1081 = data
  i1080.weight = i1081[0]
  i1080.vertices = i1081[1]
  i1080.normals = i1081[2]
  i1080.tangents = i1081[3]
  return i1080
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1083 = data
  i1082.xPlacement = i1083[0]
  i1082.yPlacement = i1083[1]
  i1082.xAdvance = i1083[2]
  i1082.yAdvance = i1083[3]
  return i1082
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"27":[28],"64":[10],"65":[13],"66":[13],"22":[13],"67":[13],"68":[13],"69":[13],"70":[13],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[10],"86":[5],"87":[88],"89":[88],"40":[37],"90":[37],"91":[37],"42":[40],"44":[43,37],"92":[37],"41":[40],"93":[37],"94":[37],"95":[37],"96":[37],"97":[37],"98":[37],"99":[37],"100":[37],"101":[37],"46":[43,37],"102":[37],"103":[37],"104":[37],"105":[37],"106":[43,37],"107":[37],"108":[48],"109":[48],"49":[48],"110":[48],"111":[10],"112":[10],"113":[37],"33":[5,37],"35":[37,43],"114":[37],"115":[43,37],"116":[5],"117":[43,37],"118":[37],"119":[120],"121":[120],"122":[120]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","BallCollisionSound","UnityEngine.AudioSource","UnityEngine.AudioClip","RotateRing","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.HingeJoint","DunkDetector","BasketRingMover","UnityEngine.CapsuleCollider","RimTouch","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","DunkTriggerRelay","BallDragAndThrow","UnityEngine.GameObject","GameManager","TMPro.TextMeshPro","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","BallWheelController","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.RawImage","UIMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BallItem","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAd_BasketBallThrowing";

Deserializers.lunaInitializationTime = "08/04/2025 14:48:26";

Deserializers.lunaDaysRunning = "5.3";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31930";

Deserializers.projectId = "d837ba3fd0e3a8246b4e77bdd4948b88";

Deserializers.packagesInfo = "com.unity.textmeshpro: file:E:/Unity Files/com.unity.textmeshpro-3.0.6/com.unity.textmeshpro-3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1630";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4103";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAd-BasketBallThrowing";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1714f6bf-52fd-438a-bc4d-f876b05d1fd3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

