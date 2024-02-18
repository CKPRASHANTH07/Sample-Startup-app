import React, { useState } from "react";
import logo from "../pageimg/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [ServiceDropdown, setServiceDropdown] = useState(false)
  const [EventDropdown, setEventDropdown] = useState(false)
  return (
    <div className=" fixed z-100 flex items-center justify-around w-screen">
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className="h-24" />
      </div>
      {/* buttons */}
      <div className="flex p-2 space-x-16 font-Inter font-semibold text-[#063848]">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/Services" className="relative" onClick={()=>setServiceDropdown(false)} onMouseEnter={()=>setServiceDropdown(true)} onMouseLeave={()=>setServiceDropdown(false)}>
          <button>Services</button>
          {ServiceDropdown &&
          <div className="absolute text-sm bg-white p-2 w-max shadow-md rounded-md">
            <p className="p-2"><Link className="hover:underline" onClick={()=>setServiceDropdown(false)} to='/appdevelopment'>App Development</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setServiceDropdown(false)} to='/webdevelopment'>Web Development</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setServiceDropdown(false)} to='/graphicdesigning'>Graphic Designing</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setServiceDropdown(false)} to='/digitalmarketing'>Digital Marketing</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setServiceDropdown(false)} to='/training'>Training program</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setServiceDropdown(false)} to='/internshipprogram'>Internship program</Link></p>
        </div>}
        </Link>
        <Link to="/Ipss">
          <button>Ipss Request</button>
        </Link>
        <Link to='/AILaunchPad'>
          <button>Al Launchpad </button>
        </Link>
        <Link to='/StartupLaunchPad'>
          <button>Start Up Launchpad </button>
        </Link> 
        <Link to='/Eventsprogram' className="relative" onClick={()=>setEventDropdown(false)} onMouseEnter={()=>setEventDropdown(true)} onMouseLeave={()=>setEventDropdown(false)}>
          <button>Events program </button>
          {EventDropdown &&
            <div className="absolute text-sm bg-white p-2 w-max shadow-md rounded-md">
            <p className="p-2"><Link className="hover:underline" onClick={()=>setEventDropdown(false)} to='/eventsandcompetition'>Events & competition</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setEventDropdown(false)} to='/pastprogramlog'>Past program log..</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setEventDropdown(false)} to='/hosteventprogram '>Host Event Program </Link></p>
        </div>
          }
        </Link>
        <Link to="/Contactus">
          <button>Contact us</button>
        </Link>
        <Link to="/Aboutus">
          <button>Aboutus</button>
        </Link>
      </div>
    </div>
  );
}
