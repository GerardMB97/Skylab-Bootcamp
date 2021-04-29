import productActionTypes from '../actions/productActionTypes';

const productsReducer = (state = [], action) => {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case productActionTypes.LOAD_PRODUCTS:
      return action.data;
    case productActionTypes.ADD_PRODUCT_TO_CART: {
      const stock = action.product.stock - 1;

      const newState = state.map((item) => (item._id === action.product._id
        ? { ...item, stock }
        : item));

      return newState;
    }
    case productActionTypes.UPDATE_DB: {
      return action.updatedProducts;
    }
    case productActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const newState = state.map((item) => (item._id === action.data._id
        ? { ...item, stock: item.stock + action.data.quantity }
        : item));

      return newState;
    }
    case productActionTypes.REMOVE_ALL_FROM_CART: {
      if (action.cart.length > 0) {
        let newState = state;
        action.cart.forEach((cartItem) => {
          newState = newState.map((product) => (product._id === cartItem._id
            ? { ...product, stock: product.stock + cartItem.quantity }
            : product));
        });
        return newState;
      } return state; }
    case productActionTypes.ADD_ONE_UNIT:
      // eslint-disable-next-line no-debugger
      debugger;
      return state.map((item) => (item._id === action._id
        ? { ...item, stock: item.stock - 1 }
        : item));
    case productActionTypes.REMOVE_ONE_UNIT:
      return state.map((item) => (item._id === action._id
        ? { ...item, stock: item.stock + 1 }
        : item));

    default:
      return state;
  }
};

export default productsReducer;
