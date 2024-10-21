import React, { useState } from 'react'
import {assets} from '../assets/assets'
const MyProfile = () => {
  const[userData,setUserData] = useState({
    name:'Edward Vincent',
    image:assets.profile_pic,
    email:'email@gmail.com',
    phone:'+1 123 456',
    address:{
      line_1:'31 Street',
      line_2:'City, City'
    },
    gender:'Male',
    dob:'2000-01-20'
  })

  const [isEdit,setIsEdit] = useState(false)
  const styles = {
    container:'max-w-lg flex flex-col gap-2 text-sm',
    name:'font-medium text-3xl mt-4',
    profile_pic:'w-36 rounded',
    hr:'bg-zinc-400 h-[1px] border-none',
    input:'bg-gray-50 max-w-60',
    info_title:'text-neutral-500 underline mt-3',
    info_label:'font-medium',
    info_important:'text-blue-400',
    info_normal:'text-gray-500',
    info_wrapper:'grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700',
    btn:'px-8 py-2 rounded-full border-primary border hover:bg-primary hover:text-white transition-all'
  }

  return (
    <div className={styles.container}>
      <img className={styles.profile_pic} src={userData.image} alt="user profile image" />
      {
        isEdit
        ?<input className={`${styles.input} ${styles.name}`} type="text" value={userData.name} onChange={e=>setUserData(prev => ({...prev,name:e.target.value}))}/>
        :<p className={`${styles.name} text-neutral-800`}>{userData.name}</p>
      }
      <hr className={styles.hr}/>

      <p className={styles.info_title}>CONTACT INFORMATION</p>
      <div className={styles.info_wrapper}>
        <p className='font-medium'>Email:</p>
        <p className={styles.info_important}>{userData.email}</p>
      
        <p className={styles.info_label}>Phone:</p>
        {
          isEdit
          ?<input className={styles.input} type="text" value={userData.phone} onChange={e=>setUserData(prev => ({...prev,phone:e.target.value}))} />
          :<p className={styles.info_important}>{userData.phone}</p>
        }
      
        <p className={styles.info_label}>Address:</p>
        {
          isEdit
          ?<p>
            <input className={styles.input} type='text' value={userData.address.line_1} onChange={e=>setUserData(prev=>({...prev,address:{...prev.address,line_1:e.target.value}}))}/>
            <br />
            <input className={styles.input} type="text" value={userData.address.line_2} onChange={e=>setUserData(prev=>({...prev,address:{...prev.address,line_2:e.target.value}}))} />
          </p>
          :<p className={styles.info_normal}>
            {userData.address.line_1}
            <br/>
            {userData.address.line_2}
          </p>
        }
      </div>
      <p className={styles.info_title}>BASIC INFORMATION</p>
      <div className={styles.info_wrapper}>
        <p className={styles.info_label}>Gender:</p>
        {
          isEdit
          ?<select className={styles.input} onChange={e=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          :<p className={styles.info_normal}>{userData.gender}</p>
        }
        <p className={styles.info_label}>Birthday:</p>
        {
          isEdit
          ?<input className={styles.input} type="date" onChange={e=>setUserData(prev=>({...prev,dob:e.target.value}))} value={userData.dob} />
          :<p className={styles.info_normal}>{userData.dob}</p>
        }
      </div>
      <div className='mt-10'>
        {
          isEdit
          ?<button onClick={()=>setIsEdit(false)} className={styles.btn}>Save Changes</button>
          :<button onClick={()=>setIsEdit(true)} className={styles.btn}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile