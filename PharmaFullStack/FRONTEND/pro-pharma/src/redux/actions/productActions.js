import axios from 'axios';
import productActionTypes from './productActionTypes';

export function loadProducts(url) {
  return async (dispatch) => {
    const { data } = await axios.get(url);
    console.log(data);

    dispatch({
      type: productActionTypes.LOAD_PRODUCTS,
      data
    });
  };
}

export function addProductToCart(product) {
  return {
    type: productActionTypes.ADD_PRODUCT_TO_CART,
    product
  };
}

export function removeProductFromCart({ _id, quantity }) {
  return {
    type: productActionTypes.REMOVE_PRODUCT_FROM_CART,
    data: { _id, quantity }
  };
}

export function removeAllFromCart(cart) {
  return {
    type: productActionTypes.REMOVE_ALL_FROM_CART,
    cart
  };
}

export function addOneUnit({ _id }) {
  return {
    type: productActionTypes.ADD_ONE_UNIT,
    _id
  };
}
export function removeOneUnit({ _id }) {
  return {
    type: productActionTypes.REMOVE_ONE_UNIT,
    _id
  };
}

export function updateDB(products, url) {
  return async (dispatch) => {
    const updatedProducts = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const product of products) {
      // eslint-disable-next-line no-await-in-loop
      const { data } = await axios.put(url, product);
      updatedProducts.push(data);
    }

    dispatch({
      type: productActionTypes.UPDATE_DB,
      updatedProducts

    });
  };
}
