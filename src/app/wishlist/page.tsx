import React from 'react'
import Wishlist from '../components/wishlist';




// Define the Product interface if not already defined in the Product component
interface Product {
  image: string;
  alt: string;
  heading: string;
  rating: number;
  price: string;
  off: string;
  cutprice:string;
}

// Define products array correctly
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

const wishlist = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className='flex justify-between items-center'>
        <h2>Wishlist (4)</h2>
        <button className='border-2 w-full md:w-[223px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>
          Move All To Bag
        </button>
      </div>
      <Wishlist products={products1} />
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
          <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
          <h2>Just For You</h2>
        </div>
        <button className='border-2 w-full md:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>
          See All
        </button>
      </div>
      <Wishlist products={products2} />
    </div>
  )
}

export default wishlist