import React from "react";

const Workflow = () => {
  return (
    <div className="py-20 px-4 bg-linear-to-r from-purple-600 via-[#9514FA] to-indigo-500 text-white">
      
      <div className="max-w-4xl mx-auto text-center">
        
  
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Ready To Transform Your Workflow?
        </h2>

  
        <p className="mt-4 text-sm md:text-lg opacity-90">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

   
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
     
          <button className="px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-purple-600 transition">
            Explore Products
          </button>

       
          <button className="px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

   
        <p className="mt-6 text-sm opacity-80">
       14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Workflow;