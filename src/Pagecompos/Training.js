import React from 'react'
import dogo from '../Pagecompos/pageimg/dogo.png'
export default function Training() {
  return (
    <div className=' h-[1100px] w-screen bgcolor font-sans'>
      <h1 className='font-bold text-3xl pt-10 pl-20'>Testimonals</h1>
      <div className='grid grid-cols-2 space-y-14 mt-20'>

<div>
  <img src={dogo} alt='dogo' className='h-4 w-4'/>
      <h1 className='statboxmin ml-6'>
          This part suggests that truth exists and is attainable. It implies that there are objective facts.
          </h1>
</div>

  <div> 
    <img src={dogo} alt='dogo' className='h-4 w-4'/>   
      <h1 className='statboxmin ml-6'> 
       This part suggests that truth exists and is attainable. It implies that there are objective facts.
       </h1>
  </div>

    <div className='ml-[350px]'>  
      <img src={dogo} alt='dogo' className='h-4 w-4  '/>
      <h1 className='statboxmin '> 
       This part suggests that truth exists and is attainable. It implies that there are objective facts.
       </h1>
    </div>

    <div className='ml-[350px]'> 
      <img src={dogo} alt='dogo' className='h-4 w-4  '/> 
      <h1 className='statboxmin '> 
       This part suggests that truth exists and is attainable. It implies that there are objective facts.
       </h1>
    </div>
    
    </div>
    </div>
  )
}
