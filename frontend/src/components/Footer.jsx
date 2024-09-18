import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:2/3 text-gray-600 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad est dicta illo voluptas necessitatibus voluptate rerum ut cumque, impedit reprehenderit ratione ea, fugit eos veniam mollitia unde aspernatur similique cupiditate.</p>
            </div>
            {/* center */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>customer@company.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright</p>
        </div>
    </footer>
  )
}

export default Footer