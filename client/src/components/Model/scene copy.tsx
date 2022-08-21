import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Thriller1'; /* highlight-line */
import { 
   Button
  } from '@mui/material'

  interface playAnimation {
   playState: boolean;
 }

export default function App() {
   
  const [playState, setPlayState] = useState(false)

  const playAnimation = (playState: boolean) => {

    setPlayState(true)
  }


   const FollowObj = () => {
      const modelPos: [number, number, number] = [0.8, -0.9, 5];

   }
   // console.log(FollowObj)

   return (
      <>
      {/* <div style={{
         position: "absolute",
         top: "50%",
         left: "50%",
         zIndex: "10000"
         backgroundColor: 'blue',
      }}> */}
 
         {/* </div> */}
         <Canvas
            camera={{ position: {FollowObj}, fov: 15 }}
            style={{
               // backgroundColor: '#111a21',
               width: '500px',
               margin: '0',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               height: '500px',
               // backgroundColor: 'red',
            }}
         >

            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
               <Model position={[0.8, -0.9, 5]} toggleState={playAnimation}/> /* highlight-line */ /* highlight-line */
            </Suspense>
            <OrbitControls />
         </Canvas>
         <Button variant='contained' >Dance</Button>
         </>
   );
}