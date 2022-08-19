import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Thriller'; /* highlight-line */

export default function App() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            // backgroundColor: '#111a21',
            width: '500px',
            margin: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '500px',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}