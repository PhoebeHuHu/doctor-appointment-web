import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({doctorId, speciality}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
    const [relatedDoc, setRelatedDoc] = useState([])

    useEffect(()=>{
        if (doctors.length>0 && speciality) {
            const doctorsData = doctors.filter((doctor) => doctor.speciality===speciality && doctor._id !== doctorId)
            setRelatedDoc(doctorsData)
        }
    },[doctors,speciality,doctorId])
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                relatedDoc.slice(0,5).map((item,index)=>(
                    <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
                        onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} 
                        key={index}
                    >
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='bg-green-500 rounded-full w-2 h-2'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='px-24 py-3 bg-blue-50 text-gray-600 rounded-full mt-10'>more</button>
    </div>
  )
}

export default RelatedDoctors