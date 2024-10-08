import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const {doctors} = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()
  const FILTER_TABLE = [
    {filter:'General physician'},
    {filter:'Gynecologist'},
    {filter:'Dermatologist'},
    {filter:'Pediatricians'},
    {filter:'Neurologist'},
    {filter:'Gastroenterologist'},
  ]

  const applyFilter = ()=>{
    if (speciality) {
      setFilterDoc(doctors.filter(doctor => doctor.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  const filterOnClick = (filter) => {
    speciality === filter ? navigate('/doctors') : navigate(`/doctors/${filter}`)
  }

  useEffect(() => {
    applyFilter()
  }, [doctors,speciality])
  
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-row sm:flex-col gap-4 text-sm text-gray-600'>
          {/* menu */}
          {
            FILTER_TABLE.map((item,index)=>(
              <p onClick={()=>filterOnClick(item.filter)} key={index} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === item.filter ? "bg-indigo-50 text-black":""} `}>{item.filter}</p>
            ))
          }
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {/* doctors */}
          {
            filterDoc.map((item,index)=>(
              <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
                  onClick={()=>navigate(`/appointment/${item._id}`)} 
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
      </div>
      </div>
      
  )
}

export default Doctors