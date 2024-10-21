import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const {doctors} = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const navigate = useNavigate()
  const FILTER_TABLE = [
    {filter:'General physician'},
    {filter:'Gynecologist'},
    {filter:'Dermatologist'},
    {filter:'Pediatricians'},
    {filter:'Neurologist'},
    {filter:'Gastroenterologist'},
  ]

  const styles ={
    content_wrapper:'flex flex-col sm:flex-row items-start gap-5 mt-5',
    filter_btn:'py-1 px-3 border border-primary rounded text-sm transition-all sm:hidden',
    filters_wrapper:'flex flex-col w-full sm:w-auto gap-2 sm:gap-4 text-sm text-gray-600',
    filter:'w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer',
    docters_wrapper:'w-full grid grid-cols-auto gap-4 gap-y-6',
    docter_container:'border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
  }
  
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
      <div className={styles.content_wrapper}>
        <button className={`${showFilters?'bg-primary text-white':''} ${styles.filter_btn}`} onClick={()=>setShowFilters(prev => !prev)}>Filters</button>
        <div className={`${showFilters?'':'hidden'} ${styles.filters_wrapper}`}>
          {/* menu */}
          {
            FILTER_TABLE.map((item,index)=>(
              <p onClick={()=>filterOnClick(item.filter)} key={index} className={`${speciality === item.filter ? "bg-indigo-50 text-black":""} ${styles.filter}`}>{item.filter}</p>
            ))
          }
        </div>
        <div className={styles.docters_wrapper}>
          {/* doctors */}
          {
            filterDoc.map((item,index)=>(
              <div className= {styles.docter_container}
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