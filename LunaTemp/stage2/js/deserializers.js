var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointSpring' )
  var i1627 = data
  i1626.spring = i1627[0]
  i1626.damper = i1627[1]
  i1626.targetPosition = i1627[2]
  return i1626
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointMotor' )
  var i1629 = data
  i1628.m_TargetVelocity = i1629[0]
  i1628.m_Force = i1629[1]
  i1628.m_FreeSpin = i1629[2]
  return i1628
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.JointLimits' )
  var i1631 = data
  i1630.m_Min = i1631[0]
  i1630.m_Max = i1631[1]
  i1630.m_Bounciness = i1631[2]
  i1630.m_BounceMinVelocity = i1631[3]
  i1630.m_ContactDistance = i1631[4]
  i1630.minBounce = i1631[5]
  i1630.maxBounce = i1631[6]
  return i1630
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.JointDrive' )
  var i1633 = data
  i1632.m_PositionSpring = i1633[0]
  i1632.m_PositionDamper = i1633[1]
  i1632.m_MaximumForce = i1633[2]
  i1632.m_UseAcceleration = i1633[3]
  return i1632
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1635 = data
  i1634.m_Spring = i1635[0]
  i1634.m_Damper = i1635[1]
  return i1634
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1637 = data
  i1636.m_Limit = i1637[0]
  i1636.m_Bounciness = i1637[1]
  i1636.m_ContactDistance = i1637[2]
  return i1636
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1639 = data
  i1638.m_ExtremumSlip = i1639[0]
  i1638.m_ExtremumValue = i1639[1]
  i1638.m_AsymptoteSlip = i1639[2]
  i1638.m_AsymptoteValue = i1639[3]
  i1638.m_Stiffness = i1639[4]
  return i1638
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1641 = data
  i1640.m_LowerAngle = i1641[0]
  i1640.m_UpperAngle = i1641[1]
  return i1640
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1643 = data
  i1642.m_MotorSpeed = i1643[0]
  i1642.m_MaximumMotorTorque = i1643[1]
  return i1642
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1645 = data
  i1644.m_DampingRatio = i1645[0]
  i1644.m_Frequency = i1645[1]
  i1644.m_Angle = i1645[2]
  return i1644
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1647 = data
  i1646.m_LowerTranslation = i1647[0]
  i1646.m_UpperTranslation = i1647[1]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1648 = root || new pc.UnityMaterial()
  var i1649 = data
  i1648.name = i1649[0]
  request.r(i1649[1], i1649[2], 0, i1648, 'shader')
  i1648.renderQueue = i1649[3]
  i1648.enableInstancing = !!i1649[4]
  var i1651 = i1649[5]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1651[i + 0]) );
  }
  i1648.floatParameters = i1650
  var i1653 = i1649[6]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1653[i + 0]) );
  }
  i1648.colorParameters = i1652
  var i1655 = i1649[7]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1655[i + 0]) );
  }
  i1648.vectorParameters = i1654
  var i1657 = i1649[8]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1657[i + 0]) );
  }
  i1648.textureParameters = i1656
  var i1659 = i1649[9]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1659[i + 0]) );
  }
  i1648.materialFlags = i1658
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.value = i1663[1]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.value = new pc.Color(i1667[1], i1667[2], i1667[3], i1667[4])
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.value = new pc.Vec4( i1671[1], i1671[2], i1671[3], i1671[4] )
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1675 = data
  i1674.name = i1675[0]
  request.r(i1675[1], i1675[2], 0, i1674, 'value')
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.enabled = !!i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.halfPrecision = !!i1681[1]
  i1680.useUInt32IndexFormat = !!i1681[2]
  i1680.vertexCount = i1681[3]
  i1680.aabb = i1681[4]
  var i1683 = i1681[5]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( !!i1683[i + 0] );
  }
  i1680.streams = i1682
  i1680.vertices = i1681[6]
  var i1685 = i1681[7]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1685[i + 0]) );
  }
  i1680.subMeshes = i1684
  var i1687 = i1681[8]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 16) {
    i1686.push( new pc.Mat4().setData(i1687[i + 0], i1687[i + 1], i1687[i + 2], i1687[i + 3],  i1687[i + 4], i1687[i + 5], i1687[i + 6], i1687[i + 7],  i1687[i + 8], i1687[i + 9], i1687[i + 10], i1687[i + 11],  i1687[i + 12], i1687[i + 13], i1687[i + 14], i1687[i + 15]) );
  }
  i1680.bindposes = i1686
  var i1689 = i1681[9]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1689[i + 0]) );
  }
  i1680.blendShapes = i1688
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1695 = data
  i1694.triangles = i1695[0]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1701 = data
  i1700.name = i1701[0]
  var i1703 = i1701[1]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1703[i + 0]) );
  }
  i1700.frames = i1702
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.width = i1705[1]
  i1704.height = i1705[2]
  i1704.mipmapCount = i1705[3]
  i1704.anisoLevel = i1705[4]
  i1704.filterMode = i1705[5]
  i1704.hdr = !!i1705[6]
  i1704.format = i1705[7]
  i1704.wrapMode = i1705[8]
  i1704.alphaIsTransparency = !!i1705[9]
  i1704.alphaSource = i1705[10]
  i1704.graphicsFormat = i1705[11]
  i1704.sRGBTexture = !!i1705[12]
  i1704.desiredColorSpace = i1705[13]
  i1704.wrapU = i1705[14]
  i1704.wrapV = i1705[15]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1707 = data
  i1706.position = new pc.Vec3( i1707[0], i1707[1], i1707[2] )
  i1706.scale = new pc.Vec3( i1707[3], i1707[4], i1707[5] )
  i1706.rotation = new pc.Quat(i1707[6], i1707[7], i1707[8], i1707[9])
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'sharedMesh')
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'additionalVertexStreams')
  i1710.enabled = !!i1711[2]
  request.r(i1711[3], i1711[4], 0, i1710, 'sharedMaterial')
  var i1713 = i1711[5]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 2) {
  request.r(i1713[i + 0], i1713[i + 1], 2, i1712, '')
  }
  i1710.sharedMaterials = i1712
  i1710.receiveShadows = !!i1711[6]
  i1710.shadowCastingMode = i1711[7]
  i1710.sortingLayerID = i1711[8]
  i1710.sortingOrder = i1711[9]
  i1710.lightmapIndex = i1711[10]
  i1710.lightmapSceneIndex = i1711[11]
  i1710.lightmapScaleOffset = new pc.Vec4( i1711[12], i1711[13], i1711[14], i1711[15] )
  i1710.lightProbeUsage = i1711[16]
  i1710.reflectionProbeUsage = i1711[17]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1717 = data
  i1716.name = i1717[0]
  i1716.tagId = i1717[1]
  i1716.enabled = !!i1717[2]
  i1716.isStatic = !!i1717[3]
  i1716.layer = i1717[4]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1719 = data
  i1718.name = i1719[0]
  i1718.atlasId = i1719[1]
  i1718.mipmapCount = i1719[2]
  i1718.hdr = !!i1719[3]
  i1718.size = i1719[4]
  i1718.anisoLevel = i1719[5]
  i1718.filterMode = i1719[6]
  var i1721 = i1719[7]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 4) {
    i1720.push( UnityEngine.Rect.MinMaxRect(i1721[i + 0], i1721[i + 1], i1721[i + 2], i1721[i + 3]) );
  }
  i1718.rects = i1720
  i1718.wrapU = i1719[8]
  i1718.wrapV = i1719[9]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.index = i1725[1]
  i1724.startup = !!i1725[2]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1727 = data
  i1726.center = new pc.Vec3( i1727[0], i1727[1], i1727[2] )
  i1726.size = new pc.Vec3( i1727[3], i1727[4], i1727[5] )
  i1726.enabled = !!i1727[6]
  i1726.isTrigger = !!i1727[7]
  request.r(i1727[8], i1727[9], 0, i1726, 'material')
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1729 = data
  i1728.enabled = !!i1729[0]
  i1728.type = i1729[1]
  i1728.color = new pc.Color(i1729[2], i1729[3], i1729[4], i1729[5])
  i1728.cullingMask = i1729[6]
  i1728.intensity = i1729[7]
  i1728.range = i1729[8]
  i1728.spotAngle = i1729[9]
  i1728.shadows = i1729[10]
  i1728.shadowNormalBias = i1729[11]
  i1728.shadowBias = i1729[12]
  i1728.shadowStrength = i1729[13]
  i1728.shadowResolution = i1729[14]
  i1728.lightmapBakeType = i1729[15]
  i1728.renderMode = i1729[16]
  request.r(i1729[17], i1729[18], 0, i1728, 'cookie')
  i1728.cookieSize = i1729[19]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.aspect = i1731[1]
  i1730.orthographic = !!i1731[2]
  i1730.orthographicSize = i1731[3]
  i1730.backgroundColor = new pc.Color(i1731[4], i1731[5], i1731[6], i1731[7])
  i1730.nearClipPlane = i1731[8]
  i1730.farClipPlane = i1731[9]
  i1730.fieldOfView = i1731[10]
  i1730.depth = i1731[11]
  i1730.clearFlags = i1731[12]
  i1730.cullingMask = i1731[13]
  i1730.rect = i1731[14]
  request.r(i1731[15], i1731[16], 0, i1730, 'targetTexture')
  i1730.usePhysicalProperties = !!i1731[17]
  i1730.focalLength = i1731[18]
  i1730.sensorSize = new pc.Vec2( i1731[19], i1731[20] )
  i1730.lensShift = new pc.Vec2( i1731[21], i1731[22] )
  i1730.gateFit = i1731[23]
  i1730.commandBufferCount = i1731[24]
  i1730.cameraType = i1731[25]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1733 = data
  i1732.enabled = !!i1733[0]
  i1732.isTrigger = !!i1733[1]
  request.r(i1733[2], i1733[3], 0, i1732, 'material')
  i1732.center = new pc.Vec3( i1733[4], i1733[5], i1733[6] )
  i1732.radius = i1733[7]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1735 = data
  i1734.mass = i1735[0]
  i1734.drag = i1735[1]
  i1734.angularDrag = i1735[2]
  i1734.useGravity = !!i1735[3]
  i1734.isKinematic = !!i1735[4]
  i1734.constraints = i1735[5]
  i1734.maxAngularVelocity = i1735[6]
  i1734.collisionDetectionMode = i1735[7]
  i1734.interpolation = i1735[8]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1737 = data
  i1736.enabled = !!i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'sharedMaterial')
  var i1739 = i1737[3]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 2) {
  request.r(i1739[i + 0], i1739[i + 1], 2, i1738, '')
  }
  i1736.sharedMaterials = i1738
  i1736.receiveShadows = !!i1737[4]
  i1736.shadowCastingMode = i1737[5]
  i1736.sortingLayerID = i1737[6]
  i1736.sortingOrder = i1737[7]
  i1736.lightmapIndex = i1737[8]
  i1736.lightmapSceneIndex = i1737[9]
  i1736.lightmapScaleOffset = new pc.Vec4( i1737[10], i1737[11], i1737[12], i1737[13] )
  i1736.lightProbeUsage = i1737[14]
  i1736.reflectionProbeUsage = i1737[15]
  var i1741 = i1737[16]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 3) {
    i1740.push( new pc.Vec3( i1741[i + 0], i1741[i + 1], i1741[i + 2] ) );
  }
  i1736.positions = i1740
  i1736.positionCount = i1737[17]
  i1736.time = i1737[18]
  i1736.startWidth = i1737[19]
  i1736.endWidth = i1737[20]
  i1736.widthMultiplier = i1737[21]
  i1736.autodestruct = !!i1737[22]
  i1736.emitting = !!i1737[23]
  i1736.numCornerVertices = i1737[24]
  i1736.numCapVertices = i1737[25]
  i1736.minVertexDistance = i1737[26]
  i1736.colorGradient = i1737[27] ? new pc.ColorGradient(i1737[27][0], i1737[27][1], i1737[27][2]) : null
  i1736.startColor = new pc.Color(i1737[28], i1737[29], i1737[30], i1737[31])
  i1736.endColor = new pc.Color(i1737[32], i1737[33], i1737[34], i1737[35])
  i1736.generateLightingData = !!i1737[36]
  i1736.textureMode = i1737[37]
  i1736.alignment = i1737[38]
  i1736.widthCurve = new pc.AnimationCurve( { keys_flow: i1737[39] } )
  return i1736
}

Deserializers["BallCollisionSound"] = function (request, data, root) {
  var i1744 = root || request.c( 'BallCollisionSound' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, '_audioSource')
  request.r(i1745[2], i1745[3], 0, i1744, '_collisionSound')
  i1744._minImpactSpeed = i1745[4]
  i1744._volumeScale = i1745[5]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'clip')
  request.r(i1747[2], i1747[3], 0, i1746, 'outputAudioMixerGroup')
  i1746.playOnAwake = !!i1747[4]
  i1746.loop = !!i1747[5]
  i1746.time = i1747[6]
  i1746.volume = i1747[7]
  i1746.pitch = i1747[8]
  i1746.enabled = !!i1747[9]
  return i1746
}

Deserializers["RotateRing"] = function (request, data, root) {
  var i1748 = root || request.c( 'RotateRing' )
  var i1749 = data
  i1748._rotationSpeed = i1749[0]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1751 = data
  i1750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1751[0], i1750.main)
  i1750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1751[1], i1750.colorBySpeed)
  i1750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1751[2], i1750.colorOverLifetime)
  i1750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1751[3], i1750.emission)
  i1750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1751[4], i1750.rotationBySpeed)
  i1750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1751[5], i1750.rotationOverLifetime)
  i1750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1751[6], i1750.shape)
  i1750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1751[7], i1750.sizeBySpeed)
  i1750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1751[8], i1750.sizeOverLifetime)
  i1750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1751[9], i1750.textureSheetAnimation)
  i1750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1751[10], i1750.velocityOverLifetime)
  i1750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1751[11], i1750.noise)
  i1750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1751[12], i1750.inheritVelocity)
  i1750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1751[13], i1750.forceOverLifetime)
  i1750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1751[14], i1750.limitVelocityOverLifetime)
  i1750.useAutoRandomSeed = !!i1751[15]
  i1750.randomSeed = i1751[16]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemMain()
  var i1753 = data
  i1752.duration = i1753[0]
  i1752.loop = !!i1753[1]
  i1752.prewarm = !!i1753[2]
  i1752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[3], i1752.startDelay)
  i1752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[4], i1752.startLifetime)
  i1752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[5], i1752.startSpeed)
  i1752.startSize3D = !!i1753[6]
  i1752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[7], i1752.startSizeX)
  i1752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[8], i1752.startSizeY)
  i1752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[9], i1752.startSizeZ)
  i1752.startRotation3D = !!i1753[10]
  i1752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[11], i1752.startRotationX)
  i1752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[12], i1752.startRotationY)
  i1752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[13], i1752.startRotationZ)
  i1752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1753[14], i1752.startColor)
  i1752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[15], i1752.gravityModifier)
  i1752.simulationSpace = i1753[16]
  request.r(i1753[17], i1753[18], 0, i1752, 'customSimulationSpace')
  i1752.simulationSpeed = i1753[19]
  i1752.useUnscaledTime = !!i1753[20]
  i1752.scalingMode = i1753[21]
  i1752.playOnAwake = !!i1753[22]
  i1752.maxParticles = i1753[23]
  i1752.emitterVelocityMode = i1753[24]
  i1752.stopAction = i1753[25]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1754 = root || new pc.MinMaxCurve()
  var i1755 = data
  i1754.mode = i1755[0]
  i1754.curveMin = new pc.AnimationCurve( { keys_flow: i1755[1] } )
  i1754.curveMax = new pc.AnimationCurve( { keys_flow: i1755[2] } )
  i1754.curveMultiplier = i1755[3]
  i1754.constantMin = i1755[4]
  i1754.constantMax = i1755[5]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1756 = root || new pc.MinMaxGradient()
  var i1757 = data
  i1756.mode = i1757[0]
  i1756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1757[1], i1756.gradientMin)
  i1756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1757[2], i1756.gradientMax)
  i1756.colorMin = new pc.Color(i1757[3], i1757[4], i1757[5], i1757[6])
  i1756.colorMax = new pc.Color(i1757[7], i1757[8], i1757[9], i1757[10])
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1759 = data
  i1758.mode = i1759[0]
  var i1761 = i1759[1]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1761[i + 0]) );
  }
  i1758.colorKeys = i1760
  var i1763 = i1759[2]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1763[i + 0]) );
  }
  i1758.alphaKeys = i1762
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1767 = data
  i1766.color = new pc.Color(i1767[0], i1767[1], i1767[2], i1767[3])
  i1766.time = i1767[4]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1771 = data
  i1770.alpha = i1771[0]
  i1770.time = i1771[1]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1772 = root || new pc.ParticleSystemColorBySpeed()
  var i1773 = data
  i1772.enabled = !!i1773[0]
  i1772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1773[1], i1772.color)
  i1772.range = new pc.Vec2( i1773[2], i1773[3] )
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1774 = root || new pc.ParticleSystemColorOverLifetime()
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1775[1], i1774.color)
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1776 = root || new pc.ParticleSystemEmitter()
  var i1777 = data
  i1776.enabled = !!i1777[0]
  i1776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[1], i1776.rateOverTime)
  i1776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[2], i1776.rateOverDistance)
  var i1779 = i1777[3]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1779[i + 0]) );
  }
  i1776.bursts = i1778
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemBurst()
  var i1783 = data
  i1782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[0], i1782.count)
  i1782.cycleCount = i1783[1]
  i1782.minCount = i1783[2]
  i1782.maxCount = i1783[3]
  i1782.repeatInterval = i1783[4]
  i1782.time = i1783[5]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemRotationBySpeed()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[1], i1784.x)
  i1784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[2], i1784.y)
  i1784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[3], i1784.z)
  i1784.separateAxes = !!i1785[4]
  i1784.range = new pc.Vec2( i1785[5], i1785[6] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[1], i1786.x)
  i1786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[2], i1786.y)
  i1786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[3], i1786.z)
  i1786.separateAxes = !!i1787[4]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1788 = root || new pc.ParticleSystemShape()
  var i1789 = data
  i1788.enabled = !!i1789[0]
  i1788.shapeType = i1789[1]
  i1788.randomDirectionAmount = i1789[2]
  i1788.sphericalDirectionAmount = i1789[3]
  i1788.randomPositionAmount = i1789[4]
  i1788.alignToDirection = !!i1789[5]
  i1788.radius = i1789[6]
  i1788.radiusMode = i1789[7]
  i1788.radiusSpread = i1789[8]
  i1788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[9], i1788.radiusSpeed)
  i1788.radiusThickness = i1789[10]
  i1788.angle = i1789[11]
  i1788.length = i1789[12]
  i1788.boxThickness = new pc.Vec3( i1789[13], i1789[14], i1789[15] )
  i1788.meshShapeType = i1789[16]
  request.r(i1789[17], i1789[18], 0, i1788, 'mesh')
  request.r(i1789[19], i1789[20], 0, i1788, 'meshRenderer')
  request.r(i1789[21], i1789[22], 0, i1788, 'skinnedMeshRenderer')
  i1788.useMeshMaterialIndex = !!i1789[23]
  i1788.meshMaterialIndex = i1789[24]
  i1788.useMeshColors = !!i1789[25]
  i1788.normalOffset = i1789[26]
  i1788.arc = i1789[27]
  i1788.arcMode = i1789[28]
  i1788.arcSpread = i1789[29]
  i1788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[30], i1788.arcSpeed)
  i1788.donutRadius = i1789[31]
  i1788.position = new pc.Vec3( i1789[32], i1789[33], i1789[34] )
  i1788.rotation = new pc.Vec3( i1789[35], i1789[36], i1789[37] )
  i1788.scale = new pc.Vec3( i1789[38], i1789[39], i1789[40] )
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1790 = root || new pc.ParticleSystemSizeBySpeed()
  var i1791 = data
  i1790.enabled = !!i1791[0]
  i1790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[1], i1790.x)
  i1790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[2], i1790.y)
  i1790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[3], i1790.z)
  i1790.separateAxes = !!i1791[4]
  i1790.range = new pc.Vec2( i1791[5], i1791[6] )
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[1], i1792.x)
  i1792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[2], i1792.y)
  i1792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[3], i1792.z)
  i1792.separateAxes = !!i1793[4]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.mode = i1795[1]
  i1794.animation = i1795[2]
  i1794.numTilesX = i1795[3]
  i1794.numTilesY = i1795[4]
  i1794.useRandomRow = !!i1795[5]
  i1794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[6], i1794.frameOverTime)
  i1794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[7], i1794.startFrame)
  i1794.cycleCount = i1795[8]
  i1794.rowIndex = i1795[9]
  i1794.flipU = i1795[10]
  i1794.flipV = i1795[11]
  i1794.spriteCount = i1795[12]
  var i1797 = i1795[13]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.sprites = i1796
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[1], i1800.x)
  i1800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[2], i1800.y)
  i1800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.z)
  i1800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[4], i1800.radial)
  i1800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[5], i1800.speedModifier)
  i1800.space = i1801[6]
  i1800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[7], i1800.orbitalX)
  i1800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[8], i1800.orbitalY)
  i1800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[9], i1800.orbitalZ)
  i1800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[10], i1800.orbitalOffsetX)
  i1800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[11], i1800.orbitalOffsetY)
  i1800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[12], i1800.orbitalOffsetZ)
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemNoise()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.separateAxes = !!i1803[1]
  i1802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.strengthX)
  i1802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.strengthY)
  i1802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[4], i1802.strengthZ)
  i1802.frequency = i1803[5]
  i1802.damping = !!i1803[6]
  i1802.octaveCount = i1803[7]
  i1802.octaveMultiplier = i1803[8]
  i1802.octaveScale = i1803[9]
  i1802.quality = i1803[10]
  i1802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[11], i1802.scrollSpeed)
  i1802.scrollSpeedMultiplier = i1803[12]
  i1802.remapEnabled = !!i1803[13]
  i1802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[14], i1802.remapX)
  i1802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[15], i1802.remapY)
  i1802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[16], i1802.remapZ)
  i1802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[17], i1802.positionAmount)
  i1802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[18], i1802.rotationAmount)
  i1802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[19], i1802.sizeAmount)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemInheritVelocity()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.mode = i1805[1]
  i1804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[2], i1804.curve)
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1806 = root || new pc.ParticleSystemForceOverLifetime()
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[1], i1806.x)
  i1806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[2], i1806.y)
  i1806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[3], i1806.z)
  i1806.space = i1807[4]
  i1806.randomized = !!i1807[5]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[1], i1808.limit)
  i1808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[2], i1808.limitX)
  i1808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[3], i1808.limitY)
  i1808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[4], i1808.limitZ)
  i1808.dampen = i1809[5]
  i1808.separateAxes = !!i1809[6]
  i1808.space = i1809[7]
  i1808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[8], i1808.drag)
  i1808.multiplyDragByParticleSize = !!i1809[9]
  i1808.multiplyDragByParticleVelocity = !!i1809[10]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1811 = data
  i1810.enabled = !!i1811[0]
  request.r(i1811[1], i1811[2], 0, i1810, 'sharedMaterial')
  var i1813 = i1811[3]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 2, i1812, '')
  }
  i1810.sharedMaterials = i1812
  i1810.receiveShadows = !!i1811[4]
  i1810.shadowCastingMode = i1811[5]
  i1810.sortingLayerID = i1811[6]
  i1810.sortingOrder = i1811[7]
  i1810.lightmapIndex = i1811[8]
  i1810.lightmapSceneIndex = i1811[9]
  i1810.lightmapScaleOffset = new pc.Vec4( i1811[10], i1811[11], i1811[12], i1811[13] )
  i1810.lightProbeUsage = i1811[14]
  i1810.reflectionProbeUsage = i1811[15]
  request.r(i1811[16], i1811[17], 0, i1810, 'mesh')
  i1810.meshCount = i1811[18]
  i1810.activeVertexStreamsCount = i1811[19]
  i1810.alignment = i1811[20]
  i1810.renderMode = i1811[21]
  i1810.sortMode = i1811[22]
  i1810.lengthScale = i1811[23]
  i1810.velocityScale = i1811[24]
  i1810.cameraVelocityScale = i1811[25]
  i1810.normalDirection = i1811[26]
  i1810.sortingFudge = i1811[27]
  i1810.minParticleSize = i1811[28]
  i1810.maxParticleSize = i1811[29]
  i1810.pivot = new pc.Vec3( i1811[30], i1811[31], i1811[32] )
  request.r(i1811[33], i1811[34], 0, i1810, 'trailMaterial')
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i1815 = data
  i1814.useMotor = !!i1815[0]
  i1814.useLimits = !!i1815[1]
  i1814.useSpring = !!i1815[2]
  i1814.limits = request.d('UnityEngine.JointLimits', i1815[3], i1814.limits)
  i1814.motor = request.d('UnityEngine.JointMotor', i1815[4], i1814.motor)
  i1814.spring = request.d('UnityEngine.JointSpring', i1815[5], i1814.spring)
  request.r(i1815[6], i1815[7], 0, i1814, 'connectedBody')
  i1814.axis = new pc.Vec3( i1815[8], i1815[9], i1815[10] )
  i1814.anchor = new pc.Vec3( i1815[11], i1815[12], i1815[13] )
  i1814.connectedAnchor = new pc.Vec3( i1815[14], i1815[15], i1815[16] )
  i1814.autoConfigureConnectedAnchor = !!i1815[17]
  i1814.massScale = i1815[18]
  i1814.connectedMassScale = i1815[19]
  i1814.enableCollision = !!i1815[20]
  i1814.breakForce = i1815[21]
  i1814.breakTorque = i1815[22]
  return i1814
}

Deserializers["DunkDetector"] = function (request, data, root) {
  var i1816 = root || request.c( 'DunkDetector' )
  var i1817 = data
  i1816._cleanupInterval = i1817[0]
  i1816._acceptWindow = i1817[1]
  request.r(i1817[2], i1817[3], 0, i1816, '_dunkParticles')
  request.r(i1817[4], i1817[5], 0, i1816, '_perfectDunkParticles')
  request.r(i1817[6], i1817[7], 0, i1816, '_audioSource')
  request.r(i1817[8], i1817[9], 0, i1816, '_dunkSound')
  request.r(i1817[10], i1817[11], 0, i1816, '_perfectDunkSound')
  i1816._normalDunkScore = i1817[12]
  i1816._perfectDunkScore = i1817[13]
  return i1816
}

Deserializers["BasketRingMover"] = function (request, data, root) {
  var i1818 = root || request.c( 'BasketRingMover' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'ringTransform')
  i1818.minX = i1819[2]
  i1818.maxX = i1819[3]
  i1818.speed = i1819[4]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1821 = data
  i1820.center = new pc.Vec3( i1821[0], i1821[1], i1821[2] )
  i1820.radius = i1821[3]
  i1820.height = i1821[4]
  i1820.direction = i1821[5]
  i1820.enabled = !!i1821[6]
  i1820.isTrigger = !!i1821[7]
  request.r(i1821[8], i1821[9], 0, i1820, 'material')
  return i1820
}

Deserializers["RimTouch"] = function (request, data, root) {
  var i1822 = root || request.c( 'RimTouch' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, '_detector')
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1825 = data
  i1824.enabled = !!i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'sharedMaterial')
  var i1827 = i1825[3]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 2) {
  request.r(i1827[i + 0], i1827[i + 1], 2, i1826, '')
  }
  i1824.sharedMaterials = i1826
  i1824.receiveShadows = !!i1825[4]
  i1824.shadowCastingMode = i1825[5]
  i1824.sortingLayerID = i1825[6]
  i1824.sortingOrder = i1825[7]
  i1824.lightmapIndex = i1825[8]
  i1824.lightmapSceneIndex = i1825[9]
  i1824.lightmapScaleOffset = new pc.Vec4( i1825[10], i1825[11], i1825[12], i1825[13] )
  i1824.lightProbeUsage = i1825[14]
  i1824.reflectionProbeUsage = i1825[15]
  request.r(i1825[16], i1825[17], 0, i1824, 'sharedMesh')
  var i1829 = i1825[18]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 2) {
  request.r(i1829[i + 0], i1829[i + 1], 2, i1828, '')
  }
  i1824.bones = i1828
  i1824.updateWhenOffscreen = !!i1825[19]
  i1824.localBounds = i1825[20]
  request.r(i1825[21], i1825[22], 0, i1824, 'rootBone')
  var i1831 = i1825[23]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1831[i + 0]) );
  }
  i1824.blendShapesWeights = i1830
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1837 = data
  i1836.weight = i1837[0]
  return i1836
}

Deserializers["DunkTriggerRelay"] = function (request, data, root) {
  var i1838 = root || request.c( 'DunkTriggerRelay' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, '_detector')
  i1838._isTop = !!i1839[2]
  return i1838
}

Deserializers["BallDragAndThrow"] = function (request, data, root) {
  var i1840 = root || request.c( 'BallDragAndThrow' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, '_camera')
  i1840._ballLayer = UnityEngine.LayerMask.FromIntegerValue( i1841[2] )
  request.r(i1841[3], i1841[4], 0, i1840, '_touchTrail')
  request.r(i1841[5], i1841[6], 0, i1840, '_audioSource')
  request.r(i1841[7], i1841[8], 0, i1840, '_clickSound')
  request.r(i1841[9], i1841[10], 0, i1840, '_releaseSound')
  i1840._maxLaunchForce = i1841[11]
  i1840._dragSensitivity = i1841[12]
  i1840._upwardBiasFactor = i1841[13]
  i1840._gentleFactor = i1841[14]
  return i1840
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1842 = root || request.c( 'GameManager' )
  var i1843 = data
  i1842._gameDuration = i1843[0]
  request.r(i1843[1], i1843[2], 0, i1842, '_highestText')
  request.r(i1843[3], i1843[4], 0, i1842, '_timeText')
  request.r(i1843[5], i1843[6], 0, i1842, '_scoreText')
  request.r(i1843[7], i1843[8], 0, i1842, '_perfectPopup')
  i1842._perfectPopupDuration = i1843[9]
  i1842._highscoreKey = i1843[10]
  request.r(i1843[11], i1843[12], 0, i1842, '_startPanel')
  request.r(i1843[13], i1843[14], 0, i1842, '_endPanel')
  request.r(i1843[15], i1843[16], 0, i1842, '_startButton')
  request.r(i1843[17], i1843[18], 0, i1842, '_retryButton')
  request.r(i1843[19], i1843[20], 0, i1842, '_endScoreText')
  request.r(i1843[21], i1843[22], 0, i1842, '_moveRingButton')
  request.r(i1843[23], i1843[24], 0, i1842, '_basketRingMover')
  request.r(i1843[25], i1843[26], 0, i1842, '_openBallSelectButton')
  request.r(i1843[27], i1843[28], 0, i1842, '_ballSelectionPanel')
  request.r(i1843[29], i1843[30], 0, i1842, '_ballWheelController')
  request.r(i1843[31], i1843[32], 0, i1842, '_audioSource')
  request.r(i1843[33], i1843[34], 0, i1842, '_buttonClickSound')
  request.r(i1843[35], i1843[36], 0, i1842, '_gameCompleteSound')
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1845 = data
  i1844.pivot = new pc.Vec2( i1845[0], i1845[1] )
  i1844.anchorMin = new pc.Vec2( i1845[2], i1845[3] )
  i1844.anchorMax = new pc.Vec2( i1845[4], i1845[5] )
  i1844.sizeDelta = new pc.Vec2( i1845[6], i1845[7] )
  i1844.anchoredPosition3D = new pc.Vec3( i1845[8], i1845[9], i1845[10] )
  i1844.rotation = new pc.Quat(i1845[11], i1845[12], i1845[13], i1845[14])
  i1844.scale = new pc.Vec3( i1845[15], i1845[16], i1845[17] )
  return i1844
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TextMeshPro' )
  var i1847 = data
  i1846._SortingLayer = i1847[0]
  i1846._SortingLayerID = i1847[1]
  i1846._SortingOrder = i1847[2]
  i1846.m_hasFontAssetChanged = !!i1847[3]
  request.r(i1847[4], i1847[5], 0, i1846, 'm_renderer')
  i1846.m_maskType = i1847[6]
  i1846.m_text = i1847[7]
  i1846.m_isRightToLeft = !!i1847[8]
  request.r(i1847[9], i1847[10], 0, i1846, 'm_fontAsset')
  request.r(i1847[11], i1847[12], 0, i1846, 'm_sharedMaterial')
  var i1849 = i1847[13]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 2, i1848, '')
  }
  i1846.m_fontSharedMaterials = i1848
  request.r(i1847[14], i1847[15], 0, i1846, 'm_fontMaterial')
  var i1851 = i1847[16]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 2, i1850, '')
  }
  i1846.m_fontMaterials = i1850
  i1846.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1847[17], i1847[18], i1847[19], i1847[20])
  i1846.m_fontColor = new pc.Color(i1847[21], i1847[22], i1847[23], i1847[24])
  i1846.m_enableVertexGradient = !!i1847[25]
  i1846.m_colorMode = i1847[26]
  i1846.m_fontColorGradient = request.d('TMPro.VertexGradient', i1847[27], i1846.m_fontColorGradient)
  request.r(i1847[28], i1847[29], 0, i1846, 'm_fontColorGradientPreset')
  request.r(i1847[30], i1847[31], 0, i1846, 'm_spriteAsset')
  i1846.m_tintAllSprites = !!i1847[32]
  request.r(i1847[33], i1847[34], 0, i1846, 'm_StyleSheet')
  i1846.m_TextStyleHashCode = i1847[35]
  i1846.m_overrideHtmlColors = !!i1847[36]
  i1846.m_faceColor = UnityEngine.Color32.ConstructColor(i1847[37], i1847[38], i1847[39], i1847[40])
  i1846.m_fontSize = i1847[41]
  i1846.m_fontSizeBase = i1847[42]
  i1846.m_fontWeight = i1847[43]
  i1846.m_enableAutoSizing = !!i1847[44]
  i1846.m_fontSizeMin = i1847[45]
  i1846.m_fontSizeMax = i1847[46]
  i1846.m_fontStyle = i1847[47]
  i1846.m_HorizontalAlignment = i1847[48]
  i1846.m_VerticalAlignment = i1847[49]
  i1846.m_textAlignment = i1847[50]
  i1846.m_characterSpacing = i1847[51]
  i1846.m_wordSpacing = i1847[52]
  i1846.m_lineSpacing = i1847[53]
  i1846.m_lineSpacingMax = i1847[54]
  i1846.m_paragraphSpacing = i1847[55]
  i1846.m_charWidthMaxAdj = i1847[56]
  i1846.m_enableWordWrapping = !!i1847[57]
  i1846.m_wordWrappingRatios = i1847[58]
  i1846.m_overflowMode = i1847[59]
  request.r(i1847[60], i1847[61], 0, i1846, 'm_linkedTextComponent')
  request.r(i1847[62], i1847[63], 0, i1846, 'parentLinkedComponent')
  i1846.m_enableKerning = !!i1847[64]
  i1846.m_enableExtraPadding = !!i1847[65]
  i1846.checkPaddingRequired = !!i1847[66]
  i1846.m_isRichText = !!i1847[67]
  i1846.m_parseCtrlCharacters = !!i1847[68]
  i1846.m_isOrthographic = !!i1847[69]
  i1846.m_isCullingEnabled = !!i1847[70]
  i1846.m_horizontalMapping = i1847[71]
  i1846.m_verticalMapping = i1847[72]
  i1846.m_uvLineOffset = i1847[73]
  i1846.m_geometrySortingOrder = i1847[74]
  i1846.m_IsTextObjectScaleStatic = !!i1847[75]
  i1846.m_VertexBufferAutoSizeReduction = !!i1847[76]
  i1846.m_useMaxVisibleDescender = !!i1847[77]
  i1846.m_pageToDisplay = i1847[78]
  i1846.m_margin = new pc.Vec4( i1847[79], i1847[80], i1847[81], i1847[82] )
  i1846.m_isUsingLegacyAnimationComponent = !!i1847[83]
  i1846.m_isVolumetricText = !!i1847[84]
  request.r(i1847[85], i1847[86], 0, i1846, 'm_Material')
  i1846.m_Maskable = !!i1847[87]
  i1846.m_Color = new pc.Color(i1847[88], i1847[89], i1847[90], i1847[91])
  i1846.m_RaycastTarget = !!i1847[92]
  i1846.m_RaycastPadding = new pc.Vec4( i1847[93], i1847[94], i1847[95], i1847[96] )
  return i1846
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1852 = root || request.c( 'TMPro.VertexGradient' )
  var i1853 = data
  i1852.topLeft = new pc.Color(i1853[0], i1853[1], i1853[2], i1853[3])
  i1852.topRight = new pc.Color(i1853[4], i1853[5], i1853[6], i1853[7])
  i1852.bottomLeft = new pc.Color(i1853[8], i1853[9], i1853[10], i1853[11])
  i1852.bottomRight = new pc.Color(i1853[12], i1853[13], i1853[14], i1853[15])
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1855 = data
  i1854.enabled = !!i1855[0]
  i1854.planeDistance = i1855[1]
  i1854.referencePixelsPerUnit = i1855[2]
  i1854.isFallbackOverlay = !!i1855[3]
  i1854.renderMode = i1855[4]
  i1854.renderOrder = i1855[5]
  i1854.sortingLayerName = i1855[6]
  i1854.sortingOrder = i1855[7]
  i1854.scaleFactor = i1855[8]
  request.r(i1855[9], i1855[10], 0, i1854, 'worldCamera')
  i1854.overrideSorting = !!i1855[11]
  i1854.pixelPerfect = !!i1855[12]
  i1854.targetDisplay = i1855[13]
  i1854.overridePixelPerfect = !!i1855[14]
  return i1854
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1857 = data
  i1856.m_UiScaleMode = i1857[0]
  i1856.m_ReferencePixelsPerUnit = i1857[1]
  i1856.m_ScaleFactor = i1857[2]
  i1856.m_ReferenceResolution = new pc.Vec2( i1857[3], i1857[4] )
  i1856.m_ScreenMatchMode = i1857[5]
  i1856.m_MatchWidthOrHeight = i1857[6]
  i1856.m_PhysicalUnit = i1857[7]
  i1856.m_FallbackScreenDPI = i1857[8]
  i1856.m_DefaultSpriteDPI = i1857[9]
  i1856.m_DynamicPixelsPerUnit = i1857[10]
  i1856.m_PresetInfoIsWorld = !!i1857[11]
  return i1856
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1859 = data
  i1858.m_IgnoreReversedGraphics = !!i1859[0]
  i1858.m_BlockingObjects = i1859[1]
  i1858.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1859[2] )
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1861 = data
  i1860.cullTransparentMesh = !!i1861[0]
  return i1860
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.Image' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'm_Sprite')
  i1862.m_Type = i1863[2]
  i1862.m_PreserveAspect = !!i1863[3]
  i1862.m_FillCenter = !!i1863[4]
  i1862.m_FillMethod = i1863[5]
  i1862.m_FillAmount = i1863[6]
  i1862.m_FillClockwise = !!i1863[7]
  i1862.m_FillOrigin = i1863[8]
  i1862.m_UseSpriteMesh = !!i1863[9]
  i1862.m_PixelsPerUnitMultiplier = i1863[10]
  request.r(i1863[11], i1863[12], 0, i1862, 'm_Material')
  i1862.m_Maskable = !!i1863[13]
  i1862.m_Color = new pc.Color(i1863[14], i1863[15], i1863[16], i1863[17])
  i1862.m_RaycastTarget = !!i1863[18]
  i1862.m_RaycastPadding = new pc.Vec4( i1863[19], i1863[20], i1863[21], i1863[22] )
  return i1862
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.UI.Button' )
  var i1865 = data
  i1864.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1865[0], i1864.m_OnClick)
  i1864.m_Navigation = request.d('UnityEngine.UI.Navigation', i1865[1], i1864.m_Navigation)
  i1864.m_Transition = i1865[2]
  i1864.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1865[3], i1864.m_Colors)
  i1864.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1865[4], i1864.m_SpriteState)
  i1864.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1865[5], i1864.m_AnimationTriggers)
  i1864.m_Interactable = !!i1865[6]
  request.r(i1865[7], i1865[8], 0, i1864, 'm_TargetGraphic')
  return i1864
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1867 = data
  i1866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1867[0], i1866.m_PersistentCalls)
  return i1866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(request.d('UnityEngine.Events.PersistentCall', i1871[i + 0]));
  }
  i1868.m_Calls = i1870
  return i1868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'm_Target')
  i1874.m_TargetAssemblyTypeName = i1875[2]
  i1874.m_MethodName = i1875[3]
  i1874.m_Mode = i1875[4]
  i1874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1875[5], i1874.m_Arguments)
  i1874.m_CallState = i1875[6]
  return i1874
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1877 = data
  i1876.m_Mode = i1877[0]
  i1876.m_WrapAround = !!i1877[1]
  request.r(i1877[2], i1877[3], 0, i1876, 'm_SelectOnUp')
  request.r(i1877[4], i1877[5], 0, i1876, 'm_SelectOnDown')
  request.r(i1877[6], i1877[7], 0, i1876, 'm_SelectOnLeft')
  request.r(i1877[8], i1877[9], 0, i1876, 'm_SelectOnRight')
  return i1876
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1879 = data
  i1878.m_NormalColor = new pc.Color(i1879[0], i1879[1], i1879[2], i1879[3])
  i1878.m_HighlightedColor = new pc.Color(i1879[4], i1879[5], i1879[6], i1879[7])
  i1878.m_PressedColor = new pc.Color(i1879[8], i1879[9], i1879[10], i1879[11])
  i1878.m_SelectedColor = new pc.Color(i1879[12], i1879[13], i1879[14], i1879[15])
  i1878.m_DisabledColor = new pc.Color(i1879[16], i1879[17], i1879[18], i1879[19])
  i1878.m_ColorMultiplier = i1879[20]
  i1878.m_FadeDuration = i1879[21]
  return i1878
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'm_HighlightedSprite')
  request.r(i1881[2], i1881[3], 0, i1880, 'm_PressedSprite')
  request.r(i1881[4], i1881[5], 0, i1880, 'm_SelectedSprite')
  request.r(i1881[6], i1881[7], 0, i1880, 'm_DisabledSprite')
  return i1880
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1883 = data
  i1882.m_NormalTrigger = i1883[0]
  i1882.m_HighlightedTrigger = i1883[1]
  i1882.m_PressedTrigger = i1883[2]
  i1882.m_SelectedTrigger = i1883[3]
  i1882.m_DisabledTrigger = i1883[4]
  return i1882
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1884 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1885 = data
  i1884.m_hasFontAssetChanged = !!i1885[0]
  request.r(i1885[1], i1885[2], 0, i1884, 'm_baseMaterial')
  i1884.m_maskOffset = new pc.Vec4( i1885[3], i1885[4], i1885[5], i1885[6] )
  i1884.m_text = i1885[7]
  i1884.m_isRightToLeft = !!i1885[8]
  request.r(i1885[9], i1885[10], 0, i1884, 'm_fontAsset')
  request.r(i1885[11], i1885[12], 0, i1884, 'm_sharedMaterial')
  var i1887 = i1885[13]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.m_fontSharedMaterials = i1886
  request.r(i1885[14], i1885[15], 0, i1884, 'm_fontMaterial')
  var i1889 = i1885[16]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1884.m_fontMaterials = i1888
  i1884.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1885[17], i1885[18], i1885[19], i1885[20])
  i1884.m_fontColor = new pc.Color(i1885[21], i1885[22], i1885[23], i1885[24])
  i1884.m_enableVertexGradient = !!i1885[25]
  i1884.m_colorMode = i1885[26]
  i1884.m_fontColorGradient = request.d('TMPro.VertexGradient', i1885[27], i1884.m_fontColorGradient)
  request.r(i1885[28], i1885[29], 0, i1884, 'm_fontColorGradientPreset')
  request.r(i1885[30], i1885[31], 0, i1884, 'm_spriteAsset')
  i1884.m_tintAllSprites = !!i1885[32]
  request.r(i1885[33], i1885[34], 0, i1884, 'm_StyleSheet')
  i1884.m_TextStyleHashCode = i1885[35]
  i1884.m_overrideHtmlColors = !!i1885[36]
  i1884.m_faceColor = UnityEngine.Color32.ConstructColor(i1885[37], i1885[38], i1885[39], i1885[40])
  i1884.m_fontSize = i1885[41]
  i1884.m_fontSizeBase = i1885[42]
  i1884.m_fontWeight = i1885[43]
  i1884.m_enableAutoSizing = !!i1885[44]
  i1884.m_fontSizeMin = i1885[45]
  i1884.m_fontSizeMax = i1885[46]
  i1884.m_fontStyle = i1885[47]
  i1884.m_HorizontalAlignment = i1885[48]
  i1884.m_VerticalAlignment = i1885[49]
  i1884.m_textAlignment = i1885[50]
  i1884.m_characterSpacing = i1885[51]
  i1884.m_wordSpacing = i1885[52]
  i1884.m_lineSpacing = i1885[53]
  i1884.m_lineSpacingMax = i1885[54]
  i1884.m_paragraphSpacing = i1885[55]
  i1884.m_charWidthMaxAdj = i1885[56]
  i1884.m_enableWordWrapping = !!i1885[57]
  i1884.m_wordWrappingRatios = i1885[58]
  i1884.m_overflowMode = i1885[59]
  request.r(i1885[60], i1885[61], 0, i1884, 'm_linkedTextComponent')
  request.r(i1885[62], i1885[63], 0, i1884, 'parentLinkedComponent')
  i1884.m_enableKerning = !!i1885[64]
  i1884.m_enableExtraPadding = !!i1885[65]
  i1884.checkPaddingRequired = !!i1885[66]
  i1884.m_isRichText = !!i1885[67]
  i1884.m_parseCtrlCharacters = !!i1885[68]
  i1884.m_isOrthographic = !!i1885[69]
  i1884.m_isCullingEnabled = !!i1885[70]
  i1884.m_horizontalMapping = i1885[71]
  i1884.m_verticalMapping = i1885[72]
  i1884.m_uvLineOffset = i1885[73]
  i1884.m_geometrySortingOrder = i1885[74]
  i1884.m_IsTextObjectScaleStatic = !!i1885[75]
  i1884.m_VertexBufferAutoSizeReduction = !!i1885[76]
  i1884.m_useMaxVisibleDescender = !!i1885[77]
  i1884.m_pageToDisplay = i1885[78]
  i1884.m_margin = new pc.Vec4( i1885[79], i1885[80], i1885[81], i1885[82] )
  i1884.m_isUsingLegacyAnimationComponent = !!i1885[83]
  i1884.m_isVolumetricText = !!i1885[84]
  request.r(i1885[85], i1885[86], 0, i1884, 'm_Material')
  i1884.m_Maskable = !!i1885[87]
  i1884.m_Color = new pc.Color(i1885[88], i1885[89], i1885[90], i1885[91])
  i1884.m_RaycastTarget = !!i1885[92]
  i1884.m_RaycastPadding = new pc.Vec4( i1885[93], i1885[94], i1885[95], i1885[96] )
  return i1884
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1891 = data
  request.r(i1891[0], i1891[1], 0, i1890, 'm_ObjectArgument')
  i1890.m_ObjectArgumentAssemblyTypeName = i1891[2]
  i1890.m_IntArgument = i1891[3]
  i1890.m_FloatArgument = i1891[4]
  i1890.m_StringArgument = i1891[5]
  i1890.m_BoolArgument = !!i1891[6]
  return i1890
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'm_Texture')
  i1892.m_UVRect = UnityEngine.Rect.MinMaxRect(i1893[2], i1893[3], i1893[4], i1893[5])
  request.r(i1893[6], i1893[7], 0, i1892, 'm_Material')
  i1892.m_Maskable = !!i1893[8]
  i1892.m_Color = new pc.Color(i1893[9], i1893[10], i1893[11], i1893[12])
  i1892.m_RaycastTarget = !!i1893[13]
  i1892.m_RaycastPadding = new pc.Vec4( i1893[14], i1893[15], i1893[16], i1893[17] )
  return i1892
}

Deserializers["BallWheelController"] = function (request, data, root) {
  var i1894 = root || request.c( 'BallWheelController' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'wheelContainer')
  request.r(i1895[2], i1895[3], 0, i1894, 'okButton')
  request.r(i1895[4], i1895[5], 0, i1894, 'randomButton')
  i1894.radius = i1895[6]
  i1894.zOffset = i1895[7]
  i1894.startAngleDeg = i1895[8]
  i1894.zRotationPerItem = i1895[9]
  i1894.angularFriction = i1895[10]
  i1894.snapSpeed = i1895[11]
  i1894.minFlingVelocity = i1895[12]
  return i1894
}

Deserializers["UIMovement"] = function (request, data, root) {
  var i1896 = root || request.c( 'UIMovement' )
  var i1897 = data
  i1896.moveDistance = i1897[0]
  i1896.speed = i1897[1]
  return i1896
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'm_FirstSelected')
  i1898.m_sendNavigationEvents = !!i1899[2]
  i1898.m_DragThreshold = i1899[3]
  return i1898
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1901 = data
  i1900.m_HorizontalAxis = i1901[0]
  i1900.m_VerticalAxis = i1901[1]
  i1900.m_SubmitButton = i1901[2]
  i1900.m_CancelButton = i1901[3]
  i1900.m_InputActionsPerSecond = i1901[4]
  i1900.m_RepeatDelay = i1901[5]
  i1900.m_ForceModuleActive = !!i1901[6]
  i1900.m_SendPointerHoverToParent = !!i1901[7]
  return i1900
}

Deserializers["BallItem"] = function (request, data, root) {
  var i1902 = root || request.c( 'BallItem' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'meshRenderer')
  request.r(i1903[2], i1903[3], 0, i1902, 'outlineObject')
  i1902.selectedScale = i1903[4]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1905 = data
  i1904.ambientIntensity = i1905[0]
  i1904.reflectionIntensity = i1905[1]
  i1904.ambientMode = i1905[2]
  i1904.ambientLight = new pc.Color(i1905[3], i1905[4], i1905[5], i1905[6])
  i1904.ambientSkyColor = new pc.Color(i1905[7], i1905[8], i1905[9], i1905[10])
  i1904.ambientGroundColor = new pc.Color(i1905[11], i1905[12], i1905[13], i1905[14])
  i1904.ambientEquatorColor = new pc.Color(i1905[15], i1905[16], i1905[17], i1905[18])
  i1904.fogColor = new pc.Color(i1905[19], i1905[20], i1905[21], i1905[22])
  i1904.fogEndDistance = i1905[23]
  i1904.fogStartDistance = i1905[24]
  i1904.fogDensity = i1905[25]
  i1904.fog = !!i1905[26]
  request.r(i1905[27], i1905[28], 0, i1904, 'skybox')
  i1904.fogMode = i1905[29]
  var i1907 = i1905[30]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1907[i + 0]) );
  }
  i1904.lightmaps = i1906
  i1904.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1905[31], i1904.lightProbes)
  i1904.lightmapsMode = i1905[32]
  i1904.mixedBakeMode = i1905[33]
  i1904.environmentLightingMode = i1905[34]
  i1904.ambientProbe = new pc.SphericalHarmonicsL2(i1905[35])
  i1904.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1905[36])
  i1904.useReferenceAmbientProbe = !!i1905[37]
  request.r(i1905[38], i1905[39], 0, i1904, 'customReflection')
  request.r(i1905[40], i1905[41], 0, i1904, 'defaultReflection')
  i1904.defaultReflectionMode = i1905[42]
  i1904.defaultReflectionResolution = i1905[43]
  i1904.sunLightObjectId = i1905[44]
  i1904.pixelLightCount = i1905[45]
  i1904.defaultReflectionHDR = !!i1905[46]
  i1904.hasLightDataAsset = !!i1905[47]
  i1904.hasManualGenerate = !!i1905[48]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'lightmapColor')
  request.r(i1911[2], i1911[3], 0, i1910, 'lightmapDirection')
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1912 = root || new UnityEngine.LightProbes()
  var i1913 = data
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.bounciness = i1919[1]
  i1918.dynamicFriction = i1919[2]
  i1918.staticFriction = i1919[3]
  i1918.frictionCombine = i1919[4]
  i1918.bounceCombine = i1919[5]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1923[i + 0]));
  }
  i1920.ShaderCompilationErrors = i1922
  i1920.name = i1921[1]
  i1920.guid = i1921[2]
  var i1925 = i1921[3]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( i1925[i + 0] );
  }
  i1920.shaderDefinedKeywords = i1924
  var i1927 = i1921[4]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1927[i + 0]) );
  }
  i1920.passes = i1926
  var i1929 = i1921[5]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1929[i + 0]) );
  }
  i1920.usePasses = i1928
  var i1931 = i1921[6]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1931[i + 0]) );
  }
  i1920.defaultParameterValues = i1930
  request.r(i1921[7], i1921[8], 0, i1920, 'unityFallbackShader')
  i1920.readDepth = !!i1921[9]
  i1920.isCreatedByShaderGraph = !!i1921[10]
  i1920.compiled = !!i1921[11]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1935 = data
  i1934.shaderName = i1935[0]
  i1934.errorMessage = i1935[1]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1940 = root || new pc.UnityShaderPass()
  var i1941 = data
  i1940.id = i1941[0]
  i1940.subShaderIndex = i1941[1]
  i1940.name = i1941[2]
  i1940.passType = i1941[3]
  i1940.grabPassTextureName = i1941[4]
  i1940.usePass = !!i1941[5]
  i1940.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[6], i1940.zTest)
  i1940.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[7], i1940.zWrite)
  i1940.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[8], i1940.culling)
  i1940.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1941[9], i1940.blending)
  i1940.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1941[10], i1940.alphaBlending)
  i1940.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[11], i1940.colorWriteMask)
  i1940.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[12], i1940.offsetUnits)
  i1940.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[13], i1940.offsetFactor)
  i1940.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[14], i1940.stencilRef)
  i1940.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[15], i1940.stencilReadMask)
  i1940.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[16], i1940.stencilWriteMask)
  i1940.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[17], i1940.stencilOp)
  i1940.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[18], i1940.stencilOpFront)
  i1940.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[19], i1940.stencilOpBack)
  var i1943 = i1941[20]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1943[i + 0]) );
  }
  i1940.tags = i1942
  var i1945 = i1941[21]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( i1945[i + 0] );
  }
  i1940.passDefinedKeywords = i1944
  var i1947 = i1941[22]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1947[i + 0]) );
  }
  i1940.passDefinedKeywordGroups = i1946
  var i1949 = i1941[23]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1949[i + 0]) );
  }
  i1940.variants = i1948
  var i1951 = i1941[24]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1951[i + 0]) );
  }
  i1940.excludedVariants = i1950
  i1940.hasDepthReader = !!i1941[25]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1953 = data
  i1952.val = i1953[0]
  i1952.name = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1955 = data
  i1954.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[0], i1954.src)
  i1954.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[1], i1954.dst)
  i1954.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[2], i1954.op)
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1957 = data
  i1956.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[0], i1956.pass)
  i1956.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[1], i1956.fail)
  i1956.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[2], i1956.zFail)
  i1956.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[3], i1956.comp)
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.value = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1965 = data
  var i1967 = i1965[0]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( i1967[i + 0] );
  }
  i1964.keywords = i1966
  i1964.hasDiscard = !!i1965[1]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1971 = data
  i1970.passId = i1971[0]
  i1970.subShaderIndex = i1971[1]
  var i1973 = i1971[2]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1970.keywords = i1972
  i1970.vertexProgram = i1971[3]
  i1970.fragmentProgram = i1971[4]
  i1970.exportedForWebGl2 = !!i1971[5]
  i1970.readDepth = !!i1971[6]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'shader')
  i1976.pass = i1977[2]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.type = i1981[1]
  i1980.value = new pc.Vec4( i1981[2], i1981[3], i1981[4], i1981[5] )
  i1980.textureValue = i1981[6]
  i1980.shaderPropertyFlag = i1981[7]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1983 = data
  i1982.name = i1983[0]
  request.r(i1983[1], i1983[2], 0, i1982, 'texture')
  i1982.aabb = i1983[3]
  i1982.vertices = i1983[4]
  i1982.triangles = i1983[5]
  i1982.textureRect = UnityEngine.Rect.MinMaxRect(i1983[6], i1983[7], i1983[8], i1983[9])
  i1982.packedRect = UnityEngine.Rect.MinMaxRect(i1983[10], i1983[11], i1983[12], i1983[13])
  i1982.border = new pc.Vec4( i1983[14], i1983[15], i1983[16], i1983[17] )
  i1982.transparency = i1983[18]
  i1982.bounds = i1983[19]
  i1982.pixelsPerUnit = i1983[20]
  i1982.textureWidth = i1983[21]
  i1982.textureHeight = i1983[22]
  i1982.nativeSize = new pc.Vec2( i1983[23], i1983[24] )
  i1982.pivot = new pc.Vec2( i1983[25], i1983[26] )
  i1982.textureRectOffset = new pc.Vec2( i1983[27], i1983[28] )
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1985 = data
  i1984.name = i1985[0]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.ascent = i1987[1]
  i1986.originalLineHeight = i1987[2]
  i1986.fontSize = i1987[3]
  var i1989 = i1987[4]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1989[i + 0]) );
  }
  i1986.characterInfo = i1988
  request.r(i1987[5], i1987[6], 0, i1986, 'texture')
  i1986.originalFontSize = i1987[7]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1993 = data
  i1992.index = i1993[0]
  i1992.advance = i1993[1]
  i1992.bearing = i1993[2]
  i1992.glyphWidth = i1993[3]
  i1992.glyphHeight = i1993[4]
  i1992.minX = i1993[5]
  i1992.maxX = i1993[6]
  i1992.minY = i1993[7]
  i1992.maxY = i1993[8]
  i1992.uvBottomLeftX = i1993[9]
  i1992.uvBottomLeftY = i1993[10]
  i1992.uvBottomRightX = i1993[11]
  i1992.uvBottomRightY = i1993[12]
  i1992.uvTopLeftX = i1993[13]
  i1992.uvTopLeftY = i1993[14]
  i1992.uvTopRightX = i1993[15]
  i1992.uvTopRightY = i1993[16]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.bytes64 = i1995[1]
  i1994.data = i1995[2]
  return i1994
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1997 = data
  i1996.hashCode = i1997[0]
  request.r(i1997[1], i1997[2], 0, i1996, 'material')
  i1996.materialHashCode = i1997[3]
  request.r(i1997[4], i1997[5], 0, i1996, 'atlas')
  i1996.normalStyle = i1997[6]
  i1996.normalSpacingOffset = i1997[7]
  i1996.boldStyle = i1997[8]
  i1996.boldSpacing = i1997[9]
  i1996.italicStyle = i1997[10]
  i1996.tabSize = i1997[11]
  i1996.m_Version = i1997[12]
  i1996.m_SourceFontFileGUID = i1997[13]
  request.r(i1997[14], i1997[15], 0, i1996, 'm_SourceFontFile_EditorRef')
  request.r(i1997[16], i1997[17], 0, i1996, 'm_SourceFontFile')
  i1996.m_AtlasPopulationMode = i1997[18]
  i1996.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1997[19], i1996.m_FaceInfo)
  var i1999 = i1997[20]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.add(request.d('UnityEngine.TextCore.Glyph', i1999[i + 0]));
  }
  i1996.m_GlyphTable = i1998
  var i2001 = i1997[21]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('TMPro.TMP_Character', i2001[i + 0]));
  }
  i1996.m_CharacterTable = i2000
  var i2003 = i1997[22]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 2, i2002, '')
  }
  i1996.m_AtlasTextures = i2002
  i1996.m_AtlasTextureIndex = i1997[23]
  i1996.m_IsMultiAtlasTexturesEnabled = !!i1997[24]
  i1996.m_ClearDynamicDataOnBuild = !!i1997[25]
  var i2005 = i1997[26]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('UnityEngine.TextCore.GlyphRect', i2005[i + 0]));
  }
  i1996.m_UsedGlyphRects = i2004
  var i2007 = i1997[27]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.add(request.d('UnityEngine.TextCore.GlyphRect', i2007[i + 0]));
  }
  i1996.m_FreeGlyphRects = i2006
  i1996.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1997[28], i1996.m_fontInfo)
  i1996.m_AtlasWidth = i1997[29]
  i1996.m_AtlasHeight = i1997[30]
  i1996.m_AtlasPadding = i1997[31]
  i1996.m_AtlasRenderMode = i1997[32]
  var i2009 = i1997[33]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.add(request.d('TMPro.TMP_Glyph', i2009[i + 0]));
  }
  i1996.m_glyphInfoList = i2008
  i1996.m_KerningTable = request.d('TMPro.KerningTable', i1997[34], i1996.m_KerningTable)
  i1996.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1997[35], i1996.m_FontFeatureTable)
  var i2011 = i1997[36]
  var i2010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 1, i2010, '')
  }
  i1996.fallbackFontAssets = i2010
  var i2013 = i1997[37]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 1, i2012, '')
  }
  i1996.m_FallbackFontAssetTable = i2012
  i1996.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1997[38], i1996.m_CreationSettings)
  var i2015 = i1997[39]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('TMPro.TMP_FontWeightPair', i2015[i + 0]) );
  }
  i1996.m_FontWeightTable = i2014
  var i2017 = i1997[40]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('TMPro.TMP_FontWeightPair', i2017[i + 0]) );
  }
  i1996.fontWeights = i2016
  return i1996
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2019 = data
  i2018.m_FaceIndex = i2019[0]
  i2018.m_FamilyName = i2019[1]
  i2018.m_StyleName = i2019[2]
  i2018.m_PointSize = i2019[3]
  i2018.m_Scale = i2019[4]
  i2018.m_UnitsPerEM = i2019[5]
  i2018.m_LineHeight = i2019[6]
  i2018.m_AscentLine = i2019[7]
  i2018.m_CapLine = i2019[8]
  i2018.m_MeanLine = i2019[9]
  i2018.m_Baseline = i2019[10]
  i2018.m_DescentLine = i2019[11]
  i2018.m_SuperscriptOffset = i2019[12]
  i2018.m_SuperscriptSize = i2019[13]
  i2018.m_SubscriptOffset = i2019[14]
  i2018.m_SubscriptSize = i2019[15]
  i2018.m_UnderlineOffset = i2019[16]
  i2018.m_UnderlineThickness = i2019[17]
  i2018.m_StrikethroughOffset = i2019[18]
  i2018.m_StrikethroughThickness = i2019[19]
  i2018.m_TabWidth = i2019[20]
  return i2018
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2023 = data
  i2022.m_Index = i2023[0]
  i2022.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2023[1], i2022.m_Metrics)
  i2022.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2023[2], i2022.m_GlyphRect)
  i2022.m_Scale = i2023[3]
  i2022.m_AtlasIndex = i2023[4]
  i2022.m_ClassDefinitionType = i2023[5]
  return i2022
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2025 = data
  i2024.m_Width = i2025[0]
  i2024.m_Height = i2025[1]
  i2024.m_HorizontalBearingX = i2025[2]
  i2024.m_HorizontalBearingY = i2025[3]
  i2024.m_HorizontalAdvance = i2025[4]
  return i2024
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2027 = data
  i2026.m_X = i2027[0]
  i2026.m_Y = i2027[1]
  i2026.m_Width = i2027[2]
  i2026.m_Height = i2027[3]
  return i2026
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2030 = root || request.c( 'TMPro.TMP_Character' )
  var i2031 = data
  i2030.m_ElementType = i2031[0]
  i2030.m_Unicode = i2031[1]
  i2030.m_GlyphIndex = i2031[2]
  i2030.m_Scale = i2031[3]
  return i2030
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2037 = data
  i2036.Name = i2037[0]
  i2036.PointSize = i2037[1]
  i2036.Scale = i2037[2]
  i2036.CharacterCount = i2037[3]
  i2036.LineHeight = i2037[4]
  i2036.Baseline = i2037[5]
  i2036.Ascender = i2037[6]
  i2036.CapHeight = i2037[7]
  i2036.Descender = i2037[8]
  i2036.CenterLine = i2037[9]
  i2036.SuperscriptOffset = i2037[10]
  i2036.SubscriptOffset = i2037[11]
  i2036.SubSize = i2037[12]
  i2036.Underline = i2037[13]
  i2036.UnderlineThickness = i2037[14]
  i2036.strikethrough = i2037[15]
  i2036.strikethroughThickness = i2037[16]
  i2036.TabWidth = i2037[17]
  i2036.Padding = i2037[18]
  i2036.AtlasWidth = i2037[19]
  i2036.AtlasHeight = i2037[20]
  return i2036
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2040 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2041 = data
  i2040.id = i2041[0]
  i2040.x = i2041[1]
  i2040.y = i2041[2]
  i2040.width = i2041[3]
  i2040.height = i2041[4]
  i2040.xOffset = i2041[5]
  i2040.yOffset = i2041[6]
  i2040.xAdvance = i2041[7]
  i2040.scale = i2041[8]
  return i2040
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2042 = root || request.c( 'TMPro.KerningTable' )
  var i2043 = data
  var i2045 = i2043[0]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(request.d('TMPro.KerningPair', i2045[i + 0]));
  }
  i2042.kerningPairs = i2044
  return i2042
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2048 = root || request.c( 'TMPro.KerningPair' )
  var i2049 = data
  i2048.xOffset = i2049[0]
  i2048.m_FirstGlyph = i2049[1]
  i2048.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2049[2], i2048.m_FirstGlyphAdjustments)
  i2048.m_SecondGlyph = i2049[3]
  i2048.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2049[4], i2048.m_SecondGlyphAdjustments)
  i2048.m_IgnoreSpacingAdjustments = !!i2049[5]
  return i2048
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2050 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2051 = data
  var i2053 = i2051[0]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2053[i + 0]));
  }
  i2050.m_GlyphPairAdjustmentRecords = i2052
  return i2050
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2056 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2057 = data
  i2056.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2057[0], i2056.m_FirstAdjustmentRecord)
  i2056.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2057[1], i2056.m_SecondAdjustmentRecord)
  i2056.m_FeatureLookupFlags = i2057[2]
  return i2056
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2061 = data
  i2060.sourceFontFileName = i2061[0]
  i2060.sourceFontFileGUID = i2061[1]
  i2060.pointSizeSamplingMode = i2061[2]
  i2060.pointSize = i2061[3]
  i2060.padding = i2061[4]
  i2060.packingMode = i2061[5]
  i2060.atlasWidth = i2061[6]
  i2060.atlasHeight = i2061[7]
  i2060.characterSetSelectionMode = i2061[8]
  i2060.characterSequence = i2061[9]
  i2060.referencedFontAssetGUID = i2061[10]
  i2060.referencedTextAssetGUID = i2061[11]
  i2060.fontStyle = i2061[12]
  i2060.fontStyleModifier = i2061[13]
  i2060.renderMode = i2061[14]
  i2060.includeFontFeatures = !!i2061[15]
  return i2060
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2064 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'regularTypeface')
  request.r(i2065[2], i2065[3], 0, i2064, 'italicTypeface')
  return i2064
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2066 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2067 = data
  i2066.m_GlyphIndex = i2067[0]
  i2066.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2067[1], i2066.m_GlyphValueRecord)
  return i2066
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2069 = data
  i2068.m_XPlacement = i2069[0]
  i2068.m_YPlacement = i2069[1]
  i2068.m_XAdvance = i2069[2]
  i2068.m_YAdvance = i2069[3]
  return i2068
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.TMP_Settings' )
  var i2071 = data
  i2070.m_enableWordWrapping = !!i2071[0]
  i2070.m_enableKerning = !!i2071[1]
  i2070.m_enableExtraPadding = !!i2071[2]
  i2070.m_enableTintAllSprites = !!i2071[3]
  i2070.m_enableParseEscapeCharacters = !!i2071[4]
  i2070.m_EnableRaycastTarget = !!i2071[5]
  i2070.m_GetFontFeaturesAtRuntime = !!i2071[6]
  i2070.m_missingGlyphCharacter = i2071[7]
  i2070.m_warningsDisabled = !!i2071[8]
  request.r(i2071[9], i2071[10], 0, i2070, 'm_defaultFontAsset')
  i2070.m_defaultFontAssetPath = i2071[11]
  i2070.m_defaultFontSize = i2071[12]
  i2070.m_defaultAutoSizeMinRatio = i2071[13]
  i2070.m_defaultAutoSizeMaxRatio = i2071[14]
  i2070.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2071[15], i2071[16] )
  i2070.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2071[17], i2071[18] )
  i2070.m_autoSizeTextContainer = !!i2071[19]
  i2070.m_IsTextObjectScaleStatic = !!i2071[20]
  var i2073 = i2071[21]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 1, i2072, '')
  }
  i2070.m_fallbackFontAssets = i2072
  i2070.m_matchMaterialPreset = !!i2071[22]
  request.r(i2071[23], i2071[24], 0, i2070, 'm_defaultSpriteAsset')
  i2070.m_defaultSpriteAssetPath = i2071[25]
  i2070.m_enableEmojiSupport = !!i2071[26]
  i2070.m_MissingCharacterSpriteUnicode = i2071[27]
  i2070.m_defaultColorGradientPresetsPath = i2071[28]
  request.r(i2071[29], i2071[30], 0, i2070, 'm_defaultStyleSheet')
  i2070.m_StyleSheetsResourcePath = i2071[31]
  request.r(i2071[32], i2071[33], 0, i2070, 'm_leadingCharacters')
  request.r(i2071[34], i2071[35], 0, i2070, 'm_followingCharacters')
  i2070.m_UseModernHangulLineBreakingRules = !!i2071[36]
  return i2070
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2074 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2075 = data
  i2074.hashCode = i2075[0]
  request.r(i2075[1], i2075[2], 0, i2074, 'material')
  i2074.materialHashCode = i2075[3]
  request.r(i2075[4], i2075[5], 0, i2074, 'spriteSheet')
  var i2077 = i2075[6]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('TMPro.TMP_Sprite', i2077[i + 0]));
  }
  i2074.spriteInfoList = i2076
  var i2079 = i2075[7]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 1, i2078, '')
  }
  i2074.fallbackSpriteAssets = i2078
  i2074.m_Version = i2075[8]
  i2074.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2075[9], i2074.m_FaceInfo)
  var i2081 = i2075[10]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.add(request.d('TMPro.TMP_SpriteCharacter', i2081[i + 0]));
  }
  i2074.m_SpriteCharacterTable = i2080
  var i2083 = i2075[11]
  var i2082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.add(request.d('TMPro.TMP_SpriteGlyph', i2083[i + 0]));
  }
  i2074.m_SpriteGlyphTable = i2082
  return i2074
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2086 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.hashCode = i2087[1]
  i2086.unicode = i2087[2]
  i2086.pivot = new pc.Vec2( i2087[3], i2087[4] )
  request.r(i2087[5], i2087[6], 0, i2086, 'sprite')
  i2086.id = i2087[7]
  i2086.x = i2087[8]
  i2086.y = i2087[9]
  i2086.width = i2087[10]
  i2086.height = i2087[11]
  i2086.xOffset = i2087[12]
  i2086.yOffset = i2087[13]
  i2086.xAdvance = i2087[14]
  i2086.scale = i2087[15]
  return i2086
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2093 = data
  i2092.m_Name = i2093[0]
  i2092.m_HashCode = i2093[1]
  i2092.m_ElementType = i2093[2]
  i2092.m_Unicode = i2093[3]
  i2092.m_GlyphIndex = i2093[4]
  i2092.m_Scale = i2093[5]
  return i2092
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2096 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'sprite')
  i2096.m_Index = i2097[2]
  i2096.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2097[3], i2096.m_Metrics)
  i2096.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2097[4], i2096.m_GlyphRect)
  i2096.m_Scale = i2097[5]
  i2096.m_AtlasIndex = i2097[6]
  i2096.m_ClassDefinitionType = i2097[7]
  return i2096
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2098 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.add(request.d('TMPro.TMP_Style', i2101[i + 0]));
  }
  i2098.m_StyleList = i2100
  return i2098
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2104 = root || request.c( 'TMPro.TMP_Style' )
  var i2105 = data
  i2104.m_Name = i2105[0]
  i2104.m_HashCode = i2105[1]
  i2104.m_OpeningDefinition = i2105[2]
  i2104.m_ClosingDefinition = i2105[3]
  i2104.m_OpeningTagArray = i2105[4]
  i2104.m_ClosingTagArray = i2105[5]
  i2104.m_OpeningTagUnicodeArray = i2105[6]
  i2104.m_ClosingTagUnicodeArray = i2105[7]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2109[i + 0]) );
  }
  i2106.files = i2108
  i2106.componentToPrefabIds = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2113 = data
  i2112.path = i2113[0]
  request.r(i2113[1], i2113[2], 0, i2112, 'unityObject')
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2117[i + 0]) );
  }
  i2114.scriptsExecutionOrder = i2116
  var i2119 = i2115[1]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2119[i + 0]) );
  }
  i2114.sortingLayers = i2118
  var i2121 = i2115[2]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2121[i + 0]) );
  }
  i2114.cullingLayers = i2120
  i2114.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2115[3], i2114.timeSettings)
  i2114.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2115[4], i2114.physicsSettings)
  i2114.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2115[5], i2114.physics2DSettings)
  i2114.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2115[6], i2114.qualitySettings)
  i2114.enableRealtimeShadows = !!i2115[7]
  i2114.enableAutoInstancing = !!i2115[8]
  i2114.enableDynamicBatching = !!i2115[9]
  i2114.lightmapEncodingQuality = i2115[10]
  i2114.desiredColorSpace = i2115[11]
  var i2123 = i2115[12]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( i2123[i + 0] );
  }
  i2114.allTags = i2122
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.value = i2127[1]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2131 = data
  i2130.id = i2131[0]
  i2130.name = i2131[1]
  i2130.value = i2131[2]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2135 = data
  i2134.id = i2135[0]
  i2134.name = i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2137 = data
  i2136.fixedDeltaTime = i2137[0]
  i2136.maximumDeltaTime = i2137[1]
  i2136.timeScale = i2137[2]
  i2136.maximumParticleTimestep = i2137[3]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2139 = data
  i2138.gravity = new pc.Vec3( i2139[0], i2139[1], i2139[2] )
  i2138.defaultSolverIterations = i2139[3]
  i2138.bounceThreshold = i2139[4]
  i2138.autoSyncTransforms = !!i2139[5]
  i2138.autoSimulation = !!i2139[6]
  var i2141 = i2139[7]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2141[i + 0]) );
  }
  i2138.collisionMatrix = i2140
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2145 = data
  i2144.enabled = !!i2145[0]
  i2144.layerId = i2145[1]
  i2144.otherLayerId = i2145[2]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'material')
  i2146.gravity = new pc.Vec2( i2147[2], i2147[3] )
  i2146.positionIterations = i2147[4]
  i2146.velocityIterations = i2147[5]
  i2146.velocityThreshold = i2147[6]
  i2146.maxLinearCorrection = i2147[7]
  i2146.maxAngularCorrection = i2147[8]
  i2146.maxTranslationSpeed = i2147[9]
  i2146.maxRotationSpeed = i2147[10]
  i2146.baumgarteScale = i2147[11]
  i2146.baumgarteTOIScale = i2147[12]
  i2146.timeToSleep = i2147[13]
  i2146.linearSleepTolerance = i2147[14]
  i2146.angularSleepTolerance = i2147[15]
  i2146.defaultContactOffset = i2147[16]
  i2146.autoSimulation = !!i2147[17]
  i2146.queriesHitTriggers = !!i2147[18]
  i2146.queriesStartInColliders = !!i2147[19]
  i2146.callbacksOnDisable = !!i2147[20]
  i2146.reuseCollisionCallbacks = !!i2147[21]
  i2146.autoSyncTransforms = !!i2147[22]
  var i2149 = i2147[23]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2149[i + 0]) );
  }
  i2146.collisionMatrix = i2148
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2153 = data
  i2152.enabled = !!i2153[0]
  i2152.layerId = i2153[1]
  i2152.otherLayerId = i2153[2]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2155 = data
  var i2157 = i2155[0]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2157[i + 0]) );
  }
  i2154.qualityLevels = i2156
  var i2159 = i2155[1]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( i2159[i + 0] );
  }
  i2154.names = i2158
  i2154.shadows = i2155[2]
  i2154.anisotropicFiltering = i2155[3]
  i2154.antiAliasing = i2155[4]
  i2154.lodBias = i2155[5]
  i2154.shadowCascades = i2155[6]
  i2154.shadowDistance = i2155[7]
  i2154.shadowmaskMode = i2155[8]
  i2154.shadowProjection = i2155[9]
  i2154.shadowResolution = i2155[10]
  i2154.softParticles = !!i2155[11]
  i2154.softVegetation = !!i2155[12]
  i2154.activeColorSpace = i2155[13]
  i2154.desiredColorSpace = i2155[14]
  i2154.masterTextureLimit = i2155[15]
  i2154.maxQueuedFrames = i2155[16]
  i2154.particleRaycastBudget = i2155[17]
  i2154.pixelLightCount = i2155[18]
  i2154.realtimeReflectionProbes = !!i2155[19]
  i2154.shadowCascade2Split = i2155[20]
  i2154.shadowCascade4Split = new pc.Vec3( i2155[21], i2155[22], i2155[23] )
  i2154.streamingMipmapsActive = !!i2155[24]
  i2154.vSyncCount = i2155[25]
  i2154.asyncUploadBufferSize = i2155[26]
  i2154.asyncUploadTimeSlice = i2155[27]
  i2154.billboardsFaceCameraPosition = !!i2155[28]
  i2154.shadowNearPlaneOffset = i2155[29]
  i2154.streamingMipmapsMemoryBudget = i2155[30]
  i2154.maximumLODLevel = i2155[31]
  i2154.streamingMipmapsAddAllCameras = !!i2155[32]
  i2154.streamingMipmapsMaxLevelReduction = i2155[33]
  i2154.streamingMipmapsRenderersPerFrame = i2155[34]
  i2154.resolutionScalingFixedDPIFactor = i2155[35]
  i2154.streamingMipmapsMaxFileIORequests = i2155[36]
  i2154.currentQualityLevel = i2155[37]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2165 = data
  i2164.weight = i2165[0]
  i2164.vertices = i2165[1]
  i2164.normals = i2165[2]
  i2164.tangents = i2165[3]
  return i2164
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2166 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2167 = data
  i2166.xPlacement = i2167[0]
  i2166.yPlacement = i2167[1]
  i2166.xAdvance = i2167[2]
  i2166.yAdvance = i2167[3]
  return i2166
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

Deserializers.buildID = "a6301625-52fa-4ceb-bfc7-1387cb9e7c1b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

