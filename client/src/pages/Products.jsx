import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // You can manage your product data or fetch it from an API here
  const products = [
    // Example product data
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1.',
      imageUrl: ['url1_1', 'url1_2', 'url1_3'], // Array of image URLs for different color options
      colorOptions: ['Red', 'Green', 'Blue'],
      price: 29.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2.',
      imageUrl: ['url2_1', 'url2_2', 'url2_3'],
      colorOptions: ['Black', 'White', 'Gray'],
      price: 39.99,
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Products</h2>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;