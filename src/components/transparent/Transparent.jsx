import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: "$0",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btn: "Get Started Free",
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: "$29",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btn: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: "$99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btn: "Contact Sales",
  },
];

const Transparent = () => {
  return (
    <div className="py-20 container mx-auto px-4">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center">
        Simple, Transparent Pricing
      </h2>

      <p className="text-center mt-3 text-gray-500 max-w-xl mx-auto">
        Choose the plan that fits your needs.
      </p>

   
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 flex flex-col ${
              plan.popular
                ? "bg-linear-to-r from-purple-600 to-pink-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

        
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="mt-1 opacity-80">{plan.desc}</p>

            <h1 className="text-4xl font-bold mt-6">
              {plan.price}
              <span className="text-lg opacity-70">/Month</span>
            </h1>

            <ul className="mt-6 mb-2 space-y-2 text-sm">
              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-2"><FaCheck className="text-green-400"  /> {item}</li>
              ))}
            </ul>

            <button
              className={`mt-auto w-full py-3  rounded-full font-semibold ${
                plan.popular
                  ? "bg-white text-purple-600"
                  : "bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white"
              }`}
            >
              {plan.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transparent;