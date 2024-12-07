import Image from 'next/image'
import React from 'react'
import { FaShop,FaDollarSign,FaBagShopping,FaShopware,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa6'

const about = () => {
  return (
    <div className='max-w-[1170px] mx-auto h-auto'>
    <p>Home <span className='font-bold'>/ About</span></p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
    <div className='flex flex-col space-y-10 justify-center'>
      <h2 className='text-6xl font-bold'>Our Story</h2>
      <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
      <p> Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>
    <div className='flex items-center justify-center w-[705px] h-[609px]'>
      <Image src={"/about/potrait.png"} alt='potrait' height={1000} width={1000}/>
    </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
        <div className='text-center flex flex-col items-center border-2 p-2'>
          <div className='w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full'>
            <div className='bg-black rounded-full p-2 flex items-center justify-center w-[58px] h-[58px] mx-auto'>
              <FaShop size={35} color='white' />
            </div>
          </div>

            <h3 className='font-bold mt-4 text-2xl'>10.5k </h3>
            <p className='text-lg'>Sallers active our site</p>
          </div>

          <div className='text-center flex flex-col items-center border-2 p-2'>
          <div className='w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full'>
          <div className='bg-black rounded-full p-2 flex items-center justify-center w-[58px] h-[58px] mx-auto'>
              <FaDollarSign size={35} color='white' />
            </div>
            </div> 
            <h3 className='font-bold mt-4 text-2xl'>33k</h3>
            <p className='text-lg'>Mopnthly Produduct Sale</p>
          </div>

          <div className='text-center flex flex-col items-center border-2 p-2'>
           <div className='w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full'>
           <div className='bg-black rounded-full p-2 flex items-center justify-center w-[58px] h-[58px] mx-auto'>
              <FaBagShopping size={35} color='white' />
            </div>
            </div> 
            <h3 className='font-bold mt-4 text-2xl'>45.5k </h3>
            <p className='text-lg'>Customer active in our sites</p>
          </div>

          <div className='text-center flex flex-col items-center border-2 p-2'>
           <div className='w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full'>
           <div className='bg-black rounded-full p-2 flex items-center justify-center w-[58px] h-[58px] mx-auto'>
              <FaShopware size={35} color='white' />
            </div>
            </div> 
            <h3 className='font-bold mt-4 text-2xl'>25k</h3>
            <p className='text-lg'>Anual gross sale in our site</p>
          </div>
        </div>

        <div className='block md:flex justify-between items-center md:h-[564px] h-auto'>
          <div>
          <div className='w-[370px] h-[430px] bg-[#f5f5f5]'>
            <Image src={"/about/about1.png"} alt='about person' width={1000} height={1000}  className="w-full h-full object-fill"/>
          </div>
          <h3 className='font-bold mt-4 text-2xl'>Tom Cruise</h3>
          <p className='text-lg'>Founder & Chairman</p>
          <div className='flex gap-x-2 items-center'><FaTwitter size={20}/> <FaInstagram size={20}/> <FaLinkedin size={20}/></div>
          </div>
          <div className='flex flex-col'>
          <div className='w-[370px] h-[430px] bg-[#f5f5f5]'>
            <Image src={"/about/about3.png"} alt='about person' width={1000} height={1000} className="w-full h-full object-fill"/>
          </div>
          <h3 className='font-bold mt-4 text-2xl'>Emma Watson</h3>
          <p className='text-lg'>Managing Director</p>
          <div className='flex gap-x-2 items-center'><FaTwitter size={20}/> <FaInstagram size={20}/> <FaLinkedin size={20}/></div>
          </div>
          <div className='flex flex-col'>
          <div className='w-[370px] h-[430px] bg-[#f5f5f5]'>
            <Image src={"/about/about2.png"} alt='about person' width={1000} height={1000} className="w-full h-full object-fill"/>
          </div>
          <h3 className='font-bold mt-4 text-2xl'>Will Smith</h3>
            <p className='text-lg'>Product Designer</p>
            <div className='flex gap-x-2 items-center'><FaTwitter size={20}/> <FaInstagram size={20}/> <FaLinkedin size={20}/></div>
          </div>
        </div>
    </div>
  )
}

export default about