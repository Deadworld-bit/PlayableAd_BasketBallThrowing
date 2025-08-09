var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointSpring' )
  var i549 = data
  i548.spring = i549[0]
  i548.damper = i549[1]
  i548.targetPosition = i549[2]
  return i548
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointMotor' )
  var i551 = data
  i550.m_TargetVelocity = i551[0]
  i550.m_Force = i551[1]
  i550.m_FreeSpin = i551[2]
  return i550
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointLimits' )
  var i553 = data
  i552.m_Min = i553[0]
  i552.m_Max = i553[1]
  i552.m_Bounciness = i553[2]
  i552.m_BounceMinVelocity = i553[3]
  i552.m_ContactDistance = i553[4]
  i552.minBounce = i553[5]
  i552.maxBounce = i553[6]
  return i552
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointDrive' )
  var i555 = data
  i554.m_PositionSpring = i555[0]
  i554.m_PositionDamper = i555[1]
  i554.m_MaximumForce = i555[2]
  i554.m_UseAcceleration = i555[3]
  return i554
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i557 = data
  i556.m_Spring = i557[0]
  i556.m_Damper = i557[1]
  return i556
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i559 = data
  i558.m_Limit = i559[0]
  i558.m_Bounciness = i559[1]
  i558.m_ContactDistance = i559[2]
  return i558
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i561 = data
  i560.m_ExtremumSlip = i561[0]
  i560.m_ExtremumValue = i561[1]
  i560.m_AsymptoteSlip = i561[2]
  i560.m_AsymptoteValue = i561[3]
  i560.m_Stiffness = i561[4]
  return i560
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i563 = data
  i562.m_LowerAngle = i563[0]
  i562.m_UpperAngle = i563[1]
  return i562
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i565 = data
  i564.m_MotorSpeed = i565[0]
  i564.m_MaximumMotorTorque = i565[1]
  return i564
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i567 = data
  i566.m_DampingRatio = i567[0]
  i566.m_Frequency = i567[1]
  i566.m_Angle = i567[2]
  return i566
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i569 = data
  i568.m_LowerTranslation = i569[0]
  i568.m_UpperTranslation = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i570 = root || new pc.UnityMaterial()
  var i571 = data
  i570.name = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'shader')
  i570.renderQueue = i571[3]
  i570.enableInstancing = !!i571[4]
  var i573 = i571[5]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i573[i + 0]) );
  }
  i570.floatParameters = i572
  var i575 = i571[6]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i575[i + 0]) );
  }
  i570.colorParameters = i574
  var i577 = i571[7]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i577[i + 0]) );
  }
  i570.vectorParameters = i576
  var i579 = i571[8]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i579[i + 0]) );
  }
  i570.textureParameters = i578
  var i581 = i571[9]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i581[i + 0]) );
  }
  i570.materialFlags = i580
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = new pc.Color(i589[1], i589[2], i589[3], i589[4])
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i593 = data
  i592.name = i593[0]
  i592.value = new pc.Vec4( i593[1], i593[2], i593[3], i593[4] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i597 = data
  i596.name = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'value')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i601 = data
  i600.name = i601[0]
  i600.enabled = !!i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i603 = data
  i602.name = i603[0]
  i602.halfPrecision = !!i603[1]
  i602.useUInt32IndexFormat = !!i603[2]
  i602.vertexCount = i603[3]
  i602.aabb = i603[4]
  var i605 = i603[5]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( !!i605[i + 0] );
  }
  i602.streams = i604
  i602.vertices = i603[6]
  var i607 = i603[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i607[i + 0]) );
  }
  i602.subMeshes = i606
  var i609 = i603[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 16) {
    i608.push( new pc.Mat4().setData(i609[i + 0], i609[i + 1], i609[i + 2], i609[i + 3],  i609[i + 4], i609[i + 5], i609[i + 6], i609[i + 7],  i609[i + 8], i609[i + 9], i609[i + 10], i609[i + 11],  i609[i + 12], i609[i + 13], i609[i + 14], i609[i + 15]) );
  }
  i602.bindposes = i608
  var i611 = i603[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i611[i + 0]) );
  }
  i602.blendShapes = i610
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i617 = data
  i616.triangles = i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i623 = data
  i622.name = i623[0]
  var i625 = i623[1]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i625[i + 0]) );
  }
  i622.frames = i624
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i627 = data
  i626.name = i627[0]
  i626.width = i627[1]
  i626.height = i627[2]
  i626.mipmapCount = i627[3]
  i626.anisoLevel = i627[4]
  i626.filterMode = i627[5]
  i626.hdr = !!i627[6]
  i626.format = i627[7]
  i626.wrapMode = i627[8]
  i626.alphaIsTransparency = !!i627[9]
  i626.alphaSource = i627[10]
  i626.graphicsFormat = i627[11]
  i626.sRGBTexture = !!i627[12]
  i626.desiredColorSpace = i627[13]
  i626.wrapU = i627[14]
  i626.wrapV = i627[15]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i629 = data
  i628.position = new pc.Vec3( i629[0], i629[1], i629[2] )
  i628.scale = new pc.Vec3( i629[3], i629[4], i629[5] )
  i628.rotation = new pc.Quat(i629[6], i629[7], i629[8], i629[9])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'sharedMesh')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'additionalVertexStreams')
  i632.enabled = !!i633[2]
  request.r(i633[3], i633[4], 0, i632, 'sharedMaterial')
  var i635 = i633[5]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sharedMaterials = i634
  i632.receiveShadows = !!i633[6]
  i632.shadowCastingMode = i633[7]
  i632.sortingLayerID = i633[8]
  i632.sortingOrder = i633[9]
  i632.lightmapIndex = i633[10]
  i632.lightmapSceneIndex = i633[11]
  i632.lightmapScaleOffset = new pc.Vec4( i633[12], i633[13], i633[14], i633[15] )
  i632.lightProbeUsage = i633[16]
  i632.reflectionProbeUsage = i633[17]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i639 = data
  i638.name = i639[0]
  i638.tagId = i639[1]
  i638.enabled = !!i639[2]
  i638.isStatic = !!i639[3]
  i638.layer = i639[4]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i641 = data
  i640.name = i641[0]
  i640.width = i641[1]
  i640.height = i641[2]
  i640.anisoLevel = i641[3]
  i640.filterMode = i641[4]
  i640.hdr = !!i641[5]
  i640.colorFormat = i641[6]
  i640.depthStencilFormat = i641[7]
  i640.renderTextureFormat = i641[8]
  i640.depth = i641[9]
  i640.wrapU = i641[10]
  i640.wrapV = i641[11]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i643 = data
  i642.name = i643[0]
  i642.atlasId = i643[1]
  i642.mipmapCount = i643[2]
  i642.hdr = !!i643[3]
  i642.size = i643[4]
  i642.anisoLevel = i643[5]
  i642.filterMode = i643[6]
  var i645 = i643[7]
  var i644 = []
  for(var i = 0; i < i645.length; i += 4) {
    i644.push( UnityEngine.Rect.MinMaxRect(i645[i + 0], i645[i + 1], i645[i + 2], i645[i + 3]) );
  }
  i642.rects = i644
  i642.wrapU = i643[8]
  i642.wrapV = i643[9]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i649 = data
  i648.name = i649[0]
  i648.index = i649[1]
  i648.startup = !!i649[2]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i651 = data
  i650.center = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.size = new pc.Vec3( i651[3], i651[4], i651[5] )
  i650.enabled = !!i651[6]
  i650.isTrigger = !!i651[7]
  request.r(i651[8], i651[9], 0, i650, 'material')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.type = i653[1]
  i652.color = new pc.Color(i653[2], i653[3], i653[4], i653[5])
  i652.cullingMask = i653[6]
  i652.intensity = i653[7]
  i652.range = i653[8]
  i652.spotAngle = i653[9]
  i652.shadows = i653[10]
  i652.shadowNormalBias = i653[11]
  i652.shadowBias = i653[12]
  i652.shadowStrength = i653[13]
  i652.shadowResolution = i653[14]
  i652.lightmapBakeType = i653[15]
  i652.renderMode = i653[16]
  request.r(i653[17], i653[18], 0, i652, 'cookie')
  i652.cookieSize = i653[19]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i655 = data
  i654.enabled = !!i655[0]
  i654.aspect = i655[1]
  i654.orthographic = !!i655[2]
  i654.orthographicSize = i655[3]
  i654.backgroundColor = new pc.Color(i655[4], i655[5], i655[6], i655[7])
  i654.nearClipPlane = i655[8]
  i654.farClipPlane = i655[9]
  i654.fieldOfView = i655[10]
  i654.depth = i655[11]
  i654.clearFlags = i655[12]
  i654.cullingMask = i655[13]
  i654.rect = i655[14]
  request.r(i655[15], i655[16], 0, i654, 'targetTexture')
  i654.usePhysicalProperties = !!i655[17]
  i654.focalLength = i655[18]
  i654.sensorSize = new pc.Vec2( i655[19], i655[20] )
  i654.lensShift = new pc.Vec2( i655[21], i655[22] )
  i654.gateFit = i655[23]
  i654.commandBufferCount = i655[24]
  i654.cameraType = i655[25]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i657 = data
  i656.enabled = !!i657[0]
  i656.isTrigger = !!i657[1]
  request.r(i657[2], i657[3], 0, i656, 'material')
  i656.center = new pc.Vec3( i657[4], i657[5], i657[6] )
  i656.radius = i657[7]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i659 = data
  i658.mass = i659[0]
  i658.drag = i659[1]
  i658.angularDrag = i659[2]
  i658.useGravity = !!i659[3]
  i658.isKinematic = !!i659[4]
  i658.constraints = i659[5]
  i658.maxAngularVelocity = i659[6]
  i658.collisionDetectionMode = i659[7]
  i658.interpolation = i659[8]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i661 = data
  i660.enabled = !!i661[0]
  request.r(i661[1], i661[2], 0, i660, 'sharedMaterial')
  var i663 = i661[3]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sharedMaterials = i662
  i660.receiveShadows = !!i661[4]
  i660.shadowCastingMode = i661[5]
  i660.sortingLayerID = i661[6]
  i660.sortingOrder = i661[7]
  i660.lightmapIndex = i661[8]
  i660.lightmapSceneIndex = i661[9]
  i660.lightmapScaleOffset = new pc.Vec4( i661[10], i661[11], i661[12], i661[13] )
  i660.lightProbeUsage = i661[14]
  i660.reflectionProbeUsage = i661[15]
  var i665 = i661[16]
  var i664 = []
  for(var i = 0; i < i665.length; i += 3) {
    i664.push( new pc.Vec3( i665[i + 0], i665[i + 1], i665[i + 2] ) );
  }
  i660.positions = i664
  i660.positionCount = i661[17]
  i660.time = i661[18]
  i660.startWidth = i661[19]
  i660.endWidth = i661[20]
  i660.widthMultiplier = i661[21]
  i660.autodestruct = !!i661[22]
  i660.emitting = !!i661[23]
  i660.numCornerVertices = i661[24]
  i660.numCapVertices = i661[25]
  i660.minVertexDistance = i661[26]
  i660.colorGradient = i661[27] ? new pc.ColorGradient(i661[27][0], i661[27][1], i661[27][2]) : null
  i660.startColor = new pc.Color(i661[28], i661[29], i661[30], i661[31])
  i660.endColor = new pc.Color(i661[32], i661[33], i661[34], i661[35])
  i660.generateLightingData = !!i661[36]
  i660.textureMode = i661[37]
  i660.alignment = i661[38]
  i660.widthCurve = new pc.AnimationCurve( { keys_flow: i661[39] } )
  return i660
}

Deserializers["BallCollisionSound"] = function (request, data, root) {
  var i668 = root || request.c( 'BallCollisionSound' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, '_audioSource')
  request.r(i669[2], i669[3], 0, i668, '_collisionSound')
  i668._minImpactSpeed = i669[4]
  i668._volumeScale = i669[5]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'clip')
  request.r(i671[2], i671[3], 0, i670, 'outputAudioMixerGroup')
  i670.playOnAwake = !!i671[4]
  i670.loop = !!i671[5]
  i670.time = i671[6]
  i670.volume = i671[7]
  i670.pitch = i671[8]
  i670.enabled = !!i671[9]
  return i670
}

Deserializers["RotateRing"] = function (request, data, root) {
  var i672 = root || request.c( 'RotateRing' )
  var i673 = data
  i672._rotationSpeed = i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i675 = data
  i674.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i675[0], i674.main)
  i674.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i675[1], i674.colorBySpeed)
  i674.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i675[2], i674.colorOverLifetime)
  i674.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i675[3], i674.emission)
  i674.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i675[4], i674.rotationBySpeed)
  i674.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i675[5], i674.rotationOverLifetime)
  i674.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i675[6], i674.shape)
  i674.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i675[7], i674.sizeBySpeed)
  i674.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i675[8], i674.sizeOverLifetime)
  i674.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i675[9], i674.textureSheetAnimation)
  i674.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i675[10], i674.velocityOverLifetime)
  i674.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i675[11], i674.noise)
  i674.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i675[12], i674.inheritVelocity)
  i674.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i675[13], i674.forceOverLifetime)
  i674.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i675[14], i674.limitVelocityOverLifetime)
  i674.useAutoRandomSeed = !!i675[15]
  i674.randomSeed = i675[16]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemMain()
  var i677 = data
  i676.duration = i677[0]
  i676.loop = !!i677[1]
  i676.prewarm = !!i677[2]
  i676.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.startDelay)
  i676.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[4], i676.startLifetime)
  i676.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[5], i676.startSpeed)
  i676.startSize3D = !!i677[6]
  i676.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[7], i676.startSizeX)
  i676.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[8], i676.startSizeY)
  i676.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[9], i676.startSizeZ)
  i676.startRotation3D = !!i677[10]
  i676.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[11], i676.startRotationX)
  i676.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[12], i676.startRotationY)
  i676.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[13], i676.startRotationZ)
  i676.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i677[14], i676.startColor)
  i676.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[15], i676.gravityModifier)
  i676.simulationSpace = i677[16]
  request.r(i677[17], i677[18], 0, i676, 'customSimulationSpace')
  i676.simulationSpeed = i677[19]
  i676.useUnscaledTime = !!i677[20]
  i676.scalingMode = i677[21]
  i676.playOnAwake = !!i677[22]
  i676.maxParticles = i677[23]
  i676.emitterVelocityMode = i677[24]
  i676.stopAction = i677[25]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i678 = root || new pc.MinMaxCurve()
  var i679 = data
  i678.mode = i679[0]
  i678.curveMin = new pc.AnimationCurve( { keys_flow: i679[1] } )
  i678.curveMax = new pc.AnimationCurve( { keys_flow: i679[2] } )
  i678.curveMultiplier = i679[3]
  i678.constantMin = i679[4]
  i678.constantMax = i679[5]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i680 = root || new pc.MinMaxGradient()
  var i681 = data
  i680.mode = i681[0]
  i680.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i681[1], i680.gradientMin)
  i680.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i681[2], i680.gradientMax)
  i680.colorMin = new pc.Color(i681[3], i681[4], i681[5], i681[6])
  i680.colorMax = new pc.Color(i681[7], i681[8], i681[9], i681[10])
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i683 = data
  i682.mode = i683[0]
  var i685 = i683[1]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i685[i + 0]) );
  }
  i682.colorKeys = i684
  var i687 = i683[2]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i687[i + 0]) );
  }
  i682.alphaKeys = i686
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i691 = data
  i690.color = new pc.Color(i691[0], i691[1], i691[2], i691[3])
  i690.time = i691[4]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i695 = data
  i694.alpha = i695[0]
  i694.time = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemColorBySpeed()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i697[1], i696.color)
  i696.range = new pc.Vec2( i697[2], i697[3] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemColorOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i699[1], i698.color)
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemEmitter()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[1], i700.rateOverTime)
  i700.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.rateOverDistance)
  var i703 = i701[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i703[i + 0]) );
  }
  i700.bursts = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemBurst()
  var i707 = data
  i706.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[0], i706.count)
  i706.cycleCount = i707[1]
  i706.minCount = i707[2]
  i706.maxCount = i707[3]
  i706.repeatInterval = i707[4]
  i706.time = i707[5]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemRotationBySpeed()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.separateAxes = !!i709[4]
  i708.range = new pc.Vec2( i709[5], i709[6] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemRotationOverLifetime()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.x)
  i710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.y)
  i710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.z)
  i710.separateAxes = !!i711[4]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemShape()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.shapeType = i713[1]
  i712.randomDirectionAmount = i713[2]
  i712.sphericalDirectionAmount = i713[3]
  i712.randomPositionAmount = i713[4]
  i712.alignToDirection = !!i713[5]
  i712.radius = i713[6]
  i712.radiusMode = i713[7]
  i712.radiusSpread = i713[8]
  i712.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[9], i712.radiusSpeed)
  i712.radiusThickness = i713[10]
  i712.angle = i713[11]
  i712.length = i713[12]
  i712.boxThickness = new pc.Vec3( i713[13], i713[14], i713[15] )
  i712.meshShapeType = i713[16]
  request.r(i713[17], i713[18], 0, i712, 'mesh')
  request.r(i713[19], i713[20], 0, i712, 'meshRenderer')
  request.r(i713[21], i713[22], 0, i712, 'skinnedMeshRenderer')
  i712.useMeshMaterialIndex = !!i713[23]
  i712.meshMaterialIndex = i713[24]
  i712.useMeshColors = !!i713[25]
  i712.normalOffset = i713[26]
  i712.arc = i713[27]
  i712.arcMode = i713[28]
  i712.arcSpread = i713[29]
  i712.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[30], i712.arcSpeed)
  i712.donutRadius = i713[31]
  i712.position = new pc.Vec3( i713[32], i713[33], i713[34] )
  i712.rotation = new pc.Vec3( i713[35], i713[36], i713[37] )
  i712.scale = new pc.Vec3( i713[38], i713[39], i713[40] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemSizeBySpeed()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.x)
  i714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.y)
  i714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.z)
  i714.separateAxes = !!i715[4]
  i714.range = new pc.Vec2( i715[5], i715[6] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemSizeOverLifetime()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.x)
  i716.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.y)
  i716.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.z)
  i716.separateAxes = !!i717[4]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.mode = i719[1]
  i718.animation = i719[2]
  i718.numTilesX = i719[3]
  i718.numTilesY = i719[4]
  i718.useRandomRow = !!i719[5]
  i718.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[6], i718.frameOverTime)
  i718.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[7], i718.startFrame)
  i718.cycleCount = i719[8]
  i718.rowIndex = i719[9]
  i718.flipU = i719[10]
  i718.flipV = i719[11]
  i718.spriteCount = i719[12]
  var i721 = i719[13]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.sprites = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[4], i724.radial)
  i724.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[5], i724.speedModifier)
  i724.space = i725[6]
  i724.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[7], i724.orbitalX)
  i724.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[8], i724.orbitalY)
  i724.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[9], i724.orbitalZ)
  i724.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[10], i724.orbitalOffsetX)
  i724.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[11], i724.orbitalOffsetY)
  i724.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[12], i724.orbitalOffsetZ)
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemNoise()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.separateAxes = !!i727[1]
  i726.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.strengthX)
  i726.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.strengthY)
  i726.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[4], i726.strengthZ)
  i726.frequency = i727[5]
  i726.damping = !!i727[6]
  i726.octaveCount = i727[7]
  i726.octaveMultiplier = i727[8]
  i726.octaveScale = i727[9]
  i726.quality = i727[10]
  i726.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[11], i726.scrollSpeed)
  i726.scrollSpeedMultiplier = i727[12]
  i726.remapEnabled = !!i727[13]
  i726.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[14], i726.remapX)
  i726.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[15], i726.remapY)
  i726.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[16], i726.remapZ)
  i726.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[17], i726.positionAmount)
  i726.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[18], i726.rotationAmount)
  i726.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[19], i726.sizeAmount)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemInheritVelocity()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.mode = i729[1]
  i728.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[2], i728.curve)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemForceOverLifetime()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[1], i730.x)
  i730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[2], i730.y)
  i730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[3], i730.z)
  i730.space = i731[4]
  i730.randomized = !!i731[5]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[1], i732.limit)
  i732.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[2], i732.limitX)
  i732.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.limitY)
  i732.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[4], i732.limitZ)
  i732.dampen = i733[5]
  i732.separateAxes = !!i733[6]
  i732.space = i733[7]
  i732.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[8], i732.drag)
  i732.multiplyDragByParticleSize = !!i733[9]
  i732.multiplyDragByParticleVelocity = !!i733[10]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i735 = data
  i734.enabled = !!i735[0]
  request.r(i735[1], i735[2], 0, i734, 'sharedMaterial')
  var i737 = i735[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.sharedMaterials = i736
  i734.receiveShadows = !!i735[4]
  i734.shadowCastingMode = i735[5]
  i734.sortingLayerID = i735[6]
  i734.sortingOrder = i735[7]
  i734.lightmapIndex = i735[8]
  i734.lightmapSceneIndex = i735[9]
  i734.lightmapScaleOffset = new pc.Vec4( i735[10], i735[11], i735[12], i735[13] )
  i734.lightProbeUsage = i735[14]
  i734.reflectionProbeUsage = i735[15]
  request.r(i735[16], i735[17], 0, i734, 'mesh')
  i734.meshCount = i735[18]
  i734.activeVertexStreamsCount = i735[19]
  i734.alignment = i735[20]
  i734.renderMode = i735[21]
  i734.sortMode = i735[22]
  i734.lengthScale = i735[23]
  i734.velocityScale = i735[24]
  i734.cameraVelocityScale = i735[25]
  i734.normalDirection = i735[26]
  i734.sortingFudge = i735[27]
  i734.minParticleSize = i735[28]
  i734.maxParticleSize = i735[29]
  i734.pivot = new pc.Vec3( i735[30], i735[31], i735[32] )
  request.r(i735[33], i735[34], 0, i734, 'trailMaterial')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i739 = data
  i738.useMotor = !!i739[0]
  i738.useLimits = !!i739[1]
  i738.useSpring = !!i739[2]
  i738.limits = request.d('UnityEngine.JointLimits', i739[3], i738.limits)
  i738.motor = request.d('UnityEngine.JointMotor', i739[4], i738.motor)
  i738.spring = request.d('UnityEngine.JointSpring', i739[5], i738.spring)
  request.r(i739[6], i739[7], 0, i738, 'connectedBody')
  i738.axis = new pc.Vec3( i739[8], i739[9], i739[10] )
  i738.anchor = new pc.Vec3( i739[11], i739[12], i739[13] )
  i738.connectedAnchor = new pc.Vec3( i739[14], i739[15], i739[16] )
  i738.autoConfigureConnectedAnchor = !!i739[17]
  i738.massScale = i739[18]
  i738.connectedMassScale = i739[19]
  i738.enableCollision = !!i739[20]
  i738.breakForce = i739[21]
  i738.breakTorque = i739[22]
  return i738
}

Deserializers["DunkDetector"] = function (request, data, root) {
  var i740 = root || request.c( 'DunkDetector' )
  var i741 = data
  i740._cleanupInterval = i741[0]
  i740._acceptWindow = i741[1]
  request.r(i741[2], i741[3], 0, i740, '_dunkParticles')
  request.r(i741[4], i741[5], 0, i740, '_perfectDunkParticles')
  request.r(i741[6], i741[7], 0, i740, '_audioSource')
  request.r(i741[8], i741[9], 0, i740, '_dunkSound')
  request.r(i741[10], i741[11], 0, i740, '_perfectDunkSound')
  i740._normalDunkScore = i741[12]
  i740._perfectDunkScore = i741[13]
  return i740
}

Deserializers["BasketRingMover"] = function (request, data, root) {
  var i742 = root || request.c( 'BasketRingMover' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'ringTransform')
  i742.minX = i743[2]
  i742.maxX = i743[3]
  i742.speed = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i745 = data
  i744.center = new pc.Vec3( i745[0], i745[1], i745[2] )
  i744.radius = i745[3]
  i744.height = i745[4]
  i744.direction = i745[5]
  i744.enabled = !!i745[6]
  i744.isTrigger = !!i745[7]
  request.r(i745[8], i745[9], 0, i744, 'material')
  return i744
}

Deserializers["RimTouch"] = function (request, data, root) {
  var i746 = root || request.c( 'RimTouch' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_detector')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i749 = data
  i748.enabled = !!i749[0]
  request.r(i749[1], i749[2], 0, i748, 'sharedMaterial')
  var i751 = i749[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.sharedMaterials = i750
  i748.receiveShadows = !!i749[4]
  i748.shadowCastingMode = i749[5]
  i748.sortingLayerID = i749[6]
  i748.sortingOrder = i749[7]
  i748.lightmapIndex = i749[8]
  i748.lightmapSceneIndex = i749[9]
  i748.lightmapScaleOffset = new pc.Vec4( i749[10], i749[11], i749[12], i749[13] )
  i748.lightProbeUsage = i749[14]
  i748.reflectionProbeUsage = i749[15]
  request.r(i749[16], i749[17], 0, i748, 'sharedMesh')
  var i753 = i749[18]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i748.bones = i752
  i748.updateWhenOffscreen = !!i749[19]
  i748.localBounds = i749[20]
  request.r(i749[21], i749[22], 0, i748, 'rootBone')
  var i755 = i749[23]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i755[i + 0]) );
  }
  i748.blendShapesWeights = i754
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i761 = data
  i760.weight = i761[0]
  return i760
}

Deserializers["DunkTriggerRelay"] = function (request, data, root) {
  var i762 = root || request.c( 'DunkTriggerRelay' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, '_detector')
  i762._isTop = !!i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i765 = data
  i764.enabled = !!i765[0]
  request.r(i765[1], i765[2], 0, i764, 'sharedMaterial')
  var i767 = i765[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i764.sharedMaterials = i766
  i764.receiveShadows = !!i765[4]
  i764.shadowCastingMode = i765[5]
  i764.sortingLayerID = i765[6]
  i764.sortingOrder = i765[7]
  i764.lightmapIndex = i765[8]
  i764.lightmapSceneIndex = i765[9]
  i764.lightmapScaleOffset = new pc.Vec4( i765[10], i765[11], i765[12], i765[13] )
  i764.lightProbeUsage = i765[14]
  i764.reflectionProbeUsage = i765[15]
  i764.color = new pc.Color(i765[16], i765[17], i765[18], i765[19])
  request.r(i765[20], i765[21], 0, i764, 'sprite')
  i764.flipX = !!i765[22]
  i764.flipY = !!i765[23]
  i764.drawMode = i765[24]
  i764.size = new pc.Vec2( i765[25], i765[26] )
  i764.tileMode = i765[27]
  i764.adaptiveModeThreshold = i765[28]
  i764.maskInteraction = i765[29]
  i764.spriteSortPoint = i765[30]
  return i764
}

Deserializers["BallDragAndThrow"] = function (request, data, root) {
  var i768 = root || request.c( 'BallDragAndThrow' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_camera')
  i768._ballLayer = UnityEngine.LayerMask.FromIntegerValue( i769[2] )
  request.r(i769[3], i769[4], 0, i768, '_touchTrail')
  request.r(i769[5], i769[6], 0, i768, '_audioSource')
  request.r(i769[7], i769[8], 0, i768, '_clickSound')
  request.r(i769[9], i769[10], 0, i768, '_releaseSound')
  i768._maxLaunchForce = i769[11]
  i768._dragSensitivity = i769[12]
  i768._upwardBiasFactor = i769[13]
  i768._gentleFactor = i769[14]
  return i768
}

Deserializers["GameManager"] = function (request, data, root) {
  var i770 = root || request.c( 'GameManager' )
  var i771 = data
  i770._gameDuration = i771[0]
  request.r(i771[1], i771[2], 0, i770, '_highestText')
  request.r(i771[3], i771[4], 0, i770, '_timeText')
  request.r(i771[5], i771[6], 0, i770, '_scoreText')
  request.r(i771[7], i771[8], 0, i770, '_perfectPopup')
  i770._perfectPopupDuration = i771[9]
  i770._highscoreKey = i771[10]
  request.r(i771[11], i771[12], 0, i770, '_startPanel')
  request.r(i771[13], i771[14], 0, i770, '_endPanel')
  request.r(i771[15], i771[16], 0, i770, '_startButton')
  request.r(i771[17], i771[18], 0, i770, '_retryButton')
  request.r(i771[19], i771[20], 0, i770, '_endScoreText')
  request.r(i771[21], i771[22], 0, i770, '_moveRingButton')
  request.r(i771[23], i771[24], 0, i770, '_basketRingMover')
  request.r(i771[25], i771[26], 0, i770, '_openBallSelectButton')
  request.r(i771[27], i771[28], 0, i770, '_ballSelectionPanel')
  request.r(i771[29], i771[30], 0, i770, '_ballWheelController')
  request.r(i771[31], i771[32], 0, i770, '_audioSource')
  request.r(i771[33], i771[34], 0, i770, '_buttonClickSound')
  request.r(i771[35], i771[36], 0, i770, '_gameCompleteSound')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i773 = data
  i772.pivot = new pc.Vec2( i773[0], i773[1] )
  i772.anchorMin = new pc.Vec2( i773[2], i773[3] )
  i772.anchorMax = new pc.Vec2( i773[4], i773[5] )
  i772.sizeDelta = new pc.Vec2( i773[6], i773[7] )
  i772.anchoredPosition3D = new pc.Vec3( i773[8], i773[9], i773[10] )
  i772.rotation = new pc.Quat(i773[11], i773[12], i773[13], i773[14])
  i772.scale = new pc.Vec3( i773[15], i773[16], i773[17] )
  return i772
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TextMeshPro' )
  var i775 = data
  i774._SortingLayer = i775[0]
  i774._SortingLayerID = i775[1]
  i774._SortingOrder = i775[2]
  i774.m_hasFontAssetChanged = !!i775[3]
  request.r(i775[4], i775[5], 0, i774, 'm_renderer')
  i774.m_maskType = i775[6]
  i774.m_text = i775[7]
  i774.m_isRightToLeft = !!i775[8]
  request.r(i775[9], i775[10], 0, i774, 'm_fontAsset')
  request.r(i775[11], i775[12], 0, i774, 'm_sharedMaterial')
  var i777 = i775[13]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.m_fontSharedMaterials = i776
  request.r(i775[14], i775[15], 0, i774, 'm_fontMaterial')
  var i779 = i775[16]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i774.m_fontMaterials = i778
  i774.m_fontColor32 = UnityEngine.Color32.ConstructColor(i775[17], i775[18], i775[19], i775[20])
  i774.m_fontColor = new pc.Color(i775[21], i775[22], i775[23], i775[24])
  i774.m_enableVertexGradient = !!i775[25]
  i774.m_colorMode = i775[26]
  i774.m_fontColorGradient = request.d('TMPro.VertexGradient', i775[27], i774.m_fontColorGradient)
  request.r(i775[28], i775[29], 0, i774, 'm_fontColorGradientPreset')
  request.r(i775[30], i775[31], 0, i774, 'm_spriteAsset')
  i774.m_tintAllSprites = !!i775[32]
  request.r(i775[33], i775[34], 0, i774, 'm_StyleSheet')
  i774.m_TextStyleHashCode = i775[35]
  i774.m_overrideHtmlColors = !!i775[36]
  i774.m_faceColor = UnityEngine.Color32.ConstructColor(i775[37], i775[38], i775[39], i775[40])
  i774.m_fontSize = i775[41]
  i774.m_fontSizeBase = i775[42]
  i774.m_fontWeight = i775[43]
  i774.m_enableAutoSizing = !!i775[44]
  i774.m_fontSizeMin = i775[45]
  i774.m_fontSizeMax = i775[46]
  i774.m_fontStyle = i775[47]
  i774.m_HorizontalAlignment = i775[48]
  i774.m_VerticalAlignment = i775[49]
  i774.m_textAlignment = i775[50]
  i774.m_characterSpacing = i775[51]
  i774.m_wordSpacing = i775[52]
  i774.m_lineSpacing = i775[53]
  i774.m_lineSpacingMax = i775[54]
  i774.m_paragraphSpacing = i775[55]
  i774.m_charWidthMaxAdj = i775[56]
  i774.m_enableWordWrapping = !!i775[57]
  i774.m_wordWrappingRatios = i775[58]
  i774.m_overflowMode = i775[59]
  request.r(i775[60], i775[61], 0, i774, 'm_linkedTextComponent')
  request.r(i775[62], i775[63], 0, i774, 'parentLinkedComponent')
  i774.m_enableKerning = !!i775[64]
  i774.m_enableExtraPadding = !!i775[65]
  i774.checkPaddingRequired = !!i775[66]
  i774.m_isRichText = !!i775[67]
  i774.m_parseCtrlCharacters = !!i775[68]
  i774.m_isOrthographic = !!i775[69]
  i774.m_isCullingEnabled = !!i775[70]
  i774.m_horizontalMapping = i775[71]
  i774.m_verticalMapping = i775[72]
  i774.m_uvLineOffset = i775[73]
  i774.m_geometrySortingOrder = i775[74]
  i774.m_IsTextObjectScaleStatic = !!i775[75]
  i774.m_VertexBufferAutoSizeReduction = !!i775[76]
  i774.m_useMaxVisibleDescender = !!i775[77]
  i774.m_pageToDisplay = i775[78]
  i774.m_margin = new pc.Vec4( i775[79], i775[80], i775[81], i775[82] )
  i774.m_isUsingLegacyAnimationComponent = !!i775[83]
  i774.m_isVolumetricText = !!i775[84]
  request.r(i775[85], i775[86], 0, i774, 'm_Material')
  i774.m_Maskable = !!i775[87]
  i774.m_Color = new pc.Color(i775[88], i775[89], i775[90], i775[91])
  i774.m_RaycastTarget = !!i775[92]
  i774.m_RaycastPadding = new pc.Vec4( i775[93], i775[94], i775[95], i775[96] )
  return i774
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.VertexGradient' )
  var i781 = data
  i780.topLeft = new pc.Color(i781[0], i781[1], i781[2], i781[3])
  i780.topRight = new pc.Color(i781[4], i781[5], i781[6], i781[7])
  i780.bottomLeft = new pc.Color(i781[8], i781[9], i781[10], i781[11])
  i780.bottomRight = new pc.Color(i781[12], i781[13], i781[14], i781[15])
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i783 = data
  i782.enabled = !!i783[0]
  i782.planeDistance = i783[1]
  i782.referencePixelsPerUnit = i783[2]
  i782.isFallbackOverlay = !!i783[3]
  i782.renderMode = i783[4]
  i782.renderOrder = i783[5]
  i782.sortingLayerName = i783[6]
  i782.sortingOrder = i783[7]
  i782.scaleFactor = i783[8]
  request.r(i783[9], i783[10], 0, i782, 'worldCamera')
  i782.overrideSorting = !!i783[11]
  i782.pixelPerfect = !!i783[12]
  i782.targetDisplay = i783[13]
  i782.overridePixelPerfect = !!i783[14]
  return i782
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i785 = data
  i784.m_UiScaleMode = i785[0]
  i784.m_ReferencePixelsPerUnit = i785[1]
  i784.m_ScaleFactor = i785[2]
  i784.m_ReferenceResolution = new pc.Vec2( i785[3], i785[4] )
  i784.m_ScreenMatchMode = i785[5]
  i784.m_MatchWidthOrHeight = i785[6]
  i784.m_PhysicalUnit = i785[7]
  i784.m_FallbackScreenDPI = i785[8]
  i784.m_DefaultSpriteDPI = i785[9]
  i784.m_DynamicPixelsPerUnit = i785[10]
  i784.m_PresetInfoIsWorld = !!i785[11]
  return i784
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i787 = data
  i786.m_IgnoreReversedGraphics = !!i787[0]
  i786.m_BlockingObjects = i787[1]
  i786.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i787[2] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i789 = data
  i788.cullTransparentMesh = !!i789[0]
  return i788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Image' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Sprite')
  i790.m_Type = i791[2]
  i790.m_PreserveAspect = !!i791[3]
  i790.m_FillCenter = !!i791[4]
  i790.m_FillMethod = i791[5]
  i790.m_FillAmount = i791[6]
  i790.m_FillClockwise = !!i791[7]
  i790.m_FillOrigin = i791[8]
  i790.m_UseSpriteMesh = !!i791[9]
  i790.m_PixelsPerUnitMultiplier = i791[10]
  request.r(i791[11], i791[12], 0, i790, 'm_Material')
  i790.m_Maskable = !!i791[13]
  i790.m_Color = new pc.Color(i791[14], i791[15], i791[16], i791[17])
  i790.m_RaycastTarget = !!i791[18]
  i790.m_RaycastPadding = new pc.Vec4( i791[19], i791[20], i791[21], i791[22] )
  return i790
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Button' )
  var i793 = data
  i792.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i793[0], i792.m_OnClick)
  i792.m_Navigation = request.d('UnityEngine.UI.Navigation', i793[1], i792.m_Navigation)
  i792.m_Transition = i793[2]
  i792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i793[3], i792.m_Colors)
  i792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i793[4], i792.m_SpriteState)
  i792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i793[5], i792.m_AnimationTriggers)
  i792.m_Interactable = !!i793[6]
  request.r(i793[7], i793[8], 0, i792, 'm_TargetGraphic')
  return i792
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i795 = data
  i794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i795[0], i794.m_PersistentCalls)
  return i794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('UnityEngine.Events.PersistentCall', i799[i + 0]));
  }
  i796.m_Calls = i798
  return i796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_Target')
  i802.m_TargetAssemblyTypeName = i803[2]
  i802.m_MethodName = i803[3]
  i802.m_Mode = i803[4]
  i802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i803[5], i802.m_Arguments)
  i802.m_CallState = i803[6]
  return i802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i805 = data
  i804.m_Mode = i805[0]
  i804.m_WrapAround = !!i805[1]
  request.r(i805[2], i805[3], 0, i804, 'm_SelectOnUp')
  request.r(i805[4], i805[5], 0, i804, 'm_SelectOnDown')
  request.r(i805[6], i805[7], 0, i804, 'm_SelectOnLeft')
  request.r(i805[8], i805[9], 0, i804, 'm_SelectOnRight')
  return i804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i807 = data
  i806.m_NormalColor = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.m_HighlightedColor = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.m_PressedColor = new pc.Color(i807[8], i807[9], i807[10], i807[11])
  i806.m_SelectedColor = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  i806.m_DisabledColor = new pc.Color(i807[16], i807[17], i807[18], i807[19])
  i806.m_ColorMultiplier = i807[20]
  i806.m_FadeDuration = i807[21]
  return i806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_HighlightedSprite')
  request.r(i809[2], i809[3], 0, i808, 'm_PressedSprite')
  request.r(i809[4], i809[5], 0, i808, 'm_SelectedSprite')
  request.r(i809[6], i809[7], 0, i808, 'm_DisabledSprite')
  return i808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i811 = data
  i810.m_NormalTrigger = i811[0]
  i810.m_HighlightedTrigger = i811[1]
  i810.m_PressedTrigger = i811[2]
  i810.m_SelectedTrigger = i811[3]
  i810.m_DisabledTrigger = i811[4]
  return i810
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i813 = data
  i812.m_hasFontAssetChanged = !!i813[0]
  request.r(i813[1], i813[2], 0, i812, 'm_baseMaterial')
  i812.m_maskOffset = new pc.Vec4( i813[3], i813[4], i813[5], i813[6] )
  i812.m_text = i813[7]
  i812.m_isRightToLeft = !!i813[8]
  request.r(i813[9], i813[10], 0, i812, 'm_fontAsset')
  request.r(i813[11], i813[12], 0, i812, 'm_sharedMaterial')
  var i815 = i813[13]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.m_fontSharedMaterials = i814
  request.r(i813[14], i813[15], 0, i812, 'm_fontMaterial')
  var i817 = i813[16]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i812.m_fontMaterials = i816
  i812.m_fontColor32 = UnityEngine.Color32.ConstructColor(i813[17], i813[18], i813[19], i813[20])
  i812.m_fontColor = new pc.Color(i813[21], i813[22], i813[23], i813[24])
  i812.m_enableVertexGradient = !!i813[25]
  i812.m_colorMode = i813[26]
  i812.m_fontColorGradient = request.d('TMPro.VertexGradient', i813[27], i812.m_fontColorGradient)
  request.r(i813[28], i813[29], 0, i812, 'm_fontColorGradientPreset')
  request.r(i813[30], i813[31], 0, i812, 'm_spriteAsset')
  i812.m_tintAllSprites = !!i813[32]
  request.r(i813[33], i813[34], 0, i812, 'm_StyleSheet')
  i812.m_TextStyleHashCode = i813[35]
  i812.m_overrideHtmlColors = !!i813[36]
  i812.m_faceColor = UnityEngine.Color32.ConstructColor(i813[37], i813[38], i813[39], i813[40])
  i812.m_fontSize = i813[41]
  i812.m_fontSizeBase = i813[42]
  i812.m_fontWeight = i813[43]
  i812.m_enableAutoSizing = !!i813[44]
  i812.m_fontSizeMin = i813[45]
  i812.m_fontSizeMax = i813[46]
  i812.m_fontStyle = i813[47]
  i812.m_HorizontalAlignment = i813[48]
  i812.m_VerticalAlignment = i813[49]
  i812.m_textAlignment = i813[50]
  i812.m_characterSpacing = i813[51]
  i812.m_wordSpacing = i813[52]
  i812.m_lineSpacing = i813[53]
  i812.m_lineSpacingMax = i813[54]
  i812.m_paragraphSpacing = i813[55]
  i812.m_charWidthMaxAdj = i813[56]
  i812.m_enableWordWrapping = !!i813[57]
  i812.m_wordWrappingRatios = i813[58]
  i812.m_overflowMode = i813[59]
  request.r(i813[60], i813[61], 0, i812, 'm_linkedTextComponent')
  request.r(i813[62], i813[63], 0, i812, 'parentLinkedComponent')
  i812.m_enableKerning = !!i813[64]
  i812.m_enableExtraPadding = !!i813[65]
  i812.checkPaddingRequired = !!i813[66]
  i812.m_isRichText = !!i813[67]
  i812.m_parseCtrlCharacters = !!i813[68]
  i812.m_isOrthographic = !!i813[69]
  i812.m_isCullingEnabled = !!i813[70]
  i812.m_horizontalMapping = i813[71]
  i812.m_verticalMapping = i813[72]
  i812.m_uvLineOffset = i813[73]
  i812.m_geometrySortingOrder = i813[74]
  i812.m_IsTextObjectScaleStatic = !!i813[75]
  i812.m_VertexBufferAutoSizeReduction = !!i813[76]
  i812.m_useMaxVisibleDescender = !!i813[77]
  i812.m_pageToDisplay = i813[78]
  i812.m_margin = new pc.Vec4( i813[79], i813[80], i813[81], i813[82] )
  i812.m_isUsingLegacyAnimationComponent = !!i813[83]
  i812.m_isVolumetricText = !!i813[84]
  request.r(i813[85], i813[86], 0, i812, 'm_Material')
  i812.m_Maskable = !!i813[87]
  i812.m_Color = new pc.Color(i813[88], i813[89], i813[90], i813[91])
  i812.m_RaycastTarget = !!i813[92]
  i812.m_RaycastPadding = new pc.Vec4( i813[93], i813[94], i813[95], i813[96] )
  return i812
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_ObjectArgument')
  i818.m_ObjectArgumentAssemblyTypeName = i819[2]
  i818.m_IntArgument = i819[3]
  i818.m_FloatArgument = i819[4]
  i818.m_StringArgument = i819[5]
  i818.m_BoolArgument = !!i819[6]
  return i818
}

Deserializers["BallItem"] = function (request, data, root) {
  var i820 = root || request.c( 'BallItem' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'meshRenderer')
  request.r(i821[2], i821[3], 0, i820, 'outlineObject')
  i820.selectedScale = i821[4]
  return i820
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Texture')
  i822.m_UVRect = UnityEngine.Rect.MinMaxRect(i823[2], i823[3], i823[4], i823[5])
  request.r(i823[6], i823[7], 0, i822, 'm_Material')
  i822.m_Maskable = !!i823[8]
  i822.m_Color = new pc.Color(i823[9], i823[10], i823[11], i823[12])
  i822.m_RaycastTarget = !!i823[13]
  i822.m_RaycastPadding = new pc.Vec4( i823[14], i823[15], i823[16], i823[17] )
  return i822
}

Deserializers["BallWheelController"] = function (request, data, root) {
  var i824 = root || request.c( 'BallWheelController' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'wheelContainer')
  request.r(i825[2], i825[3], 0, i824, 'okButton')
  request.r(i825[4], i825[5], 0, i824, 'randomButton')
  i824.radius = i825[6]
  i824.zOffset = i825[7]
  i824.startAngleDeg = i825[8]
  i824.zRotationPerItem = i825[9]
  i824.angularFriction = i825[10]
  i824.snapSpeed = i825[11]
  i824.minFlingVelocity = i825[12]
  return i824
}

Deserializers["UIMovement"] = function (request, data, root) {
  var i826 = root || request.c( 'UIMovement' )
  var i827 = data
  i826.moveDistance = i827[0]
  i826.speed = i827[1]
  return i826
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'm_FirstSelected')
  i828.m_sendNavigationEvents = !!i829[2]
  i828.m_DragThreshold = i829[3]
  return i828
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i831 = data
  i830.m_HorizontalAxis = i831[0]
  i830.m_VerticalAxis = i831[1]
  i830.m_SubmitButton = i831[2]
  i830.m_CancelButton = i831[3]
  i830.m_InputActionsPerSecond = i831[4]
  i830.m_RepeatDelay = i831[5]
  i830.m_ForceModuleActive = !!i831[6]
  i830.m_SendPointerHoverToParent = !!i831[7]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i833 = data
  i832.ambientIntensity = i833[0]
  i832.reflectionIntensity = i833[1]
  i832.ambientMode = i833[2]
  i832.ambientLight = new pc.Color(i833[3], i833[4], i833[5], i833[6])
  i832.ambientSkyColor = new pc.Color(i833[7], i833[8], i833[9], i833[10])
  i832.ambientGroundColor = new pc.Color(i833[11], i833[12], i833[13], i833[14])
  i832.ambientEquatorColor = new pc.Color(i833[15], i833[16], i833[17], i833[18])
  i832.fogColor = new pc.Color(i833[19], i833[20], i833[21], i833[22])
  i832.fogEndDistance = i833[23]
  i832.fogStartDistance = i833[24]
  i832.fogDensity = i833[25]
  i832.fog = !!i833[26]
  request.r(i833[27], i833[28], 0, i832, 'skybox')
  i832.fogMode = i833[29]
  var i835 = i833[30]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i835[i + 0]) );
  }
  i832.lightmaps = i834
  i832.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i833[31], i832.lightProbes)
  i832.lightmapsMode = i833[32]
  i832.mixedBakeMode = i833[33]
  i832.environmentLightingMode = i833[34]
  i832.ambientProbe = new pc.SphericalHarmonicsL2(i833[35])
  i832.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i833[36])
  i832.useReferenceAmbientProbe = !!i833[37]
  request.r(i833[38], i833[39], 0, i832, 'customReflection')
  request.r(i833[40], i833[41], 0, i832, 'defaultReflection')
  i832.defaultReflectionMode = i833[42]
  i832.defaultReflectionResolution = i833[43]
  i832.sunLightObjectId = i833[44]
  i832.pixelLightCount = i833[45]
  i832.defaultReflectionHDR = !!i833[46]
  i832.hasLightDataAsset = !!i833[47]
  i832.hasManualGenerate = !!i833[48]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'lightmapColor')
  request.r(i839[2], i839[3], 0, i838, 'lightmapDirection')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i840 = root || new UnityEngine.LightProbes()
  var i841 = data
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i847 = data
  i846.name = i847[0]
  i846.bounciness = i847[1]
  i846.dynamicFriction = i847[2]
  i846.staticFriction = i847[3]
  i846.frictionCombine = i847[4]
  i846.bounceCombine = i847[5]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i851[i + 0]));
  }
  i848.ShaderCompilationErrors = i850
  i848.name = i849[1]
  i848.guid = i849[2]
  var i853 = i849[3]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.shaderDefinedKeywords = i852
  var i855 = i849[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i855[i + 0]) );
  }
  i848.passes = i854
  var i857 = i849[5]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i857[i + 0]) );
  }
  i848.usePasses = i856
  var i859 = i849[6]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i859[i + 0]) );
  }
  i848.defaultParameterValues = i858
  request.r(i849[7], i849[8], 0, i848, 'unityFallbackShader')
  i848.readDepth = !!i849[9]
  i848.isCreatedByShaderGraph = !!i849[10]
  i848.compiled = !!i849[11]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i863 = data
  i862.shaderName = i863[0]
  i862.errorMessage = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i868 = root || new pc.UnityShaderPass()
  var i869 = data
  i868.id = i869[0]
  i868.subShaderIndex = i869[1]
  i868.name = i869[2]
  i868.passType = i869[3]
  i868.grabPassTextureName = i869[4]
  i868.usePass = !!i869[5]
  i868.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[6], i868.zTest)
  i868.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[7], i868.zWrite)
  i868.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[8], i868.culling)
  i868.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[9], i868.blending)
  i868.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[10], i868.alphaBlending)
  i868.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[11], i868.colorWriteMask)
  i868.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[12], i868.offsetUnits)
  i868.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[13], i868.offsetFactor)
  i868.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[14], i868.stencilRef)
  i868.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[15], i868.stencilReadMask)
  i868.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[16], i868.stencilWriteMask)
  i868.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[17], i868.stencilOp)
  i868.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[18], i868.stencilOpFront)
  i868.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[19], i868.stencilOpBack)
  var i871 = i869[20]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i871[i + 0]) );
  }
  i868.tags = i870
  var i873 = i869[21]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.passDefinedKeywords = i872
  var i875 = i869[22]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i875[i + 0]) );
  }
  i868.passDefinedKeywordGroups = i874
  var i877 = i869[23]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i877[i + 0]) );
  }
  i868.variants = i876
  var i879 = i869[24]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i879[i + 0]) );
  }
  i868.excludedVariants = i878
  i868.hasDepthReader = !!i869[25]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i881 = data
  i880.val = i881[0]
  i880.name = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i883 = data
  i882.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[0], i882.src)
  i882.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[1], i882.dst)
  i882.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[2], i882.op)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i885 = data
  i884.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[0], i884.pass)
  i884.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[1], i884.fail)
  i884.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[2], i884.zFail)
  i884.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[3], i884.comp)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i892.keywords = i894
  i892.hasDiscard = !!i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i899 = data
  i898.passId = i899[0]
  i898.subShaderIndex = i899[1]
  var i901 = i899[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i898.keywords = i900
  i898.vertexProgram = i899[3]
  i898.fragmentProgram = i899[4]
  i898.exportedForWebGl2 = !!i899[5]
  i898.readDepth = !!i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'shader')
  i904.pass = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i909 = data
  i908.name = i909[0]
  i908.type = i909[1]
  i908.value = new pc.Vec4( i909[2], i909[3], i909[4], i909[5] )
  i908.textureValue = i909[6]
  i908.shaderPropertyFlag = i909[7]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i911 = data
  i910.name = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'texture')
  i910.aabb = i911[3]
  i910.vertices = i911[4]
  i910.triangles = i911[5]
  i910.textureRect = UnityEngine.Rect.MinMaxRect(i911[6], i911[7], i911[8], i911[9])
  i910.packedRect = UnityEngine.Rect.MinMaxRect(i911[10], i911[11], i911[12], i911[13])
  i910.border = new pc.Vec4( i911[14], i911[15], i911[16], i911[17] )
  i910.transparency = i911[18]
  i910.bounds = i911[19]
  i910.pixelsPerUnit = i911[20]
  i910.textureWidth = i911[21]
  i910.textureHeight = i911[22]
  i910.nativeSize = new pc.Vec2( i911[23], i911[24] )
  i910.pivot = new pc.Vec2( i911[25], i911[26] )
  i910.textureRectOffset = new pc.Vec2( i911[27], i911[28] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i913 = data
  i912.name = i913[0]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i915 = data
  i914.name = i915[0]
  i914.ascent = i915[1]
  i914.originalLineHeight = i915[2]
  i914.fontSize = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i917[i + 0]) );
  }
  i914.characterInfo = i916
  request.r(i915[5], i915[6], 0, i914, 'texture')
  i914.originalFontSize = i915[7]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i921 = data
  i920.index = i921[0]
  i920.advance = i921[1]
  i920.bearing = i921[2]
  i920.glyphWidth = i921[3]
  i920.glyphHeight = i921[4]
  i920.minX = i921[5]
  i920.maxX = i921[6]
  i920.minY = i921[7]
  i920.maxY = i921[8]
  i920.uvBottomLeftX = i921[9]
  i920.uvBottomLeftY = i921[10]
  i920.uvBottomRightX = i921[11]
  i920.uvBottomRightY = i921[12]
  i920.uvTopLeftX = i921[13]
  i920.uvTopLeftY = i921[14]
  i920.uvTopRightX = i921[15]
  i920.uvTopRightY = i921[16]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i923 = data
  i922.name = i923[0]
  i922.bytes64 = i923[1]
  i922.data = i923[2]
  return i922
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i925 = data
  i924.hashCode = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'material')
  i924.materialHashCode = i925[3]
  request.r(i925[4], i925[5], 0, i924, 'atlas')
  i924.normalStyle = i925[6]
  i924.normalSpacingOffset = i925[7]
  i924.boldStyle = i925[8]
  i924.boldSpacing = i925[9]
  i924.italicStyle = i925[10]
  i924.tabSize = i925[11]
  i924.m_Version = i925[12]
  i924.m_SourceFontFileGUID = i925[13]
  request.r(i925[14], i925[15], 0, i924, 'm_SourceFontFile_EditorRef')
  request.r(i925[16], i925[17], 0, i924, 'm_SourceFontFile')
  i924.m_AtlasPopulationMode = i925[18]
  i924.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i925[19], i924.m_FaceInfo)
  var i927 = i925[20]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('UnityEngine.TextCore.Glyph', i927[i + 0]));
  }
  i924.m_GlyphTable = i926
  var i929 = i925[21]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('TMPro.TMP_Character', i929[i + 0]));
  }
  i924.m_CharacterTable = i928
  var i931 = i925[22]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i924.m_AtlasTextures = i930
  i924.m_AtlasTextureIndex = i925[23]
  i924.m_IsMultiAtlasTexturesEnabled = !!i925[24]
  i924.m_ClearDynamicDataOnBuild = !!i925[25]
  var i933 = i925[26]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('UnityEngine.TextCore.GlyphRect', i933[i + 0]));
  }
  i924.m_UsedGlyphRects = i932
  var i935 = i925[27]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('UnityEngine.TextCore.GlyphRect', i935[i + 0]));
  }
  i924.m_FreeGlyphRects = i934
  i924.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i925[28], i924.m_fontInfo)
  i924.m_AtlasWidth = i925[29]
  i924.m_AtlasHeight = i925[30]
  i924.m_AtlasPadding = i925[31]
  i924.m_AtlasRenderMode = i925[32]
  var i937 = i925[33]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.TMP_Glyph', i937[i + 0]));
  }
  i924.m_glyphInfoList = i936
  i924.m_KerningTable = request.d('TMPro.KerningTable', i925[34], i924.m_KerningTable)
  i924.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i925[35], i924.m_FontFeatureTable)
  var i939 = i925[36]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i924.fallbackFontAssets = i938
  var i941 = i925[37]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i924.m_FallbackFontAssetTable = i940
  i924.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i925[38], i924.m_CreationSettings)
  var i943 = i925[39]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('TMPro.TMP_FontWeightPair', i943[i + 0]) );
  }
  i924.m_FontWeightTable = i942
  var i945 = i925[40]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('TMPro.TMP_FontWeightPair', i945[i + 0]) );
  }
  i924.fontWeights = i944
  return i924
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i947 = data
  i946.m_FaceIndex = i947[0]
  i946.m_FamilyName = i947[1]
  i946.m_StyleName = i947[2]
  i946.m_PointSize = i947[3]
  i946.m_Scale = i947[4]
  i946.m_UnitsPerEM = i947[5]
  i946.m_LineHeight = i947[6]
  i946.m_AscentLine = i947[7]
  i946.m_CapLine = i947[8]
  i946.m_MeanLine = i947[9]
  i946.m_Baseline = i947[10]
  i946.m_DescentLine = i947[11]
  i946.m_SuperscriptOffset = i947[12]
  i946.m_SuperscriptSize = i947[13]
  i946.m_SubscriptOffset = i947[14]
  i946.m_SubscriptSize = i947[15]
  i946.m_UnderlineOffset = i947[16]
  i946.m_UnderlineThickness = i947[17]
  i946.m_StrikethroughOffset = i947[18]
  i946.m_StrikethroughThickness = i947[19]
  i946.m_TabWidth = i947[20]
  return i946
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i951 = data
  i950.m_Index = i951[0]
  i950.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i951[1], i950.m_Metrics)
  i950.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i951[2], i950.m_GlyphRect)
  i950.m_Scale = i951[3]
  i950.m_AtlasIndex = i951[4]
  i950.m_ClassDefinitionType = i951[5]
  return i950
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i953 = data
  i952.m_Width = i953[0]
  i952.m_Height = i953[1]
  i952.m_HorizontalBearingX = i953[2]
  i952.m_HorizontalBearingY = i953[3]
  i952.m_HorizontalAdvance = i953[4]
  return i952
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i955 = data
  i954.m_X = i955[0]
  i954.m_Y = i955[1]
  i954.m_Width = i955[2]
  i954.m_Height = i955[3]
  return i954
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_Character' )
  var i959 = data
  i958.m_ElementType = i959[0]
  i958.m_Unicode = i959[1]
  i958.m_GlyphIndex = i959[2]
  i958.m_Scale = i959[3]
  return i958
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i965 = data
  i964.Name = i965[0]
  i964.PointSize = i965[1]
  i964.Scale = i965[2]
  i964.CharacterCount = i965[3]
  i964.LineHeight = i965[4]
  i964.Baseline = i965[5]
  i964.Ascender = i965[6]
  i964.CapHeight = i965[7]
  i964.Descender = i965[8]
  i964.CenterLine = i965[9]
  i964.SuperscriptOffset = i965[10]
  i964.SubscriptOffset = i965[11]
  i964.SubSize = i965[12]
  i964.Underline = i965[13]
  i964.UnderlineThickness = i965[14]
  i964.strikethrough = i965[15]
  i964.strikethroughThickness = i965[16]
  i964.TabWidth = i965[17]
  i964.Padding = i965[18]
  i964.AtlasWidth = i965[19]
  i964.AtlasHeight = i965[20]
  return i964
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_Glyph' )
  var i969 = data
  i968.id = i969[0]
  i968.x = i969[1]
  i968.y = i969[2]
  i968.width = i969[3]
  i968.height = i969[4]
  i968.xOffset = i969[5]
  i968.yOffset = i969[6]
  i968.xAdvance = i969[7]
  i968.scale = i969[8]
  return i968
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.KerningTable' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.KerningPair', i973[i + 0]));
  }
  i970.kerningPairs = i972
  return i970
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.KerningPair' )
  var i977 = data
  i976.xOffset = i977[0]
  i976.m_FirstGlyph = i977[1]
  i976.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i977[2], i976.m_FirstGlyphAdjustments)
  i976.m_SecondGlyph = i977[3]
  i976.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i977[4], i976.m_SecondGlyphAdjustments)
  i976.m_IgnoreSpacingAdjustments = !!i977[5]
  return i976
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i979 = data
  var i981 = i979[0]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i981[i + 0]));
  }
  i978.m_GlyphPairAdjustmentRecords = i980
  return i978
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i985 = data
  i984.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i985[0], i984.m_FirstAdjustmentRecord)
  i984.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i985[1], i984.m_SecondAdjustmentRecord)
  i984.m_FeatureLookupFlags = i985[2]
  return i984
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i989 = data
  i988.sourceFontFileName = i989[0]
  i988.sourceFontFileGUID = i989[1]
  i988.pointSizeSamplingMode = i989[2]
  i988.pointSize = i989[3]
  i988.padding = i989[4]
  i988.packingMode = i989[5]
  i988.atlasWidth = i989[6]
  i988.atlasHeight = i989[7]
  i988.characterSetSelectionMode = i989[8]
  i988.characterSequence = i989[9]
  i988.referencedFontAssetGUID = i989[10]
  i988.referencedTextAssetGUID = i989[11]
  i988.fontStyle = i989[12]
  i988.fontStyleModifier = i989[13]
  i988.renderMode = i989[14]
  i988.includeFontFeatures = !!i989[15]
  return i988
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'regularTypeface')
  request.r(i993[2], i993[3], 0, i992, 'italicTypeface')
  return i992
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i995 = data
  i994.m_GlyphIndex = i995[0]
  i994.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i995[1], i994.m_GlyphValueRecord)
  return i994
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i997 = data
  i996.m_XPlacement = i997[0]
  i996.m_YPlacement = i997[1]
  i996.m_XAdvance = i997[2]
  i996.m_YAdvance = i997[3]
  return i996
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Settings' )
  var i999 = data
  i998.m_enableWordWrapping = !!i999[0]
  i998.m_enableKerning = !!i999[1]
  i998.m_enableExtraPadding = !!i999[2]
  i998.m_enableTintAllSprites = !!i999[3]
  i998.m_enableParseEscapeCharacters = !!i999[4]
  i998.m_EnableRaycastTarget = !!i999[5]
  i998.m_GetFontFeaturesAtRuntime = !!i999[6]
  i998.m_missingGlyphCharacter = i999[7]
  i998.m_warningsDisabled = !!i999[8]
  request.r(i999[9], i999[10], 0, i998, 'm_defaultFontAsset')
  i998.m_defaultFontAssetPath = i999[11]
  i998.m_defaultFontSize = i999[12]
  i998.m_defaultAutoSizeMinRatio = i999[13]
  i998.m_defaultAutoSizeMaxRatio = i999[14]
  i998.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i999[15], i999[16] )
  i998.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i999[17], i999[18] )
  i998.m_autoSizeTextContainer = !!i999[19]
  i998.m_IsTextObjectScaleStatic = !!i999[20]
  var i1001 = i999[21]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i998.m_fallbackFontAssets = i1000
  i998.m_matchMaterialPreset = !!i999[22]
  request.r(i999[23], i999[24], 0, i998, 'm_defaultSpriteAsset')
  i998.m_defaultSpriteAssetPath = i999[25]
  i998.m_enableEmojiSupport = !!i999[26]
  i998.m_MissingCharacterSpriteUnicode = i999[27]
  i998.m_defaultColorGradientPresetsPath = i999[28]
  request.r(i999[29], i999[30], 0, i998, 'm_defaultStyleSheet')
  i998.m_StyleSheetsResourcePath = i999[31]
  request.r(i999[32], i999[33], 0, i998, 'm_leadingCharacters')
  request.r(i999[34], i999[35], 0, i998, 'm_followingCharacters')
  i998.m_UseModernHangulLineBreakingRules = !!i999[36]
  return i998
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1003 = data
  i1002.hashCode = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'material')
  i1002.materialHashCode = i1003[3]
  request.r(i1003[4], i1003[5], 0, i1002, 'spriteSheet')
  var i1005 = i1003[6]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Sprite', i1005[i + 0]));
  }
  i1002.spriteInfoList = i1004
  var i1007 = i1003[7]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1002.fallbackSpriteAssets = i1006
  i1002.m_Version = i1003[8]
  i1002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1003[9], i1002.m_FaceInfo)
  var i1009 = i1003[10]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_SpriteCharacter', i1009[i + 0]));
  }
  i1002.m_SpriteCharacterTable = i1008
  var i1011 = i1003[11]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_SpriteGlyph', i1011[i + 0]));
  }
  i1002.m_SpriteGlyphTable = i1010
  return i1002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.hashCode = i1015[1]
  i1014.unicode = i1015[2]
  i1014.pivot = new pc.Vec2( i1015[3], i1015[4] )
  request.r(i1015[5], i1015[6], 0, i1014, 'sprite')
  i1014.id = i1015[7]
  i1014.x = i1015[8]
  i1014.y = i1015[9]
  i1014.width = i1015[10]
  i1014.height = i1015[11]
  i1014.xOffset = i1015[12]
  i1014.yOffset = i1015[13]
  i1014.xAdvance = i1015[14]
  i1014.scale = i1015[15]
  return i1014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1021 = data
  i1020.m_Name = i1021[0]
  i1020.m_HashCode = i1021[1]
  i1020.m_ElementType = i1021[2]
  i1020.m_Unicode = i1021[3]
  i1020.m_GlyphIndex = i1021[4]
  i1020.m_Scale = i1021[5]
  return i1020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sprite')
  i1024.m_Index = i1025[2]
  i1024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1025[3], i1024.m_Metrics)
  i1024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1025[4], i1024.m_GlyphRect)
  i1024.m_Scale = i1025[5]
  i1024.m_AtlasIndex = i1025[6]
  i1024.m_ClassDefinitionType = i1025[7]
  return i1024
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Style', i1029[i + 0]));
  }
  i1026.m_StyleList = i1028
  return i1026
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Style' )
  var i1033 = data
  i1032.m_Name = i1033[0]
  i1032.m_HashCode = i1033[1]
  i1032.m_OpeningDefinition = i1033[2]
  i1032.m_ClosingDefinition = i1033[3]
  i1032.m_OpeningTagArray = i1033[4]
  i1032.m_ClosingTagArray = i1033[5]
  i1032.m_OpeningTagUnicodeArray = i1033[6]
  i1032.m_ClosingTagUnicodeArray = i1033[7]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1037[i + 0]) );
  }
  i1034.files = i1036
  i1034.componentToPrefabIds = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1041 = data
  i1040.path = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'unityObject')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1045[i + 0]) );
  }
  i1042.scriptsExecutionOrder = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1047[i + 0]) );
  }
  i1042.sortingLayers = i1046
  var i1049 = i1043[2]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1049[i + 0]) );
  }
  i1042.cullingLayers = i1048
  i1042.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1043[3], i1042.timeSettings)
  i1042.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1043[4], i1042.physicsSettings)
  i1042.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1043[5], i1042.physics2DSettings)
  i1042.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1043[6], i1042.qualitySettings)
  i1042.enableRealtimeShadows = !!i1043[7]
  i1042.enableAutoInstancing = !!i1043[8]
  i1042.enableDynamicBatching = !!i1043[9]
  i1042.lightmapEncodingQuality = i1043[10]
  i1042.desiredColorSpace = i1043[11]
  var i1051 = i1043[12]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1042.allTags = i1050
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.value = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  i1058.value = i1059[2]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1065 = data
  i1064.fixedDeltaTime = i1065[0]
  i1064.maximumDeltaTime = i1065[1]
  i1064.timeScale = i1065[2]
  i1064.maximumParticleTimestep = i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1067 = data
  i1066.gravity = new pc.Vec3( i1067[0], i1067[1], i1067[2] )
  i1066.defaultSolverIterations = i1067[3]
  i1066.bounceThreshold = i1067[4]
  i1066.autoSyncTransforms = !!i1067[5]
  i1066.autoSimulation = !!i1067[6]
  var i1069 = i1067[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1069[i + 0]) );
  }
  i1066.collisionMatrix = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.layerId = i1073[1]
  i1072.otherLayerId = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'material')
  i1074.gravity = new pc.Vec2( i1075[2], i1075[3] )
  i1074.positionIterations = i1075[4]
  i1074.velocityIterations = i1075[5]
  i1074.velocityThreshold = i1075[6]
  i1074.maxLinearCorrection = i1075[7]
  i1074.maxAngularCorrection = i1075[8]
  i1074.maxTranslationSpeed = i1075[9]
  i1074.maxRotationSpeed = i1075[10]
  i1074.baumgarteScale = i1075[11]
  i1074.baumgarteTOIScale = i1075[12]
  i1074.timeToSleep = i1075[13]
  i1074.linearSleepTolerance = i1075[14]
  i1074.angularSleepTolerance = i1075[15]
  i1074.defaultContactOffset = i1075[16]
  i1074.autoSimulation = !!i1075[17]
  i1074.queriesHitTriggers = !!i1075[18]
  i1074.queriesStartInColliders = !!i1075[19]
  i1074.callbacksOnDisable = !!i1075[20]
  i1074.reuseCollisionCallbacks = !!i1075[21]
  i1074.autoSyncTransforms = !!i1075[22]
  var i1077 = i1075[23]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1077[i + 0]) );
  }
  i1074.collisionMatrix = i1076
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.layerId = i1081[1]
  i1080.otherLayerId = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1085[i + 0]) );
  }
  i1082.qualityLevels = i1084
  var i1087 = i1083[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.names = i1086
  i1082.shadows = i1083[2]
  i1082.anisotropicFiltering = i1083[3]
  i1082.antiAliasing = i1083[4]
  i1082.lodBias = i1083[5]
  i1082.shadowCascades = i1083[6]
  i1082.shadowDistance = i1083[7]
  i1082.shadowmaskMode = i1083[8]
  i1082.shadowProjection = i1083[9]
  i1082.shadowResolution = i1083[10]
  i1082.softParticles = !!i1083[11]
  i1082.softVegetation = !!i1083[12]
  i1082.activeColorSpace = i1083[13]
  i1082.desiredColorSpace = i1083[14]
  i1082.masterTextureLimit = i1083[15]
  i1082.maxQueuedFrames = i1083[16]
  i1082.particleRaycastBudget = i1083[17]
  i1082.pixelLightCount = i1083[18]
  i1082.realtimeReflectionProbes = !!i1083[19]
  i1082.shadowCascade2Split = i1083[20]
  i1082.shadowCascade4Split = new pc.Vec3( i1083[21], i1083[22], i1083[23] )
  i1082.streamingMipmapsActive = !!i1083[24]
  i1082.vSyncCount = i1083[25]
  i1082.asyncUploadBufferSize = i1083[26]
  i1082.asyncUploadTimeSlice = i1083[27]
  i1082.billboardsFaceCameraPosition = !!i1083[28]
  i1082.shadowNearPlaneOffset = i1083[29]
  i1082.streamingMipmapsMemoryBudget = i1083[30]
  i1082.maximumLODLevel = i1083[31]
  i1082.streamingMipmapsAddAllCameras = !!i1083[32]
  i1082.streamingMipmapsMaxLevelReduction = i1083[33]
  i1082.streamingMipmapsRenderersPerFrame = i1083[34]
  i1082.resolutionScalingFixedDPIFactor = i1083[35]
  i1082.streamingMipmapsMaxFileIORequests = i1083[36]
  i1082.currentQualityLevel = i1083[37]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1093 = data
  i1092.weight = i1093[0]
  i1092.vertices = i1093[1]
  i1092.normals = i1093[2]
  i1092.tangents = i1093[3]
  return i1092
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1095 = data
  i1094.xPlacement = i1095[0]
  i1094.yPlacement = i1095[1]
  i1094.xAdvance = i1095[2]
  i1094.yAdvance = i1095[3]
  return i1094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"27":[28],"66":[10],"67":[13],"68":[13],"22":[13],"69":[13],"70":[13],"71":[13],"72":[13],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[10],"88":[5],"89":[90],"91":[90],"43":[40],"92":[40],"93":[40],"45":[43],"47":[46,40],"94":[40],"44":[43],"95":[40],"96":[40],"97":[40],"98":[40],"99":[40],"100":[40],"101":[40],"102":[40],"103":[40],"49":[46,40],"104":[40],"105":[40],"106":[40],"107":[40],"108":[46,40],"109":[40],"110":[51],"111":[51],"52":[51],"112":[51],"113":[10],"114":[10],"115":[40],"36":[5,40],"38":[40,46],"116":[40],"117":[46,40],"118":[5],"119":[46,40],"120":[40],"121":[122],"123":[122],"124":[122]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","BallCollisionSound","UnityEngine.AudioSource","UnityEngine.AudioClip","RotateRing","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.HingeJoint","DunkDetector","BasketRingMover","UnityEngine.CapsuleCollider","RimTouch","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","DunkTriggerRelay","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RenderTexture","BallDragAndThrow","UnityEngine.GameObject","GameManager","TMPro.TextMeshPro","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","BallWheelController","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BallItem","UnityEngine.UI.RawImage","UIMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4105";

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

Deserializers.buildID = "dcf4335e-0896-444b-a260-6703c05ba318";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

