import React from 'react'
import HTML from '../img/assets/html.png'
import Angular from '../img/assets/angular.png'
import Azure from '../img/assets/azure.png'
import CS from '../img/assets/csharp.png'
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
    <div name='skills' className='bg-[#C0C0C0] py-20 w-full'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full py-20'>
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
            <img className='w-20 mx-auto' src={Angular} alt="Angular Icon"/>
            <p className='my-4'>Angular</p>
          </div>
          <div className='pt-6 w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-25 mx-3' src={Azure} alt="Azure Icon"/>
            <p className='my-4 pt-7'>Azure</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CS} alt="C# Icon"/>
            <p className='my-4'>C#</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS Icon"/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="Github Icon"/>
            <p className='my-4'>Github</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='mx-auto' src={Java} alt="Java Icon" style={{width: '60px'}}/>
            <p className='my-4'>Java</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="Javascript Icon"/>
            <p className='my-4'>Javascript</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="MongoDB Icon"/>
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='first-letter: mx-auto' src={MSSQL} alt="MSSQL Icon" style={{width: '103px'}}/>
            <p className='my-4'>MSSQL</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="NodeJS Icon"/>
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='w-40 shadow-l shadow-[#212122] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="ReactJS Icon"/>
            <p className='my-4'>ReactJS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills