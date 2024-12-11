"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Cart = () => {
    const [quantity1, setQuantity1] = useState(3);
    const [quantity2, setQuantity2] = useState(3);

    function handleDecrement1(): void {
        setQuantity1((prev: number) => prev > 0 ? prev - 1 : 0)
    }
    
    function handleIncrement1(): void {
        setQuantity1((prev: number) => prev + 1)
    }

    function handleDecrement2(): void {
        setQuantity2((prev: number) => prev > 0 ? prev - 1 : 0)
    }
    
    function handleIncrement2(): void {
        setQuantity2((prev: number) => prev + 1)
    }

    const subtotal = (quantity1 * 10) + (quantity2 * 15);

  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <h2 className='my-10'>Home /
        <span className='font-semibold'>Cart</span>
      </h2>
      
      <div className="overflow-x-auto">
        <div className="w-full overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-2 py-2 min-w-[120px]">Product</th>
        <th className="border border-gray-300 px-2 py-2 min-w-[80px]">Price</th>
        <th className="border border-gray-300 px-2 py-2 min-w-[100px]">Quantity</th>
        <th className="border border-gray-300 px-2 py-2 min-w-[80px]">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="border border-gray-300 px-2 py-2">
          <div className='flex items-center gap-x-2'>
            <div className='w-[50px] h-[50px] flex-shrink-0'>
              <Image src={"/cart/cart5.png"} alt='product' width={200} height={200}/>
            </div>
            <p className='text-sm'>LCD Monitor</p>
          </div>
        </td>
        <td className="border border-gray-300 px-2 py-2 text-sm">$10.00</td>
        <td className="border border-gray-300 px-2 py-2">
          <div className="flex items-center justify-center gap-x-2">
            <button className="p-1" onClick={handleDecrement1}><AiOutlineDown/></button>
            <span className="text-sm">{quantity1}</span>
            <button className="p-1" onClick={handleIncrement1}><AiOutlineUp/></button>
          </div>
        </td>
        <td className="border border-gray-300 px-2 py-2 text-sm">${quantity1 * 10}.00</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="border border-gray-300 px-2 py-2">
          <div className='flex items-center gap-x-2'>
            <div className='w-[50px] h-[50px] flex-shrink-0'>
              <Image src={"/cart/cart2.png"} alt='product' width={200} height={200}/>
            </div>
            <p className='text-sm'>game pad</p>
          </div>
        </td>
        <td className="border border-gray-300 px-2 py-2 text-sm">$15.00</td>
        <td className="border border-gray-300 px-2 py-2">
          <div className="flex items-center justify-center gap-x-2">
            <button className="p-1" onClick={handleDecrement2}><AiOutlineDown/></button>
            <span className="text-sm">{quantity2}</span>
            <button className="p-1" onClick={handleIncrement2}><AiOutlineUp/></button>
          </div>
        </td>
        <td className="border border-gray-300 px-2 py-2 text-sm">${quantity2 * 15}.00</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mt-4'>
        <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Return To Shop</button>
        <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Update Cart</button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <input type="text" placeholder='Coupon Code' className='p-2 border-2 w-full sm:w-auto'/>
          <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Apply Coupon</button>
        </div>
        
        <div className='border-2 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Cart Total</h2>
          <div className='flex items-center justify-between border-b-2 py-2'> 
            <p>Subtotal:</p>
            <p>${subtotal}.00</p>
          </div>
          <div className='flex items-center justify-between border-b-2 py-2'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='flex items-center justify-between py-2'>
            <p>Total:</p>
            <p>${subtotal}.00</p>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'><Link href={"/checkout"}>Proceed to checkout</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart