import React from 'react'
import { FaGoogle } from 'react-icons/fa';

const signup = () => {
  return (
    <div className='max-w-6xl mx-auto px-10'>
        <div>
            <div>

            </div>
        
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
        <p className='font-bold'>Enter your details below</p>
        <div className="space-y-6">
          <div className='flex justify-normal border-b-2 items-center'>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="username" name="username" required 
              className="mt-1 block w-full px-3 py-2  border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
          <div className='flex justify-normal border-b-2 items-center'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
            <input type="email" id="email" name="email" required 
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
          <div className='flex justify-normal border-b-2 items-center'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required 
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none "/>
          </div>
         
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#bd4444] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign Up
        </button>
        <button type="submit" className="w-full flex justify-center gap-x-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <FaGoogle size={20}/> Sign up with Google
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