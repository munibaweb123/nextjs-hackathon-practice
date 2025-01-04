'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  
} from "@/components/ui/sheet";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingCartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails,removeItem, totalPrice } = useShoppingCart();

  return (
    <Sheet
      open={shouldDisplayCart} 
      onOpenChange={() => handleCartClick()} // Ensure it updates state
    >
    
      
      {/* Modal Content */}
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-8 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="text-2xl py-6">You don&apos;t have any items</h1>
              ) : (
                <>
                {Object.values(cartDetails??{}).map((entry)=>(
                    <li key={entry.id} className="flex py-6 ">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image src={entry.image as string} alt="product image" width={100} height={100}/>
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{entry.name}</h3>
                                <p className="ml-4">${entry.price}</p>
                        
                                </div>
                                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                            </div>

                            <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">QTY: {entry.quantity}</p>
                                <button type="button" className="font-medium text-[#db4444] hover:text-[#db4444]/80"
                                onClick={()=>removeItem(entry.id)}>
                                Remove
                                </button>
                            </div>
                        </div>
                    </li>
        
                ))}
                </>
              )}
            </ul>
          </div>

          <div className="border border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>{totalPrice}</p>
            </div>
              <p className="mt-0.5 text-sm text-gray-500">Sipping and taxes are calculated at checkout.</p>
             <div>
             <Button className="w-full bg-[#db4444]">
                <Link href={"/checkout"}>Checkout</Link>
              </Button>
             </div>
             <div className="flex justify-center gap-x-4">
                <p>Or </p>
                <button className=" text-primary hover:text-primary/80"
                onClick={()=>handleCartClick()}>
                Continue shopping
              </button>
             </div>
          </div>
        </div>
        
        {/* Close Button */}
        <SheetClose asChild>
          <Button type="button" variant="outline">
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
