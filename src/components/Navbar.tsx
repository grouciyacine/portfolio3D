import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
type Props = {}
function Navbar({ }: Props) {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className="w-full h-28 bg-dark-blue p-2 flex flex-row md:justify-around justify-between items-center ">
        <div className='flex flex-row justify-center items-center p-4 space-x-5'>
          <img src="logo.png" alt="logo" className="w-20 h-20 " />
          <h1 className='text-3xl font-semibold'>Yacine | Portfolio</h1>
        </div>

        <ul className="md:flex flex-row justify-between items-center  space-x-8 sm:text-2xl hidden mr-7">
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer"><a>Experience</a></li>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer"><a>Projects</a></li>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer"><a>Skills</a></li>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer"><a>Contact</a></li>
          <a href='https://github.com/grouciyacine'>
            <AiFillGithub className=" hover:text-white transition-all duration-75 cursor-pointer sm:text-xl text-2xl" />
          </a>
          <a href='https://www.linkedin.com/in/grouci-yacine-13507123a/'>
            <BsLinkedin className=" hover:text-[#0A66C2]  transition-all duration-75 cursor-pointer sm:text-xl text-2xl" />
          </a>
        </ul>
        {!navbar ? <AiOutlineMenu className='flex text-3xl flex-col md:hidden justify-center items-center' onClick={() => { setNavbar(!navbar) }} />
          : <AiOutlineClose className='flex text-white text-3xl flex-col md:hidden justify-center items-center' onClick={() => { setNavbar(!navbar) }} />
        }

      </nav>
      {navbar &&
        <ul className='flex md:hidden absolute flex-col justify-end items-center w-44 right-0 top-24 rounded-lg p-3 bg-dark-blue space-y-7 z-20 m-2'>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer sm:text-xl text-2xl sm:font-sans font-semibold"><a>Experience</a></li>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer sm:text-xl text-2xl sm:font-sans font-semibold"><a>Projects</a></li>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer sm:text-xl text-2xl sm:font-sans font-semibold"><a>Skills</a></li>
          <li className=" hover:text-blue-400 transition-all duration-75 cursor-pointer sm:text-xl text-2xl sm:font-sans font-semibold"><a>Contact</a></li>
          <a href='https://github.com/grouciyacine'>
            <AiFillGithub size={30} className=" hover:text-white transition-all duration-75 cursor-pointer sm:text-xl text-2xl" />
          </a>
          <a href='https://www.linkedin.com/in/grouci-yacine-13507123a/'>
            <BsLinkedin size={30} className=" hover:text-[#0A66C2]  transition-all duration-75 cursor-pointer sm:text-xl text-2xl" />
          </a>

        </ul>}
    </div>

  )
}
export default Navbar