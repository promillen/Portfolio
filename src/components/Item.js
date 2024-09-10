//components/Item.js
import React from 'react';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image, Plane, Text, useIntersect } from '@react-three/drei';

function Item({ 
  url, 
  scale,
  text,
  textSize,
  textColor,
  fontUrl,
  planeColor,
  onClick,
  ...props 
}) {
  const visible = useRef(false);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imageRef = useIntersect((isVisible) => (visible.current = isVisible));
  const planeRef = useRef();
  const textRef = useRef();

  useFrame((state, delta) => {
    const image = imageRef.current;
    const plane = planeRef.current;
    const text = textRef.current;

    if (image && plane) {
      image.position.y = THREE.MathUtils.damp(image.position.y, visible.current ? 0 : -state.viewport.height / 2 + 1, 4, delta);
      image.material.zoom = THREE.MathUtils.damp(image.material.zoom, visible.current ? 1 : 1.5, 4, delta);
      image.material.grayscale = THREE.MathUtils.damp(image.material.grayscale, hovered ? 1 : 0, 4, delta);
      image.position.z = THREE.MathUtils.damp(image.position.z, hovered ? -0.02 : 0, 4, delta);

      plane.position.y = THREE.MathUtils.damp(plane.position.y, visible.current ? 0 : -state.viewport.height / 2 + 1, 4, delta);
      plane.position.z = THREE.MathUtils.damp(plane.position.z, hovered ? 0 : 0.01, 4, delta);
      plane.material.opacity = THREE.MathUtils.damp(plane.material.opacity, hovered ? 0.4 : 0.0, 4, delta);

      if (text) {
        text.material.opacity = THREE.MathUtils.damp(text.material.opacity, hovered ? 1 : 0.2, 4, delta);
      }
    }
  });

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  const maxWidth = scale[0] * 0.95;

  return (
    <group {...props} onClick={handleClick}>
      <Image ref={imageRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} scale={scale} url={url} transparent/>
      <Plane ref={planeRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} position={[0, 0, 0.01]} args={[scale[0], scale[1]]}>
        <meshBasicMaterial attach="material" color={planeColor} transparent opacity={0.5} />
      </Plane>
      <Text 
        ref={textRef} 
        color={textColor} 
        font={fontUrl} 
        fontSize={textSize} 
        position={[0, 0, 0.02]} 
        visible={hovered} 
        anchorX="center" 
        anchorY="middle"
        textAlign="center"
        outlineWidth={0.02}
        outlineColor="#ffffff"
        outlineOpacity={0.7}
        maxWidth={maxWidth}
      >
        {text}
      </Text>
    </group>
  );
}

export default Item;