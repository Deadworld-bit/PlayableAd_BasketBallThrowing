var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.JointSpring' )
  var i2711 = data
  i2710.spring = i2711[0]
  i2710.damper = i2711[1]
  i2710.targetPosition = i2711[2]
  return i2710
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.JointMotor' )
  var i2713 = data
  i2712.m_TargetVelocity = i2713[0]
  i2712.m_Force = i2713[1]
  i2712.m_FreeSpin = i2713[2]
  return i2712
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2714 = root || request.c( 'UnityEngine.JointLimits' )
  var i2715 = data
  i2714.m_Min = i2715[0]
  i2714.m_Max = i2715[1]
  i2714.m_Bounciness = i2715[2]
  i2714.m_BounceMinVelocity = i2715[3]
  i2714.m_ContactDistance = i2715[4]
  i2714.minBounce = i2715[5]
  i2714.maxBounce = i2715[6]
  return i2714
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.JointDrive' )
  var i2717 = data
  i2716.m_PositionSpring = i2717[0]
  i2716.m_PositionDamper = i2717[1]
  i2716.m_MaximumForce = i2717[2]
  i2716.m_UseAcceleration = i2717[3]
  return i2716
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2719 = data
  i2718.m_Spring = i2719[0]
  i2718.m_Damper = i2719[1]
  return i2718
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2721 = data
  i2720.m_Limit = i2721[0]
  i2720.m_Bounciness = i2721[1]
  i2720.m_ContactDistance = i2721[2]
  return i2720
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2723 = data
  i2722.m_ExtremumSlip = i2723[0]
  i2722.m_ExtremumValue = i2723[1]
  i2722.m_AsymptoteSlip = i2723[2]
  i2722.m_AsymptoteValue = i2723[3]
  i2722.m_Stiffness = i2723[4]
  return i2722
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2725 = data
  i2724.m_LowerAngle = i2725[0]
  i2724.m_UpperAngle = i2725[1]
  return i2724
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2726 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2727 = data
  i2726.m_MotorSpeed = i2727[0]
  i2726.m_MaximumMotorTorque = i2727[1]
  return i2726
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2728 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2729 = data
  i2728.m_DampingRatio = i2729[0]
  i2728.m_Frequency = i2729[1]
  i2728.m_Angle = i2729[2]
  return i2728
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2730 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2731 = data
  i2730.m_LowerTranslation = i2731[0]
  i2730.m_UpperTranslation = i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2732 = root || new pc.UnityMaterial()
  var i2733 = data
  i2732.name = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'shader')
  i2732.renderQueue = i2733[3]
  i2732.enableInstancing = !!i2733[4]
  var i2735 = i2733[5]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2735[i + 0]) );
  }
  i2732.floatParameters = i2734
  var i2737 = i2733[6]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2737[i + 0]) );
  }
  i2732.colorParameters = i2736
  var i2739 = i2733[7]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2739[i + 0]) );
  }
  i2732.vectorParameters = i2738
  var i2741 = i2733[8]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2741[i + 0]) );
  }
  i2732.textureParameters = i2740
  var i2743 = i2733[9]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2743[i + 0]) );
  }
  i2732.materialFlags = i2742
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2747 = data
  i2746.name = i2747[0]
  i2746.value = i2747[1]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2751 = data
  i2750.name = i2751[0]
  i2750.value = new pc.Color(i2751[1], i2751[2], i2751[3], i2751[4])
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2755 = data
  i2754.name = i2755[0]
  i2754.value = new pc.Vec4( i2755[1], i2755[2], i2755[3], i2755[4] )
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2759 = data
  i2758.name = i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'value')
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2763 = data
  i2762.name = i2763[0]
  i2762.enabled = !!i2763[1]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.halfPrecision = !!i2765[1]
  i2764.useUInt32IndexFormat = !!i2765[2]
  i2764.vertexCount = i2765[3]
  i2764.aabb = i2765[4]
  var i2767 = i2765[5]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( !!i2767[i + 0] );
  }
  i2764.streams = i2766
  i2764.vertices = i2765[6]
  var i2769 = i2765[7]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2769[i + 0]) );
  }
  i2764.subMeshes = i2768
  var i2771 = i2765[8]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 16) {
    i2770.push( new pc.Mat4().setData(i2771[i + 0], i2771[i + 1], i2771[i + 2], i2771[i + 3],  i2771[i + 4], i2771[i + 5], i2771[i + 6], i2771[i + 7],  i2771[i + 8], i2771[i + 9], i2771[i + 10], i2771[i + 11],  i2771[i + 12], i2771[i + 13], i2771[i + 14], i2771[i + 15]) );
  }
  i2764.bindposes = i2770
  var i2773 = i2765[9]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2773[i + 0]) );
  }
  i2764.blendShapes = i2772
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2779 = data
  i2778.triangles = i2779[0]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2785 = data
  i2784.name = i2785[0]
  var i2787 = i2785[1]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2787[i + 0]) );
  }
  i2784.frames = i2786
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2789 = data
  i2788.name = i2789[0]
  i2788.width = i2789[1]
  i2788.height = i2789[2]
  i2788.mipmapCount = i2789[3]
  i2788.anisoLevel = i2789[4]
  i2788.filterMode = i2789[5]
  i2788.hdr = !!i2789[6]
  i2788.format = i2789[7]
  i2788.wrapMode = i2789[8]
  i2788.alphaIsTransparency = !!i2789[9]
  i2788.alphaSource = i2789[10]
  i2788.graphicsFormat = i2789[11]
  i2788.sRGBTexture = !!i2789[12]
  i2788.desiredColorSpace = i2789[13]
  i2788.wrapU = i2789[14]
  i2788.wrapV = i2789[15]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2791 = data
  i2790.position = new pc.Vec3( i2791[0], i2791[1], i2791[2] )
  i2790.scale = new pc.Vec3( i2791[3], i2791[4], i2791[5] )
  i2790.rotation = new pc.Quat(i2791[6], i2791[7], i2791[8], i2791[9])
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'sharedMesh')
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'additionalVertexStreams')
  i2794.enabled = !!i2795[2]
  request.r(i2795[3], i2795[4], 0, i2794, 'sharedMaterial')
  var i2797 = i2795[5]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 2, i2796, '')
  }
  i2794.sharedMaterials = i2796
  i2794.receiveShadows = !!i2795[6]
  i2794.shadowCastingMode = i2795[7]
  i2794.sortingLayerID = i2795[8]
  i2794.sortingOrder = i2795[9]
  i2794.lightmapIndex = i2795[10]
  i2794.lightmapSceneIndex = i2795[11]
  i2794.lightmapScaleOffset = new pc.Vec4( i2795[12], i2795[13], i2795[14], i2795[15] )
  i2794.lightProbeUsage = i2795[16]
  i2794.reflectionProbeUsage = i2795[17]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2801 = data
  i2800.name = i2801[0]
  i2800.tagId = i2801[1]
  i2800.enabled = !!i2801[2]
  i2800.isStatic = !!i2801[3]
  i2800.layer = i2801[4]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2803 = data
  i2802.name = i2803[0]
  i2802.atlasId = i2803[1]
  i2802.mipmapCount = i2803[2]
  i2802.hdr = !!i2803[3]
  i2802.size = i2803[4]
  i2802.anisoLevel = i2803[5]
  i2802.filterMode = i2803[6]
  var i2805 = i2803[7]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 4) {
    i2804.push( UnityEngine.Rect.MinMaxRect(i2805[i + 0], i2805[i + 1], i2805[i + 2], i2805[i + 3]) );
  }
  i2802.rects = i2804
  i2802.wrapU = i2803[8]
  i2802.wrapV = i2803[9]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2809 = data
  i2808.name = i2809[0]
  i2808.index = i2809[1]
  i2808.startup = !!i2809[2]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2811 = data
  i2810.center = new pc.Vec3( i2811[0], i2811[1], i2811[2] )
  i2810.size = new pc.Vec3( i2811[3], i2811[4], i2811[5] )
  i2810.enabled = !!i2811[6]
  i2810.isTrigger = !!i2811[7]
  request.r(i2811[8], i2811[9], 0, i2810, 'material')
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.type = i2813[1]
  i2812.color = new pc.Color(i2813[2], i2813[3], i2813[4], i2813[5])
  i2812.cullingMask = i2813[6]
  i2812.intensity = i2813[7]
  i2812.range = i2813[8]
  i2812.spotAngle = i2813[9]
  i2812.shadows = i2813[10]
  i2812.shadowNormalBias = i2813[11]
  i2812.shadowBias = i2813[12]
  i2812.shadowStrength = i2813[13]
  i2812.shadowResolution = i2813[14]
  i2812.lightmapBakeType = i2813[15]
  i2812.renderMode = i2813[16]
  request.r(i2813[17], i2813[18], 0, i2812, 'cookie')
  i2812.cookieSize = i2813[19]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2815 = data
  i2814.enabled = !!i2815[0]
  i2814.aspect = i2815[1]
  i2814.orthographic = !!i2815[2]
  i2814.orthographicSize = i2815[3]
  i2814.backgroundColor = new pc.Color(i2815[4], i2815[5], i2815[6], i2815[7])
  i2814.nearClipPlane = i2815[8]
  i2814.farClipPlane = i2815[9]
  i2814.fieldOfView = i2815[10]
  i2814.depth = i2815[11]
  i2814.clearFlags = i2815[12]
  i2814.cullingMask = i2815[13]
  i2814.rect = i2815[14]
  request.r(i2815[15], i2815[16], 0, i2814, 'targetTexture')
  i2814.usePhysicalProperties = !!i2815[17]
  i2814.focalLength = i2815[18]
  i2814.sensorSize = new pc.Vec2( i2815[19], i2815[20] )
  i2814.lensShift = new pc.Vec2( i2815[21], i2815[22] )
  i2814.gateFit = i2815[23]
  i2814.commandBufferCount = i2815[24]
  i2814.cameraType = i2815[25]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2817 = data
  i2816.enabled = !!i2817[0]
  i2816.isTrigger = !!i2817[1]
  request.r(i2817[2], i2817[3], 0, i2816, 'material')
  i2816.center = new pc.Vec3( i2817[4], i2817[5], i2817[6] )
  i2816.radius = i2817[7]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2819 = data
  i2818.mass = i2819[0]
  i2818.drag = i2819[1]
  i2818.angularDrag = i2819[2]
  i2818.useGravity = !!i2819[3]
  i2818.isKinematic = !!i2819[4]
  i2818.constraints = i2819[5]
  i2818.maxAngularVelocity = i2819[6]
  i2818.collisionDetectionMode = i2819[7]
  i2818.interpolation = i2819[8]
  return i2818
}

Deserializers["BallCollisionSound"] = function (request, data, root) {
  var i2820 = root || request.c( 'BallCollisionSound' )
  var i2821 = data
  request.r(i2821[0], i2821[1], 0, i2820, '_audioSource')
  request.r(i2821[2], i2821[3], 0, i2820, '_collisionSound')
  i2820._minImpactSpeed = i2821[4]
  i2820._volumeScale = i2821[5]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2823 = data
  request.r(i2823[0], i2823[1], 0, i2822, 'clip')
  request.r(i2823[2], i2823[3], 0, i2822, 'outputAudioMixerGroup')
  i2822.playOnAwake = !!i2823[4]
  i2822.loop = !!i2823[5]
  i2822.time = i2823[6]
  i2822.volume = i2823[7]
  i2822.pitch = i2823[8]
  i2822.enabled = !!i2823[9]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2825 = data
  i2824.enabled = !!i2825[0]
  request.r(i2825[1], i2825[2], 0, i2824, 'sharedMaterial')
  var i2827 = i2825[3]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 2, i2826, '')
  }
  i2824.sharedMaterials = i2826
  i2824.receiveShadows = !!i2825[4]
  i2824.shadowCastingMode = i2825[5]
  i2824.sortingLayerID = i2825[6]
  i2824.sortingOrder = i2825[7]
  i2824.lightmapIndex = i2825[8]
  i2824.lightmapSceneIndex = i2825[9]
  i2824.lightmapScaleOffset = new pc.Vec4( i2825[10], i2825[11], i2825[12], i2825[13] )
  i2824.lightProbeUsage = i2825[14]
  i2824.reflectionProbeUsage = i2825[15]
  var i2829 = i2825[16]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 3) {
    i2828.push( new pc.Vec3( i2829[i + 0], i2829[i + 1], i2829[i + 2] ) );
  }
  i2824.positions = i2828
  i2824.positionCount = i2825[17]
  i2824.time = i2825[18]
  i2824.startWidth = i2825[19]
  i2824.endWidth = i2825[20]
  i2824.widthMultiplier = i2825[21]
  i2824.autodestruct = !!i2825[22]
  i2824.emitting = !!i2825[23]
  i2824.numCornerVertices = i2825[24]
  i2824.numCapVertices = i2825[25]
  i2824.minVertexDistance = i2825[26]
  i2824.colorGradient = i2825[27] ? new pc.ColorGradient(i2825[27][0], i2825[27][1], i2825[27][2]) : null
  i2824.startColor = new pc.Color(i2825[28], i2825[29], i2825[30], i2825[31])
  i2824.endColor = new pc.Color(i2825[32], i2825[33], i2825[34], i2825[35])
  i2824.generateLightingData = !!i2825[36]
  i2824.textureMode = i2825[37]
  i2824.alignment = i2825[38]
  i2824.widthCurve = new pc.AnimationCurve( { keys_flow: i2825[39] } )
  return i2824
}

Deserializers["RotateRing"] = function (request, data, root) {
  var i2832 = root || request.c( 'RotateRing' )
  var i2833 = data
  i2832._rotationSpeed = i2833[0]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2835 = data
  i2834.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2835[0], i2834.main)
  i2834.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2835[1], i2834.colorBySpeed)
  i2834.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2835[2], i2834.colorOverLifetime)
  i2834.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2835[3], i2834.emission)
  i2834.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2835[4], i2834.rotationBySpeed)
  i2834.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2835[5], i2834.rotationOverLifetime)
  i2834.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2835[6], i2834.shape)
  i2834.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2835[7], i2834.sizeBySpeed)
  i2834.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2835[8], i2834.sizeOverLifetime)
  i2834.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2835[9], i2834.textureSheetAnimation)
  i2834.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2835[10], i2834.velocityOverLifetime)
  i2834.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2835[11], i2834.noise)
  i2834.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2835[12], i2834.inheritVelocity)
  i2834.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2835[13], i2834.forceOverLifetime)
  i2834.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2835[14], i2834.limitVelocityOverLifetime)
  i2834.useAutoRandomSeed = !!i2835[15]
  i2834.randomSeed = i2835[16]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2836 = root || new pc.ParticleSystemMain()
  var i2837 = data
  i2836.duration = i2837[0]
  i2836.loop = !!i2837[1]
  i2836.prewarm = !!i2837[2]
  i2836.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[3], i2836.startDelay)
  i2836.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[4], i2836.startLifetime)
  i2836.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[5], i2836.startSpeed)
  i2836.startSize3D = !!i2837[6]
  i2836.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[7], i2836.startSizeX)
  i2836.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[8], i2836.startSizeY)
  i2836.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[9], i2836.startSizeZ)
  i2836.startRotation3D = !!i2837[10]
  i2836.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[11], i2836.startRotationX)
  i2836.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[12], i2836.startRotationY)
  i2836.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[13], i2836.startRotationZ)
  i2836.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2837[14], i2836.startColor)
  i2836.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[15], i2836.gravityModifier)
  i2836.simulationSpace = i2837[16]
  request.r(i2837[17], i2837[18], 0, i2836, 'customSimulationSpace')
  i2836.simulationSpeed = i2837[19]
  i2836.useUnscaledTime = !!i2837[20]
  i2836.scalingMode = i2837[21]
  i2836.playOnAwake = !!i2837[22]
  i2836.maxParticles = i2837[23]
  i2836.emitterVelocityMode = i2837[24]
  i2836.stopAction = i2837[25]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2838 = root || new pc.MinMaxCurve()
  var i2839 = data
  i2838.mode = i2839[0]
  i2838.curveMin = new pc.AnimationCurve( { keys_flow: i2839[1] } )
  i2838.curveMax = new pc.AnimationCurve( { keys_flow: i2839[2] } )
  i2838.curveMultiplier = i2839[3]
  i2838.constantMin = i2839[4]
  i2838.constantMax = i2839[5]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2840 = root || new pc.MinMaxGradient()
  var i2841 = data
  i2840.mode = i2841[0]
  i2840.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2841[1], i2840.gradientMin)
  i2840.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2841[2], i2840.gradientMax)
  i2840.colorMin = new pc.Color(i2841[3], i2841[4], i2841[5], i2841[6])
  i2840.colorMax = new pc.Color(i2841[7], i2841[8], i2841[9], i2841[10])
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2843 = data
  i2842.mode = i2843[0]
  var i2845 = i2843[1]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2845[i + 0]) );
  }
  i2842.colorKeys = i2844
  var i2847 = i2843[2]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2847[i + 0]) );
  }
  i2842.alphaKeys = i2846
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2851 = data
  i2850.color = new pc.Color(i2851[0], i2851[1], i2851[2], i2851[3])
  i2850.time = i2851[4]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2855 = data
  i2854.alpha = i2855[0]
  i2854.time = i2855[1]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2856 = root || new pc.ParticleSystemColorBySpeed()
  var i2857 = data
  i2856.enabled = !!i2857[0]
  i2856.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2857[1], i2856.color)
  i2856.range = new pc.Vec2( i2857[2], i2857[3] )
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2858 = root || new pc.ParticleSystemColorOverLifetime()
  var i2859 = data
  i2858.enabled = !!i2859[0]
  i2858.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2859[1], i2858.color)
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2860 = root || new pc.ParticleSystemEmitter()
  var i2861 = data
  i2860.enabled = !!i2861[0]
  i2860.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[1], i2860.rateOverTime)
  i2860.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[2], i2860.rateOverDistance)
  var i2863 = i2861[3]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2863[i + 0]) );
  }
  i2860.bursts = i2862
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2866 = root || new pc.ParticleSystemBurst()
  var i2867 = data
  i2866.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2867[0], i2866.count)
  i2866.cycleCount = i2867[1]
  i2866.minCount = i2867[2]
  i2866.maxCount = i2867[3]
  i2866.repeatInterval = i2867[4]
  i2866.time = i2867[5]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2868 = root || new pc.ParticleSystemRotationBySpeed()
  var i2869 = data
  i2868.enabled = !!i2869[0]
  i2868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2869[1], i2868.x)
  i2868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2869[2], i2868.y)
  i2868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2869[3], i2868.z)
  i2868.separateAxes = !!i2869[4]
  i2868.range = new pc.Vec2( i2869[5], i2869[6] )
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2870 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2871 = data
  i2870.enabled = !!i2871[0]
  i2870.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2871[1], i2870.x)
  i2870.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2871[2], i2870.y)
  i2870.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2871[3], i2870.z)
  i2870.separateAxes = !!i2871[4]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2872 = root || new pc.ParticleSystemShape()
  var i2873 = data
  i2872.enabled = !!i2873[0]
  i2872.shapeType = i2873[1]
  i2872.randomDirectionAmount = i2873[2]
  i2872.sphericalDirectionAmount = i2873[3]
  i2872.randomPositionAmount = i2873[4]
  i2872.alignToDirection = !!i2873[5]
  i2872.radius = i2873[6]
  i2872.radiusMode = i2873[7]
  i2872.radiusSpread = i2873[8]
  i2872.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2873[9], i2872.radiusSpeed)
  i2872.radiusThickness = i2873[10]
  i2872.angle = i2873[11]
  i2872.length = i2873[12]
  i2872.boxThickness = new pc.Vec3( i2873[13], i2873[14], i2873[15] )
  i2872.meshShapeType = i2873[16]
  request.r(i2873[17], i2873[18], 0, i2872, 'mesh')
  request.r(i2873[19], i2873[20], 0, i2872, 'meshRenderer')
  request.r(i2873[21], i2873[22], 0, i2872, 'skinnedMeshRenderer')
  i2872.useMeshMaterialIndex = !!i2873[23]
  i2872.meshMaterialIndex = i2873[24]
  i2872.useMeshColors = !!i2873[25]
  i2872.normalOffset = i2873[26]
  i2872.arc = i2873[27]
  i2872.arcMode = i2873[28]
  i2872.arcSpread = i2873[29]
  i2872.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2873[30], i2872.arcSpeed)
  i2872.donutRadius = i2873[31]
  i2872.position = new pc.Vec3( i2873[32], i2873[33], i2873[34] )
  i2872.rotation = new pc.Vec3( i2873[35], i2873[36], i2873[37] )
  i2872.scale = new pc.Vec3( i2873[38], i2873[39], i2873[40] )
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2874 = root || new pc.ParticleSystemSizeBySpeed()
  var i2875 = data
  i2874.enabled = !!i2875[0]
  i2874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2875[1], i2874.x)
  i2874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2875[2], i2874.y)
  i2874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2875[3], i2874.z)
  i2874.separateAxes = !!i2875[4]
  i2874.range = new pc.Vec2( i2875[5], i2875[6] )
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2876 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2877 = data
  i2876.enabled = !!i2877[0]
  i2876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2877[1], i2876.x)
  i2876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2877[2], i2876.y)
  i2876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2877[3], i2876.z)
  i2876.separateAxes = !!i2877[4]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2878 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2879 = data
  i2878.enabled = !!i2879[0]
  i2878.mode = i2879[1]
  i2878.animation = i2879[2]
  i2878.numTilesX = i2879[3]
  i2878.numTilesY = i2879[4]
  i2878.useRandomRow = !!i2879[5]
  i2878.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2879[6], i2878.frameOverTime)
  i2878.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2879[7], i2878.startFrame)
  i2878.cycleCount = i2879[8]
  i2878.rowIndex = i2879[9]
  i2878.flipU = i2879[10]
  i2878.flipV = i2879[11]
  i2878.spriteCount = i2879[12]
  var i2881 = i2879[13]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 2, i2880, '')
  }
  i2878.sprites = i2880
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2884 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2885 = data
  i2884.enabled = !!i2885[0]
  i2884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[1], i2884.x)
  i2884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[2], i2884.y)
  i2884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[3], i2884.z)
  i2884.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[4], i2884.radial)
  i2884.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[5], i2884.speedModifier)
  i2884.space = i2885[6]
  i2884.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[7], i2884.orbitalX)
  i2884.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[8], i2884.orbitalY)
  i2884.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[9], i2884.orbitalZ)
  i2884.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[10], i2884.orbitalOffsetX)
  i2884.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[11], i2884.orbitalOffsetY)
  i2884.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2885[12], i2884.orbitalOffsetZ)
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2886 = root || new pc.ParticleSystemNoise()
  var i2887 = data
  i2886.enabled = !!i2887[0]
  i2886.separateAxes = !!i2887[1]
  i2886.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[2], i2886.strengthX)
  i2886.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[3], i2886.strengthY)
  i2886.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[4], i2886.strengthZ)
  i2886.frequency = i2887[5]
  i2886.damping = !!i2887[6]
  i2886.octaveCount = i2887[7]
  i2886.octaveMultiplier = i2887[8]
  i2886.octaveScale = i2887[9]
  i2886.quality = i2887[10]
  i2886.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[11], i2886.scrollSpeed)
  i2886.scrollSpeedMultiplier = i2887[12]
  i2886.remapEnabled = !!i2887[13]
  i2886.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[14], i2886.remapX)
  i2886.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[15], i2886.remapY)
  i2886.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[16], i2886.remapZ)
  i2886.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[17], i2886.positionAmount)
  i2886.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[18], i2886.rotationAmount)
  i2886.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[19], i2886.sizeAmount)
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2888 = root || new pc.ParticleSystemInheritVelocity()
  var i2889 = data
  i2888.enabled = !!i2889[0]
  i2888.mode = i2889[1]
  i2888.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[2], i2888.curve)
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2890 = root || new pc.ParticleSystemForceOverLifetime()
  var i2891 = data
  i2890.enabled = !!i2891[0]
  i2890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2891[1], i2890.x)
  i2890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2891[2], i2890.y)
  i2890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2891[3], i2890.z)
  i2890.space = i2891[4]
  i2890.randomized = !!i2891[5]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2892 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2893 = data
  i2892.enabled = !!i2893[0]
  i2892.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[1], i2892.limit)
  i2892.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[2], i2892.limitX)
  i2892.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[3], i2892.limitY)
  i2892.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[4], i2892.limitZ)
  i2892.dampen = i2893[5]
  i2892.separateAxes = !!i2893[6]
  i2892.space = i2893[7]
  i2892.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[8], i2892.drag)
  i2892.multiplyDragByParticleSize = !!i2893[9]
  i2892.multiplyDragByParticleVelocity = !!i2893[10]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2895 = data
  i2894.enabled = !!i2895[0]
  request.r(i2895[1], i2895[2], 0, i2894, 'sharedMaterial')
  var i2897 = i2895[3]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 2) {
  request.r(i2897[i + 0], i2897[i + 1], 2, i2896, '')
  }
  i2894.sharedMaterials = i2896
  i2894.receiveShadows = !!i2895[4]
  i2894.shadowCastingMode = i2895[5]
  i2894.sortingLayerID = i2895[6]
  i2894.sortingOrder = i2895[7]
  i2894.lightmapIndex = i2895[8]
  i2894.lightmapSceneIndex = i2895[9]
  i2894.lightmapScaleOffset = new pc.Vec4( i2895[10], i2895[11], i2895[12], i2895[13] )
  i2894.lightProbeUsage = i2895[14]
  i2894.reflectionProbeUsage = i2895[15]
  request.r(i2895[16], i2895[17], 0, i2894, 'mesh')
  i2894.meshCount = i2895[18]
  i2894.activeVertexStreamsCount = i2895[19]
  i2894.alignment = i2895[20]
  i2894.renderMode = i2895[21]
  i2894.sortMode = i2895[22]
  i2894.lengthScale = i2895[23]
  i2894.velocityScale = i2895[24]
  i2894.cameraVelocityScale = i2895[25]
  i2894.normalDirection = i2895[26]
  i2894.sortingFudge = i2895[27]
  i2894.minParticleSize = i2895[28]
  i2894.maxParticleSize = i2895[29]
  i2894.pivot = new pc.Vec3( i2895[30], i2895[31], i2895[32] )
  request.r(i2895[33], i2895[34], 0, i2894, 'trailMaterial')
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i2899 = data
  i2898.useMotor = !!i2899[0]
  i2898.useLimits = !!i2899[1]
  i2898.useSpring = !!i2899[2]
  i2898.limits = request.d('UnityEngine.JointLimits', i2899[3], i2898.limits)
  i2898.motor = request.d('UnityEngine.JointMotor', i2899[4], i2898.motor)
  i2898.spring = request.d('UnityEngine.JointSpring', i2899[5], i2898.spring)
  request.r(i2899[6], i2899[7], 0, i2898, 'connectedBody')
  i2898.axis = new pc.Vec3( i2899[8], i2899[9], i2899[10] )
  i2898.anchor = new pc.Vec3( i2899[11], i2899[12], i2899[13] )
  i2898.connectedAnchor = new pc.Vec3( i2899[14], i2899[15], i2899[16] )
  i2898.autoConfigureConnectedAnchor = !!i2899[17]
  i2898.massScale = i2899[18]
  i2898.connectedMassScale = i2899[19]
  i2898.enableCollision = !!i2899[20]
  i2898.breakForce = i2899[21]
  i2898.breakTorque = i2899[22]
  return i2898
}

Deserializers["DunkDetector"] = function (request, data, root) {
  var i2900 = root || request.c( 'DunkDetector' )
  var i2901 = data
  i2900._cleanupInterval = i2901[0]
  i2900._acceptWindow = i2901[1]
  request.r(i2901[2], i2901[3], 0, i2900, '_dunkParticles')
  request.r(i2901[4], i2901[5], 0, i2900, '_perfectDunkParticles')
  request.r(i2901[6], i2901[7], 0, i2900, '_audioSource')
  request.r(i2901[8], i2901[9], 0, i2900, '_dunkSound')
  request.r(i2901[10], i2901[11], 0, i2900, '_perfectDunkSound')
  i2900._normalDunkScore = i2901[12]
  i2900._perfectDunkScore = i2901[13]
  return i2900
}

Deserializers["BasketRingMover"] = function (request, data, root) {
  var i2902 = root || request.c( 'BasketRingMover' )
  var i2903 = data
  request.r(i2903[0], i2903[1], 0, i2902, 'ringTransform')
  i2902.xRange = new pc.Vec2( i2903[2], i2903[3] )
  i2902.speed = i2903[4]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2905 = data
  i2904.center = new pc.Vec3( i2905[0], i2905[1], i2905[2] )
  i2904.radius = i2905[3]
  i2904.height = i2905[4]
  i2904.direction = i2905[5]
  i2904.enabled = !!i2905[6]
  i2904.isTrigger = !!i2905[7]
  request.r(i2905[8], i2905[9], 0, i2904, 'material')
  return i2904
}

Deserializers["RimTouch"] = function (request, data, root) {
  var i2906 = root || request.c( 'RimTouch' )
  var i2907 = data
  request.r(i2907[0], i2907[1], 0, i2906, '_detector')
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2909 = data
  i2908.enabled = !!i2909[0]
  request.r(i2909[1], i2909[2], 0, i2908, 'sharedMaterial')
  var i2911 = i2909[3]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 2) {
  request.r(i2911[i + 0], i2911[i + 1], 2, i2910, '')
  }
  i2908.sharedMaterials = i2910
  i2908.receiveShadows = !!i2909[4]
  i2908.shadowCastingMode = i2909[5]
  i2908.sortingLayerID = i2909[6]
  i2908.sortingOrder = i2909[7]
  i2908.lightmapIndex = i2909[8]
  i2908.lightmapSceneIndex = i2909[9]
  i2908.lightmapScaleOffset = new pc.Vec4( i2909[10], i2909[11], i2909[12], i2909[13] )
  i2908.lightProbeUsage = i2909[14]
  i2908.reflectionProbeUsage = i2909[15]
  request.r(i2909[16], i2909[17], 0, i2908, 'sharedMesh')
  var i2913 = i2909[18]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 2) {
  request.r(i2913[i + 0], i2913[i + 1], 2, i2912, '')
  }
  i2908.bones = i2912
  i2908.updateWhenOffscreen = !!i2909[19]
  i2908.localBounds = i2909[20]
  request.r(i2909[21], i2909[22], 0, i2908, 'rootBone')
  var i2915 = i2909[23]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2915[i + 0]) );
  }
  i2908.blendShapesWeights = i2914
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2921 = data
  i2920.weight = i2921[0]
  return i2920
}

Deserializers["DunkTriggerRelay"] = function (request, data, root) {
  var i2922 = root || request.c( 'DunkTriggerRelay' )
  var i2923 = data
  request.r(i2923[0], i2923[1], 0, i2922, '_detector')
  i2922._isTop = !!i2923[2]
  return i2922
}

Deserializers["BallDragAndThrow"] = function (request, data, root) {
  var i2924 = root || request.c( 'BallDragAndThrow' )
  var i2925 = data
  request.r(i2925[0], i2925[1], 0, i2924, '_camera')
  i2924._ballLayer = UnityEngine.LayerMask.FromIntegerValue( i2925[2] )
  request.r(i2925[3], i2925[4], 0, i2924, '_touchTrail')
  i2924._maxLaunchForce = i2925[5]
  i2924._dragSensitivity = i2925[6]
  i2924._upwardBiasFactor = i2925[7]
  i2924._gentleFactor = i2925[8]
  i2924._forwardMultiplier = i2925[9]
  i2924._verticalMultiplier = i2925[10]
  i2924._horizontalMultiplier = i2925[11]
  request.r(i2925[12], i2925[13], 0, i2924, '_audioSource')
  request.r(i2925[14], i2925[15], 0, i2924, '_clickSound')
  request.r(i2925[16], i2925[17], 0, i2924, '_releaseSound')
  i2924._spinTorque = i2925[18]
  return i2924
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2926 = root || request.c( 'GameManager' )
  var i2927 = data
  i2926._gameDuration = i2927[0]
  request.r(i2927[1], i2927[2], 0, i2926, '_highestText')
  request.r(i2927[3], i2927[4], 0, i2926, '_timeText')
  request.r(i2927[5], i2927[6], 0, i2926, '_scoreText')
  request.r(i2927[7], i2927[8], 0, i2926, '_perfectPopup')
  i2926._perfectPopupDuration = i2927[9]
  i2926._highscoreKey = i2927[10]
  request.r(i2927[11], i2927[12], 0, i2926, '_startPanel')
  request.r(i2927[13], i2927[14], 0, i2926, '_endPanel')
  request.r(i2927[15], i2927[16], 0, i2926, '_startButton')
  request.r(i2927[17], i2927[18], 0, i2926, '_retryButton')
  request.r(i2927[19], i2927[20], 0, i2926, '_endScoreText')
  request.r(i2927[21], i2927[22], 0, i2926, '_moveRingButton')
  request.r(i2927[23], i2927[24], 0, i2926, '_basketRingMover')
  request.r(i2927[25], i2927[26], 0, i2926, '_openBallSelectButton')
  request.r(i2927[27], i2927[28], 0, i2926, '_ballSelectionPanel')
  request.r(i2927[29], i2927[30], 0, i2926, '_ballWheelController')
  request.r(i2927[31], i2927[32], 0, i2926, '_audioSource')
  request.r(i2927[33], i2927[34], 0, i2926, '_buttonClickSound')
  request.r(i2927[35], i2927[36], 0, i2926, '_gameCompleteSound')
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2929 = data
  i2928.pivot = new pc.Vec2( i2929[0], i2929[1] )
  i2928.anchorMin = new pc.Vec2( i2929[2], i2929[3] )
  i2928.anchorMax = new pc.Vec2( i2929[4], i2929[5] )
  i2928.sizeDelta = new pc.Vec2( i2929[6], i2929[7] )
  i2928.anchoredPosition3D = new pc.Vec3( i2929[8], i2929[9], i2929[10] )
  i2928.rotation = new pc.Quat(i2929[11], i2929[12], i2929[13], i2929[14])
  i2928.scale = new pc.Vec3( i2929[15], i2929[16], i2929[17] )
  return i2928
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2930 = root || request.c( 'TMPro.TextMeshPro' )
  var i2931 = data
  i2930._SortingLayer = i2931[0]
  i2930._SortingLayerID = i2931[1]
  i2930._SortingOrder = i2931[2]
  i2930.m_hasFontAssetChanged = !!i2931[3]
  request.r(i2931[4], i2931[5], 0, i2930, 'm_renderer')
  i2930.m_maskType = i2931[6]
  i2930.m_text = i2931[7]
  i2930.m_isRightToLeft = !!i2931[8]
  request.r(i2931[9], i2931[10], 0, i2930, 'm_fontAsset')
  request.r(i2931[11], i2931[12], 0, i2930, 'm_sharedMaterial')
  var i2933 = i2931[13]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2930.m_fontSharedMaterials = i2932
  request.r(i2931[14], i2931[15], 0, i2930, 'm_fontMaterial')
  var i2935 = i2931[16]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 2) {
  request.r(i2935[i + 0], i2935[i + 1], 2, i2934, '')
  }
  i2930.m_fontMaterials = i2934
  i2930.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2931[17], i2931[18], i2931[19], i2931[20])
  i2930.m_fontColor = new pc.Color(i2931[21], i2931[22], i2931[23], i2931[24])
  i2930.m_enableVertexGradient = !!i2931[25]
  i2930.m_colorMode = i2931[26]
  i2930.m_fontColorGradient = request.d('TMPro.VertexGradient', i2931[27], i2930.m_fontColorGradient)
  request.r(i2931[28], i2931[29], 0, i2930, 'm_fontColorGradientPreset')
  request.r(i2931[30], i2931[31], 0, i2930, 'm_spriteAsset')
  i2930.m_tintAllSprites = !!i2931[32]
  request.r(i2931[33], i2931[34], 0, i2930, 'm_StyleSheet')
  i2930.m_TextStyleHashCode = i2931[35]
  i2930.m_overrideHtmlColors = !!i2931[36]
  i2930.m_faceColor = UnityEngine.Color32.ConstructColor(i2931[37], i2931[38], i2931[39], i2931[40])
  i2930.m_fontSize = i2931[41]
  i2930.m_fontSizeBase = i2931[42]
  i2930.m_fontWeight = i2931[43]
  i2930.m_enableAutoSizing = !!i2931[44]
  i2930.m_fontSizeMin = i2931[45]
  i2930.m_fontSizeMax = i2931[46]
  i2930.m_fontStyle = i2931[47]
  i2930.m_HorizontalAlignment = i2931[48]
  i2930.m_VerticalAlignment = i2931[49]
  i2930.m_textAlignment = i2931[50]
  i2930.m_characterSpacing = i2931[51]
  i2930.m_wordSpacing = i2931[52]
  i2930.m_lineSpacing = i2931[53]
  i2930.m_lineSpacingMax = i2931[54]
  i2930.m_paragraphSpacing = i2931[55]
  i2930.m_charWidthMaxAdj = i2931[56]
  i2930.m_enableWordWrapping = !!i2931[57]
  i2930.m_wordWrappingRatios = i2931[58]
  i2930.m_overflowMode = i2931[59]
  request.r(i2931[60], i2931[61], 0, i2930, 'm_linkedTextComponent')
  request.r(i2931[62], i2931[63], 0, i2930, 'parentLinkedComponent')
  i2930.m_enableKerning = !!i2931[64]
  i2930.m_enableExtraPadding = !!i2931[65]
  i2930.checkPaddingRequired = !!i2931[66]
  i2930.m_isRichText = !!i2931[67]
  i2930.m_parseCtrlCharacters = !!i2931[68]
  i2930.m_isOrthographic = !!i2931[69]
  i2930.m_isCullingEnabled = !!i2931[70]
  i2930.m_horizontalMapping = i2931[71]
  i2930.m_verticalMapping = i2931[72]
  i2930.m_uvLineOffset = i2931[73]
  i2930.m_geometrySortingOrder = i2931[74]
  i2930.m_IsTextObjectScaleStatic = !!i2931[75]
  i2930.m_VertexBufferAutoSizeReduction = !!i2931[76]
  i2930.m_useMaxVisibleDescender = !!i2931[77]
  i2930.m_pageToDisplay = i2931[78]
  i2930.m_margin = new pc.Vec4( i2931[79], i2931[80], i2931[81], i2931[82] )
  i2930.m_isUsingLegacyAnimationComponent = !!i2931[83]
  i2930.m_isVolumetricText = !!i2931[84]
  request.r(i2931[85], i2931[86], 0, i2930, 'm_Material')
  i2930.m_Maskable = !!i2931[87]
  i2930.m_Color = new pc.Color(i2931[88], i2931[89], i2931[90], i2931[91])
  i2930.m_RaycastTarget = !!i2931[92]
  i2930.m_RaycastPadding = new pc.Vec4( i2931[93], i2931[94], i2931[95], i2931[96] )
  return i2930
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2936 = root || request.c( 'TMPro.VertexGradient' )
  var i2937 = data
  i2936.topLeft = new pc.Color(i2937[0], i2937[1], i2937[2], i2937[3])
  i2936.topRight = new pc.Color(i2937[4], i2937[5], i2937[6], i2937[7])
  i2936.bottomLeft = new pc.Color(i2937[8], i2937[9], i2937[10], i2937[11])
  i2936.bottomRight = new pc.Color(i2937[12], i2937[13], i2937[14], i2937[15])
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2939 = data
  i2938.enabled = !!i2939[0]
  i2938.planeDistance = i2939[1]
  i2938.referencePixelsPerUnit = i2939[2]
  i2938.isFallbackOverlay = !!i2939[3]
  i2938.renderMode = i2939[4]
  i2938.renderOrder = i2939[5]
  i2938.sortingLayerName = i2939[6]
  i2938.sortingOrder = i2939[7]
  i2938.scaleFactor = i2939[8]
  request.r(i2939[9], i2939[10], 0, i2938, 'worldCamera')
  i2938.overrideSorting = !!i2939[11]
  i2938.pixelPerfect = !!i2939[12]
  i2938.targetDisplay = i2939[13]
  i2938.overridePixelPerfect = !!i2939[14]
  return i2938
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2941 = data
  i2940.m_UiScaleMode = i2941[0]
  i2940.m_ReferencePixelsPerUnit = i2941[1]
  i2940.m_ScaleFactor = i2941[2]
  i2940.m_ReferenceResolution = new pc.Vec2( i2941[3], i2941[4] )
  i2940.m_ScreenMatchMode = i2941[5]
  i2940.m_MatchWidthOrHeight = i2941[6]
  i2940.m_PhysicalUnit = i2941[7]
  i2940.m_FallbackScreenDPI = i2941[8]
  i2940.m_DefaultSpriteDPI = i2941[9]
  i2940.m_DynamicPixelsPerUnit = i2941[10]
  i2940.m_PresetInfoIsWorld = !!i2941[11]
  return i2940
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2942 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2943 = data
  i2942.m_IgnoreReversedGraphics = !!i2943[0]
  i2942.m_BlockingObjects = i2943[1]
  i2942.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2943[2] )
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2945 = data
  i2944.cullTransparentMesh = !!i2945[0]
  return i2944
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2946 = root || request.c( 'UnityEngine.UI.Image' )
  var i2947 = data
  request.r(i2947[0], i2947[1], 0, i2946, 'm_Sprite')
  i2946.m_Type = i2947[2]
  i2946.m_PreserveAspect = !!i2947[3]
  i2946.m_FillCenter = !!i2947[4]
  i2946.m_FillMethod = i2947[5]
  i2946.m_FillAmount = i2947[6]
  i2946.m_FillClockwise = !!i2947[7]
  i2946.m_FillOrigin = i2947[8]
  i2946.m_UseSpriteMesh = !!i2947[9]
  i2946.m_PixelsPerUnitMultiplier = i2947[10]
  request.r(i2947[11], i2947[12], 0, i2946, 'm_Material')
  i2946.m_Maskable = !!i2947[13]
  i2946.m_Color = new pc.Color(i2947[14], i2947[15], i2947[16], i2947[17])
  i2946.m_RaycastTarget = !!i2947[18]
  i2946.m_RaycastPadding = new pc.Vec4( i2947[19], i2947[20], i2947[21], i2947[22] )
  return i2946
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2948 = root || request.c( 'UnityEngine.UI.Button' )
  var i2949 = data
  i2948.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2949[0], i2948.m_OnClick)
  i2948.m_Navigation = request.d('UnityEngine.UI.Navigation', i2949[1], i2948.m_Navigation)
  i2948.m_Transition = i2949[2]
  i2948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2949[3], i2948.m_Colors)
  i2948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2949[4], i2948.m_SpriteState)
  i2948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2949[5], i2948.m_AnimationTriggers)
  i2948.m_Interactable = !!i2949[6]
  request.r(i2949[7], i2949[8], 0, i2948, 'm_TargetGraphic')
  return i2948
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2950 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2951 = data
  i2950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2951[0], i2950.m_PersistentCalls)
  return i2950
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2952 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2953 = data
  var i2955 = i2953[0]
  var i2954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.add(request.d('UnityEngine.Events.PersistentCall', i2955[i + 0]));
  }
  i2952.m_Calls = i2954
  return i2952
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2958 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2959 = data
  request.r(i2959[0], i2959[1], 0, i2958, 'm_Target')
  i2958.m_TargetAssemblyTypeName = i2959[2]
  i2958.m_MethodName = i2959[3]
  i2958.m_Mode = i2959[4]
  i2958.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2959[5], i2958.m_Arguments)
  i2958.m_CallState = i2959[6]
  return i2958
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2961 = data
  i2960.m_Mode = i2961[0]
  i2960.m_WrapAround = !!i2961[1]
  request.r(i2961[2], i2961[3], 0, i2960, 'm_SelectOnUp')
  request.r(i2961[4], i2961[5], 0, i2960, 'm_SelectOnDown')
  request.r(i2961[6], i2961[7], 0, i2960, 'm_SelectOnLeft')
  request.r(i2961[8], i2961[9], 0, i2960, 'm_SelectOnRight')
  return i2960
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2963 = data
  i2962.m_NormalColor = new pc.Color(i2963[0], i2963[1], i2963[2], i2963[3])
  i2962.m_HighlightedColor = new pc.Color(i2963[4], i2963[5], i2963[6], i2963[7])
  i2962.m_PressedColor = new pc.Color(i2963[8], i2963[9], i2963[10], i2963[11])
  i2962.m_SelectedColor = new pc.Color(i2963[12], i2963[13], i2963[14], i2963[15])
  i2962.m_DisabledColor = new pc.Color(i2963[16], i2963[17], i2963[18], i2963[19])
  i2962.m_ColorMultiplier = i2963[20]
  i2962.m_FadeDuration = i2963[21]
  return i2962
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2964 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2965 = data
  request.r(i2965[0], i2965[1], 0, i2964, 'm_HighlightedSprite')
  request.r(i2965[2], i2965[3], 0, i2964, 'm_PressedSprite')
  request.r(i2965[4], i2965[5], 0, i2964, 'm_SelectedSprite')
  request.r(i2965[6], i2965[7], 0, i2964, 'm_DisabledSprite')
  return i2964
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2966 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2967 = data
  i2966.m_NormalTrigger = i2967[0]
  i2966.m_HighlightedTrigger = i2967[1]
  i2966.m_PressedTrigger = i2967[2]
  i2966.m_SelectedTrigger = i2967[3]
  i2966.m_DisabledTrigger = i2967[4]
  return i2966
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2968 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2969 = data
  i2968.m_hasFontAssetChanged = !!i2969[0]
  request.r(i2969[1], i2969[2], 0, i2968, 'm_baseMaterial')
  i2968.m_maskOffset = new pc.Vec4( i2969[3], i2969[4], i2969[5], i2969[6] )
  i2968.m_text = i2969[7]
  i2968.m_isRightToLeft = !!i2969[8]
  request.r(i2969[9], i2969[10], 0, i2968, 'm_fontAsset')
  request.r(i2969[11], i2969[12], 0, i2968, 'm_sharedMaterial')
  var i2971 = i2969[13]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 2) {
  request.r(i2971[i + 0], i2971[i + 1], 2, i2970, '')
  }
  i2968.m_fontSharedMaterials = i2970
  request.r(i2969[14], i2969[15], 0, i2968, 'm_fontMaterial')
  var i2973 = i2969[16]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 2, i2972, '')
  }
  i2968.m_fontMaterials = i2972
  i2968.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2969[17], i2969[18], i2969[19], i2969[20])
  i2968.m_fontColor = new pc.Color(i2969[21], i2969[22], i2969[23], i2969[24])
  i2968.m_enableVertexGradient = !!i2969[25]
  i2968.m_colorMode = i2969[26]
  i2968.m_fontColorGradient = request.d('TMPro.VertexGradient', i2969[27], i2968.m_fontColorGradient)
  request.r(i2969[28], i2969[29], 0, i2968, 'm_fontColorGradientPreset')
  request.r(i2969[30], i2969[31], 0, i2968, 'm_spriteAsset')
  i2968.m_tintAllSprites = !!i2969[32]
  request.r(i2969[33], i2969[34], 0, i2968, 'm_StyleSheet')
  i2968.m_TextStyleHashCode = i2969[35]
  i2968.m_overrideHtmlColors = !!i2969[36]
  i2968.m_faceColor = UnityEngine.Color32.ConstructColor(i2969[37], i2969[38], i2969[39], i2969[40])
  i2968.m_fontSize = i2969[41]
  i2968.m_fontSizeBase = i2969[42]
  i2968.m_fontWeight = i2969[43]
  i2968.m_enableAutoSizing = !!i2969[44]
  i2968.m_fontSizeMin = i2969[45]
  i2968.m_fontSizeMax = i2969[46]
  i2968.m_fontStyle = i2969[47]
  i2968.m_HorizontalAlignment = i2969[48]
  i2968.m_VerticalAlignment = i2969[49]
  i2968.m_textAlignment = i2969[50]
  i2968.m_characterSpacing = i2969[51]
  i2968.m_wordSpacing = i2969[52]
  i2968.m_lineSpacing = i2969[53]
  i2968.m_lineSpacingMax = i2969[54]
  i2968.m_paragraphSpacing = i2969[55]
  i2968.m_charWidthMaxAdj = i2969[56]
  i2968.m_enableWordWrapping = !!i2969[57]
  i2968.m_wordWrappingRatios = i2969[58]
  i2968.m_overflowMode = i2969[59]
  request.r(i2969[60], i2969[61], 0, i2968, 'm_linkedTextComponent')
  request.r(i2969[62], i2969[63], 0, i2968, 'parentLinkedComponent')
  i2968.m_enableKerning = !!i2969[64]
  i2968.m_enableExtraPadding = !!i2969[65]
  i2968.checkPaddingRequired = !!i2969[66]
  i2968.m_isRichText = !!i2969[67]
  i2968.m_parseCtrlCharacters = !!i2969[68]
  i2968.m_isOrthographic = !!i2969[69]
  i2968.m_isCullingEnabled = !!i2969[70]
  i2968.m_horizontalMapping = i2969[71]
  i2968.m_verticalMapping = i2969[72]
  i2968.m_uvLineOffset = i2969[73]
  i2968.m_geometrySortingOrder = i2969[74]
  i2968.m_IsTextObjectScaleStatic = !!i2969[75]
  i2968.m_VertexBufferAutoSizeReduction = !!i2969[76]
  i2968.m_useMaxVisibleDescender = !!i2969[77]
  i2968.m_pageToDisplay = i2969[78]
  i2968.m_margin = new pc.Vec4( i2969[79], i2969[80], i2969[81], i2969[82] )
  i2968.m_isUsingLegacyAnimationComponent = !!i2969[83]
  i2968.m_isVolumetricText = !!i2969[84]
  request.r(i2969[85], i2969[86], 0, i2968, 'm_Material')
  i2968.m_Maskable = !!i2969[87]
  i2968.m_Color = new pc.Color(i2969[88], i2969[89], i2969[90], i2969[91])
  i2968.m_RaycastTarget = !!i2969[92]
  i2968.m_RaycastPadding = new pc.Vec4( i2969[93], i2969[94], i2969[95], i2969[96] )
  return i2968
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2975 = data
  request.r(i2975[0], i2975[1], 0, i2974, 'm_ObjectArgument')
  i2974.m_ObjectArgumentAssemblyTypeName = i2975[2]
  i2974.m_IntArgument = i2975[3]
  i2974.m_FloatArgument = i2975[4]
  i2974.m_StringArgument = i2975[5]
  i2974.m_BoolArgument = !!i2975[6]
  return i2974
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2977 = data
  request.r(i2977[0], i2977[1], 0, i2976, 'm_Texture')
  i2976.m_UVRect = UnityEngine.Rect.MinMaxRect(i2977[2], i2977[3], i2977[4], i2977[5])
  request.r(i2977[6], i2977[7], 0, i2976, 'm_Material')
  i2976.m_Maskable = !!i2977[8]
  i2976.m_Color = new pc.Color(i2977[9], i2977[10], i2977[11], i2977[12])
  i2976.m_RaycastTarget = !!i2977[13]
  i2976.m_RaycastPadding = new pc.Vec4( i2977[14], i2977[15], i2977[16], i2977[17] )
  return i2976
}

Deserializers["BallWheelController"] = function (request, data, root) {
  var i2978 = root || request.c( 'BallWheelController' )
  var i2979 = data
  request.r(i2979[0], i2979[1], 0, i2978, 'wheelContainer')
  request.r(i2979[2], i2979[3], 0, i2978, 'okButton')
  request.r(i2979[4], i2979[5], 0, i2978, 'randomButton')
  i2978.radius = i2979[6]
  i2978.zOffset = i2979[7]
  i2978.startAngleDeg = i2979[8]
  i2978.zRotationPerItem = i2979[9]
  i2978.angularFriction = i2979[10]
  i2978.snapSpeed = i2979[11]
  i2978.minFlingVelocity = i2979[12]
  return i2978
}

Deserializers["UIMovement"] = function (request, data, root) {
  var i2980 = root || request.c( 'UIMovement' )
  var i2981 = data
  i2980.moveDistance = i2981[0]
  i2980.speed = i2981[1]
  return i2980
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2983 = data
  request.r(i2983[0], i2983[1], 0, i2982, 'm_FirstSelected')
  i2982.m_sendNavigationEvents = !!i2983[2]
  i2982.m_DragThreshold = i2983[3]
  return i2982
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2985 = data
  i2984.m_HorizontalAxis = i2985[0]
  i2984.m_VerticalAxis = i2985[1]
  i2984.m_SubmitButton = i2985[2]
  i2984.m_CancelButton = i2985[3]
  i2984.m_InputActionsPerSecond = i2985[4]
  i2984.m_RepeatDelay = i2985[5]
  i2984.m_ForceModuleActive = !!i2985[6]
  i2984.m_SendPointerHoverToParent = !!i2985[7]
  return i2984
}

Deserializers["BallItem"] = function (request, data, root) {
  var i2986 = root || request.c( 'BallItem' )
  var i2987 = data
  request.r(i2987[0], i2987[1], 0, i2986, 'meshRenderer')
  request.r(i2987[2], i2987[3], 0, i2986, 'outlineObject')
  i2986.selectedScale = i2987[4]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2989 = data
  i2988.ambientIntensity = i2989[0]
  i2988.reflectionIntensity = i2989[1]
  i2988.ambientMode = i2989[2]
  i2988.ambientLight = new pc.Color(i2989[3], i2989[4], i2989[5], i2989[6])
  i2988.ambientSkyColor = new pc.Color(i2989[7], i2989[8], i2989[9], i2989[10])
  i2988.ambientGroundColor = new pc.Color(i2989[11], i2989[12], i2989[13], i2989[14])
  i2988.ambientEquatorColor = new pc.Color(i2989[15], i2989[16], i2989[17], i2989[18])
  i2988.fogColor = new pc.Color(i2989[19], i2989[20], i2989[21], i2989[22])
  i2988.fogEndDistance = i2989[23]
  i2988.fogStartDistance = i2989[24]
  i2988.fogDensity = i2989[25]
  i2988.fog = !!i2989[26]
  request.r(i2989[27], i2989[28], 0, i2988, 'skybox')
  i2988.fogMode = i2989[29]
  var i2991 = i2989[30]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2991[i + 0]) );
  }
  i2988.lightmaps = i2990
  i2988.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2989[31], i2988.lightProbes)
  i2988.lightmapsMode = i2989[32]
  i2988.mixedBakeMode = i2989[33]
  i2988.environmentLightingMode = i2989[34]
  i2988.ambientProbe = new pc.SphericalHarmonicsL2(i2989[35])
  i2988.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2989[36])
  i2988.useReferenceAmbientProbe = !!i2989[37]
  request.r(i2989[38], i2989[39], 0, i2988, 'customReflection')
  request.r(i2989[40], i2989[41], 0, i2988, 'defaultReflection')
  i2988.defaultReflectionMode = i2989[42]
  i2988.defaultReflectionResolution = i2989[43]
  i2988.sunLightObjectId = i2989[44]
  i2988.pixelLightCount = i2989[45]
  i2988.defaultReflectionHDR = !!i2989[46]
  i2988.hasLightDataAsset = !!i2989[47]
  i2988.hasManualGenerate = !!i2989[48]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'lightmapColor')
  request.r(i2995[2], i2995[3], 0, i2994, 'lightmapDirection')
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2996 = root || new UnityEngine.LightProbes()
  var i2997 = data
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i3003 = data
  i3002.name = i3003[0]
  i3002.bounciness = i3003[1]
  i3002.dynamicFriction = i3003[2]
  i3002.staticFriction = i3003[3]
  i3002.frictionCombine = i3003[4]
  i3002.bounceCombine = i3003[5]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3005 = data
  var i3007 = i3005[0]
  var i3006 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3007[i + 0]));
  }
  i3004.ShaderCompilationErrors = i3006
  i3004.name = i3005[1]
  i3004.guid = i3005[2]
  var i3009 = i3005[3]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( i3009[i + 0] );
  }
  i3004.shaderDefinedKeywords = i3008
  var i3011 = i3005[4]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3011[i + 0]) );
  }
  i3004.passes = i3010
  var i3013 = i3005[5]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3013[i + 0]) );
  }
  i3004.usePasses = i3012
  var i3015 = i3005[6]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3015[i + 0]) );
  }
  i3004.defaultParameterValues = i3014
  request.r(i3005[7], i3005[8], 0, i3004, 'unityFallbackShader')
  i3004.readDepth = !!i3005[9]
  i3004.isCreatedByShaderGraph = !!i3005[10]
  i3004.compiled = !!i3005[11]
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3019 = data
  i3018.shaderName = i3019[0]
  i3018.errorMessage = i3019[1]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3024 = root || new pc.UnityShaderPass()
  var i3025 = data
  i3024.id = i3025[0]
  i3024.subShaderIndex = i3025[1]
  i3024.name = i3025[2]
  i3024.passType = i3025[3]
  i3024.grabPassTextureName = i3025[4]
  i3024.usePass = !!i3025[5]
  i3024.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[6], i3024.zTest)
  i3024.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[7], i3024.zWrite)
  i3024.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[8], i3024.culling)
  i3024.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3025[9], i3024.blending)
  i3024.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3025[10], i3024.alphaBlending)
  i3024.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[11], i3024.colorWriteMask)
  i3024.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[12], i3024.offsetUnits)
  i3024.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[13], i3024.offsetFactor)
  i3024.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[14], i3024.stencilRef)
  i3024.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[15], i3024.stencilReadMask)
  i3024.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3025[16], i3024.stencilWriteMask)
  i3024.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3025[17], i3024.stencilOp)
  i3024.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3025[18], i3024.stencilOpFront)
  i3024.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3025[19], i3024.stencilOpBack)
  var i3027 = i3025[20]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3027[i + 0]) );
  }
  i3024.tags = i3026
  var i3029 = i3025[21]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( i3029[i + 0] );
  }
  i3024.passDefinedKeywords = i3028
  var i3031 = i3025[22]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3031[i + 0]) );
  }
  i3024.passDefinedKeywordGroups = i3030
  var i3033 = i3025[23]
  var i3032 = []
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3033[i + 0]) );
  }
  i3024.variants = i3032
  var i3035 = i3025[24]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3035[i + 0]) );
  }
  i3024.excludedVariants = i3034
  i3024.hasDepthReader = !!i3025[25]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3037 = data
  i3036.val = i3037[0]
  i3036.name = i3037[1]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3039 = data
  i3038.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3039[0], i3038.src)
  i3038.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3039[1], i3038.dst)
  i3038.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3039[2], i3038.op)
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3041 = data
  i3040.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3041[0], i3040.pass)
  i3040.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3041[1], i3040.fail)
  i3040.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3041[2], i3040.zFail)
  i3040.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3041[3], i3040.comp)
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3045 = data
  i3044.name = i3045[0]
  i3044.value = i3045[1]
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3049 = data
  var i3051 = i3049[0]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( i3051[i + 0] );
  }
  i3048.keywords = i3050
  i3048.hasDiscard = !!i3049[1]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3055 = data
  i3054.passId = i3055[0]
  i3054.subShaderIndex = i3055[1]
  var i3057 = i3055[2]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( i3057[i + 0] );
  }
  i3054.keywords = i3056
  i3054.vertexProgram = i3055[3]
  i3054.fragmentProgram = i3055[4]
  i3054.exportedForWebGl2 = !!i3055[5]
  i3054.readDepth = !!i3055[6]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3061 = data
  request.r(i3061[0], i3061[1], 0, i3060, 'shader')
  i3060.pass = i3061[2]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3065 = data
  i3064.name = i3065[0]
  i3064.type = i3065[1]
  i3064.value = new pc.Vec4( i3065[2], i3065[3], i3065[4], i3065[5] )
  i3064.textureValue = i3065[6]
  i3064.shaderPropertyFlag = i3065[7]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3067 = data
  i3066.name = i3067[0]
  request.r(i3067[1], i3067[2], 0, i3066, 'texture')
  i3066.aabb = i3067[3]
  i3066.vertices = i3067[4]
  i3066.triangles = i3067[5]
  i3066.textureRect = UnityEngine.Rect.MinMaxRect(i3067[6], i3067[7], i3067[8], i3067[9])
  i3066.packedRect = UnityEngine.Rect.MinMaxRect(i3067[10], i3067[11], i3067[12], i3067[13])
  i3066.border = new pc.Vec4( i3067[14], i3067[15], i3067[16], i3067[17] )
  i3066.transparency = i3067[18]
  i3066.bounds = i3067[19]
  i3066.pixelsPerUnit = i3067[20]
  i3066.textureWidth = i3067[21]
  i3066.textureHeight = i3067[22]
  i3066.nativeSize = new pc.Vec2( i3067[23], i3067[24] )
  i3066.pivot = new pc.Vec2( i3067[25], i3067[26] )
  i3066.textureRectOffset = new pc.Vec2( i3067[27], i3067[28] )
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3069 = data
  i3068.name = i3069[0]
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3071 = data
  i3070.name = i3071[0]
  i3070.ascent = i3071[1]
  i3070.originalLineHeight = i3071[2]
  i3070.fontSize = i3071[3]
  var i3073 = i3071[4]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3073[i + 0]) );
  }
  i3070.characterInfo = i3072
  request.r(i3071[5], i3071[6], 0, i3070, 'texture')
  i3070.originalFontSize = i3071[7]
  return i3070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3077 = data
  i3076.index = i3077[0]
  i3076.advance = i3077[1]
  i3076.bearing = i3077[2]
  i3076.glyphWidth = i3077[3]
  i3076.glyphHeight = i3077[4]
  i3076.minX = i3077[5]
  i3076.maxX = i3077[6]
  i3076.minY = i3077[7]
  i3076.maxY = i3077[8]
  i3076.uvBottomLeftX = i3077[9]
  i3076.uvBottomLeftY = i3077[10]
  i3076.uvBottomRightX = i3077[11]
  i3076.uvBottomRightY = i3077[12]
  i3076.uvTopLeftX = i3077[13]
  i3076.uvTopLeftY = i3077[14]
  i3076.uvTopRightX = i3077[15]
  i3076.uvTopRightY = i3077[16]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3079 = data
  i3078.name = i3079[0]
  i3078.bytes64 = i3079[1]
  i3078.data = i3079[2]
  return i3078
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3080 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3081 = data
  i3080.hashCode = i3081[0]
  request.r(i3081[1], i3081[2], 0, i3080, 'material')
  i3080.materialHashCode = i3081[3]
  request.r(i3081[4], i3081[5], 0, i3080, 'atlas')
  i3080.normalStyle = i3081[6]
  i3080.normalSpacingOffset = i3081[7]
  i3080.boldStyle = i3081[8]
  i3080.boldSpacing = i3081[9]
  i3080.italicStyle = i3081[10]
  i3080.tabSize = i3081[11]
  i3080.m_Version = i3081[12]
  i3080.m_SourceFontFileGUID = i3081[13]
  request.r(i3081[14], i3081[15], 0, i3080, 'm_SourceFontFile_EditorRef')
  request.r(i3081[16], i3081[17], 0, i3080, 'm_SourceFontFile')
  i3080.m_AtlasPopulationMode = i3081[18]
  i3080.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3081[19], i3080.m_FaceInfo)
  var i3083 = i3081[20]
  var i3082 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.add(request.d('UnityEngine.TextCore.Glyph', i3083[i + 0]));
  }
  i3080.m_GlyphTable = i3082
  var i3085 = i3081[21]
  var i3084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.add(request.d('TMPro.TMP_Character', i3085[i + 0]));
  }
  i3080.m_CharacterTable = i3084
  var i3087 = i3081[22]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 2) {
  request.r(i3087[i + 0], i3087[i + 1], 2, i3086, '')
  }
  i3080.m_AtlasTextures = i3086
  i3080.m_AtlasTextureIndex = i3081[23]
  i3080.m_IsMultiAtlasTexturesEnabled = !!i3081[24]
  i3080.m_ClearDynamicDataOnBuild = !!i3081[25]
  var i3089 = i3081[26]
  var i3088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.add(request.d('UnityEngine.TextCore.GlyphRect', i3089[i + 0]));
  }
  i3080.m_UsedGlyphRects = i3088
  var i3091 = i3081[27]
  var i3090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.add(request.d('UnityEngine.TextCore.GlyphRect', i3091[i + 0]));
  }
  i3080.m_FreeGlyphRects = i3090
  i3080.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3081[28], i3080.m_fontInfo)
  i3080.m_AtlasWidth = i3081[29]
  i3080.m_AtlasHeight = i3081[30]
  i3080.m_AtlasPadding = i3081[31]
  i3080.m_AtlasRenderMode = i3081[32]
  var i3093 = i3081[33]
  var i3092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.add(request.d('TMPro.TMP_Glyph', i3093[i + 0]));
  }
  i3080.m_glyphInfoList = i3092
  i3080.m_KerningTable = request.d('TMPro.KerningTable', i3081[34], i3080.m_KerningTable)
  i3080.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3081[35], i3080.m_FontFeatureTable)
  var i3095 = i3081[36]
  var i3094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3095.length; i += 2) {
  request.r(i3095[i + 0], i3095[i + 1], 1, i3094, '')
  }
  i3080.fallbackFontAssets = i3094
  var i3097 = i3081[37]
  var i3096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3097.length; i += 2) {
  request.r(i3097[i + 0], i3097[i + 1], 1, i3096, '')
  }
  i3080.m_FallbackFontAssetTable = i3096
  i3080.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3081[38], i3080.m_CreationSettings)
  var i3099 = i3081[39]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('TMPro.TMP_FontWeightPair', i3099[i + 0]) );
  }
  i3080.m_FontWeightTable = i3098
  var i3101 = i3081[40]
  var i3100 = []
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.push( request.d('TMPro.TMP_FontWeightPair', i3101[i + 0]) );
  }
  i3080.fontWeights = i3100
  return i3080
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3103 = data
  i3102.m_FaceIndex = i3103[0]
  i3102.m_FamilyName = i3103[1]
  i3102.m_StyleName = i3103[2]
  i3102.m_PointSize = i3103[3]
  i3102.m_Scale = i3103[4]
  i3102.m_UnitsPerEM = i3103[5]
  i3102.m_LineHeight = i3103[6]
  i3102.m_AscentLine = i3103[7]
  i3102.m_CapLine = i3103[8]
  i3102.m_MeanLine = i3103[9]
  i3102.m_Baseline = i3103[10]
  i3102.m_DescentLine = i3103[11]
  i3102.m_SuperscriptOffset = i3103[12]
  i3102.m_SuperscriptSize = i3103[13]
  i3102.m_SubscriptOffset = i3103[14]
  i3102.m_SubscriptSize = i3103[15]
  i3102.m_UnderlineOffset = i3103[16]
  i3102.m_UnderlineThickness = i3103[17]
  i3102.m_StrikethroughOffset = i3103[18]
  i3102.m_StrikethroughThickness = i3103[19]
  i3102.m_TabWidth = i3103[20]
  return i3102
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3107 = data
  i3106.m_Index = i3107[0]
  i3106.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3107[1], i3106.m_Metrics)
  i3106.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3107[2], i3106.m_GlyphRect)
  i3106.m_Scale = i3107[3]
  i3106.m_AtlasIndex = i3107[4]
  i3106.m_ClassDefinitionType = i3107[5]
  return i3106
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3109 = data
  i3108.m_Width = i3109[0]
  i3108.m_Height = i3109[1]
  i3108.m_HorizontalBearingX = i3109[2]
  i3108.m_HorizontalBearingY = i3109[3]
  i3108.m_HorizontalAdvance = i3109[4]
  return i3108
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3111 = data
  i3110.m_X = i3111[0]
  i3110.m_Y = i3111[1]
  i3110.m_Width = i3111[2]
  i3110.m_Height = i3111[3]
  return i3110
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3114 = root || request.c( 'TMPro.TMP_Character' )
  var i3115 = data
  i3114.m_ElementType = i3115[0]
  i3114.m_Unicode = i3115[1]
  i3114.m_GlyphIndex = i3115[2]
  i3114.m_Scale = i3115[3]
  return i3114
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3120 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3121 = data
  i3120.Name = i3121[0]
  i3120.PointSize = i3121[1]
  i3120.Scale = i3121[2]
  i3120.CharacterCount = i3121[3]
  i3120.LineHeight = i3121[4]
  i3120.Baseline = i3121[5]
  i3120.Ascender = i3121[6]
  i3120.CapHeight = i3121[7]
  i3120.Descender = i3121[8]
  i3120.CenterLine = i3121[9]
  i3120.SuperscriptOffset = i3121[10]
  i3120.SubscriptOffset = i3121[11]
  i3120.SubSize = i3121[12]
  i3120.Underline = i3121[13]
  i3120.UnderlineThickness = i3121[14]
  i3120.strikethrough = i3121[15]
  i3120.strikethroughThickness = i3121[16]
  i3120.TabWidth = i3121[17]
  i3120.Padding = i3121[18]
  i3120.AtlasWidth = i3121[19]
  i3120.AtlasHeight = i3121[20]
  return i3120
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3124 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3125 = data
  i3124.id = i3125[0]
  i3124.x = i3125[1]
  i3124.y = i3125[2]
  i3124.width = i3125[3]
  i3124.height = i3125[4]
  i3124.xOffset = i3125[5]
  i3124.yOffset = i3125[6]
  i3124.xAdvance = i3125[7]
  i3124.scale = i3125[8]
  return i3124
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3126 = root || request.c( 'TMPro.KerningTable' )
  var i3127 = data
  var i3129 = i3127[0]
  var i3128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.add(request.d('TMPro.KerningPair', i3129[i + 0]));
  }
  i3126.kerningPairs = i3128
  return i3126
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3132 = root || request.c( 'TMPro.KerningPair' )
  var i3133 = data
  i3132.xOffset = i3133[0]
  i3132.m_FirstGlyph = i3133[1]
  i3132.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3133[2], i3132.m_FirstGlyphAdjustments)
  i3132.m_SecondGlyph = i3133[3]
  i3132.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3133[4], i3132.m_SecondGlyphAdjustments)
  i3132.m_IgnoreSpacingAdjustments = !!i3133[5]
  return i3132
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3134 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3135 = data
  var i3137 = i3135[0]
  var i3136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3137[i + 0]));
  }
  i3134.m_GlyphPairAdjustmentRecords = i3136
  return i3134
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3140 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3141 = data
  i3140.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3141[0], i3140.m_FirstAdjustmentRecord)
  i3140.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3141[1], i3140.m_SecondAdjustmentRecord)
  i3140.m_FeatureLookupFlags = i3141[2]
  return i3140
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3144 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3145 = data
  i3144.sourceFontFileName = i3145[0]
  i3144.sourceFontFileGUID = i3145[1]
  i3144.pointSizeSamplingMode = i3145[2]
  i3144.pointSize = i3145[3]
  i3144.padding = i3145[4]
  i3144.packingMode = i3145[5]
  i3144.atlasWidth = i3145[6]
  i3144.atlasHeight = i3145[7]
  i3144.characterSetSelectionMode = i3145[8]
  i3144.characterSequence = i3145[9]
  i3144.referencedFontAssetGUID = i3145[10]
  i3144.referencedTextAssetGUID = i3145[11]
  i3144.fontStyle = i3145[12]
  i3144.fontStyleModifier = i3145[13]
  i3144.renderMode = i3145[14]
  i3144.includeFontFeatures = !!i3145[15]
  return i3144
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3148 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3149 = data
  request.r(i3149[0], i3149[1], 0, i3148, 'regularTypeface')
  request.r(i3149[2], i3149[3], 0, i3148, 'italicTypeface')
  return i3148
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3150 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3151 = data
  i3150.m_GlyphIndex = i3151[0]
  i3150.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3151[1], i3150.m_GlyphValueRecord)
  return i3150
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3152 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3153 = data
  i3152.m_XPlacement = i3153[0]
  i3152.m_YPlacement = i3153[1]
  i3152.m_XAdvance = i3153[2]
  i3152.m_YAdvance = i3153[3]
  return i3152
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3154 = root || request.c( 'TMPro.TMP_Settings' )
  var i3155 = data
  i3154.m_enableWordWrapping = !!i3155[0]
  i3154.m_enableKerning = !!i3155[1]
  i3154.m_enableExtraPadding = !!i3155[2]
  i3154.m_enableTintAllSprites = !!i3155[3]
  i3154.m_enableParseEscapeCharacters = !!i3155[4]
  i3154.m_EnableRaycastTarget = !!i3155[5]
  i3154.m_GetFontFeaturesAtRuntime = !!i3155[6]
  i3154.m_missingGlyphCharacter = i3155[7]
  i3154.m_warningsDisabled = !!i3155[8]
  request.r(i3155[9], i3155[10], 0, i3154, 'm_defaultFontAsset')
  i3154.m_defaultFontAssetPath = i3155[11]
  i3154.m_defaultFontSize = i3155[12]
  i3154.m_defaultAutoSizeMinRatio = i3155[13]
  i3154.m_defaultAutoSizeMaxRatio = i3155[14]
  i3154.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3155[15], i3155[16] )
  i3154.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3155[17], i3155[18] )
  i3154.m_autoSizeTextContainer = !!i3155[19]
  i3154.m_IsTextObjectScaleStatic = !!i3155[20]
  var i3157 = i3155[21]
  var i3156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3157.length; i += 2) {
  request.r(i3157[i + 0], i3157[i + 1], 1, i3156, '')
  }
  i3154.m_fallbackFontAssets = i3156
  i3154.m_matchMaterialPreset = !!i3155[22]
  request.r(i3155[23], i3155[24], 0, i3154, 'm_defaultSpriteAsset')
  i3154.m_defaultSpriteAssetPath = i3155[25]
  i3154.m_enableEmojiSupport = !!i3155[26]
  i3154.m_MissingCharacterSpriteUnicode = i3155[27]
  i3154.m_defaultColorGradientPresetsPath = i3155[28]
  request.r(i3155[29], i3155[30], 0, i3154, 'm_defaultStyleSheet')
  i3154.m_StyleSheetsResourcePath = i3155[31]
  request.r(i3155[32], i3155[33], 0, i3154, 'm_leadingCharacters')
  request.r(i3155[34], i3155[35], 0, i3154, 'm_followingCharacters')
  i3154.m_UseModernHangulLineBreakingRules = !!i3155[36]
  return i3154
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3158 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3159 = data
  i3158.hashCode = i3159[0]
  request.r(i3159[1], i3159[2], 0, i3158, 'material')
  i3158.materialHashCode = i3159[3]
  request.r(i3159[4], i3159[5], 0, i3158, 'spriteSheet')
  var i3161 = i3159[6]
  var i3160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.add(request.d('TMPro.TMP_Sprite', i3161[i + 0]));
  }
  i3158.spriteInfoList = i3160
  var i3163 = i3159[7]
  var i3162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3163.length; i += 2) {
  request.r(i3163[i + 0], i3163[i + 1], 1, i3162, '')
  }
  i3158.fallbackSpriteAssets = i3162
  i3158.m_Version = i3159[8]
  i3158.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3159[9], i3158.m_FaceInfo)
  var i3165 = i3159[10]
  var i3164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.add(request.d('TMPro.TMP_SpriteCharacter', i3165[i + 0]));
  }
  i3158.m_SpriteCharacterTable = i3164
  var i3167 = i3159[11]
  var i3166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.add(request.d('TMPro.TMP_SpriteGlyph', i3167[i + 0]));
  }
  i3158.m_SpriteGlyphTable = i3166
  return i3158
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3170 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3171 = data
  i3170.name = i3171[0]
  i3170.hashCode = i3171[1]
  i3170.unicode = i3171[2]
  i3170.pivot = new pc.Vec2( i3171[3], i3171[4] )
  request.r(i3171[5], i3171[6], 0, i3170, 'sprite')
  i3170.id = i3171[7]
  i3170.x = i3171[8]
  i3170.y = i3171[9]
  i3170.width = i3171[10]
  i3170.height = i3171[11]
  i3170.xOffset = i3171[12]
  i3170.yOffset = i3171[13]
  i3170.xAdvance = i3171[14]
  i3170.scale = i3171[15]
  return i3170
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3176 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3177 = data
  i3176.m_Name = i3177[0]
  i3176.m_HashCode = i3177[1]
  i3176.m_ElementType = i3177[2]
  i3176.m_Unicode = i3177[3]
  i3176.m_GlyphIndex = i3177[4]
  i3176.m_Scale = i3177[5]
  return i3176
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3180 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3181 = data
  request.r(i3181[0], i3181[1], 0, i3180, 'sprite')
  i3180.m_Index = i3181[2]
  i3180.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3181[3], i3180.m_Metrics)
  i3180.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3181[4], i3180.m_GlyphRect)
  i3180.m_Scale = i3181[5]
  i3180.m_AtlasIndex = i3181[6]
  i3180.m_ClassDefinitionType = i3181[7]
  return i3180
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3182 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3183 = data
  var i3185 = i3183[0]
  var i3184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.add(request.d('TMPro.TMP_Style', i3185[i + 0]));
  }
  i3182.m_StyleList = i3184
  return i3182
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3188 = root || request.c( 'TMPro.TMP_Style' )
  var i3189 = data
  i3188.m_Name = i3189[0]
  i3188.m_HashCode = i3189[1]
  i3188.m_OpeningDefinition = i3189[2]
  i3188.m_ClosingDefinition = i3189[3]
  i3188.m_OpeningTagArray = i3189[4]
  i3188.m_ClosingTagArray = i3189[5]
  i3188.m_OpeningTagUnicodeArray = i3189[6]
  i3188.m_ClosingTagUnicodeArray = i3189[7]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3191 = data
  var i3193 = i3191[0]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3193[i + 0]) );
  }
  i3190.files = i3192
  i3190.componentToPrefabIds = i3191[1]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3197 = data
  i3196.path = i3197[0]
  request.r(i3197[1], i3197[2], 0, i3196, 'unityObject')
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3199 = data
  var i3201 = i3199[0]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3201[i + 0]) );
  }
  i3198.scriptsExecutionOrder = i3200
  var i3203 = i3199[1]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3203[i + 0]) );
  }
  i3198.sortingLayers = i3202
  var i3205 = i3199[2]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3205[i + 0]) );
  }
  i3198.cullingLayers = i3204
  i3198.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3199[3], i3198.timeSettings)
  i3198.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3199[4], i3198.physicsSettings)
  i3198.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3199[5], i3198.physics2DSettings)
  i3198.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3199[6], i3198.qualitySettings)
  i3198.enableRealtimeShadows = !!i3199[7]
  i3198.enableAutoInstancing = !!i3199[8]
  i3198.enableDynamicBatching = !!i3199[9]
  i3198.lightmapEncodingQuality = i3199[10]
  i3198.desiredColorSpace = i3199[11]
  var i3207 = i3199[12]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( i3207[i + 0] );
  }
  i3198.allTags = i3206
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3211 = data
  i3210.name = i3211[0]
  i3210.value = i3211[1]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3215 = data
  i3214.id = i3215[0]
  i3214.name = i3215[1]
  i3214.value = i3215[2]
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3219 = data
  i3218.id = i3219[0]
  i3218.name = i3219[1]
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3221 = data
  i3220.fixedDeltaTime = i3221[0]
  i3220.maximumDeltaTime = i3221[1]
  i3220.timeScale = i3221[2]
  i3220.maximumParticleTimestep = i3221[3]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3223 = data
  i3222.gravity = new pc.Vec3( i3223[0], i3223[1], i3223[2] )
  i3222.defaultSolverIterations = i3223[3]
  i3222.bounceThreshold = i3223[4]
  i3222.autoSyncTransforms = !!i3223[5]
  i3222.autoSimulation = !!i3223[6]
  var i3225 = i3223[7]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3225[i + 0]) );
  }
  i3222.collisionMatrix = i3224
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3229 = data
  i3228.enabled = !!i3229[0]
  i3228.layerId = i3229[1]
  i3228.otherLayerId = i3229[2]
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3231 = data
  request.r(i3231[0], i3231[1], 0, i3230, 'material')
  i3230.gravity = new pc.Vec2( i3231[2], i3231[3] )
  i3230.positionIterations = i3231[4]
  i3230.velocityIterations = i3231[5]
  i3230.velocityThreshold = i3231[6]
  i3230.maxLinearCorrection = i3231[7]
  i3230.maxAngularCorrection = i3231[8]
  i3230.maxTranslationSpeed = i3231[9]
  i3230.maxRotationSpeed = i3231[10]
  i3230.baumgarteScale = i3231[11]
  i3230.baumgarteTOIScale = i3231[12]
  i3230.timeToSleep = i3231[13]
  i3230.linearSleepTolerance = i3231[14]
  i3230.angularSleepTolerance = i3231[15]
  i3230.defaultContactOffset = i3231[16]
  i3230.autoSimulation = !!i3231[17]
  i3230.queriesHitTriggers = !!i3231[18]
  i3230.queriesStartInColliders = !!i3231[19]
  i3230.callbacksOnDisable = !!i3231[20]
  i3230.reuseCollisionCallbacks = !!i3231[21]
  i3230.autoSyncTransforms = !!i3231[22]
  var i3233 = i3231[23]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 1) {
    i3232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3233[i + 0]) );
  }
  i3230.collisionMatrix = i3232
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3237 = data
  i3236.enabled = !!i3237[0]
  i3236.layerId = i3237[1]
  i3236.otherLayerId = i3237[2]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3239 = data
  var i3241 = i3239[0]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3241[i + 0]) );
  }
  i3238.qualityLevels = i3240
  var i3243 = i3239[1]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( i3243[i + 0] );
  }
  i3238.names = i3242
  i3238.shadows = i3239[2]
  i3238.anisotropicFiltering = i3239[3]
  i3238.antiAliasing = i3239[4]
  i3238.lodBias = i3239[5]
  i3238.shadowCascades = i3239[6]
  i3238.shadowDistance = i3239[7]
  i3238.shadowmaskMode = i3239[8]
  i3238.shadowProjection = i3239[9]
  i3238.shadowResolution = i3239[10]
  i3238.softParticles = !!i3239[11]
  i3238.softVegetation = !!i3239[12]
  i3238.activeColorSpace = i3239[13]
  i3238.desiredColorSpace = i3239[14]
  i3238.masterTextureLimit = i3239[15]
  i3238.maxQueuedFrames = i3239[16]
  i3238.particleRaycastBudget = i3239[17]
  i3238.pixelLightCount = i3239[18]
  i3238.realtimeReflectionProbes = !!i3239[19]
  i3238.shadowCascade2Split = i3239[20]
  i3238.shadowCascade4Split = new pc.Vec3( i3239[21], i3239[22], i3239[23] )
  i3238.streamingMipmapsActive = !!i3239[24]
  i3238.vSyncCount = i3239[25]
  i3238.asyncUploadBufferSize = i3239[26]
  i3238.asyncUploadTimeSlice = i3239[27]
  i3238.billboardsFaceCameraPosition = !!i3239[28]
  i3238.shadowNearPlaneOffset = i3239[29]
  i3238.streamingMipmapsMemoryBudget = i3239[30]
  i3238.maximumLODLevel = i3239[31]
  i3238.streamingMipmapsAddAllCameras = !!i3239[32]
  i3238.streamingMipmapsMaxLevelReduction = i3239[33]
  i3238.streamingMipmapsRenderersPerFrame = i3239[34]
  i3238.resolutionScalingFixedDPIFactor = i3239[35]
  i3238.streamingMipmapsMaxFileIORequests = i3239[36]
  i3238.currentQualityLevel = i3239[37]
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3249 = data
  i3248.weight = i3249[0]
  i3248.vertices = i3249[1]
  i3248.normals = i3249[2]
  i3248.tangents = i3249[3]
  return i3248
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3250 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3251 = data
  i3250.xPlacement = i3251[0]
  i3250.yPlacement = i3251[1]
  i3250.xAdvance = i3251[2]
  i3250.yAdvance = i3251[3]
  return i3250
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"27":[28],"64":[10],"65":[13],"66":[13],"22":[13],"67":[13],"68":[13],"69":[13],"70":[13],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[10],"86":[5],"87":[88],"89":[88],"40":[37],"90":[37],"91":[37],"42":[40],"44":[43,37],"92":[37],"41":[40],"93":[37],"94":[37],"95":[37],"96":[37],"97":[37],"98":[37],"99":[37],"100":[37],"101":[37],"46":[43,37],"102":[37],"103":[37],"104":[37],"105":[37],"106":[43,37],"107":[37],"108":[48],"109":[48],"49":[48],"110":[48],"111":[10],"112":[10],"113":[37],"33":[5,37],"35":[37,43],"114":[37],"115":[43,37],"116":[5],"117":[43,37],"118":[37],"119":[120],"121":[120],"122":[120]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","BallCollisionSound","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.TrailRenderer","RotateRing","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.HingeJoint","DunkDetector","BasketRingMover","UnityEngine.CapsuleCollider","RimTouch","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","DunkTriggerRelay","BallDragAndThrow","UnityEngine.GameObject","GameManager","TMPro.TextMeshPro","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","BallWheelController","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.RawImage","UIMovement","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BallItem","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAd_BasketBallThrowing";

Deserializers.lunaInitializationTime = "08/04/2025 14:48:26";

Deserializers.lunaDaysRunning = "10.7";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4102";

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

Deserializers.buildID = "7e560fa5-3604-45d5-96dd-53a9028e1fcf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

