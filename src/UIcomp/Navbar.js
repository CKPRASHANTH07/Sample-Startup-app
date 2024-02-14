import React from 'react'
import logo from '../Pagecompos/pageimg/logo.png'
const Navbar = () => {
  return (
    
    <div className='flex fixed w-screen h-[68px] text-2xl bg-gray-100 rounded-2xl font-sans text-blue-800 items-center z-10 '>
<img src={logo} alt='logo' className='text-4xl text-black font-bold pl-4 w-[200px]'/>
<div className='ml-10 rounded-xl space-x-10 space-y-[6px] pl-10 h-[50px] w-[1000px] items-center justify-center border border-black'><button>Home</button>
<button>Services</button>
<button>Training</button>
<button>Ipss Request</button>
<button>Programs</button>
<button>Contact us</button>
<button>Aboutus</button>
    </div></div>
  )
}

export default Navbar