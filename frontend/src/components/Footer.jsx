import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='w-40 mb-5' src={assets.logo7} alt="" />
          <p className='w-full leading-6 text-gray-600 md:w-2/3'>BookMyDoc is your trusted platform for seamless doctor appointments and healthcare management. Since its inception, it has been designed to simplify the booking process, ensuring quick access to medical professionals. With a user-friendly interface and reliable scheduling, BookMyDoc helps you manage your healthcare effortlessly. Whether booking a consultation or tracking appointments, we make healthcare accessible at your fingertips.</p>
        </div>

        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+94-112-456-7890</li>
            <li>bookmydoc@info.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ BookMyDoc.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
