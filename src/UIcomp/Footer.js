import React from 'react'
import lift from '../Pagecompos/pageimg/LIFT.png'


const Footer = () => {
  return (
    <div className='flex flex-col'>
<div className=' h-[400px] w-screen bgcolor'>
  <div className='h-[300px] w-[600px] border-2 border-black ml-[340px] rounded-2xl mt-12'>
    <h1 className='font-bold font-sans text-2xl pl-24 pt-20 '>Having  a Idea in mind  book now  !</h1>
    <button className='w-[140px] h-10 text-xl bg-blue-950 rounded-xl mt-20 ml-56 text-white '>CLICK ME</button>

  </div>

</div>
    <div className=' h-[300px] w-screen text-white font-sans bg-slate-900'>
<div className='flex h-[220px] w-screen  pl-20 pt-6 gap-52 border-b-2 border-white '>
<div className='space-y-10 h-fit'>
<img src={lift} alt='liftlogo' className='w-[80px]'/>    
    <p>+1(7635) 547-12-97</p>
    <p>support@lift.agency</p>
    </div>

    <div className='space-y-10 h-fit'>
    <h2>Quick links</h2>
    <p>Product</p>
    <p>Information</p>
    </div>

    <div className='space-y-10 h-fit'>
    <p>Company</p>
    <p>Lift Media</p>
    </div>

    <div className='space-y-10 h-fit'>
    <p>Subscribe</p>
    <div className='flex border-2 border-blue-600'>
    <input className='bg-white text-black pl-2 gap-10  '/>
    <button className='bg-blue-600 w-12 h-8 '></button>
    </div>
    </div>
    </div>
    </div></div>
  )
}

export default Footer