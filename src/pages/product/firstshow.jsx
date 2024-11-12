// import React from 'react'
import Chevronleft from "../../components/icons/chevronleft";
import Chevronright from "../../components/icons/chevronright";
import ProductCard from "../../components/cards/productscards";
import Products  from "../../components/product";

function FirstShow() {
  return (
    <section className="w-[80%] mx-auto flex h-[100vh] overflow-hidden">
      <div className="w-2/6 order-1 bg-firstshow bg-cover bg-center h-full">
        <div className="p-7">
          <h2 className="text-lg font-bold">Featured Products</h2>
          <p>5 Items</p>
        </div>
      </div>
      <div className="w-4/6 order-2 ml-5">
        <div className="flex items-center">
          <div className="w-2/4 text-2xl font-bold">
            <h2>BESTSELLER PRODUCTS</h2>
          </div>

          <div className="flex w-3/5 justify-between items-center">
            <ul className="flex w-2/3 gap-7">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
            <div className="flex w-1/3 gap-2 items-center">
              <Chevronleft />
              <Chevronright />
            </div>
          </div>
        </div>

        <hr className="opacity-[0.25] my-2" />
        {Products && (
          <div className="flex flex-wrap p-5 gap-4">
            {Products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FirstShow; 
