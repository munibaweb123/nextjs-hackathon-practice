"use client";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useShoppingCart } from "use-shopping-cart";

const CartPage = () => {
  const {
    cartDetails,
  
    totalPrice,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart();

  const cartItems = Object.values(cartDetails || {});

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <h2 className="my-10">
        Home / <span className="font-semibold">Cart</span>
      </h2>

      {/* Empty Cart */}
      {cartItems.length < 1 ? (
        <div className="text-center py-20">
          <h3 className="text-lg font-bold mb-4">Your cart is empty</h3>
          <Link href="/">
            <button className="border-2 px-4 py-2 rounded-md hover:bg-[#db4444] hover:text-white">
              Return to Shop
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-2">Product</th>
                  <th className="border border-gray-300 px-2 py-2">Price</th>
                  <th className="border border-gray-300 px-2 py-2">Quantity</th>
                  <th className="border border-gray-300 px-2 py-2">Subtotal</th>
                  <th className="border border-gray-300 px-2 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex items-center gap-x-2">
                        <Image
                          src={item.image || "/placeholder.png"}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="object-cover"
                        />
                        <p className="text-sm">{item.name}</p>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-sm">
                      ${item.price}
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex items-center gap-x-2">
                        <button
                          className="p-1"
                          onClick={() => decrementItem(item.id)}
                        >
                          <AiOutlineDown />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          className="p-1"
                          onClick={() => incrementItem(item.id)}
                        >
                          <AiOutlineUp />
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-sm">
                      ${(item.quantity * item.price)}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-center">
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="p-2 border-2 w-full sm:w-auto"
              />
              <button className="border-2 w-full sm:w-[159px] h-[56px] rounded-md hover:bg-[#db4444] hover:text-white">
                Apply Coupon
              </button>
            </div>

            <div className="border-2 p-4">
              <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
              <div className="flex items-center justify-between border-b-2 py-2">
                <p>Subtotal:</p>
                
               <p>${(totalPrice ?? 0)}</p>
              </div>
              <div className="flex items-center justify-between border-b-2 py-2">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex items-center justify-between py-2">
                <p>Total:</p>
               
               <p>${(totalPrice ?? 0)}</p>
              </div>
              <Link href="/checkout">
                <button className="border-2 w-full h-[56px] rounded-md hover:bg-[#db4444] hover:text-white mt-4">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
