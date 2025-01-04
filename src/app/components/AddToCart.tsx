'use client'
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


export interface ProductCart{
    name:string,
    description:string,
    price:number,
    currency:string,
    image:string
}

export default function AddToCart({name,description,price,currency,image}:ProductCart){
    const {addItem,handleCartClick}= useShoppingCart()
    const Product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlFor(image).url(),
        id:""
    }
    return(
        <Button onClick={()=>{addItem(Product);handleCartClick()}}>Add to Cart</Button>
    )
}