import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import CustomDatePicker from '../components/CustomDatePicker'

const Appointment = () => {
  const {doctorId} = useParams()
  const {doctors} = useContext(AppContext)

  const [doctorInfo, setDoctorInfo] = useState(null)

  const fetchDoctorInfo = async ()=>{
    const doctorInfo = doctors.find(doctor => doctor._id === doctorId)
    setDoctorInfo(doctorInfo)
    console.log(doctorInfo)
  }

  useEffect(()=>{
    fetchDoctorInfo()
  },[doctors,doctorId])


  return doctorInfo && (
    <div className=''>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={doctorInfo.image} alt="" />
        </div>

        {/* Doc info & Date Picker */}
        <div>
          {/* doctor infomation */}
          <div className='flex-1 border border-gray-400 rounded-lg px-8 py-7 bg-white mt-2 sm:mt-0'>
            <h1 className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{doctorInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></h1>
            <p className='flex items-center gap-2 text-sm mt-1 text-gray-600'>{doctorInfo.degree} - {doctorInfo.speciality}<span className='py-0.5 px-2 border text-xs rounded-full'>{doctorInfo.experience}</span></p>
            <div className=''>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                About
                <img src={assets.info_icon} alt="" />
              </p>
            </div>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{doctorInfo.about}</p>
            <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>${doctorInfo.fees}</span></p>
          </div>
          {/* DATE PICKER */}
          <div>
            <h1 className='mt-4 text-gray-500 font-medium text-2xl mb-2'>Booking slots</h1>
            <CustomDatePicker/>
          </div>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Appointment