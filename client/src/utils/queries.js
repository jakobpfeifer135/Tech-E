import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query allProduct {
    products {
    _id
    color
    description
    image
    name
    price
    quantity
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query singleProduct($productId: ID!) {
    product(productId: $productId) {
    _id
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


