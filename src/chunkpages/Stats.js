import React from "react";
import statimg from "../pageimg/image (23).png";

export default function Stats() {
  return (
    <main className="h-screen p-10 bgcolor">
            {/* Title */}
      <div className="py-10">
        <h1 className="font-Poppins">What we done ?</h1>
      </div>
      <div className="flex px-10 space-x-24">
        {/* Hero image */}
        <div className="flex items-center">
          <img src={statimg} className="w-96 " alt="img" />
        </div>
        {/*  content */}
        <div className="flex items-center w-fit">
          <div className="grid grid-cols-2 grid-rows-5 gap-4">
            <div className="col-start-1 row-start-2 px-3 py-4">
              <p>Trainings are successfully conducted</p>
            </div>
            <div className="col-start-1 row-start-3">
              <p>Trainings are successfully conducted</p>
            </div>
            <div className="col-start-2 row-start-1">
              <p>Trainings are successfully conducted</p>
            </div>
            <div className="col-start-2 row-start-2">
              <p>Trainings are successfully conducted</p>
            </div>
            <div className="row-start-3">
              <p>Trainings are successfully conducted</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
