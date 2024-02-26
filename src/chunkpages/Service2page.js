import React from "react";
import { Link } from "react-router-dom";
export default function Service2()
{
    return(

<section  className="grid gap-4  -my-40  lg:my-40  bgcolor place-items-center">
    <div className="relative items-center  px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-6">
            <div className="p-6 w-90 col-span-2 transition-all duration-300 border-2 border-solid  border-gray-500 transform  shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl">
                <h1 className="mx-auto mb-8 text-2xl  text-blue-900  text-center font-semibold leading-none tracking-tighter lg:text-3xl">Graphic Designing</h1>
                <img className="object-contain object-center w-56 m-auto lg:h-48 md:h-36 rounded-xl" src= "images\graphic_design.png" alt="blog"/>

                
                    <p className="mx-auto text-base leading-relaxed  font-semibold text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing quis laboris nisi   </p>    
                    <Link  to='/graphicdesigning'>             
                  <div className="mt-16">
      <a href="/" className="relative inline-block text-sm group">
       <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
       <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
      <span className="relative">Learn more</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
           </a>
            
                     </div>
                     </Link>
               </div>
            <div className="p-6  col-span-2  transition-all duration-300 transform border-2 border-solid border-gray-500 shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl">

            <h1 className="mx-auto mb-8 text-2xl font-semibold text-center leading-none tracking-tighter text-blue-900 lg:text-3xl">Training Program</h1>
            <img className="object-contain object-center w-56 m-auto lg:h-48 md:h-36 rounded-xl" src= "images\Training.png" alt="blog"/>


               
                <p className="mx-auto text-base leading-relaxed font-semibold text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing quis laboris nisi  </p>      
                  <Link  to='/training'>  
                  <div className="mt-16">
      <a href="/" className="relative inline-block text-sm group">
       <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
       <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
      <span className="relative">Learn more</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
           </a>
            
                     </div>
                     </Link>
            </div>
            <div className="p-6   col-span-2 transition-all duration-300 transform border-2 border-solid border-gray-500 shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl">
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none text-center tracking-tighter text-blue-900 lg:text-3xl">Internship Program</h1>
            <img className="object-contain object-center w-44 m-auto lg:h-48 md:h-36 rounded-xl" src= "images\Intern.png" alt="blog"/>

              
                <p className="mx-auto my-4 text-base leading-relaxed font-semibold text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing quis nostrud nisi  </p> 
                  <Link  to='/internshipprogram'>          
                  <div className="mt-16">    
      <a href="/" className="relative inline-block text-sm group">
       <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
       <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
      <span className="relative">Learn more</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
           </a>
            
                     </div>
                     </Link>
            </div>          
        </div>


    </div>
    
</section>
    );
}