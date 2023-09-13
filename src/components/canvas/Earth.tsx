import {  Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Preload, OrbitControls, Stars } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'
type Props = {}

function Earth({ }: Props) {
    const Earth = useGLTF('../../../public/earth1/scene.gltf')
    const ast = useGLTF('../../../public/ast/scene.gltf')
    return (
        <mesh>
        <hemisphereLight intensity={3} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight intensity={0.8} />
        <primitive
          object={Earth.scene}
          scale={ 3.75}
          position={ [-2.5, -0.25, 1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
                <primitive
          object={ast.scene}
          scale={ 1}
          position={ [-8, -0.25, 1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
        <Stars speed={2} />
      </mesh>
    )
}
const EarthCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
          autoRotate

          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default EarthCanvas