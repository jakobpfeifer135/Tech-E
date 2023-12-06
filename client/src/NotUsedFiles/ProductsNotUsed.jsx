// import React from 'react';
// import ProductCard from '../components/ProductCard';
// // import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// // import { QUERY_SINGLE_PRODUCT } from '../utils/queries';
// import { QUERY_PRODUCT } from '../utils/queries';

// const Products = () => {
//   // Sample product data
//   const { loading, data } = useQuery(QUERY_PRODUCT);
//   const products = data?.products || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             // Use parentheses () for mapping
//             products.map((product) => (
              
//                 <ProductCard product={product} key={product._id} />
              
//             ))
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Products;
