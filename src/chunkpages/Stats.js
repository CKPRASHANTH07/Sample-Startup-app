import React from "react";
import statimg from "../pageimg/image (23).png";

export default function Stats() {
  return (
    <main className=" h-fit md:flex-row w-96 md:w-full pt-32">
            {/* Title */}
        <h1 className="pl-4 text-4xl text-center font-Poppins">What we done ?</h1>
        <h2 className="pl-6 pt-4 lg:px-56 text-center text-blue-950 font-semibold">Introducing "Altruisty" - your compass to meaningful tech solutions! We're a startup dedicated to crafting innovative software solutions that make a difference. With Altruisty, your journey to impactful digital transformation begins. Join us as we navigate the tech landscape together, creating solutions that empower and inspire. Welcome to Altruisty - where purpose meets technology!</h2>
      <div className=" flex flex-col py-32 space-x-12 lg:flex-row lg:px-10">
        {/* Hero image */}
        <div className="flex items-start px-10 ">
          <img src={statimg} className="w-96 pt-40 " alt="img" />
        </div>
        {/*  content */}
        <div className=" items-start w-full p-10  flex flex-rows lg:flex-col overflow-hidden overflow-x-auto pt-10">
        <div className="flex gap-x-10">
      <div className="border-2 p-8 border-gray-300 rounded-2xl h-96 w-96">
        <h1 className="text-3xl pb-4 font-bold">Training</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi. Vivamus quis arcu id orci euismod lacinia. Sed scelerisque, felis in sodales molestie, enim elit condimentum nulla, nec faucibus ipsum ligula sit amet justo.</p>
      </div>
      <div className="border-2 p-8 border-gray-300 rounded-2xl h-96 w-96">
        <h1 className="text-3xl pb-4 font-bold">Internships</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi. Vivamus quis arcu id orci euismod lacinia. Sed scelerisque, felis in sodales molestie, enim elit condimentum nulla, nec faucibus ipsum ligula sit amet justo.</p>
      </div>
      <div className="border-2 p-8 border-gray-300 rounded-2xl h-96 w-96">
        <h1 className="text-3xl pb-4 font-bold">Teaching</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi. Vivamus quis arcu id orci euismod lacinia. Sed scelerisque, felis in sodales molestie, enim elit condimentum nulla, nec faucibus ipsum ligula sit amet justo.</p>
      </div>
      <div className="border-2 p-8 border-gray-300 rounded-2xl h-96 w-96">
        <h1 className="text-3xl pb-4 font-bold">Help startups</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi. Vivamus quis arcu id orci euismod lacinia. Sed scelerisque, felis in sodales molestie, enim elit condimentum nulla, nec faucibus ipsum ligula sit amet justo.</p>
      </div>
      <div className="border-2 p-8 border-gray-300 rounded-2xl h-96 w-96">
        <h1 className="text-3xl pb-4 font-bold">Best training</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi. Vivamus quis arcu id orci euismod lacinia. Sed scelerisque, felis in sodales molestie, enim elit condimentum nulla, nec faucibus ipsum ligula sit amet justo.</p>
      </div>
      
    </div>
          </div>
      </div>
    </main>
  );
}
