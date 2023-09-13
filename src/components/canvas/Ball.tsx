import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import CanvasLoader from "../CanvasLoader"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
type Props = {
    skill: any,
    bg:any
}
function Ball({ logo,bg }: any) {
    const [decal] = useTexture([logo])


    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={6.25} />
            <directionalLight position={[0, 0, 0.25]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color={bg}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    )
}

function BallCanvas({ skill,bg }: Props) {

    return (
        <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball logo={skill} bg={bg}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BallCanvas