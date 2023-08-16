import React from 'react'
import UPLogo from '../img/logo/Upang Logo no bg.png'

function Footer() {
  return (
    <div className='w-full h-[80px] flex flex-row justify-center items-center px-4 bg-gradient-to-b from-[#C0C0C0] to-[#9c9c9c] text-black gap-2'>
        <div>
            <img src={UPLogo} alt='Upang Logo' style={{width: '80px'}}/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p>Phinma University of Pangasinan</p>
            <p className='text-sm'>College of Information Technology</p>
        </div>
    </div>
  )
}

export default Footer