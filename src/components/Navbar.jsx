import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../img/logo/Job Dispo no bg.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#C0C0C0] text-black'>
      <div>
        <img src={Logo} alt="Logo" style={{width: '120px' }} />
      </div>

      {/*Menu*/}
      <ul className='hidden md:flex'>
        <li className='hover:scale-110 duration-300'>
          <a href='/'>Home</a>
        </li>
        <li className='hover:scale-110 duration-300'>
          <a href='/about'>About</a>
        </li>
        <li className='hover:scale-110 duration-300'>
          <a href='/skills'>Skills</a>
        </li>
        <li className='hover:scale-110 duration-300'>
          <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/*Mobile View*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#C0C0C0] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/about'>About</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/*Socials*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-104px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.facebook.com/jobgian.dispo' target='_blank' rel="noopener noreferrer">
              Facebook <FaFacebook size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-104px] hover:ml-[-10px] duration-300 bg-[#1a1919]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/mrzyphyl' target='_blank' rel="noopener noreferrer">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-104px] hover:ml-[-10px] duration-300 bg-white'>
            <a className='flex justify-between items-center w-full text-black'
            href='https://www.instagram.com/jobdispo/?fbclid=IwAR1rU4Te8YbTc8UEhAK4_8p2GH9CvEG0J5fNRY_vORU5gjWIcV3kmhnuSRE' target='_blank' rel="noopener noreferrer">
              Instagram <FaInstagram size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-104px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-black' href='/contact' smooth={true} duration={500}>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar