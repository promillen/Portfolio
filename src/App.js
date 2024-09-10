//App.js
import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import ItemGallery from './components/ItemGallery';
import Overlay from './components/Overlay';

const App = () => {
  const [topOffsets, setTopOffsets] = useState({});
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight);
  const [overlayContent, setOverlayContent] = React.useState(null);

  useEffect(() => {
    const handleResize = () => {
      const newAspectRatio = window.innerWidth / window.innerHeight;
      setAspectRatio(newAspectRatio);
      let newOffsets;

      if (aspectRatio  < 0.75) { // Portrait
        console.log(`Aspect ratio: ${aspectRatio }` + " Portrait");
        newOffsets = { aboutMe: '80vh', academic: '160vh', design: '240vh', other: '320vh', arrow1: '600vh', arrow2: '400vh' };

      } else if (aspectRatio  > 1.33) { // Landscape
        console.log(`Aspect ratio: ${aspectRatio }` + " Landscape");
        newOffsets = { aboutMe: '70vh', academic: '175vh', design: '420vh', other: '790vh', arrow1: '365vh', arrow2: '740vh' };

      } else if (aspectRatio  > 2.00) { // Wide
        console.log(`Aspect ratio: ${aspectRatio }` + " Wide");
        newOffsets = { aboutMe: '140vh', academic: '220vh', design: '300vh', other: '380vh', arrow1: '600vh', arrow2: '400vh' };

      } else { // Square-ish
        console.log(`Aspect ratio: ${aspectRatio }` + " Square-ish");
        newOffsets = { aboutMe: '100vh', academic: '180vh', design: '260vh', other: '340vh', arrow1: '600vh', arrow2: '400vh' };
        
      }
      setTopOffsets(newOffsets);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (content) => {
    setOverlayContent(content);
  };

  const handleCloseOverlay = () => {
    setOverlayContent(null);
  };
{/* <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}></Canvas> */}
  return (
    <>
      <Canvas orthographic camera={{ zoom: 80 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#dedede']} />
        <ScrollControls damping={0.2} pages={9}>
          <ItemGallery aspectRatio={aspectRatio} onImageClick={handleImageClick} />
          <Scroll html style={{ width: '100%' }}>
            <h1 style={{ position: 'absolute', top: topOffsets.aboutMe, right: '10vw', fontSize: '10vw', transform: 'translate3d(0,-100%,0)' }}>about me</h1>
            <div style={{
              position: 'absolute',
              top: topOffsets.aboutMe,
              right: '10vw',
              marginLeft: '10vw',
              fontSize: '1.5vw',
              transform: 'translate3d(0,10%,0)',
              textAlign: 'right'
            }}>
                My name is Christoffer, and I'm a hands-on creator with a degree in sustainable design and autonomous systems/robotics. I have a passion for blending technology, design, and creativity. Whether I'm playing with electronics, wood and metal, computer code or design programs, I love turning ideas into reality. My work spans across multiple fields, and I thrive on challenges that combine technical precision with creative flair, and hopefully also some sustainability. Besides making projects, a find happiness in doing volunteer work, and I aim to make a positive impact to leave the earth a little bit better than we received it.<br />&#8595;
            </div>
            <h1 style={{ position: 'absolute', top: topOffsets.academic, left: '10vw' }}>academic<br />projects</h1>
            <span style={{ position: 'absolute', top: topOffsets.arrow1, left: '20vw', fontSize: '12vw'}}>&#8595;</span>
            <h1 style={{ position: 'absolute', top: topOffsets.design, right: '10vw' }}>design<br />projects</h1>
            <span style={{ position: 'absolute', top: topOffsets.arrow2, right: '25vw', fontSize: '12vw'}}>&#8595;</span>
            <h1 style={{ position: 'absolute', top: topOffsets.other, left: '10vw' }}>other<br />projects</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
      {overlayContent && <Overlay content={overlayContent} onClose={handleCloseOverlay} />}
    </>
  );
};

export default App;