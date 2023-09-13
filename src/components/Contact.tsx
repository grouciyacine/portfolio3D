import { motion } from 'framer-motion'
import { BsSend } from 'react-icons/bs'
import EarthCanvas from './canvas/Earth'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
type Props = {}

function Contact({ }: Props) {
  const [data, setData] = useState({
    'name': '',
    'email': '',
    'msg': '',
  })
  const DataHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    emailjs.send('service_3zdr0uh', 'template_3zoj0bu', {
      from_name: data.name,
      to_name: "Yacine",
      from_email: data.email,
      to_email: "wwwgrouciyacine@gmail.com",
      message: data.msg,
    }, 'cCYKf6S8_JrNwwgRg').then(() => {
      alert("Thank you. I will get back to you as soon as possible 🏃.");
      setData({ name: '', email: '', msg: '' })
    }).catch((err)=>{
      console.log(err)
      alert("Ahh, something went wrong. Please try again.");
    })
  }
  console.log(data)
  return (
    <div className="p-2 mb-4 overflow-x-hidden">
      <h4 className='text-xl text-blue-300 pl-3 pt-14'>Let's get in touche</h4>
      <h1 className="sm:text-8xl text-7xl font-bold p-3">Contact</h1>
      <div className='flex lg:flex-row flex-col-reverse justify-center md:justify-between items-center w-full'>
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          transition={{ duration: 1.3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} className='w-full '>
          <form onSubmit={onSubmit} className=' h-[600px] bg-[#000038] rounded-lg p-5 m-3 z-20  space-y-7 flex flex-col justify-center w-full'>
            <label className='flex flex-col justify-start items-start'>
              <h4 className='text-base p-3 font-semibold'>Name:</h4>
              <input name='name' value={data.name} onChange={DataHandler} placeholder='Enter your name' type='text' className='w-full  p-3 rounded-md bg-blue-900 outline-none border-none' />
            </label>
            <label className='flex flex-col justify-start items-start'>
              <h4 className='text-base p-3 font-semibold'>Email:</h4>
              <input placeholder='Enter your email' value={data.email} name='email' onChange={DataHandler} type='email' className='w-full p-3 rounded-md bg-blue-900 outline-none border-none' />
            </label>
            <label className='flex flex-col justify-start items-start'>
              <h4 className='text-base p-3 font-semibold'>Message:</h4>
              <textarea value={data.msg} cols={14} name='msg' onChange={DataHandler} className='w-full h-[200px] p-2 rounded-md bg-blue-900 outline-none border-none' />
            </label>
            <div className=' w-full  flex flex-row justify-center '>
              <div className='flex flex-row justify-center w-fit bg-blue-900 hover:bg-blue-950 hover:border-white border-2 border-transparent space-x-2 cursor-pointer items-center  p-3 rounded-md'>
                <button type='submit' className='border-none outline-none '>Send</button>
                <BsSend />
              </div>

            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          transition={{ duration: 1.3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='w-full h-[500px] '
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact