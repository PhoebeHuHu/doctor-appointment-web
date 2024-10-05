import React, { useState } from 'react'


const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  // styles
  const inputStyles = 'border border-x-zinc-300 rounded w-full p-2 mt-1'
  const buttonStyles = 'bg-primary text-white w-full py-2 rounded-md text-base'
  const linkStyles = 'text-primary underline cursor-pointer'
  
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-lg font-semibold'>{state === 'Sign Up'?'Create Account':'Login'}</p>
        <p>Please {state === 'Sign Up'?'sign up':'log in'} to book appointment</p>
        <div className={`w-full ${state === 'Sign Up'? '':'hidden'}`}>
          <p>Full Name</p>
          <input className={inputStyles} type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input className={inputStyles} type="email" onChange={(e)=>setName(e.target.email)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className={inputStyles} type="password" onChange={(e)=>setName(e.target.password)} value={password} required/>
        </div>
        <button className={buttonStyles}>{state === 'Sign Up'?'Create Account':'Login'}</button>
        {
          state === 'Sign Up'
          ?<p>Already have an account? <span className={linkStyles} onClick={()=>setState('Login')}>Login here</span></p>
          :<p>Do not have an account? <span className={linkStyles} onClick={()=>setState('Sign Up')}>Create account</span></p>
        }
      </div>
    </form>
  )
}

export default Login