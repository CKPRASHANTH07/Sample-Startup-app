import React from 'react'

import fundImage from './pageimg/fund.png'
import ideaImg from './pageimg/idea.png'
import supp from './pageimg/support.png'
import train from './pageimg/training.png'

export default function Aboutus() {
  return (
    <div className='w-screen h-fit bgcolor pl-64 space-y-40 font-sans font-bold '>
      <h1 className=' text-5xl pt-40'>MAJOR WORKS</h1>

      <div className='flex w-[800px]'>
      <img src={ideaImg} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className=' text-3xl pt-20 pl-10 pr-10'>IDEA PITCHING</h1>
        <p className='text-xl text-gray-600 pt-10 pr-10 pl-10 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

      <div className='flex w-[800px] flex-row-reverse'>
      <img src={fundImage} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className=' text-3xl pt-20 pl-10 pr-10'>FUNDING</h1>
        <p className='text-xl text-gray-600 pt-10 pr-10 pl-10 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

      <div className='flex w-[800px]'>
        <img src={train} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className=' text-3xl pt-20 pl-10 pr-10'>TRAINING</h1>
        <p className='text-xl text-gray-600 pt-10 pr-10 pl-10 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

      <div className='flex w-[800px] flex-row-reverse pb-20'>
        <img src={supp} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className=' text-3xl pt-20 pl-10 pr-10'>SUPPORT</h1>
        <p className='text-xl text-gray-600 pt-10 pr-10 pl-10 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

    </div>
  )
}
