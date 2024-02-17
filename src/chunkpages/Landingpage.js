import React from "react";
import mmImage from "../pageimg/mm.png";

export default function Landingpage() {
  return (
    <div className="flex justify-around h-screen ">
      {/*  content */}
      <div className="flex items-center w-fit">
        <div>
          <h1 className="text-4xl font-bold text-heading font-Poppins">
            Get Your Ideas Staged!
          </h1>
          <h2 className="my-5 font-semibold text-subheading w-96 font-Inter">
            Transforming Ideas Into Impact and Supercharge Your Startup Journey
            With Our Accelerator Program. Join Us and Propel Your Vision To New
            Heights !
          </h2>
          <button className="h-10 px-5 my-4 text-white w-fit bg-blue-950 rounded-xl font-Poppins">
            Launch Test!
          </button>
        </div>
      </div>
      {/* Hero image */}
      <div className="flex items-center">
        <img src={mmImage} className="w-auto h-auto" alt="img" />
      </div>
    </div>
  );
}


