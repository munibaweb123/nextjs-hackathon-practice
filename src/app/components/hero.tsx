import Image from 'next/image';
import React from 'react'
import { AiOutlineRight,AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='max-w-[1170px] mx-auto px-4'>
      <div className='flex flex-col md:flex-row items-center justify-normal'>
        <ul className='border-r-2 space-y-4 w-full md:w-[217px] h-auto md:h-[344px] mb-4 md:mb-0'>
            <li className='flex gap-x-4'>Woman&apos;s Fashion <AiOutlineRight/></li>
            <li className='flex gap-x-4'>Men&apos;s Fashion <AiOutlineRight/></li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby&apos;s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <div className='bg-black w-full md:w-[892px] h-auto md:h-[344px] flex flex-col md:flex-row justify-end items-center m-2'>
          <div className='text-[#fafafa] p-4 md:p-0'>
            <div className='flex items-center gap-x-4'>
              <Image src={"/hero/iphone-icon.png"} alt='iphone set' height={50} width={50}/>
              <p className='text-sm md:text-base'>iPhone 14 Series</p>
            </div>
            <h2 className='text-3xl md:text-5xl p-2'>Up to 10% off Voucher</h2>
            <p className='p-2 underline flex gap-x-4'>Shop Now <AiOutlineArrowRight/></p>
          </div>
          <div className='w-full md:w-auto'>
            <Image 
              src={"/hero/iphone.png"} 
              alt='iphone set' 
              height={600} 
              width={600}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero