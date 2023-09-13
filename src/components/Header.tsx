import { Cursor, useTypewriter } from 'react-simple-typewriter'
import PCCanvas from './canvas/Coumputer'
import {motion} from 'framer-motion'
type Props = {}
export default function Header({ }: Props) {
  const [text] = useTypewriter({
    words: [
      "Ha,I'm Yacine Grouci",
      "I'm Full Stack Developer",
      "<ButtonToCodeWithMe/>",

    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="bg-bg bg-opacity-20 w-full  md:h-[700px] h-[700]  bg-cover bg-no-repeat overflow-x-hidden">
      <div className='flex flex-col mt-5 md:items-center md:justify-start sm:ml-4  justify-center items-center '>
        <div className='flex w-full flex-row justify-start items-center  md:translate-x-0 sm:-translate-x-14 translate-x-0 '>
          <div className=' flex flex-col sm:p-3 items-start justify-center sm:ml-0 ml-3'>
            <div className='rounded-full w-7 h-7 bg-blue-400 ml-1 ' />
            <div className=' w-1 rounded-sm h-36 blue-gard sm:ml-[14px] ml-[11.5px] -translate-y-3 ' />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row items-center'>
              <h1 className='text-xl sm:text-5xl font-bold '>{text}</h1>
              <Cursor cursorColor='#60A5FA' />
            </div>
            <h1 className='text-xl sm:text-5xl sm:p-3 w-full font-bold'>Brings ideas to life with <span className='text-blue-400'>Code</span></h1>
          <h4 className='text-xl sm:text-5xl sm:pl-3 w-full font-bold'>web Developer.Mobile Developer</h4>
          </div>
          <motion.div
          animate={{
            x:[0,-90,0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }} className=' w-20 h-20 rounded-full bg-[#60A5FA]'/>

        </div>
        <div className=' w-full  flex flex-col relative justify-center items-center  h-96 sm:-translate-y-8'>
          <PCCanvas />
          <div className='absolute border-2 -bottom-20 border-[#60A5FA] w-10 h-16 flex flex-col justify-start cursor-pointer items-center rounded-3xl'>
          <a href='#interduction'>
          <motion.div
          animate={{
            y:[0,30,0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }} className='p-1 w-5 h-5 rounded-full bg-[#60A5FA]'/>
          </a>

          </div>
        </div>

      </div>
    </div>
  )
}