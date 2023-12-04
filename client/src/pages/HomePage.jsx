import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const sliderSettings = {
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  };

  return (
    <div className="bg-gray-100 min-h-screen">




<section className=" bg-black ">
  <div className="container mx-auto flex items-center justify-center h-[320px]">
    <Slider {...sliderSettings} className="w-full max-w-[900px] ">
      <div>
        <img className="max-h-[300px] w-full object-cover" src="../src/assets/images/carousel-img1.webp" alt="Special Item 1" />
      </div>
      <div>
        <img className="max-h-[300px] w-full object-cover" src="../src/assets/images/carousel-img2.webp" alt="Special Item 2" />
      </div>
      <div>
        <img className="max-h-[300px] w-full object-cover" src="../src/assets/images/carousel-img3.webp" alt="Special Item 3" />
      </div>
    </Slider>
  </div>
</section>



      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Product Cards */}
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <div key={product} className="bg-gray-100 border-[#ecd398] border-4 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <img className="w-full h-32 object-cover object-center rounded-md" src={`product${product}.jpg`} alt={`Product ${product}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Product {product}</h3>
                <p className="text-black">Description of Product {product}.</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300">Add to Cart</button>
              </div>
            ))}
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

export default Main;

