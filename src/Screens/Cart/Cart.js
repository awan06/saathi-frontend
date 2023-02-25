import classes from "./Cart.module.css";
import Container from "react-bootstrap/Container";
import CartItem from "./../../Components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { PayPalButton } from "react-paypal-button-v2";
import emptyCart from "./../../assets/undraw_empty_cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, payOrder } from "../../Actions/orderActions";
import axios from "axios";
import {
  ORDER_CREATE_RESET,
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../../Constants/orderConstants";
const Cart = () => {
  //const [cartItems, setCartItems] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const { orderCreate, loading, error } = useSelector(
    (state) => state.orderCreate
  );

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);
  const [address, setAddress] = useState("");
  const [addError, setAddError] = useState("");
  const [price, setPrice] = useState(0);
  const paymentSuccessHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderCreate.newOrder._id, paymentResult));
  };
  // useEffect(() => {
  //   // if (localStorage.getItem("cart_s_s")) {
  //   //   console.log("yes");
  //   //   setCartItems(JSON.parse(localStorage.getItem("cart_s_s")));
  //   // }
  //   if (localStorage.getItem("address_s_s")) {
  //     setAddress(JSON.parse(localStorage.getItem("address_s_s")));
  //   }
  // }, []);
  useEffect(() => {
    const total = cartItems.reduce((acc, cur) => {
      return (acc += Number(cur.price));
    }, 0);
    setPrice(total.toFixed(2));
  }, [cartItems]);

  const saveAddress = (e) => {
    e.preventDefault();
    localStorage.setItem("address_s_s", JSON.stringify(address));
  };
  const handlePlaceOrder = (e) => {
    if (address.trim().length <= 0) {
      setAddError("Enter shipping address.");
      return;
    }
    const orderItems = cartItems.map((elem) => {
      return {
        product: elem._id,
        title: elem.title,
        subject: elem.subject,
        price: elem.price,
      };
    });
    const order = {
      orderItems,
      amount: Number(price),
      deliveryAddress: address,
    };
    console.log(order);
    dispatch(createOrder(order));
  };
  useEffect(() => {
    // if (!userInfo) {
    //   history.push('/login')
    // }

    const addPayPalScript = async () => {
      //const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=ASew_xEX3zmHRUQlbJ_zrRCh4uXcQ5SvogAC9IbBTPz5nwM387JZPDeZxUid8k1VnlQvCBATWhcmRV8T`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (
      !orderCreate ||
      successPay ||
      successDeliver
      // orderCreate._id !== orderId
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
      //dispatch(getOrderDetails(orderId));
    } else if (!orderCreate.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderCreate, successPay, successDeliver]);
  return (
    <Container className="mt-5 pt-5">
      {cartItems.length === 0 && (
        <Row style={{ minHeight: "60vh" }}>
          <img className={classes.img} src={emptyCart} alt="" />
          <p className={classes.text}>
            Your don't have any items in your cart.
          </p>
          <RouterLink to="/">
            <Button
              type="button"
              className={classes.btn}
              style={{ width: "200px" }}
            >
              Shop Now
            </Button>
          </RouterLink>
        </Row>
      )}
      {cartItems.length > 0 && (
        <Row style={{ minHeight: "80vh" }}>
          <Col md={8} className="mt-4">
            <h1 align="center" style={{ color: "#5b21b6" }}>
              Your Cart
            </h1>
            <div className="mt-5 mb-4">
              {cartItems.map((elem) => {
                return (
                  <CartItem
                    data={elem}
                    key={elem._id}
                    //removeHandler={removeFromCart}
                  />
                );
              })}
            </div>
          </Col>
          <Col md={4} className="mt-5 ps-4 pe-0">
            <div className={classes.orderContainer}>
              <h2 className="mb-5 mt-2">Order Summary</h2>
              <form onSubmit={saveAddress} align="left">
                <Form.Label
                  className={classes.label}
                  aria-label="address"
                  align="left"
                >
                  Shipping Address:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`p-3 ${classes.input}`}
                />
                {/* <Button type="submit" className={classes.btn}>
                  SAVE
                </Button> */}
              </form>

              <ListGroup variant="flush" className={classes.list}>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span className={classes.li}>Sub total:</span>
                  <span>{`₹ ${price}`}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span className={classes.li}>Shipping:</span>{" "}
                  <span>FREE!</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span className={classes.li}>Total:</span>{" "}
                  <span>{`₹ ${price}`}</span>
                </ListGroup.Item>
              </ListGroup>
              {!orderCreate && addError && (
                <p style={{ color: "red" }}>{addError}</p>
              )}
              {!orderCreate && (
                <Button
                  type="button"
                  className={classes.btn}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              )}

              {!loading && !error && orderCreate && (
                <>
                  <h3 className="mt-4 mb-4">ORDER PLACED !</h3>
                  <PayPalButton
                    amount={price}
                    onSuccess={paymentSuccessHandler}
                  />
                </>
              )}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
