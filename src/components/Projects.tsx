import { Tilt } from 'react-tilt'
import data from '../assets/Project.json'
import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
type Props = {}
function Projects({ }: Props) {
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
  return (
    <div className="p-2">
      <h4 className='text-xl text-blue-300 pl-3 pt-14'>What i have done so far</h4>
      <h1 className="sm:text-8xl font-bold text-7xl p-3">Projects</h1>
      <div className='sm:grid lg:grid-cols-3  sm:pl-8 translate-y-6  sm:grid-cols-2 flex flex-col  gap-4  justify-center items-center'>
        {data?.data?.map((item: any, key: number) => (
          <div key={key} className=''>
            <Tilt options={defaultOptions} className='mx-3 flex flex-col justify-center items-center' style={{ height: 400, width: 270 }}>
              <motion.div
                initial={{ opacity: 0, x: -250 }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='tilt-project w-full h-full flex flex-col justify-center items-center rounded-lg'>
                <div className='bg-blue-dark w-[260px] h-[390px] relative flex flex-col justify-start items-center rounded-lg'>
                  <img src={item.image} alt='item' className='w-full h-[200px] object-cover' />
                  <h1 className='text-base font-semibold  bg-dark-blue w-full text-center'>{item.name}</h1>
                  <a href={item?.github}>
                    <BsGithub className='absolute top-0 right-0 w-10 h-10 p-1 m-2 cursor-pointer bg-dark-blue rounded-full ' />
                  </a>
                  <a href={item?.URL} target='_blank'>
                  <TbWorld className='absolute top-12 right-0 w-10 h-10 p-1 m-2 cursor-pointer bg-dark-blue rounded-full ' />
                  </a>
                  <h4 className='p-2 text-base bg-blue-dark'>{item?.description}</h4>
                  <div className='grid grid-cols-2 gap-1 p-2 bg-blue-dark w-full '>
                    {item?.using?.map((use: any, key: number) => (
                      <h4 className={`${use?.color}`} key={key}>{use?.name}</h4>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects