import React from "react";
import logo from "../Pagecompos/pageimg/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed z-10 flex items-center justify-around w-screen">
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className="h-24" />
      </div>
      {/* buttons */}
      <div className="flex p-2 space-x-16 font-Inter font-semibold text-[#063848]">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/Services">
          <button>Services</button>
        </Link>
        <Link to="/Training">
          <button>Training</button>
        </Link>
        <Link to="/Ipss">
          <button>Ipss Request</button>
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
