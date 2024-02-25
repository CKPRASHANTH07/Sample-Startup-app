import React from "react";
import statimg from "../pageimg/image (23).png";

export default function Stats() {
  return (
    <main className="p-10 overflow-hidden h-dvh ">
            {/* Title */}
        <h1 className="py-4 text-2xl text-center font-Poppins">What we done ?</h1>
      <div className="flex px-10 space-x-24">
        {/* Hero image */}
        <div className="flex items-start py-10">
          <img src={statimg} className="w-96 " alt="img" />
        </div>
        {/*  content */}
        <div className="flex items-center w-fit">
          <div className="grid grid-cols-2 grid-rows-5 gap-x-11 gap-y-9">
            <div className="col-start-1 row-start-2 px-3 py-4 border-2 rounded-md border-slate-900">
              <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="col-start-1 row-start-3 px-3 py-4 border-2 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="col-start-2 row-start-1 px-3 py-4 border-2 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="col-start-2 row-start-2 px-3 py-4 border-2 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
            <div className="row-start-3 px-3 py-4 border-2 rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading ">10x</p>
              <p className="font-semibold font-Inter text-subheading">Trainings are successfully conducted</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
