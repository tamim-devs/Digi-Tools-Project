import React from "react";
import UserImg from "../../assets/user.png";
const Steps = () => {
  return (
    <div className="py-16 px-4">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl text-center font-extrabold">
        Get Started In 3 Steps
      </h2>

      <p className="text-center mt-3 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        
        
        <div className="relative bg-white rounded-2xl shadow-sm border py-28 px-6 text-center">
          <span className="absolute top-4 right-4  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-3 py-3 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img
              src={UserImg}
              alt=""
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-2xl font-semibold">Create Account</h3>
          <p className="text-gray-500 text-lg mt-2">
           Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white rounded-2xl shadow-sm border p-8 text-center">
            <span className="absolute top-4 right-4  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-3 py-3 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt=""
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-lg font-semibold">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse tools and select what you need easily.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white rounded-2xl shadow-sm border p-8 text-center">
            <span className="absolute top-4 right-4  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-3 py-3 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt=""
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-lg font-semibold">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using instantly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;