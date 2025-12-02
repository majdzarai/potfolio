"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei"
import dynamic from "next/dynamic"

// Loader Component - must use Html from drei when inside Canvas
const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="mt-4 text-sm text-muted-foreground font-medium">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  )
}

// Earth Component - loads the GLTF model
const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf")
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  )
}

// Earth Canvas Component
const EarthCanvas = () => {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[500px] lg:min-h-[600px]">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Export with dynamic import to avoid SSR issues
export default dynamic(() => Promise.resolve(EarthCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
})
