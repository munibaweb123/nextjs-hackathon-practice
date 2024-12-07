"use client"
import Image from 'next/image';

import React from 'react'
import { FaGoogle } from 'react-icons/fa';

const signup = () => {
  return (
    <div className='max-w-[1170px] mx-auto px-10'>
        <div className='block md:flex items-center justify-center'>
            <div className='w-[805px] h-[781px] flex items-center justify-start'>
              <Image src={"/signup/smartphone.png"} alt='smart phone with cart' width={1000} height={1000}/>
            </div>
        
    <div className='flex justify-center items-center'>
      <form className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
        <p className='font-bold p-4'>Enter your details below</p>
        <div className="space-y-6">
          <div className='flex justify-normal border-b-2 items-center'>
           
            <input type="text" id="username" name="username" required placeholder='Name'
              className="mt-1 block w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
          <div className='flex justify-normal border-b-2 items-center'>
            
            <input type="email" id="email" name="email" required placeholder='Email or Phone Number'
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
          <div className='flex justify-normal border-b-2 items-center'>
           
            <input type="password" id="password" name="password" required placeholder='Password'
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
         
        </div>
            <button
              type="button"
              onClick={() => window.location.href = "/login"} // Redirects to the login page
              className="w-[371px] h-[56px] flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#bd4444] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => window.location.href = "/login"}
              className="w-[371px] h-[56px] flex justify-center items-center gap-x-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaGoogle size={20} /> Sign up with Google
            </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account? 
          <a href="#" className="font-medium text-orange-700 hover:text-orange-800">Login here</a>
        </p>
      </form>
    </div>
      </div>

    </div>
  )
}

export default signup