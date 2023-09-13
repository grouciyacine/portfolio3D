import { Tilt } from 'react-tilt'
import data from '../assets/interduction.json'
import { motion } from 'framer-motion';
type Props = {}
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
export default function Interduction({ }: Props) {
    return (
        <div className='p-2'>
            <h4 className='text-xl text-blue-300 p-3'>Interduction</h4>
            <h1 className='sm:text-8xl text-7xl font-bold'>Overview</h1>
            <h1 className='w-3/4 text-xl p-7'>I'm a Skilled Software developer with experience in typescript and javascript and expertise in frameworks like React,Node.js and Next I'm a quick learner and collaborate closely with clients to create efficient,scalable and user-friendly solution that solve real-world problems let's work together to bring your ideas to life!</h1>
            <div className='sm:grid xl:grid-cols-4 lg:grid-cols-3 sm:pl-8  sm:grid-cols-2 flex flex-col  gap-4  justify-center items-center'>
                {data?.data?.map((item: any, key: number) => (
                    <div key={key} className=''>
                        <Tilt options={defaultOptions} className='mx-3 flex flex-col justify-center items-center' style={{ height: 250, width: 250 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -250 }}
                                transition={{ duration: 1.3 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className='tilt-gard w-full h-full flex flex-col justify-center items-center rounded-lg'>
                                <div className='bg-dark-blue w-[245px] h-[245px] flex flex-col justify-center items-center rounded-lg'>
                                    <img src={item.image} alt='item' className='w-20 h-20' />
                                    <h1 className='text-base font-semibold  text-center'>{item.name}</h1>
                                </div>
                            </motion.div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    )
}