import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import CustomDatePicker from '../components/CustomDatePicker'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const {doctorId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const [doctorInfo, setDoctorInfo] = useState(null)

  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDoctorInfo = async ()=>{
    const doctorInfo = doctors.find(doctor => doctor._id === doctorId)
    setDoctorInfo(doctorInfo)
  }

  const getAvailableSlot = async ()=>{
    setDocSlots([])//清空可用时间段

    // get current date获取当前日期
    // let today = new Date() 会创建一个代表你当前系统时间的 Date 对象。
    // 可以通过不同的 Date 对象方法来获取这些信息，比如：
    // today.getFullYear() 返回年份（例如：2024）
    // today.getMonth() 返回月份（0表示1月，9表示10月）
    // today.getDate() 返回日期（30）
    // today.getHours() 返回小时（15）
    // today.getMinutes() 返回分钟（45）
    // today.getSeconds() 返回秒数（12）
    let today = new Date()

    //循环处理接下来的7天
    for (let index = 0; index < 7; index++) {
      //get date with index
      let currentDate = new Date(today) //创建一个与 today 相同的 Date 对象的副本。
      currentDate.setDate(today.getDate()+index)
      
      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+index)
      endTime.setHours(21,0,0,0)

      //setting hours
      if (today.getDate()===currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours()>9?currentDate.getHours()+1:9)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:true})
        //add slot to array
        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime
        })

        //increment current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      //更新 docSlots 的状态，将 timeSlots 添加到现有的 docSlots 列表中
      setDocSlots(prev => ([...prev,timeSlots]))
    }
  }

  useEffect(()=>{
    fetchDoctorInfo()
  },[doctors,doctorId])

  useEffect(()=>{
    getAvailableSlot()
  },[doctorInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return doctorInfo && (
    <div className=''>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={doctorInfo.image} alt="" />
        </div>

        {/* Doc info */}
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
            <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{doctorInfo.fees}</span></p>
          </div>
          
        </div>

        
      </div>

      {/* DATE PICKER/Booking slots */}
      <div className='mt-8 font-medium text-gray-700'>
        <h1 className='mt-4 text-gray-500 font-medium text-2xl mb-2'>Booking slots</h1>

        {/* Date slot */}
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            // map 遍历 docSlots，它包含未来7天的数据。在每次 map 调用中，item[0] 代表那一天的第一个时间段，因此 item[0].datetime.getDay() 会返回那一天的星期几，item[0].datetime.getDate() 会返回那一天的日期。
            docSlots.length && docSlots.map((item,index)=>(
              <div 
                key={index} 
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index? 'bg-primary text-white' : 'border border-gray-200'}`}
                onClick={()=>setSlotIndex(index)}
              >
                {/* daysOfWeek[item[0].datetime.getDay()] 能正确显示是因为 getDay() 方法返回的数字与 daysOfWeek 数组的索引一一对应。getDay() 是 JavaScript 的 Date 对象的一个方法，它返回表示星期几的数字，范围是从 0(sunday) 到 6(saturday) */}
                <p>{item[0]&&daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0]&&item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        {/* Time slot */}
        <div className='flex gap-3 items-center overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item, index)=>(
            <div key={index} 
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' :"border border-gray-200"}`}
              onClick={()=>setSlotTime(item.time)}
            >
              {item.time.toLowerCase()}
            </div>
          ))}
        </div>

        <button className='my-6 text-sm font-light flex-shrink-0 px-14 py-3 rounded-full cursor-pointer bg-primary text-white'>Book an appointment</button>
      </div>
      {/* Related Doctors */}
      <RelatedDoctors doctorId = {doctorId} speciality = {doctorInfo.speciality}/>
    </div>
  )
}

export default Appointment