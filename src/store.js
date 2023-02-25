import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookDetailsReducer, booksReducer } from "./Reducers/projectReducers";
import { notesReducer } from "./Reducers/notesReducers";
import { cartReducer } from "./Reducers/cartReducer";
import { userRegisterReducer, userLoginReducer } from "./Reducers/userReducer";
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./Reducers/orderReducer";
const reducers = combineReducers({
  books: booksReducer,
  notes: notesReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  orderCreate: orderCreateReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
});

const userInfoFromStorage =
  JSON.parse(localStorage.getItem("userInfo_s_s")) || null;

// const userFromStorage = JSON.parse(localStorage.getItem("userDetails")) || null;
const cartItemsFromStorage = localStorage.getItem("cart_s_s")
  ? JSON.parse(localStorage.getItem("cart_s_s"))
  : [];
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  //   userDetails: { user: userFromStorage },
  books: [],
  notes: [],
  bookDetails: {},
  orderCreate: {},
  cart: {
    cartItems: cartItemsFromStorage,
  },
  orderListMy: [],
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
