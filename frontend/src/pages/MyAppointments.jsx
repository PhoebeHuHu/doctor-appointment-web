import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {
  const {doctors} = useContext(AppContext)

  const styles = {
    wrapper:'grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b',
    image:'w-32 bg-indigo-50',
    info_wrapper:'flex-grow text-sm test-zinc-600 my-auto',
    btn:'text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:text-white transition-all duration-300'
  }
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {doctors.slice(0,2).map((item,index)=>(
          <div key={index} className={styles.wrapper}>
            <div>
              <img className={styles.image} src={item.image}/>
            </div>
            <div className={styles.info_wrapper}>
              <p className='font-semibold text-neutral-800'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date&Time: </span>25,July,2024 | 8:30 PM</p>
            </div>
            {/* responsive div */}
            <div className='md:hidden'></div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className={`${styles.btn} hover:bg-primary`}>Pay Here</button>
              <button className={`${styles.btn} hover:bg-red-400`}>Cancel Appointment</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments