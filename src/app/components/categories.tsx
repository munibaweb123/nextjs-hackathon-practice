import React from 'react'
import { FaCamera,FaHeadphones,FaGamepad } from "react-icons/fa"; 
import { MdWatch} from "react-icons/md";
import { FiMonitor,FiSmartphone  } from "react-icons/fi"; 
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Categories = () => {
  return (
    <div className="container mx-auto px-4">
      <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
        <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
        <h2>Categories</h2>
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
        <div className='flex items-center gap-x-4 font-bold mb-4 md:mb-0'>
          <h2 className='text-2xl md:text-4xl font-bold flex items-center justify-start pr-10'>Browse By Category</h2>
        </div>
        <div className='text-black flex items-center gap-x-2'>
          <AiOutlineArrowLeft size={50} className='rounded-full p-2 bg-[#f5f5f5] cursor-pointer'/>
          <AiOutlineArrowRight size={50} className='rounded-full p-2 bg-[#f5f5f5] cursor-pointer'/>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        <div className='border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300'>
          <div className='flex items-center justify-center'>
            <FiSmartphone className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
          </div>
          <p className="text-center mt-2">cell phone</p>
        </div>

        <div className='border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300'>
          <div className='flex items-center justify-center'>
            <FiMonitor className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
          </div>
          <p className="text-center mt-2">computers</p>
        </div>

        <div className='border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300'>
          <div className='flex items-center justify-center'>
            <MdWatch className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
          </div>
          <p className="text-center mt-2">smart watch</p>
        </div>

        <div className='border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300'>
          <div className='flex items-center justify-center'>
            <FaCamera className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
          </div>
          <p className="text-center mt-2">Camera</p>
        </div>

        <div className='border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300'>
          <div className='flex items-center justify-center'>
            <FaHeadphones className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
          </div>
          <p className="text-center mt-2">Head phones</p>
        </div>

        <div className='border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300'>
          <div className='flex items-center justify-center'>
            <FaGamepad className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
          </div>
          <p className="text-center mt-2">Gaming</p>
        </div>
      </div>
    </div>
  )
}

export default Categories