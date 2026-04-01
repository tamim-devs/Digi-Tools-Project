import React, { use } from "react";
import Card from './../card/Card';

const Digitaltools = ({ProductsPromise}) => {
    const products = use(ProductsPromise);
    console.log(products);
    
  return (
    <div className="py-32 container mx-auto px-4 text-center">
      <div>
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className="text-center mt-2 text-xl max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="mt-5 gap-4 flex justify-center">
            <button className="px-6 cursor-pointer py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                 Products
              </button>
              <button className="px-6 cursor-pointer py-3 rounded-full text-black font-semibold bg-white ">
                 Cart
              </button>
        </div>
      </div>

     <div className="py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default Digitaltools;
