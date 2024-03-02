import React from "react";
import statimg from "../pageimg/image (23).png";

export default function Stats() {
  return (
    <main className=" overflow-hidden h-fit px-10">
            {/* Title */}
        <h1 className="p-8 text-4xl text-center font-Poppins">What we done ?</h1>
      <div className=" flex flex-col py-4 space-x-12 lg:flex-row lg:px-10">
        {/* Hero image */}
        <div className="flex items-start px-10 ">
          <img src={statimg} className="w-96 pt-40 " alt="img" />
        </div>
        {/*  content */}
        <div className=" items-start w-fit flex flex-rows lg:flex-col pt-10">
          <div className=" flex-row md:grid space-y-8 p-10 w-full md:grid-cols-2 md:grid-rows-3 gap-x-10 gap-y-8">
            <div/>
            <div className=" col-start-1 row-start-2 px-3 py-4  border-2 h-32 rounded-md border-slate-900">
              <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="col-start-1 row-start-3 px-3 py-4 border-2 h-32 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="col-start-2 row-start-1 px-3 py-4 border-2 h-32 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="col-start-2 row-start-2 px-3 py-4 border-2 h-32 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="row-start-3 px-3 py-4 border-2 rounded-md h-32 border-slate-900">
            <p className="py-2 font-Poppins text-heading ">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
