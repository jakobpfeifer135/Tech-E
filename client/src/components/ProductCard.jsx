import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, description, imageUrl, colorOptions, price } = product;
  const [selectedColor, setSelectedColor] = useState(colorOptions[3]);
  const [quantity, setQuantity] = useState(1);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    onAddToCart({
      id,
      name,
      description,
      quantity,
      selectedColor,
      price,
    });
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div key={id} className="bg-[--Navy] p-6 rounded-lg shadow-md relative">
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
      <div className="mt-4 flex flex-wrap p-2 justify-center items-center">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity === 1}
          className="bg-white text-black py-1 px-2 rounded-md border border-gray-300 mb-2"
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="text-lg font-bold bg-white text-black py-1 px-2 rounded-md border border-gray-300 w-8 text-center mb-2"
        />
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="bg-white text-black py-1 px-2 rounded-md border border-gray-300"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-white text-black px-4 py-2 rounded-md hover:bg-[--Gold] hover:text-black font-serif text-center"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;



