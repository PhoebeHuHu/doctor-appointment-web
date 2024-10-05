import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  const WHYCHOOSETBL = [
    {
      title:'EFFICIENCY',
      content:'Streamlined appointment scheduling that fits into your busy lifestyle.'
    },
    {
      title:'CONVENIENCE:',
      content:'Access to a network of trusted healthcare professionals in your area.'
    },
    {
      title:'PERSONALIZATION:',
      content:'Tailored recommendations and reminders to help you stay on top of your health.'
    },
  ]
  return (
    <div>
      {/* title */}
      <div className='text-center text-2xl my-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700'>US</span></p>
      </div>
      {/* about */}
      <div className='flex my-10 flex-col md:flex-row gap-12'>
        <img src={assets.about_image} alt="about" className='w-full md:max-w-[360px] h-auto block object-contain' />
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      {/* why choose */}
      <div className='text-xl my-4 text-gray-500'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        {WHYCHOOSETBL.map((item,index)=>(
          <div key={index} className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>{item.title}</b>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About