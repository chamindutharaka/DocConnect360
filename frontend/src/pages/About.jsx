import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='flex flex-col gap-12 my-10 md:flex-row'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4'>
        <p>Welcome to <b>BookMyDoc</b>, your trusted partner in simplifying healthcare access. We understand the challenges of scheduling doctor appointments and managing medical care, and we are committed to making the process seamless and stress-free.</p>
          <p>At BookMyDoc, we prioritize convenience and efficiency, ensuring that patients can easily find and book appointments with trusted healthcare professionals. Our platform is designed to enhance the patient experience by integrating the latest advancements in healthcare technology. Whether you’re scheduling a routine check-up or managing long-term care, BookMyDoc is here to support you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at BookMyDoc is to revolutionize healthcare accessibility by bridging the gap between patients and medical professionals. We strive to create a world where booking a doctor’s appointment is as simple as a few clicks, ensuring that everyone gets the care they need—when they need it.</p>
       </div>
      </div>

      <div className='my-4 text-xl'>
        <p>WHY  <span className='font-semibold text-gray-700'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col mb-20 md:flex-row'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
