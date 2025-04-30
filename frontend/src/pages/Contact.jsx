import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-lg font-semibold text-gray-600 '>OUR OFFICE</p>
          <p className='text-gray-500 '>113/D Highlevel Rd, <br /> Colombo 03, Sri Lanka</p>
          <p className='text-gray-500 '>Tel: +94-112-456-7890 <br /> Email: bookmydoc@info.com</p>
          <p className='text-lg font-semibold text-gray-600 '>CAREERS AT BookMyDoc</p>
          <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
