"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      icon: "/hero/iphone-icon.png",
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      image: "/hero/hero-main.png"
    },
    {
      icon: "/hero/iphone-icon.png", 
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      image: "/hero/iphone.png"
    },
    {
      icon: "/hero/iphone-icon.png", 
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      image: "/arrival/arrival1.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='max-w-[1170px] mx-auto px-4'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <ul className='border-r-2 space-y-4 w-full md:w-[217px] h-auto md:h-[344px] mb-4 md:mb-0 flex-shrink-0'>
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
        <div className="relative flex-1 w-full md:w-[892px] overflow-hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className='bg-black min-w-full h-auto md:h-[344px] flex flex-col md:flex-row justify-end items-center'>
                  <div className='text-[#fafafa] p-4 md:p-0'>
                    <div className='flex items-center gap-x-4'>
                      <Image src={slide.icon} alt='iphone set' height={50} width={50}/>
                      <p className='text-sm md:text-base'>{slide.title}</p>
                    </div>
                    <h2 className='text-3xl md:text-5xl p-2'>{slide.subtitle}</h2>
                    <p className='p-2 underline flex gap-x-4'>Shop Now <AiOutlineArrowRight/></p>
                  </div>
                  <div className='w-full md:w-auto'>
                    <Image 
                      src={slide.image}
                      alt='iphone set' 
                      height={400}
                      width={400}
                      className='w-full h-auto object-contain'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
          >
            &#8249;
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l"
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-gray-600' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero