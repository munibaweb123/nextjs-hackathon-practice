import React from 'react'

const account = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
         <div className='flex justify-between items-center p-4'>
         <h2 className='my-10'>Home /
        <span className='font-semibold'>My Account</span>
      </h2>
        <h2>
        Welcome! <span className='text-[#db4444]'>Md Rimel</span>
        </h2>
      </div>

      <div className='flex flex-col md:flex-row gap-x-2 items-center p-4'>
        <div className='space-y-4'>
            <h3 className='font-bold'>Manage My Account</h3>
            <ul className='pl-4'>
                <li className='text-[#db4444]'>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
            </ul>
            <h3 className='font-bold'>My Orders</h3>
            <ul className='pl-4'>
                <li>My Returns</li>
                <li>My Cancellations</li>
            </ul>
            <h3 className='font-bold'>My Wishlist</h3>
        </div>
        <div className='shadow-md md:p-10 p-2 md:h-[630px] md:m-10'>
            <h3 className='text-[#db4444] font-semibold'>Edit Your Profile</h3>
          <div className='flex flex-col sm:flex-row gap-x-10 py-4'>
          <div className='flex-col'>
                <label>First Name</label>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='Md'/>
            </div>
            <div className='flex-col'>
                <label>Last Name</label>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='Rimel'/>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-x-10'>
          <div className='flex-col'>
                <label>Email</label>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='rimel1111@gmail.com'/>
            </div>
            <div className='flex-col'>
                <label>Address</label>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='Kingston, 5236, United State'/>
            </div>
          </div>
          <div className='space-y-4 flex-col'>
                <label>Address</label>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='Password Changes'/>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='New Passwod'/>
                <input type="text" className='bg-slate-200 p-2 w-full' placeholder='Confirm New Passwod'/>

            
            </div>
            <div className='flexflex-col md:flex-row gap-x-2 items-center justify-end '>
            <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Cancel</button>

            <button className='border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white'>Save Changes</button>

            </div>

        </div>
      </div>


    </div>
  )
}

export default account