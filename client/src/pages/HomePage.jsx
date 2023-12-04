import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {useQuery} from "@apollo/client";

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
      description: '',
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
      name: 'Sony WH-1000XM4',
      description: '',
      colorOptions: ['blue', 'pink', 'red', 'gray'],
      imageUrl: [
        '../src/assets/images/BlueSony.webp',
        '../src/assets/images/PinkSony.webp',
        '../src/assets/images/RedSony.webp',
        '../src/assets/images/GraySony.webp',
      ],
      price: '228.00',
    },
    {
      id: 3,
      name: 'Apple Watch series 4',
      description: '',
      colorOptions: ['blue', 'green', 'red', 'black'],
      imageUrl: [
        '../src/assets/images/BlueAppleWatch.webp',
        '../src/assets/images/GreenAppleWatch.webp',
        '../src/assets/images/RedAppleWatch.webp',
        '../src/assets/images/BlackAppleWatch.webp',
      ],
      price: '169.99',
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
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black   font-serif ">Buy Now</button>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      <section className="py-16">

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5">
          {/* Left section for text description and explore button */}
          <div className="lg:col-span-1">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4"> Experience Innovation at Its Best! </h2>
              <p className="text-gray-800 mb-4">Looking for cutting-edge technology that redefines the way you live, work, and play? Look no further! Introducing our top three tech products:</p>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black  ">
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

      <section className="py-16 bg-gray-200">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
    {/* Left section with image */}
    <div className="lg:w-1/2 lg:pr-8 mb-8">
      <img
        className="w-full h-auto object-cover"
        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
        alt="Section Image"
      />
    </div>

   
    <div className="lg:w-1/2 lg:pl-8">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-gray-800 mb-4">
      Choose us for unmatched quality, reliability, and a seamless experience.
      </p>

      
      <div className="bg-white p-4 rounded-md mb-4">
        <p className="text-lg font-semibold mb-2">Larger Text Box Content</p>
        <p className="text-gray-700">Additional details or content for the larger text box.</p>
      </div>

      
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-white p-4 rounded-md flex-1">
            <p className="text-lg font-semibold mb-2">Box {index}</p>
            <p className="text-gray-700">Content for Box {index}</p>
          </div>
        ))}
      </div>
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

