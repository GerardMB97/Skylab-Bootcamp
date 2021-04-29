import productActionTypes from '../actions/productActionTypes';

export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case productActionTypes.ADD_PRODUCT_TO_CART: {
      const index = state.findIndex((item) => item._id === action.product._id);
      if (index === -1) {
        const newItem = { ...action.product, quantity: 1 };

        return [...state, newItem];
      }
      const newState = [];
      state.forEach((item) => {
        const newItem = { ...item };
        newState.push(newItem);
      });
      newState[index].quantity += 1;
      return newState;
    }

    case productActionTypes.REMOVE_PRODUCT_FROM_CART:
      return state.filter((product) => product._id !== action.data._id);

    case productActionTypes.REMOVE_ALL_FROM_CART:
      return [];
    case productActionTypes.ADD_ONE_UNIT:
      return state.map((item) => (item._id === action._id
        ? { ...item, quantity: item.quantity + 1 }
        : item));
    case productActionTypes.REMOVE_ONE_UNIT:
      return state.map((item) => (item._id === action._id
        ? { ...item, quantity: item.quantity - 1 }
        : item));
    default:
      return state;
  }
}
