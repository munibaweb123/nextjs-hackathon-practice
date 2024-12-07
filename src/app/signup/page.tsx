"use client";
import Image from 'next/image';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-4 md:px-10 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/signup/smartphone.png"
            alt="Smartphone with cart"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Create an account
            </h2>
            <p className="text-center font-bold text-gray-700">
              Enter your details below
            </p>
            
            {/* Input Fields */}
            <div className="space-y-4">
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Name"
                className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email or Phone Number"
                className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Signup Buttons */}
            <button
              type="button"
              onClick={() => window.location.href = "/login"}
              className="w-full py-3 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => window.location.href = "/login"}
              className="w-full py-3 flex items-center justify-center gap-4 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <FaGoogle size={20} /> Sign up with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                className="font-medium text-orange-600 hover:text-orange-700"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
