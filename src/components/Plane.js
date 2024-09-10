import React from 'react';
import { useRef, useState } from 'react';
import { Plane } from '@react-three/drei';

function PlaneItem({ planeColor, planeWidth, planeHeight, ...props }) {
  const planeRef = useRef();

  return (
    <Plane
      args={[planeWidth, planeHeight]}
      ref={planeRef}
      {...props}
    >
      <meshBasicMaterial attach="material" color={planeColor} transparent opacity={0.2} />
    </Plane>
  );
}

export default PlaneItem;