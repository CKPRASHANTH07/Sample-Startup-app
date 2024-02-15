import React from "react";
import logo from "../Pagecompos/pageimg/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed z-10 flex items-center justify-around w-screen">
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className="h-24" />
      </div>
      {/* buttons */}
      <div className="flex p-2 space-x-16 font-Poppins text-[#063848]">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Services</button>
        </Link>
        <Link to="/">
          <button>Training</button>
        </Link>
        <Link to="/">
          <button>Ipss Request</button>
        </Link>
        <Link to="/">
          <button>Programs</button>
        </Link>
        <Link to="/">
          <button>Contact us</button>
        </Link>
        <Link>
          <button>Aboutus</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
