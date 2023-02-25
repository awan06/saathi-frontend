import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from "../Constants/cartConstants";

export const addToCart = (item) => (dispatch, getState) => {
  console.log(item);
  dispatch({ type: ADD_TO_CART, payload: item });
  localStorage.setItem("cart_s_s", JSON.stringify(getState().cart.cartItems));
};
// export const removeFromCart = (id) => (dispatch) => {
//   dispatch({ type: REMOVE_FROM_CART, payload: id });
// };

export const resetCart = () => (dispatch) => {
  dispatch({ type: RESET_CART });
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart_s_s", JSON.stringify(getState().cart.cartItems));
};
