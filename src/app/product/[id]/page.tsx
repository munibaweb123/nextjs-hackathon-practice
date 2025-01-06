import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react';
import { FaHeart, FaRedo, FaShippingFast, FaStar } from 'react-icons/fa';
import Wishlist from '../../components/wishlist';





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
const product1: Product[] = [
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

interface ProductDetails {
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  heading: string;
  price: number;
  description: string;
  color: string[];
  size: string[];
}

const ProductDetail = async ({ params }: { params: Promise<{id: string}>}) => {
  const { id } = await params;
 
  const query = `*[_type == 'product' && id == $id][0]{
    image, 
    image1, 
    image2, 
    image3, 
    image4, 
    heading, 
    price, 
    description, 
    color, 
    size
  }`;

  const product: ProductDetails | null = await client.fetch(query, { id});
  console.log(product)

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='max-w-[1280px] mx-auto'>
      <h2 className='my-10'>
        Account / Gaming / <span className='font-semibold'>{product.heading}</span>
      </h2>

      <div className='flex flex-col sm:flex-row gap-4 py-10'>
        <div className='flex-col space-y-4 w-[170px] h-[600px] justify-between items-center'>
          {[product.image1, product.image2, product.image3, product.image4].map((img, index) => (
            img ? (
              <div key={index} className='bg-gray-100 p-2'>
                <Image
                  src={urlFor(img).url()}
                  alt={`Product Image ${index + 1}`}
                  width={500}
                  height={500}
                />
              </div>
            ) : null
          ))}
        </div>

        <div className='flex items-center justify-center md:w-[500px] h-[600px] bg-gray-100 p-4'>
          <Image
            src={urlFor(product.image).url()}
            alt={product.heading}
            width={500}
            height={500}
          />
        </div>

        <div>
          <div className='border-b-2'>
            <h2 className='font-bold'>{product.heading}</h2>
            <div className='flex gap-x-2'>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={20}
                  className={index < 4 ? 'text-yellow-300' : 'text-gray-400'}
                />
              ))}
              <p className='text-gray-400'>(150 reviews) | <span className='text-green-400'>in stock</span></p>
            </div>
            <h3 className='text-2xl'>${product.price}</h3>
            <p>{product.description}</p>
          </div>

          <h4>Colours:</h4>
          <div className="flex items-center space-x-4">
            {product.color.map((col, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value={col}
                  id={col}
                  className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full cursor-pointer"
                />
              </div>
            ))}
          </div>

          <h5>Size:</h5>
          <div className='flex gap-2'>
            {product.size.map((size, index) => (
              <div key={index} className='border-2 p-2 hover:bg-[#db4444] hover:text-white'>
                <p>{size}</p>
              </div>
            ))}
          </div>

          <div className='flex items-center py-2'>
            <div className='flex items-center justify-normal'>
              <div className='border-2 p-2 px-2 hover:bg-[#db4444] hover:text-white'>-</div>
              <div className=' px-2 p-2'>2</div>
              <div className='border-2 p-2 px-2 hover:bg-[#db4444] hover:text-white'>+</div>
            </div>
            <button className='border-2 p-2 hover:bg-[#db4444] hover:text-white'>Buy Now</button>
            <div className='p-2 border-2'>
              <FaHeart size={20} />
            </div>
          </div>

          <div className='border-2 w-fit'>
            <div className='flex items-center gap-x-2 p-2'>
              <FaShippingFast size={40} />
              <div className='p-2'>
                <p className='font-bold'>Free Delivery</p>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='flex items-center gap-x-2 p-2'>
              <FaRedo size={40} />
              <div className='p-2'>
                <p className='font-bold'>Return Delivery</p>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-x-4 items-center text-[#db4444] font-bold py-4'>
        <div className='bg-[#db4444] w-[20px] h-[40px] rounded-md'></div>
        <h2>Related Items</h2>
      </div>
      <Wishlist products={product1} />
    </div>
  );
};

export default ProductDetail;
