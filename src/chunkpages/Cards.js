import React from 'react';

import Network from '../pageimg/Network.svg'
import Coder from '../pageimg/Coder.svg'
import Grow from '../pageimg/grow.png'


export default function Cards() {
  return (
    <div className='flex flex-col space-y-8 justify-between md:w-full w-96 max-w-[1200px] md:pr-20 md:mx-20 my-16'>
      <h1 className=" py-10 text-3xl text-gray-800 font-Poppins xl:block pl-20 text-center">
        Some of our services
      </h1>

      <a
        href=" "
        className="flex flex-col items-center border border-gray-200 rounded-lg shadow backdrop-blur-sm bg-white/30 md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          className="object-fit w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={Network}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal pr-10">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-pretty">
            Here are the biggest enterprise technology acquisitions of 2021 so far,
            in reverse chronological order.
          </p>
        </div>
      </a>

      <div className='flex justify-end'>
        <a
          href=" "
          className="flex flex-col items-center border border-gray-200 rounded-lg shadow backdrop-blur-sm bg-white/30 md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            className="object-fit w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={Coder}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far,
              in reverse chronological order.
            </p>
          </div>
        </a>
      </div>

      <a
        href=" "
        className="flex flex-col items-center border border-gray-200 rounded-lg shadow backdrop-blur-sm bg-white/30 md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          className="object-fit w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={Grow}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal pr-10">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-pretty">
            Here are the biggest enterprise technology acquisitions of 2021 so far,
            in reverse chronological order.
          </p>
        </div>
      </a>


    </div>
  );
}
