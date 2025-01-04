"use client";

import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { FaCcMastercard, FaCcVisa, FaCheckSquare, FaPaypal } from "react-icons/fa";

const CheckoutPage = () => {
  const { cartDetails, totalPrice } = useShoppingCart();
  const cartItems = Object.values(cartDetails || {});

  // Billing details state
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    paymentMethod: "",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderPlacement = () => {
    if (
      !billingDetails.firstName ||
      !billingDetails.streetAddress ||
      !billingDetails.city ||
      !billingDetails.phone ||
      !billingDetails.email ||
      !billingDetails.paymentMethod
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Process the order (connect to backend or API)
    console.log("Order details:", { cartItems, totalPrice, billingDetails });
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
        <p className="text-lg">Your order has been successfully placed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <h2 className="my-10">
        Account / My Account / Product / View Cart /
        <span className="font-semibold"> Checkout</span>
      </h2>

      <h3 className="text-4xl font-bold">Billing Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-4">
        {/* Billing Details Form */}
        <div className="space-y-2">
          <div>
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-200"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={billingDetails.lastName}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-100"
            />
          </div>
          <div>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={billingDetails.companyName}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-100"
            />
          </div>
          <div>
            <label>Street Address*</label>
            <input
              type="text"
              name="streetAddress"
              value={billingDetails.streetAddress}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-200"
            />
          </div>
          <div>
            <label>Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={billingDetails.apartment}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-100"
            />
          </div>
          <div>
            <label>Town/City*</label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-200"
            />
          </div>
          <div>
            <label>Phone Number*</label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-100"
            />
          </div>
          <div>
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-slate-200"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <FaCheckSquare size={20} color="#db4444" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center gap-x-2">
                <div className="w-[50px] h-[50px] flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-sm">{item.name}</p>
              </div>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}

          {/* Payment Methods */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="Bank Transfer"
                onChange={handleInputChange}
                className="h-4 w-4 text-[#db4444] focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="bank"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                Bank Transfer
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="Cash on Delivery"
                onChange={handleInputChange}
                className="h-4 w-4 text-[#db4444] focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="cod"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                Cash on Delivery
              </label>
            </div>
            <FaCcVisa size={40} color="#0000ff" />
            <FaCcMastercard size={40} />
            <FaPaypal size={40} />
          </div>

          {/* Order Total */}
          <div className="border-2 p-4">
            <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
            <div className="flex items-center justify-between border-b-2 py-2">
              <p>Subtotal:</p>
              <p>${totalPrice ?? 0}</p>
            </div>
            <div className="flex items-center justify-between border-b-2 py-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <p>Total:</p>
              <p>${totalPrice ?? 0}</p>
            </div>
            <button
              className="border-2 w-full h-[56px] rounded-md hover:bg-[#db4444] hover:text-white mt-4"
              onClick={handleOrderPlacement}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
