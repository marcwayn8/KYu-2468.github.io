"use client";

import React from "react";
import { Avatar } from "@readyplayerme/visage";
import { useMediaQuery } from "usehooks-ts";
import LoadingTriangle from "./Loading/LoadingTriangle";

const modelSrc = "https://models.readyplayer.me/6495962b8c331a0f7672b37d.glb"; // this can be a relative or absolute URL

export default function KevinAvatar() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
   
    <Avatar
      ambientLightColor="#fff5b6"
      ambientLightIntensity={0.25}
      cameraInitialDistance={2.5}
      cameraTarget={1.55}
      dirLightColor="#002aff"
      dirLightIntensity={5}
      emotion={{
        browInnerUp: 0.3,
        browOuterUpLeft: 0.37,
        browOuterUpRight: 0.49,
        eyeSquintLeft: 0.4,
        eyeSquintRight: 0.2,
        mouthShrugUpper: 0.27,
        mouthSmileLeft: 0.37,
        mouthSmileRight: 0.36
      }}
      environment="city"
      onLoaded={function noRefCheck(){}}
      onLoading={function noRefCheck(){}}
      modelSrc={modelSrc}
      scale={1}
      spotLightAngle={0.314}
      spotLightColor="#fff5b6"
      spotLightIntensity={1}
    
      style={{
        background: 'transparent'
   ,
        height: isSmallScreen ? "160px" : "516px"
      }}
      loader={<LoadingTriangle />}
    />
  );
}


