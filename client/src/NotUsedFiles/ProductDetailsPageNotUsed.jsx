// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetailsPage = ({ products }) => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id, 10));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="flex">
//         <img
//           className="w-1/2 h-auto object-cover rounded-md"
//           src={product.imageUrl[colorOptions.indexOf(product.colorOptions[0])]}
//           alt={`Product ${product.id}`}
//         />
//         <div className="ml-8">
//           <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//           <p className="text-gray-800 mb-4">{product.description}</p>
//           <p className="text-black font-semibold">Price: ${product.price}</p>
//           <div className="mt-4 flex space-x-2">
//             {product.colorOptions.map((color) => (
//               <div
//                 key={color}
//                 className={`w-6 h-6 rounded-full border border-gray-500`}
//                 style={{ backgroundColor: color }}
//               ></div>
//             ))}
//           </div>
//           {/* Additional details, specs, etc. */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;