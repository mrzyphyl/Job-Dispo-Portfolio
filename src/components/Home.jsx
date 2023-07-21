import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#C0C0C0]'>

        {/*Container*/}
        <div class='column' className='max-w-[1000px] ml-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi! my Name is</p>
            <h1 className='text-4xl font-bold'>Job Gian C. Dispo</h1>
            <h2 className='text-4xl font-bold'>I'm a Full Stack Developer.</h2>
            <p className='py-4 max-w-[700px]'>Hi! I'm currently enrolled on PHINMA Univeristy of Pangasinan and
                hopefully I'll be able to attain a Bachelor's Degree in order to
                get a job in the future.
            </p>
            <div>
                <button className='text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-[#f46c74]'>
                    <Link to="about" smooth={true} duration={500}>
                        View Profile
                    </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home