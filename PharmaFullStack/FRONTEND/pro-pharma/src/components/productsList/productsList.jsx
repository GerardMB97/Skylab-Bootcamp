/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts, addProductToCart } from '../../redux/actions/productActions';

import './productList.css';

function ProductsList({ products, actions }) {
  const productsUrl = 'http://localhost:5000/api/v1/promoPharma';
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    actions.loadProducts(productsUrl);
  }, []);
  return (
    <div className="products">
      <ul className="products__list">
        { products.length ? products.map((product) => (
          <li key={product._id}>
            <div className="info">
              <span className="info__name">{product.name}</span>
              <span className="info__price">{`${product.price} €`}</span>
            </div>

            <button
              type="button"
              className={product.stock ? 'active' : 'unactive'}
              onClick={product.stock ? () => { actions.addProductToCart(product); }
                : () => {}}
            >
              <img src="https://trello-attachments.s3.amazonaws.com/602fe1ed01d52948716821e5/190x104/615240d540f612e03404c32acbdfaebf/add-to-cart.png" alt="" />

            </button>
          </li>
        )) : 'products not found'}
      </ul>
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadProducts: PropTypes.func.isRequired,
    addProductToCart: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ products }) {
  // eslint-disable-next-line no-debugger
  debugger;
  return { products };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadProducts, addProductToCart }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
