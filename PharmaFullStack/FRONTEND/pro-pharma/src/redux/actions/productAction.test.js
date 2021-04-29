import axios from 'axios';
import { loadProducts, addProductToCart, removeProductFromCart } from './productActions';
import productActionTypes from './productActionTypes';

jest.mock('axios');

describe('Given a loadProducts function', () => {
  describe('When invoked it should return a function that when invoked', () => {
    test('Then should dispatch an object with type LOAD_PRODUCTS and the fetched data', async () => {
      axios.get.mockReturnValueOnce({
        data: 'hello'
      });

      const action = {
        type: productActionTypes.LOAD_PRODUCTS,
        data: 'hello'
      };

      const dispatch = jest.fn();

      const func = loadProducts('hi');
      await func(dispatch);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
describe('Given a function addProductToCart', () => {
  describe('When invoked with an object with name: medicine', () => {
    test('Then it should return an object with type ADD_PRODUCT_TO_CART, and product', () => {
      const product = { name: 'medicine' };
      const returnObject = addProductToCart(product);

      expect(returnObject).toEqual({ type: productActionTypes.ADD_PRODUCT_TO_CART, product });
    });
  });
});
describe('Given a function removeProductFromCart', () => {
  describe('When invoked with an object with a property _id: 10', () => {
    test('Then should return an aciton with type REMOVE_PRODUCT_FROM_CART and _id 10', () => {
      const product = { _id: 10 };
      const expectedAction = {
        type: productActionTypes.REMOVE_PRODUCT_FROM_CART,
        _id: 10
      };
      const returnAction = removeProductFromCart(product);

      expect(returnAction).toEqual(expectedAction);
    });
  });
});
