import React from 'react';

import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const main = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

  



      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 ">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {/* You can create separate ProductCard components for each product */}
            <div className="bg-gray-100 border-[#ecd398] border-4 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-black">Product 1</h3>
              <p className="text-black">Description of Product 1.</p>
            </div>
            <div className="bg-gray-100 border-[#ecd398] border-4 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-black">Product 2</h3>
              <p className="text-black">Description of Product 2.</p>
            </div>
            <div className="bg-gray-100 border-[#ecd398] border-4 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-black">Product 3</h3>
              <p className="text-black">Description of Product 3.</p>
            </div>
            {/* Add more products as needed */}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="bg-[#011638] py-8">
        <div className="container mx-auto flex justify-center">
          <a href="#" className="text-2xl mx-4 text-white hover:text-[#ecd398]">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[#ecd398]">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[#ecd398]">
            <FaGithub />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[#ecd398]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default main;