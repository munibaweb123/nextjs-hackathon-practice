import Image from 'next/image';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaEye, FaRegHeart } from 'react-icons/fa';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Product = () => {
  const products = [
    {
      image: "/product/caser.png",
      alt: "Product 1",
      heading: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: "$99.99",
      cutprice: "$149",
      off: "-40%",
    },
    {
      image: "/product/camera.png",
      alt: "Product 2",
      heading: "AK-900 Wired Keyboard",
      rating: 5,
      price: "$149.99",
      cutprice: "$199",
      off: "-50%",
    },
    {
      image: "/product/laptop.png",
      alt: "Product 3",
      heading: "IPS LCD Gaming Monitor",
      rating: 5,
      price: "$199.99",
      cutprice: "$249",
      off: "-35%",
    },
    {
      image: "/slider/lcd.jpg",
      alt: "Product 4",
      heading: "IPS LCD Gaming Monitor",
      rating: 5,
      price: "$199.99",
      cutprice: "$249",
      off: "-35%",
    },
    {
      image: "/slider/ipad.jpg",
      alt: "Product 5",
      heading: "Gaming Monitor",
      rating: 5,
      price: "$199.99",
      cutprice: "",
      off: "-26%",
    },
    {
      image: "/slider/video-game.jpg",
      alt: "Product 1",
      heading: "HAVIT HV-G92 Gamepad",
      rating: 6,
      price: "$99.99",
      cutprice: "$149",
      off: "-40%",
    },
    {
      image: "/slider/keyboard.jpg",
      alt: "Product 2",
      heading: "AK-900 Wired Keyboard",
      rating: 7,
      price: "$149.99",
      cutprice: "$199",
      off: "-50%",
    },
    {
      image: "/product/jacket.png",
      alt: "Product 8",
      heading: "Leather jacket",
      rating: 8,
      price: "$199.99",
      cutprice: "$249",
      off: "-35%",
    },
    // Add more products as needed
  ];

  return (
    <div className="max-w-[1170px] mx-auto">
      {/* Header Section */}
      <div className="flex gap-x-4 items-center text-[#db4444] font-bold py-4">
        <div className="bg-[#db4444] w-[20px] h-[40px] rounded-md"></div>
        <h2>Our Products</h2>
      </div>

    

      {/* Carousel */}
      <Carousel>
     
        
          {/* Arrow Buttons Grouped on the Right */}
         {/* Arrow Buttons Grouped Responsively */}
{/* Arrow Buttons Grouped Responsively */}
<div className="flex flex-col md:flex-row items-center justify-between relative gap-y-4">
  {/* Heading */}
  <h2 className="text-4xl font-bold flex items-center justify-start pr-10 mb-4 md:mb-0">
    Explore Our Products
  </h2>

  {/* Responsive Arrow Buttons */}
  <div className="flex md:right-0 bottom-0 absolute flex-col md:flex-row items-center gap-4 mt-8 md:mt-0">
    <CarouselPrevious>
      <AiOutlineArrowLeft
        size={50} // Adjust size for smaller screens
        className="rounded-full p-2 bg-[#f5f5f5] shadow-md"
      />
    </CarouselPrevious>
    <CarouselNext>
      <AiOutlineArrowRight
        size={50} // Adjust size for smaller screens
        className="rounded-full p-2 bg-[#f5f5f5] shadow-md"
      />
    </CarouselNext>
  </div>
</div>


         
        

        <CarouselContent className="-ml-2 md:-ml-4 mt-10">
          {products.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="w-full relative py-4">
                <div className="bg-white rounded-lg shadow-md relative">
                  <div className="absolute bg-[#db4444] p-2 m-2 rounded-md z-10">{item.off}</div>
                  <div className="absolute right-2 z-10 flex flex-col gap-2">
                    <FaRegHeart size={30} className="bg-white p-2 rounded-full" />
                    <FaEye size={30} className="bg-white p-2 rounded-full" />
                  </div>
                  <div className="group w-full h-[350px] flex flex-col items-center justify-center relative">
                    <div className="flex items-center justify-center bg-slate-100 h-full">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        className="h-52 w-full object-center"
                        width={500}
                        height={500}
                      />
                    </div>
                    <button className="w-full h-[41px] bg-black text-white hover:bg-[#db4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Cart
                    </button>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
                      <p className="text-2xl font-bold text-gray-900">
                        {item.price}{" "}
                        <span className="font-normal opacity-50 line-through">{item.cutprice}</span>
                      </p>
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-center">
        <button className="bg-[#db4444] text-[#fafafa] w-[234px] h-[56px] rounded-md">View All Products</button>
      </div>
    </div>
  );
};

export default Product;
