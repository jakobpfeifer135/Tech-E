import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
 query allProduct($name: String, $minPrice: Float, $maxPrice: Float, $sortMinPrice: Boolean, $sortMaxPrice: Boolean, $category: ID) {
  products(name: $name, minPrice: $minPrice, maxPrice: $maxPrice, sortMinPrice: $sortMinPrice, sortMaxPrice: $sortMaxPrice, category: $category) {
    _id
    category {
      _id
      name
    }
    color
    description
    details
    image
    name
    price
    quantity
  }
}
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query singleProduct($id: ID!) {
  product(_id: $id) {
    _id
    category {
      _id
      name
    }
    color
    description
    details
    image
    name
    price
    quantity
  }
}
`;




