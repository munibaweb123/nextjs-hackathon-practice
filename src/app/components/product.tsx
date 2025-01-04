'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaEye, FaRegHeart } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { client } from "@/sanity/lib/client";
import AddToCart from "./AddToCart";

interface Product {
  id: number;
  image: string;
  alt: string;
  heading: string;
  rating: number;
  price: number;
  cutprice?: string;
  off: string;
  description: string;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [isClient, setIsClient] = useState(false);

  // Ensure the component is only rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        id,
        "image": image.asset->url,
        alt,
        heading,
        rating,
        price,
        cutprice,
        off,
        description
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  // Handle Add to Cart
 

  // Prevent rendering on the server
  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-[1170px] mx-auto">
      {/* Header Section */}
      <div className="flex gap-x-4 items-center text-[#db4444] font-bold py-4">
        <div className="bg-[#db4444] w-[20px] h-[40px] rounded-md"></div>
        <h2>Our Products</h2>
      </div>

      {/* Carousel */}
      <Carousel>
        <div className="flex flex-col md:flex-row items-center justify-between relative gap-y-4">
          <h2 className="text-4xl font-bold flex items-center justify-start pr-10 mb-4 md:mb-0">
            Explore Our Products
          </h2>
          <div className="flex md:right-0 bottom-0 absolute flex-col md:flex-row items-center gap-4 mt-8 md:mt-0">
            <CarouselPrevious>
              <AiOutlineArrowLeft
                size={50}
                className="rounded-full p-2 bg-[#f5f5f5] shadow-md"
              />
            </CarouselPrevious>
            <CarouselNext>
              <AiOutlineArrowRight
                size={50}
                className="rounded-full p-2 bg-[#f5f5f5] shadow-md"
              />
            </CarouselNext>
          </div>
        </div>

        <CarouselContent className="-ml-2 md:-ml-4 mt-10">
          {products.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="w-full relative py-4">
                <div className="bg-white rounded-lg shadow-md relative">
                  <div className="absolute bg-[#db4444] p-2 m-2 rounded-md z-10">
                    -{item.off}%
                  </div>
                  <div className="absolute right-2 z-10 flex flex-col gap-2">
                    <FaRegHeart size={30} className="bg-white p-2 rounded-full" />
                    <FaEye size={30} className="bg-white p-2 rounded-full" />
                  </div>
                  <div className="group w-full h-[350px] flex flex-col items-center justify-center relative">
                    <div className="flex items-center justify-center bg-slate-100 h-full">
                      <Link href={`/product/${item.id}`}>
                        <Image
                          src={item.image || "/product/product1.png"}
                          alt={item.alt || "Product Image"}
                          className="h-52 w-full object-center"
                          width={500}
                          height={500}
                        />
                      </Link>
                    </div>
                   
                      <AddToCart  
                        currency="USD"
                        name={item.heading}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        id={item.id}
                        key={item.id}
                        
                      />
                   
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
                      <p className="text-2xl font-bold text-gray-900">
                        ${item.price}{" "}
                        {item.cutprice && (
                          <span className="font-normal opacity-50 line-through">
                            {item.cutprice}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Product;
