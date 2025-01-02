"use client";
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const salesEndDate = new Date(2025, 0, 3, 0, 0, 0); // Year 2025, January 3rd, 00:00:00
const calculateTimeLeft = () => salesEndDate.getTime() - new Date().getTime();

const Sales = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentIndex, setCurrentIndex] = useState(0); // State for slider navigation

  const sliderItems = [
    {
      image: "/slider/video-game.jpg",
      alt: "Product 1",
      heading: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: "$99.99",
      cutprice: "$149",
      off: "-40%",
    },
    {
      image: "/slider/keyboard.jpg",
      alt: "Product 2",
      heading: "AK-900 Wired Keyboard",
      rating: 5,
      price: "$149.99",
      cutprice: "$199",
      off: "-50%",
    },
    {
      image: "/slider/lcd.jpg",
      alt: "Product 3",
      heading: "IPS LCD Gaming Monitor",
      rating: 5,
      price: "$199.99",
      cutprice: "$249",
      off: "-35%",
    },
    {
      image: "/slider/ipad.jpg",
      alt: "Product 4",
      heading: "Gaming Monitor",
      rating: 5,
      price: "$199.99",
      off: "-26%",
    },
    {
      image: "/slider/laptop.jpg",
      alt: "Product 5",
      heading: "Gaming Mouse",
      rating: 5,
      price: "$49.99",
      off: "-20%",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: number) => {
    return {
      days: Math.floor(date / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0"),
      hours: Math.floor((date / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0"),
      minutes: Math.floor((date / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0"),
      seconds: Math.floor((date / 1000) % 60)
        .toString()
        .padStart(2, "0"),
    };
  };

  const formattedTime = formatTime(timeLeft);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderItems.length - 3 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[1170px] mx-auto">
      {/* Header Section */}
      <div className="flex gap-x-4 items-center text-[#db4444] font-bold py-4">
        <div className="bg-[#db4444] w-[20px] h-[40px] rounded-md"></div>
        <h2>Today&apos;s</h2>
      </div>
      <div className="block md:flex items-center justify-between">
        <div className="block md:flex items-center gap-x-4 font-bold">
          <h2 className="text-4xl font-bold flex items-center justify-start pr-10">
            Flash Sales
          </h2>
          <div className="flex gap-x-4">
            <div>
              <p className="text-sm">Days</p>
              <h3 className="text-4xl">{formattedTime.days}</h3>
            </div>
            <p className="text-[#db4444] text-2xl">:</p>
            <div>
              <p className="text-sm">Hours</p>
              <h3 className="text-4xl">{formattedTime.hours}</h3>
            </div>
            <p className="text-[#db4444] text-2xl">:</p>
            <div>
              <p className="text-sm">Minutes</p>
              <h3 className="text-4xl">{formattedTime.minutes}</h3>
            </div>
            <p className="text-[#db4444] text-2xl">:</p>
            <div>
              <p className="text-sm">Seconds</p>
              <h3 className="text-4xl">{formattedTime.seconds}</h3>
            </div>
          </div>
        </div>
        <div className="text-black flex items-center gap-x-2">
          <AiOutlineArrowLeft
            size={50}
            className="rounded-full p-2 bg-[#f5f5f5] cursor-pointer"
            onClick={goToPreviousSlide}
          />
          <AiOutlineArrowRight
            size={50}
            className="rounded-full p-2 bg-[#f5f5f5] cursor-pointer"
            onClick={goToNextSlide}
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="w-[33.33%] flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-lg shadow-md relative">
                <div className="absolute bg-[#db4444] p-2 m-2 rounded-md z-10">
                  {item.off}
                </div>
                <div className="absolute right-2 z-10">
                  <FaRegHeart size={50} className="bg-white p-2 rounded-full" />
                  <FaEye size={50} className="bg-white p-2 rounded-full" />
                </div>
                <div className="group w-full h-[350px] flex flex-col items-center justify-center relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-48 object-cover rounded-t-lg"
                    width={500}
                    height={500}
                  />
                  <button className="w-full h-[41px] bg-black text-white hover:bg-[#db4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {item.heading}
                    </h2>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.price}{" "}
                      <span className="font-normal opacity-50 line-through">
                        {item.cutprice}
                      </span>
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
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#db4444] text-[#fafafa] w-[234px] h-[56px] rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Sales;
