
import React from 'react'
import Wishlist1 from '../components/wishlist1'
import Wishlist2 from '../components/wishlist2'

const cart = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
        <div className='flex justify-between items-center'>
            <h2>Wishlist (4)</h2>
            <button className='border-2 w-full md:w-[223px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Move All To Bag</button>
        </div>
        <Wishlist1/>
       <div className='flex justify-between items-center'>
       <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
            <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
            <h2>Just For You</h2>
         </div>
         
           
            <button className='border-2 w-full md:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>See All</button>
       </div>
         

        <Wishlist2/>
   
    </div>
  )
}

export default cart