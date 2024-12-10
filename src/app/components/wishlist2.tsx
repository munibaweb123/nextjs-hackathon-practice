import Image from 'next/image'
import React from 'react'
import { FaEye, FaRegHeart } from 'react-icons/fa'

const Wishlist2= () => {
  return (
    <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5">
    {[
      
      {
        image: "/product/car.png",
        alt: "Product 5",
        heading: "Gaming car",
        rating: 5,
        price: "$199.99",
        off:"-26%"
      },
      {
        image: "/product/shoes.png",
        alt: "Product 6",
        heading: "Nike shoes",
        rating: 5,
        price: "$199.99",
        off:"-26%"
      },
      {
        image: "/product/laptop.png",
        alt: "Product 7",
        heading: "ASUS FHD Gaming Laptop",
        rating: 5,
        price: "$199.99",
        off:"-26%"
      },
      {
        image: "/cart/cart5.png",
        alt: "Product 8",
        heading: "IPS LCD Gaming Monitor",
        rating: 5,
        price: "$199.99",
        off:"-26%"
      }
    ].map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md relative">

    <div className='absolute hover:bg-[#db4444] p-2 m-2 rounded-md text-white z-10'>{item.off}</div>
        <div className='absolute right-2 z-10'>
          <FaRegHeart size={50} className='bg-white p-2 rounded-full'/>
          <FaEye size={50} className='bg-white p-2 rounded-full'/>
        </div>
        <div className="group w-full h-[350px] flex flex-col items-center justify-center relative">
        <div className='flex justify-center items-center'>
        <Image
            src={item.image}
            alt={item.alt}
            className="w-full h-48 object-cover rounded-t-lg"
            width={500}
            height={500}
          />
        </div>
         <button className="w-full h-[41px] bg-black text-white hover:bg-[#db4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Add to Cart
  </button>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
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
    ))}
  </div>
    </div>
  )
}

export default Wishlist2