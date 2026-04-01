import React from "react";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";
const Steps = () => {
  return (
    <div className="py-16 px-4 bg-[#F9FAFC]">
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
              alt="img"
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-2xl font-extrabold">Create Account</h3>
          <p className="text-gray-500 text-lg mt-2">
           Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

       <div className="relative bg-white rounded-2xl shadow-sm border py-28 px-6 text-center">
          <span className="absolute top-4 right-4  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-3 py-3 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img
              src={PackageImg}
              alt="img"
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-2xl font-extrabold">Choose Products</h3>
          <p className="text-gray-500 text-lg mt-2">
           Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

         <div className="relative bg-white rounded-2xl shadow-sm border py-28 px-6 text-center">
          <span className="absolute top-4 right-4  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-3 py-3 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img
              src={RocketImg}
              alt="img"
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-2xl font-extrabold">Start Creating</h3>
          <p className="text-gray-500 text-lg mt-2">
          Download and start using your premium  tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;