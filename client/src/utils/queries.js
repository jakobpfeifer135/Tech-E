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

export const QUERY_USER = gql`
  query getUser {
  user {
    _id
    email
    name
    orders {
      _id
      products {
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
      purchaseDate
    }
    wishlist {
      _id
      color
      image
      name
      price
    }
  }
}
`;


export const QUERY_CHECKOUT = gql`
  query createCheckout($products: [ProductInput]) {
  checkout(products: $products) {
    session
  }
}
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
  categories {
    _id
    name
  }
}
`;

export const QUERY_ORDER = gql`
  query getOrder($id: ID!) {
  order(_id: $id) {
    __id
    products {
      _id
      category {
        _id
        name
      }
      image
      price
      name
      description
      color
    }
  }
}
`;
