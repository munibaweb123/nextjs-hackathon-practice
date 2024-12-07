"use client";
import Image from "next/image";
import React from "react";

const Login = () => {
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

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Log in to Exclusive
            </h2>
            <p className="text-center font-bold text-gray-700">Enter your details below</p>

            {/* Input Fields */}
            <div className="space-y-4">
              <input
                type="text"
                id="username"
                name="username"
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

            {/* Login Button and Forgot Password */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="w-full md:w-auto py-3 px-6 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Login
              </button>
              <p className="text-center text-red-600 hover:text-red-700 cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
