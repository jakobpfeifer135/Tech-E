import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, description, imageUrl, colorOptions, price } = product;
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div key={id} className="bg-gray-100 border-[--Gold] border-4 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <img
          className="w-full h-32 object-cover object-center rounded-md"
          src={imageUrl[colorOptions.indexOf(selectedColor)]}
          alt={`Product ${id}`}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">{name}</h3>
      <p className="text-black">{description}</p>
      <p className="text-black font-semibold">Price: ${price}</p>
      <div className="mt-4 flex space-x-2">
        {colorOptions.map((color) => (
          <button
            key={color}
            onClick={() => handleColorSelection(color)}
            className={`w-6 h-6 rounded-full border border-gray-500 ${selectedColor === color ? 'border-black' : ''}`}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      <Link
        to={`/product/${id}`} // Redirect to the product details page
        className="block mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black focus:outline-none focus:ring focus:border-indigo-300 font-serif"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;





