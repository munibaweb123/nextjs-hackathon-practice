"use client"
import Image from 'next/image'

import React from 'react'

const login = () => {
  return (
    <div className='max-w-[1170px] mx-auto px-10'><div className='flex'>
    <div className='w-[805px] h-[781px] block md:flex items-center justify-start'>
      <Image src={"/signup/smartphone.png"} alt='smart phone with cart' width={1000} height={1000}/>
    </div>
    <div className='flex justify-center items-center'>
      <form className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in to Exclusive</h2>
        <p className='font-bold p-2'>Enter your details below</p>
        <div className="space-y-6">
          <div className='flex justify-normal border-b-2 items-center'>
           
            <input type="text" id="username" name="username" required placeholder='Email or Phone Number'
              className="mt-1 block w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
          <div className='flex justify-normal border-b-2 items-center'>
            
            <input type="email" id="email" name="email" required placeholder='Password'
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
         
         
        </div>
      <div className='flex items-center justify-evenly'>
      <button      type="button"
              onClick={() => window.location.href = "/"} className="w-[143px] h-[56px] flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#bd4444] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Login
        </button>
        <p className='text-[#bd4444]'>Forget Password?</p>
        </div> 
        
      </form>
    </div>
      </div>
    </div>
   
  )
}

export default login