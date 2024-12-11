import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='max-w-6xl mx-auto min-h-screen py-10'> 
    <h2 className='my-10'>Home /
    <span className='font-semibold'>404 Error</span></h2>
    <div className='flex flex-col justify-center items-center'>
        <h2 className=' text-[120px]'>404 Not Found</h2>
        <p className='text-2xl'>Your visited page not found. You may go home page.</p>
    </div>
    <div className='flex items-center justify-center mt-4'>
            <button className='border-2 w-full sm:w-[254px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white text-2xl'><Link href={"/"}>Back to home page</Link></button>
          </div>
  
  </div>
  )
}

export default error