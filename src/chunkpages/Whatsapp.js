import React from 'react';
import img from '../pageimg/whatsapp.svg';
import Get from '../pageimg/Gettogeth.jpg';

export default function Whatsapp() {
  return (
    <div className='flex justify-center'>
      <div className="w-full h-[450px] bg-cover bg-center border border-gray-200 rounded-lg shadow items-center justify-center"  style={{backgroundImage: `url(${Get})`}}>
        <div className="flex justify-center  rounded-2xl px-4 pt-4">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-4xl font-medium text-black pl-6 pt-8 pb-8">Getting Better Together </h5>
            <h1 className=' font-sans max-w-[600px] text-center text-orange-600'>Knowing what you need is a sign of strength.Share Your Experience and Join our Community with people with the same Goals!!!</h1>
            <img className="p-4 mt-10 h-20 w-20 mb-3 rounded-full shadow-lg " src={img} alt="Bonnie" />
            <div className="flex mt-4 md:mt-6">
              <a href=" " className="inline-flex items-center px-4 py-2 hover:text-orange-600 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black">Join group</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
