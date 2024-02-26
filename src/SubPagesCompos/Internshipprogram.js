import React from 'react'
import { Link } from 'react-router-dom'

function Internshipprogram() {
 


  return (
<section className="grid gap-4 py-32 bgcolor place-items-center">
<h1 className="grid my-4 text-6xl font-bold text-blue-900 place-items-center ">Internship Program</h1>
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
           
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg :text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-blue-900 :text-white">Training Internship</h2>
                    <p className="mb-8 font-semibold lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                    
                      <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 :border-gray-700">
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Continuous integration and deployment</span>
                        </li>
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Development workflow</span>
                        </li>
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Knowledge management</span>
                        </li>
                    </ul>
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
                    
                    <ul  className="pt-8 space-y-5 border-t border-gray-200 my-7 :border-gray-700">
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Dynamic reports and dashboards</span>
                        </li>
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Templates for everyone</span>
                        </li>
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Development workflow</span>
                        </li>
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Limitless business automation</span>
                        </li>
                        <li className="flex space-x-3">
                           
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 :text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 :text-white">Knowledge management</span>
                        </li>
                    </ul>
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