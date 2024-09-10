import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client'
import App from './App';
import './styles.css';

function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <span style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>Christoffer's<br />portfolio</span>
        <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>31/08/2024</div>
      </div>
    )
  }

createRoot(document.getElementById('root')).render(
    <>
      <Suspense fallback={null}>
        <App />
      </Suspense>
      <Overlay />
      <img src="./images/header_face.jpg" alt="Logo" style={{ position: 'absolute', top: 40, left: 40, width: 37 }} />
    </>
  )