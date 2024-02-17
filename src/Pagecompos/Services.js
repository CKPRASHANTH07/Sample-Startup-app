import React from 'react'


export default function Services() {
  return (
    // <a role="button" href="#" className="px-3 py-1 text-white rounded-md bg--gray-400 hover:bg-gray-400">learn more</a>
    <section className="grid items-center justify-center min-h-screen py-20 bgcolor place-items-center">
    <h1 className="grid mt-4 text-4xl font-bold text-blue-900 place-items-center ">Our Services</h1>
  <div className="grid grid-cols-2 gap-8 mx-auto max-w-max">
  
    <div className="grid p-2 transition-all duration-300 transform border-2 border-gray-400 border-solid shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl">
  
     
    <h2 className="mb-2 text-3xl font-bold text-blue-900 ">App Development</h2>
  
      <img className="object-cover h-40 rounded-xl justify-items-center" src= "images/app_dev.png" alt=""/>
  
      <div className="p-2">
      
       
      
        <p className="font-semibold text-gray-600 t">Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.</p>
      </div>
    
      <div className="m-2">
      <a href="dm" class="relative inline-block text-sm group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Learn more</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
      </div>
    </div>
   
     <div className="grid p-2 transition-all duration-300 transform border-2 border-gray-400 border-solid shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl">
  
         <h2 className="mb-2 text-3xl font-bold text-blue-900 ">Web Development</h2>
     
      <img className="object-cover h-40 rounded-xl" src="images/web_dev.png" alt=""/>
      <div className="p-2">
      
        
      
        <p className="text-base font-semibold text-gray-600">Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.</p>
      </div>
    
      <div className="m-2">
      <a href=" " class="relative inline-block text-sm group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Learn more</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
      </div>
    </div>
  
   
    <div className="grid p-2 transition-all duration-300 transform border-2 border-gray-400 border-solid shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl">
  
          <h2 className="mb-2 text-3xl font-bold text-blue-900 ">Graphic Designing</h2>
     
      <img className="object-cover h-32 rounded-xl" src="images/graphic_design.png" alt=""/>
      <div className="p-2">
      
      
      
        <p className="text-base font-semibold text-gray-600">Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.</p>
      </div>
    
      <div className="m-2">
      <a href=" " class="relative inline-block text-sm group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Learn more</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
      </div>
    </div>
   
    <div className="grid p-2 transition-all duration-300 transform border-2 border-gray-400 border-solid shadow-lg place-items-center rounded-xl hover:-translate-y-2 hover:shadow-2xl ">
  
       <h2 className="mb-2 text-3xl font-bold text-blue-900 ">Digital Marketing</h2>
  <div className='justify-center'>
      <img className="object-cover w-40 h-40 mx-8 rounded-xl" src="images/digi_market.png" alt=""/>
      </div>
      <div className="p-2">
      
        <p className="text-base font-semibold text-gray-600">Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.</p>
      </div>

      <div className="m-2">
      <button
    class="flex items-center gap-2 px-6 py-3 font-sans text-sm font-bold text-center text-blue-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
    type="button">
    Read More
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
    </svg>
  </button>
      </div>
    </div>
  </div>
  </section>
  )
}
