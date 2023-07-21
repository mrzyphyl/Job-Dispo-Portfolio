import React from 'react'
import HTML from '../img/assets/html.png'
import Angular from '../img/assets/angular.png'
import Azure from '../img/assets/azure.png'
import CS from '../img/assets/c#.png'
import CSS from '../img/assets/css.png'
import Github from '../img/assets/github.png'
import Java from '../img/assets/java.png'
import Javascript from '../img/assets/javascript.png'
import Mongo from '../img/assets/mongo.png'
import MSSQL from '../img/assets/mssql.png'
import Node from '../img/assets/node.png'
import ReactImg from '../img/assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#C0C0C0]'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div> 
          <p className='text-4xl font-bold inline border-2 px-4 border-spacing-1 border-[#f46c74]'>Skills</p>
          <p className='py-4'>These are my current technologies that I've done before.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML Icon"/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Angular} alt="HTML Icon"/>
            <p className='my-4'>Angular</p>
          </div>
          <div className='pt-6 w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-25 mx-auto' src={Azure} alt="HTML Icon"/>
            <p className='my-4'>Azure</p>
          </div>
          <div className=' w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CS} alt="C# Icon"/>
            <p className='my-4'>C#</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML Icon"/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="HTML Icon"/>
            <p className='my-4'>Github</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="HTML Icon"/>
            <p className='my-4'>Java</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="HTML Icon"/>
            <p className='my-4'>Javascript</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="HTML Icon"/>
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MSSQL} alt="HTML Icon"/>
            <p className='my-4'>MSSQL</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="HTML Icon"/>
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon"/>
            <p className='my-4'>ReactJS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills