import Image from 'next/image'
import React from 'react'
import { FaHeart, FaRedo, FaShippingFast, FaStar } from 'react-icons/fa'
import Wishlist from '../components/wishlist';

interface Product {
  image: string;
  alt: string;
  heading: string;
  rating: number;
  price: string;
  off: string;
  cutprice:string;
}

const products1: Product[] = [
  {
    image: "/product/car.png",
    alt: "Product 5",
    heading: "Gaming car",
    rating: 5,
    price: "$199.99",
    off: "-26%",
    cutprice:"40"
  },
  {
    image: "/product/shoes.png",
    alt: "Product 6",
    heading: "Nike shoes",
    rating: 5,
    price: "$199.99",
    off: "-26%",
    cutprice:"40"
  },
  {
    image: "/product/laptop.png",
    alt: "Product 7",
    heading: "ASUS FHD Gaming Laptop",
    rating: 5,
    price: "$199.99",
    off: "-26%",
    cutprice:"40"
  },
  {
    image: "/cart/cart5.png",
    alt: "Product 8",
    heading: "IPS LCD Gaming Monitor",
    rating: 5,
    price: "$199.99",
    off: "-26%",
    cutprice:"40"
  }
];
const products2: Product[] = [
  {
    image: "/cart/cart1.png",
    alt: "Product 5",
    heading: "Quilted Satin Jacket",
    rating: 5,
    price: "$750",
    off: "-26%",
    cutprice:"1000"
  },
  {
    image: "/cart/cart2.png",
    alt: "Product 6",
    heading: "GP11 Shooter USB Gamepad",
    rating: 5,
    price: "$550",
    off: "-26%",
    cutprice:"700"
  },
  {
    image: "/cart/cart3.png",
    alt: "Product 7",
    heading: "Gucci duffle bag",
    rating: 5,
    price: "$960",
    off: "-26%",
    cutprice:"$1160"
  },
  {
    image: "/cart/cart4.png",
    alt: "Product 8",
    heading: "RGB liquid CPU Cooler",
    rating: 5,
    price: "$$1960",
    off: "-26%",
    cutprice:"2200"
  }
];
const productDetail = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
        <h2 className='my-10'>Account / Gaming /
    <span className='font-semibold'>Havic HV G-92 Gamepad</span>
  </h2>
<div className='flex flex-col sm:flex-row gap-4 py-10'>
  <div className='flex-col space-y-4 w-[170px] h-[600px] justify-between items-center'>
  <div className='bg-gray-100 p-2'><Image src={"/productDetail/game1.png"} alt='game pad' width={500} height={500}/>
     </div>
     <div className='bg-gray-100 p-2'><Image src={"/productDetail/game2.png"} alt='game pad' width={500} height={500}/></div>
     <div className='bg-gray-100 p-2'><Image src={"/productDetail/game3.png"} alt='game pad' width={500} height={500}/></div>
     <div className='bg-gray-100 p-2'><Image src={"/productDetail/game4.png"} alt='game pad' width={500} height={500}/></div>

   

  </div>
  <div className='flex items-center justify-center md:w-[500px] h-[600px] bg-gray-100 p-4'>
  <Image src={"/productDetail/game5.png"} alt='game pad' width={500} height={500}/>
  </div>
 <div>
 <div className='border-b-2'>
    <h2 className='font-bold'>Havic HV G-92 Gamepad</h2>
    <div className='flex gap-x-2'>
    <FaStar size={20} className='text-yellow-300'/>
    <FaStar size={20} className='text-yellow-300'/>

    <FaStar size={20} className='text-yellow-300'/>

    <FaStar size={20} className='text-yellow-300'/>
    <FaStar size={20} className='text-gray-400'/>
    <p className='text-gray-400'>(150 reviews) | <span className='text-green-400'>in stock</span></p>


    </div>
    <h3 className='text-2xl'>$192.00</h3>
    <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
  </div>
  <h4>Colours:</h4>
  <div className="flex items-center space-x-4">
  <div className="flex items-center">
    <input 
      type="radio" 
      name="color" 
      value="red" 
      id="red"
      className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full bg-red-500 checked:border-black cursor-pointer"
    />
  
  </div>
  <div className="flex items-center">
    <input 
      type="radio" 
      name="color" 
      value="gray" 
      id="gray"
      className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full bg-gray-400 checked:border-black cursor-pointer"
    />
    
  </div>
</div>
<div className='flex items-center gap-x-2'>
<h5>Size:</h5>
<div className='border-2 p-2 hover:bg-[#db4444] hover:text-white'><p>XS</p></div>
<div className='border-2 p-2 hover:bg-[#db4444] hover:text-white'><p>S</p></div>
<div className='border-2 p-2 hover:bg-[#db4444] hover:text-white'><p>M</p></div>
<div className='border-2 p-2 hover:bg-[#db4444] hover:text-white'><p>L</p></div>
<div className='border-2 p-2 hover:bg-[#db4444] hover:text-white'><p>XL</p></div>
</div>

<div className='flex items-center py-2 '>
 <div className='flex items-center justify-normal'>
 <div className='border-2 p-2 px-2 hover:bg-[#db4444] hover:text-white'>-</div>
  <div className=' px-2 p-2'>2</div>
  <div className='border-2 p-2 px-2 hover:bg-[#db4444] hover:text-white'>+</div>
 </div>

  <button className='border-2 p-2 hover:bg-[#db4444] hover:text-white'>Buy Now</button>
  <div className='p-2 border-2'>
    <FaHeart size={20}/>
  </div>
</div>

<div className='border-2 w-fit'>
  <div className='flex items-center gap-x-2 p-2 '>
    <FaShippingFast size={40}/>
    <div className='p-2 '>
      <p className='font-bold'>Free Delivery</p>
      <p>Enter your postal code for Delivery Availability</p>
    </div>
  </div>
  <div className='flex items-center gap-x-2 p-2 '>
    <FaRedo size={40}/>
    <div className='p-2 '>
      <p className='font-bold'>Return Delivery</p>
      <p>Free 30 Days Delivery Returns. Details</p>
    </div>
  </div>
</div>

 </div>

</div>
<div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
            <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
            <h2>Related Item</h2>
         </div>
         <Wishlist products={products1}/>


  </div>
  )
}

export default productDetail