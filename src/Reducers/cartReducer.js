import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from "../Constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  let cartItems = [];
  switch (action.type) {
    case ADD_TO_CART:
      //console.log(cart);
      //cartItems = [...cart, action.payload];
      //localStorage.setItem("cart_s_s", JSON.stringify(cartItems));
      //return { cart: cartItems };
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_FROM_CART:
      // cartItems = [...state.cart];
      // cartItems = cartItems.filter((elem) => elem._id != action.payload);
      // localStorage.setItem("cart_s_s", JSON.stringify(cartItems));
      // return { cart: cartItems };
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };
    case RESET_CART:
      //localStorage.setItem("cart_s_s", JSON.stringify([]));
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
