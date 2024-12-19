'use client';
import React, { useRef } from 'react';
import { FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
import { MdHealthAndSafety, MdPets, MdSports, MdWatch } from "react-icons/md";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { FaBowlFood, FaPersonDress } from 'react-icons/fa6';
import { GiMedicinePills } from 'react-icons/gi';

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; // Adjust to scroll half the screen width
      if (direction === 'left') {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="container max-w-[1170px] mx-auto px-4">
      <div className="flex gap-x-4 items-center text-[#db4444] font-bold py-4">
        <div className="bg-[#db4444] w-[20px] h-[40px] rounded-md"></div>
        <h2>Categories</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center gap-x-4 font-bold mb-4 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-start pr-10">Browse By Category</h2>
        </div>
        <div className="text-black flex items-center gap-x-2">
          <AiOutlineArrowLeft
            size={50}
            className="rounded-full p-2 bg-[#f5f5f5] cursor-pointer"
            onClick={() => scroll("left")}
          />
          <AiOutlineArrowRight
            size={50}
            className="rounded-full p-2 bg-[#f5f5f5] cursor-pointer"
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 pb-4 scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {[ // Array of categories
          { icon: <FiSmartphone size={100}/>, label: "Cell phone" },
          { icon: <FiMonitor size={100} />, label: "Computers" },
          { icon: <MdWatch size={100} />, label: "Smart watch" },
          { icon: <FaCamera size={100} />, label: "Camera" },
          { icon: <FaHeadphones size={100} />, label: "Headphones" },
          { icon: <FaGamepad size={100} />, label: "Gaming" },
          { icon: <FaPersonDress size={100} />, label: "Clothing" },
          { icon: <GiMedicinePills size={100} />, label: "Medicines" },
          { icon: <MdSports size={100} />, label: "Sports" },
          { icon: <MdHealthAndSafety size={100} />, label: "Health & Safety" },
          { icon: <FaBowlFood size={100} />, label: "Grocery" },
          { icon: <MdPets size={100} />, label: "Pets" },
        ].map((category, index) => (
          <div
            key={index}
            className="border-2 p-4 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300 
                       text-center flex-shrink-0"
            style={{
              scrollSnapAlign: "center",
            }}
            
          >
             <div className="flex items-center justify-center">
              <button>
                <Link href={"/product"}>{category.icon}</Link>
              </button>
            </div>
            <p className="mt-2 text-sm md:text-base">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;