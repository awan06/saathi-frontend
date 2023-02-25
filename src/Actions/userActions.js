import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/userConstants";
import axios from "axios";
import { RESET_CART } from "../Constants/cartConstants";
export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const url = `https://study-saathi.onrender.com/api/user/register`;
    const response = await axios.post(url, data);
    console.log(response);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: { user: response.data.data.user, token: response.data.token },
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { user: response.data.data.user, token: response.data.token },
    });
    localStorage.setItem(
      "userInfo_s_s",
      JSON.stringify({
        user: response.data.data.user,
        token: response.data.token,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_REGISTER_FAIL, payload: err.response.data.message });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const url = `https://study-saathi.onrender.com/api/user/signin`;
    const response = await axios.post(url, data);
    console.log(response);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { user: response.data.data.user, token: response.data.token },
    });
    localStorage.setItem(
      "userInfo_s_s",
      JSON.stringify({
        user: response.data.data.user,
        token: response.data.token,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_LOGIN_FAIL, payload: err.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo_s_s");
  localStorage.removeItem("cart_s_s");
  //localStorage.removeItem("userDetails");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: RESET_CART });
  // dispatch({ type: USER_DETAILS_RESET });
};
