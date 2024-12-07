"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { MdPerson } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);// Create a reference for the dropdown container

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }
  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };
  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup
  }, []);
  return (
    <div className='border-b-2'>
      <div className='text-[#fafafa] bg-black flex items-center justify-evenly p-2 text-sm md:text-base'>
        <h1 className='flex gap-x-4'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <button className='font-bold'>ShopNow</button></h1>
        <select className='bg-black border-none justify-end'>
          <option value="english">English</option>
          <option value="urdu">اردو</option>
          <option value="spanish">Español</option>
          <option value="arabic">العربية</option>
          <option value="turkish">Türkçe</option>
          <option value="chinese">中文</option>
        </select>
      </div>
      
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4 md:p-10'>
        <h2 className='text-xl md:text-2xl font-bold'>Exclusive</h2>

        {/* Mobile Menu Button */}
        <button className='md:hidden z-50' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex gap-x-4'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/signup"}>Signup</Link></li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <ul className='flex flex-col gap-y-4 p-8 mt-16'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/signup"}>Signup</Link></li>
          </ul>
        </nav>

        <div className="relative border-2 hidden md:flex justify-between">
          <input type="text" className="w-full p-2" placeholder="What are you looking for?"/>
          <div className='flex justify-center items-center p-2'><FaSearch size={20}/></div>
        </div>

        <div className='flex gap-x-4 items-center'>
          <FaSearch className='md:hidden' size={20}/>
          <FaHeart size={20} />
          <FaShoppingCart size={20} />
          <div className="relative inline-block" ref={dropdownRef}>
          <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <MdPerson size={24} />
      </button>
      {isDropdownVisible && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Manage My Profile
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Manage My Account
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Orders
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Cancellations
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Reviews
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
      </div>

        </div>
      </div>
    </div>
  )
}

export default Header