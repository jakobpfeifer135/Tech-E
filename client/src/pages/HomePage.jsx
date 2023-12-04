import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
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

    autoplaySpeed: 2500,

  };
  const products = [
    {
      id: 1,
      name: 'Airpods 2nd Gen',
      description: 'Elevate your audio experience with AirPods Gen 2 - Unleash the power of wireless sound today!',
      colorOptions: ['blue', 'pink', 'red', 'white'],
      imageUrl: [
        '../src/assets/images/BlueAirpods.webp',
        '../src/assets/images/PinkAirpods.webp',
        '../src/assets/images/RedAirpods.webp',
        '../src/assets/images/WhiteAirpods.webp',
      ],
      price: '129.99',
    },
    {
      id: 2,
      name: 'Product 1',
      description: 'Description of Product 1.',
      colorOptions: ['blue', 'pink', 'red', 'white'],
      imageUrl: [
        '../src/assets/images/BlueAirpods.webp',
        '../src/assets/images/PinkAirpods.webp',
        '../src/assets/images/RedAirpods.webp',
        '../src/assets/images/WhiteAirpods.webp',
      ],
    },
    {
      id: 3,
      name: 'Product 1',
      description: 'Description of Product 1.',
      colorOptions: ['blue', 'pink', 'red', 'white'],
      imageUrl: [
        '../src/assets/images/BlueAirpods.webp',
        '../src/assets/images/PinkAirpods.webp',
        '../src/assets/images/RedAirpods.webp',
        '../src/assets/images/WhiteAirpods.webp',
      ],
    },

  ];
  return (
    <div className="bg-gray-100 min-h-screen">





      <section className="bg-black">
        <div className="container mx-auto flex items-center justify-center h-[320px] relative">
          <Slider {...sliderSettings} className="w-full max-w-[900px]">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative">
                <img className="max-h-[300px] w-full object-cover" src={`../src/assets/images/carousel-img${index}.webp`} alt={`Special Item ${index}`} />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black focus:outline-none focus:ring focus:border-indigo-300 font-serif ">Buy Now</button>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      <section className="py-16">

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left section for text description and explore button */}
          <div className="lg:col-span-1">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4"> Experience Innovation at Its Best! </h2>
              <p className="text-gray-800 mb-4">Looking for cutting-edge technology that redefines the way you live, work, and play? Look no further! Introducing our top three tech products:</p>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#ecd398] hover:text-black focus:outline-none focus:ring focus:border-indigo-300">
                Explore
              </button>
            </div>
          </div>

          {/* Right section for product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            {/* Advanced Product Cards */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />

            ))}
          </div>
        </div>
      </section>


      {/* Social Media Links */}
      <div className="bg-[--Navy] py-8">
        <div className="container mx-auto flex justify-center">
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaGithub />
          </a>
          <a href="#" className="text-2xl mx-4 text-white hover:text-[--Gold]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;

