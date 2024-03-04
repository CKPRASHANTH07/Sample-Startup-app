import React, { useState, useEffect } from "react";
import logo from "../pageimg/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-10 flex items-center justify-around  ${isScrolled ? "backdrop-blur-md rounded-2xl bg-white/30" : ""}`}>
      {/* logo */}
      
        <img src={logo} alt="logo" className=" h-24 pr-20 pl-4 w-80" /> 
      
      {/* buttons */}
      <div className="hidden lg:flex p-2 space-x-8 font-Inter font-semibold text-[#063848] ">
        <Link to="/">
          <button>Home</button>
        </Link>
        <NavLinkWithDropdown
          to="/Services"
          label="Services"
          dropdownItems={[
            { label: "App Development", to: "/appdevelopment" },
            { label: "Web Development", to: "/webdevelopment" },
            { label: "Graphic Designing", to: "/graphicdesigning" },
            { label: "Digital Marketing", to: "/digitalmarketing" },
            { label: "Training Program", to: "/training" },
            { label: "Internship Program", to: "/internshipprogram" },
          ]}
          isDropdownOpen={serviceDropdown}
          setDropdownOpen={setServiceDropdown}
        />
        <Link to="/hosteventprogram">
          <button>Host Events</button>
        </Link>
        <NavLinkWithDropdown
          to="/Eventsprogram"
          label="Events program"
          dropdownItems={[
            { label: "Events & competition", to: "/eventsandcompetition" },
            { label: "Past program log", to: "/pastprogramlog" },
          ]}
          isDropdownOpen={eventDropdown}
          setDropdownOpen={setEventDropdown}
        />
        <Link to="/">
          <button>Musical hub</button>
        </Link>
        <Link to="/">
          <button> Startup Services</button>  
        </Link>
        <Link to="/Aboutus">
          <button>Aboutus</button>
        </Link>
        <Link to="/Contactus">
          <button>Contact us</button>
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden w-[260px] flex  justify-end items-center md:w-[700px] sm:w-[550px] pr-10  ">
        <button onClick={handleMobileMenuToggle} className=" text-xl right-0 mb-4 text-orange-600 hover:bg-red-600 hover:text-white font-bold border-4 border-blue-950 rounded-md ">MENU</button>
        {isMobileMenuOpen && (
          <div className="absolute right-0 w-fit bg-white shadow-md top-16 rounded-xl">
            <nav className="flex flex-col p-4 space-y-4 px-20">
              <Link to="/">Home</Link>
              <NavLinkWithDropdown 
  to="/Services"
  label="Services"
  dropdownItems={[
    { label: "App Development", to: "/appdevelopment" },
    { label: "Web Development", to: "/webdevelopment" },
    { label: "Graphic Designing", to: "/graphicdesigning" },
    { label: "Digital Marketing", to: "/digitalmarketing" },
    { label: "Training Program", to: "/training" },
    { label: "Internship Program", to: "/internshipprogram" },
  ]}
  isDropdownOpen={serviceDropdown}
  setDropdownOpen={setServiceDropdown}
/>

              <Link to="/hosteventprogram">Host Events</Link>
              <NavLinkWithDropdown
                to="/Eventsprogram"
                label="Events program"
                dropdownItems={[
                  { label: "Events & competition", to: "/eventsandcompetition" },
                  { label: "Past program log", to: "/pastprogramlog" },
                ]}
                isDropdownOpen={eventDropdown}
                setDropdownOpen={setEventDropdown}
              />
              <Link to="/">Musical hub</Link>
              <Link to="/"> Startup Services</Link>
              <Link to="/Aboutus">Aboutus</Link>
              <Link to="/Contactus">Contact us</Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

// Custom NavLink component for desktop dropdowns
function NavLinkWithDropdown({ to, label, dropdownItems, isDropdownOpen, setDropdownOpen }) {
  return (
    <Link
      to={to}
      className="relative"
      onClick={() => setDropdownOpen(false)}
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button>{label}</button>
      {isDropdownOpen && (
        <div className="absolute p-2 text-sm bg-white text-black z-20 rounded-md shadow-md w-max">
          {dropdownItems.map((item, index) => (
            <p key={index} className="p-2">
              <Link
                className="hover:underline"
                to={item.to}
                onClick={() => setDropdownOpen(false)}
              >
                {item.label}
              </Link>
            </p>
          ))}
        </div>
      )}
    </Link>
  );
}
