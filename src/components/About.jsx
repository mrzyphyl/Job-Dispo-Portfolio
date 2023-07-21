import React from 'react'
import Profile from '../img/profile/profile.jpg'

const About = () => {
  return (
    <div name='about' className='w-full py-20 bg-[#C0C0C0] text-black pt-50'>
      <div className='flex flex-col justify-center items-center w-full py-20'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-2 px-4 border-spacing-1 border-[#f46c74]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='sm:text-right text-4xl font-bold mb-10'>
              Hi. I'm Job! Nice to meet you. Please take a look around
            </p>
            <p>I'm very passionate when it comes to developing software. I mainly specialize in web developing
              however, I'm very flexible and eager to learn and develop softwares outside my expertise.
            </p>
            <div className='max-w-[1000px] w-full pt-4 grid sm:grid-cols-2 gap-2 px-2'>
            <li className='flex '>
                Name:
              </li>
              <li className='flex font-bold px-2'>
                Job Gian C. Dispo
              </li>
              <li className='flex'>
                Student Number:
              </li>
              <li className='flex font-bold px-2'>
                03-1718-00526
              </li>
              <li className='flex'>
                Year/Section:
              </li>
              <li className='flex font-bold px-2'>
                BSITWEBDEV3-2
              </li>
            </div>
          </div>
          <div className='px-20 rounded-full py-10'>
            <img className='rounded-full' src={Profile} alt='Profile' style={{width: '270px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About