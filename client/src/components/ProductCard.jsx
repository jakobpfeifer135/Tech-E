import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, description, imageUrl, colorOptions, price } = product;
  const [selectedColor, setSelectedColor] = useState(colorOptions[3]);
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  return (
    <div key={id} className="bg-gray-300 p-6 rounded-lg shadow-md border-4 border-black/30">
      <div className="mb-4" style={{ marginTop: '-50px' }}>
        <img
          className="border-l-8 border-r-8 border-b-8 border-gray-100 w-full h-36 object-cover object-center rounded-xl"
          src={imageUrl[colorOptions.indexOf(selectedColor)]}
          alt={`Product ${id}`}
        />
      </div>
      <h3 className="text-lg text-center font-bold mb-2 text-black">{name}</h3>
      <p className="text-black pb-3">{description}</p>
      <p className="text-black text-center font-semibold">Price: ${price}</p>
      <div className="mt-4 flex p-2 justify-center items-center space-x-2"> {/* Added space-x-2 for horizontal spacing */}
        {colorOptions.map((color) => (
          <div
            key={color}
            onClick={() => handleColorSelection(color)}
            className={`w-8 h-8 rounded-full border border-gray-500/60 cursor-pointer ${selectedColor === color ? 'border-black' : ''}`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <Link
        to={`/product/${id}`} // Redirect to the product details page
        className="block mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black font-serif text-center"
      >
       Add To Cart
      </Link>
    </div>
  );
};
export default ProductCard;






