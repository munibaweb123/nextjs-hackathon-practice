import Hero from "../app/components/hero";
import Arrival from "./components/arrival";
import Categories from "./components/categories";
import Month from "./components/month";
import Product from "./components/product";
import Sales from "./components/sales-slider";


export default function Home() {
  return (
   <div className="max-w-6xl mx-auto">
    <Hero/>
    <Sales/>
    <Categories/>
    <Month/>
    <Product/>
    <Arrival/>
   
   </div>
  );
}
