import React, { useState,useEffect} from "react";
import logo from "../pageimg/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [ServiceDropdown, setServiceDropdown] = useState(false);
  const [EventDropdown, setEventDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-10 flex items-center justify-around w-screen ${isScrolled ? "backdrop-blur-md bg-white/30" : ""}`}>
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className="h-24" />
      </div>
      {/* buttons */}
      <div className="hidden md:flex p-2 space-x-16 font-Inter font-semibold text-[#063848]">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/Services" className="relative" onClick={()=>setServiceDropdown(false)} onMouseEnter={()=>setServiceDropdown(true)} onMouseLeave={()=>setServiceDropdown(false)}>
          <button>Services</button>
          {ServiceDropdown &&
          <div className="absolute p-2 text-sm bg-white rounded-md shadow-md w-max">
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
        <Link to='/Eventsprogram' className="relative" onClick={()=>setEventDropdown(false)} onMouseEnter={()=>setEventDropdown(true)} onMouseLeave={()=>setEventDropdown(false)}>
          <button>Events program </button>
          {EventDropdown &&
            <div className="absolute p-2 text-sm bg-white rounded-md shadow-md w-max">
            <p className="p-2"><Link className="hover:underline" onClick={()=>setEventDropdown(false)} to='/eventsandcompetition'>Events & competition</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setEventDropdown(false)} to='/pastprogramlog'>Past program log..</Link></p>
            <p className="p-2"><Link className="hover:underline" onClick={()=>setEventDropdown(false)} to='/hosteventprogram '>Host Event Program </Link></p>
        </div>
          }
        </Link>
        <Link to="/">
          <button>Musical hub</button>
        </Link>
        <Link to="/">
          <button>Altruisty launchpad</button>
        </Link>
        <Link to="/Aboutus">
          <button>Aboutus</button>
        </Link>
        <Link to="/Contactus">
          <button>Contact us</button>
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button onClick={handleMobileMenuToggle}>Menu</button>
        {isMobileMenuOpen && (
          <div className="absolute right-0 w-full bg-white shadow-md top-16">
            <nav className="flex flex-col p-4 space-y-2">
              <Link to="/">Home</Link>
              <Link to="/Services">Services</Link>
              <Link to="/Ipss">Ipss Request</Link>
              <Link to="/AILaunchPad">Al Launchpad</Link>
              <Link to="/StartupLaunchPad">Start Up Launchpad</Link>
              <Link to="/Eventsprogram">Events program</Link>
              <Link to="/Contactus">Contact us</Link>
              <Link to="/Aboutus">Aboutus</Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
