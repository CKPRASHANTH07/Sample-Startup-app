import React from 'react'
import img from '../pageimg/whatsapp.png'

export default function Whatsapp() {
  return (
    <div className='flex justify-center'>
      <div className="max-w-sm border border-gray-200 rounded-lg shadow w-fit">
  <div className="flex justify-end px-4 pt-4">
    <div className="flex flex-col items-center pb-10">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={img} alt="Bonnie" />
      <h5 className="mb-1 text-xl font-medium text-gray-900 ">Altruisty Community </h5>
      <div className="flex mt-4 md:mt-6">
        <a href=" " className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join group</a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
