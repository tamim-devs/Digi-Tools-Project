import React from 'react'

const Card = ({product}) => {
  return (
    <div>
         <div >
      <div className="card  bg-base-100 shadow-xl  border border-gray-300 relative">

        {/* Popular badge */}
        <span className="absolute top-4 right-4 badge badge-primary badge-outline">
          {product.tagType}
        </span>

        <div className="card-body">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <img src={product.icon} alt={product.name} />
          </div>

          {/* Title */}
          <h2 className="card-title text-lg font-bold">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-start text-gray-500">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-3 text-start">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-gray-400"> / {product.period}</span>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-2 text-sm">
  {product.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="text-green-500">✔</span> {feature}
    </li>
  ))}
</ul>

          {/* Button */}
          <div className="card-actions mt-6">
            <button className="btn w-full text-white rounded-3xl border-none  bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card