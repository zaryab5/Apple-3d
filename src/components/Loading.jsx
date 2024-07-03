import { Html } from '@react-three/drei'
import React from 'react'
import '../loader.css'; 
const Loading = () => {
  return (
    <Html>
      <div className="absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
<div>Loading...</div>

        </div>
      </div>
    </Html>
  )
}

export default Loading