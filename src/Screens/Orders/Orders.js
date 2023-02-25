import { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listMyOrders } from "../../Actions/orderActions";
import Spinner from "./../../Components/Spinner/Spinner";
import OrderItem from "./../../Components/OrderItem/OrderItem";
import classes from "./Orders.module.css";
import { Link as RouterLink } from "react-router-dom";

const Orders = () => {
  const {
    loading,
    error,
    orderListMy: orders,
  } = useSelector((state) => state.orderListMy);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);
  console.log(orders);
  return (
    <Container style={{ marginTop: "100px", minHeight: "90vh" }}>
      {loading && <Spinner />}
      {!loading && !error && orders && (
        <>
          <h1 style={{ color: "#5b21b6", marginBottom: "30px" }}>
            Your Orders
          </h1>
          <Row>
            {orders.map((elem) => {
              return <OrderItem data={elem} key={elem._id} />;
            })}
          </Row>
        </>
      )}
      {!loading && !error && orders?.length === 0 && (
        <div>
          <p>You don't have any orders yet.</p>
          <RouterLink to="/">
            <Button
              type="button"
              className={classes.btn}
              style={{ width: "200px" }}
            >
              Shop Now
            </Button>
          </RouterLink>
        </div>
      )}
    </Container>
  );
};
export default Orders;
