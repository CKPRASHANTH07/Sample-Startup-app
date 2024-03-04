import React from 'react'
import { Link } from 'react-router-dom'
import Slider2 from '../chunkpages/Slider2'
function Internshipprogram() {
 


  return (
<section className="grid gap-4 py-32 bgcolor place-items-center">
<h1 className="grid my-4 text-6xl font-bold text-blue-900 place-items-center ">Internship Program</h1>
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
           
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg :text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-blue-900 :text-white">Training Internship</h2>
                    <p className="mb-8 font-semibold lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                    
                    <Slider2/>
                    <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                    <Link to='/form'>
                    <button  className='my-8'>
                <span  className="relative inline-block px-4 py-2 font-medium group">
                 <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-900 group-hover:bg-blue-900"></span>
                <span className="relative text-blue-900 group-hover:text-white">Apply Now</span>
                </span>
                     </button>
                   </Link>
                </div>
               
                     
                
                <img className="w-full mb-4 rounded-lg  lg:mb-0 lg:flex" src="images/feature-1.png" alt=''/>
            </div>
           
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                
                <div className="text-gray-500 order-last sm:text-lg :text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-blue-900 :text-white">Project Internship</h2>
                    <p className="mb-8 font-semibold lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                    
                    <Slider2/>
                    <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                    <Link to='/form'>
                    <button  className='my-8'>
                <span  className="relative inline-block px-4 py-2 font-medium group">
                 <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-900 group-hover:bg-blue-900"></span>
                <span className="relative text-blue-900 group-hover:text-white">Apply Now</span>
                </span>
                     </button>
                   </Link>
                </div>
             
                <img className="w-full mb-4 rounded-lg   lg:mb-0 lg:flex" src="images/feature-2.png" alt="feature 2"/>
            </div>
        </div>
      </section>
  )
}

export default Internshipprogram