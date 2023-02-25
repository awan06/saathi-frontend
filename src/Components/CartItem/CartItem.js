import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Actions/cartActions";
const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeFromCart(data._id));
  };
  // let link = data.image;
  // const stidx = link.indexOf("d/") + 2;
  // const endidx = link.indexOf("/view");
  // link = `https://drive.google.com/uc?id=${link.substring(stidx, endidx)}`;
  return (
    <Row className={classes.card}>
      <Col sm={3}>
        <img className={classes.img} src={data.image} alt={data.title} />
      </Col>
      <Col sm={4}>
        <p>{data.title}</p>
        <p>{data.author ? data.author : data.subject}</p>
      </Col>
      <Col sm={2}>
        <span className={classes.price}>{`₹ ${data.price}`}</span>
      </Col>
      <Col sm={3}>
        <span className={classes.remove} onClick={removeHandler}>
          REMOVE
        </span>
      </Col>
    </Row>
  );
};
export default CartItem;
