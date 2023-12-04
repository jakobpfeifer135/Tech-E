import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, description, imageUrl, colorOptions, price } = product;
  const [selectedColor, setSelectedColor] = useState(colorOptions[3]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div key={id} className="bg-[--Navy] p-6  rounded-lg shadow-md">
      <div className="mb-4" style={{ marginTop: '-50px' }}>
        <img
          className="border-l-8 border-r-8 border-b-8 border-gray-100 w-full h-36 object-cover object-center rounded-xl"
          src={imageUrl[colorOptions.indexOf(selectedColor)]}
          alt={`Product ${id}`}
        />
      </div>
      <h3 className="text-lg text-center font-bold mb-2 text-white">{name}</h3>
      <p className="text-white pb-3">{description}</p>
      <p className="text-white text-center font-semibold">Price: ${price}</p>
      <div className="mt-4 flex flex-wrap p-2 justify-center items-center "> {/* Updated: Added flex-wrap */}
        {colorOptions.map((color) => (
          <button
            key={color}
            onClick={() => handleColorSelection(color)}
            className={`bg-white text-black p-2 mr-2 rounded-md hover:bg-[--Gold] hover:text-black font-serif mb-2 min-w-[55px] max-w-[55px]`} 
          >
            {color}
          </button>
        ))}
      </div>
      <Link
        to={`/product/${id}`} // Redirect to the product details page
        className="block mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black   font-serif text-center"
      >
       Add To Cart
      </Link>
    </div>
  );
};

export default ProductCard;





