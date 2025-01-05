'use client'
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";



export interface ProductCart{
    name:string,
    description:string,
    price:number,
    currency:string,
    image:string,
    id:number
}

export default function AddToCart({name,description,price,currency,image,id}:ProductCart){
    const {addItem,handleCartClick}= useShoppingCart()
    const Product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlFor(image).url(),
        id:id,
          sku: `${name}-${Math.random().toString(36).substr(2, 9)}`
    }
    return(
        <Button className="hover:bg-[#db4444] w-full hover:text-white shadow-md" onClick={()=>{addItem(Product);handleCartClick()}}>Add to Cart</Button>
    )
}