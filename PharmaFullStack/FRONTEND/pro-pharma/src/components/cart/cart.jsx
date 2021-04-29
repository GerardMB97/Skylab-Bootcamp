import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import {
  loadProducts,
  removeAllFromCart,
  removeProductFromCart,
  addOneUnit,
  removeOneUnit,
  updateDB
} from '../../redux/actions/productActions';

import './cart.css';

function Cart({ cartItems, products, actions }) {
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const productsUrl = 'http://localhost:5000/api/v1/promoPharma';

  function calculateTotal(itemsArray) {
    // eslint-disable-next-line no-debugger
    debugger;
    const TOTAL = itemsArray.reduce((a, b) => a + b.price * b.quantity, 0);
    return TOTAL.toFixed(2);
  }

  function calculateTotalProducts(itemsArray) {
    // eslint-disable-next-line no-debugger
    debugger;
    const TOTALPRODUCTS = itemsArray.reduce((a, b) => a + b.quantity, 0);
    return TOTALPRODUCTS;
  }
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;

    setTotal(calculateTotal(cartItems));
    setTotalProducts(calculateTotalProducts(cartItems));
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="title">
        <h2>Mi Cesta:</h2>
        <button className="empty" type="button" onClick={() => actions.removeAllFromCart(cartItems)}>Empty Cart</button>
      </div>
      <ul>
        {cartItems.length && cartItems.map((item) => (
          <li>
            <img src={item.image} alt={item.name} />
            <span className="name">{item.name}</span>
            <span>
              {(item.price * item.quantity).toFixed(2) }
              €
            </span>
            <div className="buttons">
              <button type="button" onClick={item.quantity > 1 ? () => actions.removeOneUnit(item) : () => {}}>-</button>
              <span>{item.quantity}</span>
              <button type="button" onClick={item.quantity < item.stock ? () => actions.addOneUnit(item) : () => {}}>+</button>
              <button
                type="button"
                onClick={() => {
                  actions.removeProductFromCart(item);
                }}
              >
                X

              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        TOTAL (
        {totalProducts}
        {' '}
        productos)
        {total}
        {' '}
        €
      </div>
      <button type="button" className="empty bottom-margin" onClick={() => actions.updateDB(products, productsUrl)}>BUY</button>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.shape([]).isRequired,
  products: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadProducts: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
    removeAllFromCart: PropTypes.func.isRequired,
    addOneUnit: PropTypes.func.isRequired,
    removeOneUnit: PropTypes.func.isRequired,
    updateDB: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ cartItems, products }) {
  return { cartItems, products };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadProducts,
      removeProductFromCart,
      removeAllFromCart,
      addOneUnit,
      removeOneUnit,
      updateDB
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
