import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 px-6 md:px-16 py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed w-6/12">
Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Templates</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>

         
        </div>
      </div>

   
      <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2026 Digitools. All rights reserved.</p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;