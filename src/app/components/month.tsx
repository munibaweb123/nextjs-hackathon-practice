import Image from 'next/image'
import React from 'react'
import { FaEye, FaRegHeart } from 'react-icons/fa'

const Month = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
         <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
            <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
            <h2>This Month</h2>
         </div>
         
         <div className='flex flex-col md:flex-row items-center justify-between py-4'>
            <div className='flex items-center gap-x-4 font-bold mb-4 md:mb-0'>
                <h2 className='text-2xl md:text-4xl font-bold flex items-center justify-start md:pr-10'>Best Selling Products</h2>
            </div>
            <button className='bg-[#db4444] text-white w-full md:w-[159px] h-[56px] rounded-md'>View All</button>
         </div>

         {/* products div */}
         <div className="w-full relative py-4">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
               }
             ].map((item, index) => (
               <div key={index} className="bg-white rounded-lg shadow-md relative">
                 <div className='absolute bg-[#db4444] p-2 m-2 rounded-md'>{item.off}</div>
                 <div className='absolute right-2'>
                   <FaRegHeart size={30} className='bg-white p-2 rounded-full mb-2'/>
                   <FaEye size={30} className='bg-white p-2 rounded-full'/>
                 </div>
                 <div className="flex flex-col">
                   <img
                     src={item.image}
                     alt={item.alt}
                     className="w-full h-48 object-cover rounded-t-lg"
                   />
                   <div className="p-4">
                     <h2 className="text-lg md:text-xl font-semibold mb-2">{item.heading}</h2>
                     <p className="text-xl md:text-2xl font-bold text-gray-900">{item.price} <span className='font-normal opacity-50 line-through'>{item.cutprice}</span></p>
                     <div className="flex items-center mb-2">
                       {[...Array(item.rating)].map((_, i) => (
                         <svg
                           key={i}
                           className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
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
             ))}
           </div>
         </div>

         {/* full screen width div */}
         <div className='bg-black w-full min-h-[500px] mx-auto flex flex-col md:flex-row justify-between p-4 md:p-8'>
           <div className='w-full md:w-1/2 p-4 md:p-10'>
             <p className='text-[#00ff66] pb-5 md:pb-10'>Categories</p>
             <h2 className='text-3xl md:text-5xl text-white pb-5 md:pb-10'>Enhance Your Music Experience</h2>
             <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pb-5 md:pb-10'>
               <div className='rounded-full bg-white p-4 text-center'>
                 <p className='text-sm md:text-md font-bold'>23</p>
                 <p className='text-xs md:text-sm'>Hours</p>
               </div>
               <div className='rounded-full bg-white p-4 text-center'>
                 <p className='text-sm md:text-md font-bold'>05</p>
                 <p className='text-xs md:text-sm'>Days</p>
               </div>
               <div className='rounded-full bg-white p-4 text-center'>
                 <p className='text-sm md:text-md font-bold'>59</p>
                 <p className='text-xs md:text-sm'>Minutes</p>
               </div>
               <div className='rounded-full bg-white p-4 text-center'>
                 <p className='text-sm md:text-md font-bold'>35</p>
                 <p className='text-xs md:text-sm'>Seconds</p>
               </div>
             </div>
             <button className='bg-[#00ff66] w-full md:w-[171px] h-[56px] rounded-md text-white hover:text-black hover:bg-white'>Buy Now</button>
           </div>
           <div className='relative w-full md:w-1/2 h-[300px] md:h-[500px] mt-8 md:mt-0'>
             <div className='absolute rounded-full bg-[#d9d9d9] blur-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-radial from-[#d9d9d9]/70 via-[#d9d9d9]/40 to-[#d9d9d9]/10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
             <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full'>
               <Image 
                 src="/product/product1.png" 
                 alt='boom box' 
                 layout="fill"
                 objectFit="contain"
               />
             </div>
           </div>
         </div>
    </div>
  )
}

export default Month