import React from 'react'

import download from'../pageimg/download.jpeg'
import download_2 from'../pageimg/download_2.jpeg'
const Ipss = () => {
  return (
    <div className='w-screen pl-64 space-y-40 font-sans font-bold h-fit bgcolor '>
    <div>
    <h1 className='pt-40 text-5xl place-items-center font-bold'>IPSS Program</h1>
    <h2 className='pt-20 pl-10 pr-10 text-3xl  text-gray-600 '>The IPSS program, short for Innovative Project Support System, is a strategic initiative designed to foster innovation and provide comprehensive support for emerging projects and ideas </h2>
    
    </div>
    <div className='flex w-[800px]'>
    {/* <img src={ideaImg} className='h-80 w-80 ' alt='img'/> */}
      <div>
      <h1 className='pt-20 pl-10 pr-10 text-3xl '>What we do </h1>
      <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"We actively engage in identifying promising projects, offering guidance, resources, and mentorship, with a focus on nurturing their growth and ensuring their successful development into impactful solutions."</p>
    </div></div>

    <div className='flex w-[800px] flex-row-reverse'>
    {/* <img src={fundImage} className='h-80 w-80 ' alt='img'/> */}
      <div>
      <h1 className='pt-20 pl-10 pr-10 text-3xl '>How we do</h1>
      <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"Through a collaborative approach, we leverage a network of experienced professionals and cutting-edge resources to provide hands-on support, facilitating every stage of project development from ideation to implementation."</p>
    </div></div>

    <div className='flex w-[800px]'>
      {/* <img src={train} className='h-80 w-80 ' alt='img'/> */}
      <div>
      <h1 className='pt-20 pl-10 pr-10 text-3xl '>What is use it</h1>
      <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"The IPSS program serves as a catalyst for innovation, empowering individuals and teams to transform their ideas into tangible, high-impact projects that contribute positively to various industries and societal challenges."</p>
    </div></div>

    <div className='flex w-[800px] flex-row-reverse pb-20'>
      {/* <img src={supp} className='h-80 w-80 ' alt='img'/> */}
      <div>
      <h1 className='pt-20 pl-10 pr-10 text-3xl '>Where can we implement this</h1>
      <p className='pt-10 pl-10 pr-10 text-xl text-gray-600 '>"The IPSS program is versatile and can be implemented across diverse domains such as technology, healthcare, education, and more, creating a dynamic platform for innovation and fostering a culture of continuous improvement."</p>
    </div>
    </div>
    <h1 className="mt-2 text-2xl font-semibold font-Poppins md:text-3xl"> previous projects</h1>
    <div className='md flex'>
    <img src={download} className='h-80 w-80 ' alt='img'/>
    <img src={download_2} className='h-80 w-80 ' alt='img'/>
    <img src={download} className='h-80 w-80 ' alt='img'/>
    </div>
    <section className="bgcolor">
            <div className="container px-6 py-20 mx-auto">
                <div>

                    <h1 className="mt-2 text-2xl font-semibold font-Poppins md:text-3xl"> Book Now</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Email */}
                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                {/* Email SVG */}
                            </span>

                            {/* <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2> */}
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                             {/* <img src={ideaImg} className='h-80 w-80 ' alt='img'/> */}
                        </div>

                        {/* Live chat */}
                        
                    </div>

                    

                    {/* Form */}
                    <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                        <form>
                            {/* First and Last Name */}
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 ">First Name</label>
                                    <input type="text" placeholder="John" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bgcolorborder border-gray-200 rounded-lg dark:placeholder-gray-100   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 ">Last Name</label>
                                    <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bgcolorborder border-gray-200 rounded-lg dark:placeholder-gray-100   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bgcolorborder border-gray-200 rounded-lg dark:placeholder-gray-100   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            {/* Message */}
                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bgcolorborder border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-100   focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>

                            {/* Send Button */}
                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  </div>
  )
}

export default Ipss