import React from 'react';
import mmImage from './pageimg/mm.png'; 
export default function Home() {
  return (
    <div className='flex  justify-center bgcolor  h-screen'>
      <div className='flex  space-x-44  '>
      <div className=' w-fit pt-40'>
        <h1 className='text-4xl font-sans font-bold pb-3'>GET YOUR IDEAS STAGED!</h1>
        <h2 className='mt-4 pb-10 w-[450px]'>Transforming Ideas Into Impact and Supercharge Your Startup Journey With Our Accelerator Program. Join Us and Propel Your Vision To New Heights !</h2>
        <button className='bg-blue-950 w-[170px] h-[35px] mt-4 rounded-xl text-white font-bold font-sans'>Launch Test!</button>
      </div>
      <img src={mmImage} className='h-[420px] w-[450px] pt-10 ' alt='img'/>
    </div></div>
  );
}
