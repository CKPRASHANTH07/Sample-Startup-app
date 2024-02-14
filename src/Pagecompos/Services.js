import React from 'react'
import whatdo from './pageimg/whatdo.png'

export default function Services() {
  return (
    <div className='flex bgcolor w-screen h-screen'>
      <div className='pl-8 pt-20 w-fit'>
        <h1 className='text-bold text-4xl pb-10'>WHAT WE DONE</h1>
      <img src={whatdo} alt='whatdo' className='h-[400px] w-[400px]' />
      </div>
      <div className='flex flex-col mb-20 mt-20 mr-8' >
      
      <div className='statbox mt-16'>
      <h1 className='font-bold text-4xl pb-4'>10x</h1>  
        <h1>Trainings are successfully conducted</h1>  
      </div>
      
      <div className='statbox mt-16'>
      <h1 className='font-bold text-4xl pb-4'>10x</h1>  
      <h1>Trainings are successfully conducted</h1>  
      </div>
      
      <div>
      </div>

      </div>
      <div className='flex flex-col' >
      
      <div className='statbox '>
      <h1 className='font-bold text-4xl pb-4'>10x</h1>  
      <h1>Trainings are successfully conducted</h1>  
      </div>
      
      <div className='statbox'>
      <h1 className='font-bold text-4xl pb-4'>10x</h1> 
      <h1>Trainings are successfully conducted</h1>  
      </div>
      
      <div className='statbox'>
      <h1 className='font-bold text-4xl pb-4'>10x</h1> 
      <h1>Trainings are successfully conducted</h1>  
      </div>
      
     

      </div>
    </div>
  )
}
