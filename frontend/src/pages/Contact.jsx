import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      {/* title */}
      <div className='text-center text-2xl my-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700'>US</span></p>
      </div>

      {/* contact */}
      <div className='flex my-10 flex-col md:flex-row gap-12'>
        <img src={assets.contact_image} alt="about" className='w-full md:max-w-[360px] h-auto block object-contain' />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-500  items-start'>
          <b className='text-lg text-gray-600'>OUR OFFICE</b>
          <p>54709 Willms Station<br />Suite 350, Washington, USA</p>
          <p>Tel: (415) 555‑0132<br />Email: greatstackdev@gmail.com</p>
          <b className='text-lg text-gray-600'>CAREERS AT PRESCRIPTO</b>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact