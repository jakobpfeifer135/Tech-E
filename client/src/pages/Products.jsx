import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Modern Watch',
      description: 'A sleek and minimalist timepiece for everyday use.',
      imageUrl: ['watch_1', 'watch_2', 'watch_3'],
      colorOptions: ['Black', 'White', 'Silver'],
      price: 99.99,
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      description: 'Cutting-edge earbuds with high-fidelity sound.',
      imageUrl: ['earbuds_1', 'earbuds_2', 'earbuds_3'],
      colorOptions: ['Black', 'Silver', 'Gold'],
      price: 79.99,
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Discover Our Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="mb-8">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
