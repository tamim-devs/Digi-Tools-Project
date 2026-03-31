import React from 'react'

const Count = () => {
  return (
    <div className="py-12 md:py-16 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-8">
          
          {/* ITEM 1 */}
          <div className="text-center sm:border-r-2 border-white sm:pr-8">
            <p className="text-2xl sm:text-3xl font-semibold">50K+</p>
            <p className="text-lg sm:text-xl font-medium">Active Users</p>
          </div>

          {/* ITEM 2 */}
          <div className="text-center sm:border-r-2 border-white sm:pr-8">
            <p className="text-2xl sm:text-3xl font-semibold">200+</p>
            <p className="text-lg sm:text-xl font-medium">Premium Tools</p>
          </div>

          {/* ITEM 3 */}
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-semibold">4.9</p>
            <p className="text-lg sm:text-xl font-medium">Rating</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Count