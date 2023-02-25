import axios from "axios";
import { RESET_CART } from "./../Constants/cartConstants";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_PAY_RESET,
} from "./../Constants/orderConstants";
//import { logout } from "./userActions";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.post(
      `https://study-saathi.onrender.com/api/orders`,
      order,
      config
    );
    console.log(res);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    // const message =
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    console.log(error);
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error,
    });
  }
};

// export const getOrderDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_DETAILS_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(`/api/orders/${id}`, config);

//     dispatch({
//       type: ORDER_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ORDER_DETAILS_FAIL,
//       payload: message,
//     });
//   }
// };

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const res = await axios.post(
        `https://study-saathi.onrender.com/api/orders/${orderId}/paid`,
        paymentResult,
        config
      );
      console.log(res);
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: res.data.data,
      });
      dispatch({
        type: RESET_CART,
        //   payload: data,
      });
      localStorage.removeItem("cart_s_s");
      //dispatch({type:ORDER_PAY_RESET})
    } catch (error) {
      //   const message =
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message;
      //   if (message === "Not authorized, token failed") {
      //     dispatch(logout());
      //   }
      console.log(error);
      dispatch({
        type: ORDER_PAY_FAIL,
        payload: error,
      });
    }
  };

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELIVER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.post(
      `https://study-saathi.onrender.com/api/orders/${order._id}/delivered`,
      {},
      config
    );
    console.log(res);
    dispatch({
      type: ORDER_DELIVER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    // const message =
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    console.log(error);
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload: error,
    });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.get(
      `https://study-saathi.onrender.com/api/orders/myorders`,
      config
    );
    console.log(res);
    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    // const message =
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    console.log(error);
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: error,
    });
  }
};

// export const listOrders = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_LIST_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(`/api/orders`, config);

//     dispatch({
//       type: ORDER_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ORDER_LIST_FAIL,
//       payload: message,
//     });
//   }
// };
