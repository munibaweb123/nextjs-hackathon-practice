import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const contact = () => {
  return (
    <div className='max-w-[1170px] mx-auto space-y-4'>
      <h2 className='my-10'>Home /
      <span className='font-semibold'>Contact</span></h2>
     <div className='block md:flex gap-x-4 items-center md:h-[457px] mx-auto h-[1000px] pb-20'>
     <div className='shadow-md p-5 md:h-full space-y-4'>
      <div className='block md:flex gap-x-2 items-center'>
       <div className='border-b-2 space-y-4'>
       <div className='flex items-center gap-x-4 '>
          <div className='bg-[#bd4444] text-white rounded-full p-2'>
            <FaPhone size={20}/>
          </div>
          Call To Us
          
        </div >
        <h2 className='text-md'>We are available 24/7, 7 days a week.</h2>
          <p className='text-md'>Phone: +8801611112222</p>
       </div>
        

      </div>
      <div className='space-y-4'>
      <div className='flex items-center gap-x-4'>
      <div className='bg-[#bd4444] text-white rounded-full p-2'>
            <FaEnvelope size={20}/>
          </div>
          <p className='text-md'>Write To US</p>
      </div>
      <p>Fill out our form and we will contact you within 24 hours.</p>
      <p>Emails: customer@exclusive.com</p>
      <p>Emails: support@exclusive.com</p>
      </div>
      </div>
       {/* contact div */}
    <div className='shadow-md p-5 space-y-4 md:h-full '>
      <div className='block md:flex items-center space-y-2 space-x-2'>
        <input type="name" placeholder='Name' className='bg-[#f5f5f5] p-2'/>
        <input type="email" placeholder='Email' className='bg-[#f5f5f5] p-2'/>
        <input type="phone" placeholder='Phone' className='bg-[#f5f5f5] p-2'/>

      </div>
      <div>
        <textarea name="message" id="message" placeholder='Message' rows={6} className='bg-[#f5f5f5] p-2 w-full'/>
      </div>
     <div className='flex items-center justify-end'>
     <button className='w-[215px] h-[58px] bg-[#db4444] text-white  '>Send Massage</button>
     </div>
    </div>
     </div>
    
   
    </div>
  )
}

export default contact