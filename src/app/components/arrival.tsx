import Image from 'next/image'
import React from 'react'
import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const Arrival = () => {
  return (
    <div className='py-10 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto'>
        <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
          <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
          <h2>Featured</h2>
        </div>

        <div className='flex items-center justify-start'>
          <div className='flex items-center gap-x-4 font-bold'>
            <h2 className='text-2xl md:text-4xl font-bold flex items-center justify-start pr-10'>New Arrival</h2>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8'>
          <div className='h-[400px] md:h-[600px] bg-black relative'>
            <div className='text-white p-5 space-y-5 absolute z-10 bottom-0'>
              <h2 className='font-bold text-xl'>PlayStation 5</h2>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <h3 className='text-lg font-semibold'>Shop Now</h3>
            </div>
            <Image src={"/arrival/arrival1.png"} alt='arrival product' fill className='object-cover'/>
          </div>

          <div className='grid grid-rows-2 gap-5'>
            <div className=' h-[284px] bg-black relative overflow-hidden'>
            <div className='absolute h-full right-0 w-[400px]'>
                <Image src={"/arrival/arrival2.png"} alt='arrival woman' fill className='object-cover' priority/>
              </div>
              <div className='text-white p-5 absolute z-10 max-w-[250px]'>
                <h2 className='font-bold text-xl'>Women&apos;s Collections</h2>
                <p>Featured woman collections that give you another vibe.</p>
                <h3 className='text-lg font-semibold'>Shop Now</h3> 
              </div>
           
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div className='h-[284px] bg-black relative'>
                <div className='relative h-full'>
                  <Image src={"/arrival/arrival3.png"} alt='speakers' fill className='object-cover'/>
                </div>
                <div className='text-white p-5 absolute z-10 bottom-0'>
                  <h2 className='font-bold text-xl'>Speakers</h2>
                  <p>Amazon wireless speakers.</p>
                  <h3 className='text-lg font-semibold'>Shop Now</h3> 
                </div>
              </div>

              <div className='h-[284px] bg-black relative'>
                <div className='relative h-full'>
                  <Image src={"/arrival/arrival4.png"} alt='perfume' fill className='object-cover'/>
                </div>
                <div className='text-white p-5 absolute z-10 bottom-0'>
                  <h2 className='font-bold text-xl'>Perfume</h2>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <h3 className='text-lg font-semibold'>Shop Now</h3> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10'>
          <div className='text-center flex flex-col items-center'>
            <div className='bg-black rounded-full p-2 flex items-center justify-center w-[40px] h-[40px] mx-auto'>
              <FaTruck size={20} color='white' />
            </div>
            <h3 className='font-bold mt-4'>FREE AND FAST DELIVERY</h3>
            <p className='text-sm'>Free delivery for all orders over $140</p>
          </div>

          <div className='text-center flex flex-col items-center'>
            <div className='bg-black rounded-full p-2 flex items-center justify-center w-[40px] h-[40px] mx-auto'>
              <FaHeadset size={20} color='white' />
            </div>
            <h3 className='font-bold mt-4'>24/7 CUSTOMER SERVICE</h3>
            <p className='text-sm'>Friendly 24/7 customer support</p>
          </div>

          <div className='text-center flex flex-col items-center'>
            <div className='bg-black rounded-full p-2 flex items-center justify-center w-[40px] h-[40px] mx-auto'>
              <FaShieldAlt size={20} color='white' />
            </div>
            <h3 className='font-bold mt-4'>MONEY BACK GUARANTEE</h3>
            <p className='text-sm'>We return money within 30 days</p>
          </div>
        </div>
    </div>
  )
}

export default Arrival