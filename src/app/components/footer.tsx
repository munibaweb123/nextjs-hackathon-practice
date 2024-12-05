import Image from 'next/image'
import React from 'react'
import { FaQrcode ,FaGooglePlay } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='bg-black min-h-[440px] text-white w-full px-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-evenly items-start md:items-center gap-8 py-10'>
        <ul className='space-y-4'>
          <li className='text-2xl md:text-4xl font-bold'>Executive</li>
          <li className='text-xl md:text-3xl'>Subscribe</li>
          <li className='text-lg md:text-xl'>Get 10% off your first order</li>
          <div className='flex items-center justify-start border-2 border-white p-2 w-full md:w-[217px]'>
            <input type="text" placeholder='Enter your email' className='bg-black w-full md:w-[180px] text-md'/>
            <Image src={"/Vector.png"} alt='vector' width={30} height={30}/>
          </div>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Support</li>
          <li className='text-lg md:text-xl'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li className='text-lg md:text-xl'>exclusive@gmail.com</li>
          <li className='text-lg md:text-xl'>+88015-88888-9999</li>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Account</li>
          <li className='text-lg md:text-xl'>My Account</li>
          <li className='text-lg md:text-xl'>Login / Register</li>
          <li className='text-lg md:text-xl'>Cart</li>
          <li className='text-lg md:text-xl'>Wishlist</li>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Quick Link</li>
          <li className='text-lg md:text-xl'>Privacy Policy</li>
          <li className='text-lg md:text-xl'>Terms Of Use</li>
          <li className='text-lg md:text-xl'>FAQ</li>
          <li className='text-lg md:text-xl'>Contact</li>
        </ul>
        <ul className='w-full md:w-auto'>
          <li className='text-xl md:text-2xl mb-4'>Download App</li>
          <div>
            <p className='text-lg md:text-xl mb-2'>Save $3 with App New User Only</p>
            <div className='grid grid-cols-2 gap-2'>
              <FaQrcode size={80} className="w-full h-auto"/>
              <div className='grid grid-rows-2 gap-2'>
                <div className='flex items-center justify-center w-full h-[40px]'>
                  <Image src={"/google-playstore.png"} alt='google playstore' height={400} width={400} className='w-full h-auto object-contain'/>
                </div>
                <div className='flex items-center justify-center w-full h-[40px]'>
                  <Image src={"/appstore.png"} alt='appstore' height={400} width={400} className='w-full h-auto object-contain'/>
                </div>
              </div>
            </div>
          </div>
        </ul>
        </div>
    </div>
  )
}

export default footer