import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ProductsList from './components/productsList/productsList';
import store from './redux/store/configureStore';
import Cart from './components/cart/cart';

ReactDOM.render(
  <Provider store={store}>
    <ProductsList />
    <Cart />
  </Provider>,
  document.getElementById('root')
);
