import React from 'react'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="py-16 md:py-20">
      
      {/* SAME WIDTH AS NAVBAR */}
      <div className="container mx-auto px-20">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-12">

          
          <div className="max-w-xl text-center lg:text-left">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              New: AI-Powered Tools Available
            </div>

            {/* HEADING */}
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              Supercharge Your <br className="hidden sm:block" />
              Digital Workflow
            </h1>

            
            <p className="mt-4 text-gray-500 text-lg">
              Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.
            Explore Products
            </p>

           

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              
              <button className="px-6 cursor-pointer py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                Explore Products
              </button>

              <button className="px-6 cursor-pointer py-3 rounded-full border border-purple-400 text-purple-600 font-semibold flex items-center gap-2">
                ▶ Watch Demo
              </button>

            </div>
          </div>

        
          <div className="flex justify-center lg:justify-end w-full">
            <img
              src={BannerImg}
              alt="banner"
              className="w-72 sm:w-96  rounded-xl shadow-md"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner