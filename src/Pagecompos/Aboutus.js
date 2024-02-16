import React from 'react'

import fundImage from '../pageimg/fund.png'
import ideaImg from '../pageimg/idea.png'
import supp from '../pageimg/support.png'
import train from '../pageimg/training.png'

export default function Aboutus() {
  return (
    <div className='w-screen pl-64 space-y-40 font-sans font-bold h-fit bgcolor '>
      <h1 className='pt-40 text-5xl '>MAJOR WORKS</h1>

      <div className='flex w-[800px]'>
      <img src={ideaImg} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className='pt-20 pl-10 pr-10 text-3xl '>IDEA PITCHING</h1>
        <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

      <div className='flex w-[800px] flex-row-reverse'>
      <img src={fundImage} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className='pt-20 pl-10 pr-10 text-3xl '>FUNDING</h1>
        <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

      <div className='flex w-[800px]'>
        <img src={train} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className='pt-20 pl-10 pr-10 text-3xl '>TRAINING</h1>
        <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

      <div className='flex w-[800px] flex-row-reverse pb-20'>
        <img src={supp} className='h-80 w-80 ' alt='img'/>
        <div>
        <h1 className='pt-20 pl-10 pr-10 text-3xl '>SUPPORT</h1>
        <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"Pitch with Passion, Propel with Precision: Elevate Your Idea with Our Expert Guidance. Let's Turn Your Vision into Reality, Together!"</p>
      </div></div>

    </div>
  )
}
