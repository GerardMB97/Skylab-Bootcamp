import { combineReducers } from 'redux';
import products from './productsReducer';
import cartItems from './cartItemsReducer';

const rootReducer = combineReducers({
  products,
  cartItems
});

export default rootReducer;
