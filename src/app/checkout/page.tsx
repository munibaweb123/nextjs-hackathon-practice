import Image from 'next/image'
import React from 'react'
import { FaCcMastercard, FaCcVisa, FaCheckSquare, FaPaypal } from 'react-icons/fa'

const checkOut = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
          <h2 className='my-10'>Account / My Account / Product / View Cart
        <span className='font-semibold'>CCheckOut</span>
      </h2>

      <h3 className='text-4xl font-bold'>Billing Details</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 py-10'>
        <div className='space-y-2'>
           <div>
           <label>First Name*</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div>
           <label>Company Name</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div>
           <label>Street Address*</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div>
           <label>Apartment, floor, etc. (optional)</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div>
           <label>Town/City*</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div>
           <label>Phone Number*</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div>
           <label>Email Address*</label>
           <input type="text" className='w-full p-2' />
           </div>
           <div className='flex items-center gap-x-2'>
            <FaCheckSquare size={20} color='#db4444'/>
            <p>Save this information for faster check-out next time</p>
           </div>
        </div>

        <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-2'>
          <div className='w-[50px] h-[50px] flex-shrink-0'>
              <Image src={"/cart/cart2.png"} alt='product' width={200} height={200}/>
            </div>
            <p className='text-sm'>H1 Gamepad</p>
          </div>
            <p>$650</p>
          </div>
          <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-2'>
          <div className='w-[50px] h-[50px] flex-shrink-0'>
              <Image src={"/cart/cart5.png"} alt='product' width={200} height={200}/>
            </div>
            <p className='text-sm'>LCD Monitor</p>
          </div>
            <p>$1150</p>
          </div>

                  <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                          <input
                              type="radio"
                              id="bank"
                              name="payment"
                              value="bank"
                              className="h-4 w-4 text-[#db4444] focus:ring-blue-500 border-gray-300"
                          />
                          <label htmlFor="bank" className="ml-2 text-sm font-medium text-gray-700">
                              Bank Transfer
                          </label>
                      </div>

                      <div className="flex items-center">
                          <input
                              type="radio"
                              id="cod"
                              name="payment"
                              value="cod"
                              className="h-4 w-4 text-[#db4444] focus:ring-blue-500 border-gray-300"
                          />
                          <label htmlFor="cod" className="ml-2 text-sm font-medium text-gray-700">
                              Cash on Delivery
                          </label>
                      </div>
                      <FaCcVisa size={40} color='#0000ff'/>
                      <FaCcMastercard size={40} />
                      <FaPaypal size={40} />
                      
                  </div>

          <div className='flex flex-col sm:flex-row items-center gap-4'>
          <input type="text" placeholder='Coupon Code' className='p-2 border-2 w-full sm:w-auto'/>
          <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Apply Coupon</button>
        </div>
              
        <div className='border-2 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Cart Total</h2>
          <div className='flex items-center justify-between border-b-2 py-2'> 
            <p>Subtotal:</p>
            <p>$1800.00</p>
          </div>
          <div className='flex items-center justify-between border-b-2 py-2'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='flex items-center justify-between py-2'>
            <p>Total:</p>
            <p>$1800.00</p>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Place Order</button>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default checkOut