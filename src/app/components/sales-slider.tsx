import React from 'react'
import { FaRegHeart,FaEye } from "react-icons/fa";

import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';

const Sales = () => {
  return (
    <div className='max-w-6xl mx-auto'>
       <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
       <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>

       <h2>Today's</h2>
       </div>
       <div className='flex items-center justify-between'>
        
        <div className='flex items-center gap-x-4 font-bold'>
        <h2 className='text-4xl font-bold flex items-center justify-start pr-10'>Flash Sales</h2>
            <div>
                <p className='text-sm'>Days</p>
                <h3 className='text-4xl'>03</h3>
            </div>
            <p className='text-[#db4444] text-2xl'>:</p>
            <div>
                <p className='text-sm'>Hours</p>
                <h3 className='text-4xl'>23</h3>
            </div>
            <p className='text-[#db4444] text-2xl'>:</p>
            <div>
                <p className='text-sm'>Minutes</p>
                <h3 className='text-4xl'>19</h3>
            </div>
            <p className='text-[#db4444] text-2xl'>:</p>
            <div>
                <p className='text-sm'>Seconds</p>
                <h3 className='text-4xl'>56</h3>
            </div>
        </div>
        <div className='text-black flex items-center gap-x-2'>
            <AiOutlineArrowLeft size={50} className='rounded-full p-2 bg-[#f5f5f5]'/>
            <AiOutlineArrowRight size={50} className='rounded-full p-2 bg-[#f5f5f5]'/>
        </div>
       </div>

       {/* slider-div */}
     <div className="w-full relative">
  <div className="flex overflow-x-auto snap-x scroll-smooth">
    {[
      {
        image: "/slider/video-game.jpg",
        alt: "Product 1", 
        heading: "HAVIT HV-G92 Gamepad",
        rating: 5,
        price: "$99.99",
        cutprice: "$149",
        off:"-40%"
      },
      {
        image: "/slider/keyboard.jpg",
        alt: "Product 2",
        heading: "AK-900 Wired Keyboard", 
        rating: 5,
        price: "$149.99",
        cutprice: "$199",
        off:"-50%"
      },
      {
        image: "/slider/lcd.jpg",
        alt: "Product 3",
        heading: "IPS LCD Gaming Monitor",
        rating: 5,
        price: "$199.99",
        cutprice: "$249",
        off:"-35%"
      },
      {
        image: "/slider/ipad.jpg",
        alt: "Product 4", 
        heading: "Gaming Monitor",
        rating: 5,
        price: "$199.99",
        off:"-26%"
      },
      {
        image: "/slider/laptop.jpg",
        alt: "Product 5",
        heading: "Gaming Mouse",
        rating: 5, 
        price: "$49.99",
        off:"-20%"
      }
    ].map((item, index) => (
   <div key={index} className="min-w-[33.33%] snap-start px-2">
  <div className="bg-white rounded-lg shadow-md relative">
    <div className='absolute bg-[#db4444] p-2 m-2 rounded-md'>{item.off}</div>
    <div className='absolute right-2'><FaRegHeart size={50} className='bg-white p-2 rounded-full'/>
    <FaEye size={50} className='bg-white p-2 rounded-full'/>
    </div>
    <div className="flex flex-col">
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-48 object-cover rounded-t-lg"
      />
       <button className="w-full bg-black text-white hover:bg-[#db4444]">
        Add to Cart
      </button>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
        <p className="text-2xl font-bold text-gray-900">{item.price} <span className='font-normal opacity-50 line-through'>{item.cutprice}</span></p>
        <div className="flex items-center mb-2">
          {[...Array(item.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

           
          
       
    ))}
  </div>
</div>
<div className='flex items-center justify-center'>
    <button className='bg-[#db4444] text-[#fafafa] w-[234px] h-[56px] rounded-md'>View All Products</button>
</div>
    </div>
  )
}

export default Sales