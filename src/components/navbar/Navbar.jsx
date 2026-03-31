import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar shadow-sm  lg:justify-around">

      
      <div className="flex items-center gap-2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <a className="font-bold text-xl bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>

      {/* CENTER MENU */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className='ml-4'>

        <button className="btn text-white rounded-3xl text-sm bg-linear-65 from-[#4F39F6] to-[#9514FA]">
          Get Started
        </button>
      </div>

    </div>
  )
}

export default Navbar