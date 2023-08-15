import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Logo from '../img/logo/Job Dispo no bg.png'

const Contact = () => {
  return (
    <div name='contact' className='py-20 w-full bg-[#C0C0C0] flex justify-center items-center p-4'>
      <div className='flex flex-col justify-center items-center w-full py-20'>
        <div className='max-w-[1000px] w-full grid md:grid-cols-2 grid-cols-1 gap-0'>
        <div className='hidden md:inline'>
            <img src={Logo} alt="Logo" style={{width: '1000px'}} />
          </div>
          <div>
            <form method='POST' action="https://getform.io/f/9a958231-32db-4edf-b829-a62bb24f7f13" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-2 px-4 border-spacing-1 border-[#f46c74]'>Contact</p>
                    <p className='pt-10'>Submit on the form below or contact me on dispojobbsy@gmail.com</p>
                </div>
                <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
                <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
                <button className='border-2 border-black hover:bg-[#f46c74] px-4 py-2 my-8 flex mx-auto items-center'>
                Send 
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact