import classes from "./Product.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../Actions/bookActions";
import { useEffect, useState } from "react";
import data from "./../../Data/books";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { addToCart } from "../../Actions/cartActions";
import Spinner from "./../../Components/Spinner/Spinner";
const Product = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [isInCart, setIsInCart] = useState(false);
  const [link, setLink] = useState("");
  const {
    bookDetails: book,
    error,
    loading,
  } = useSelector((state) => state.bookDetails);
  // book = data.find((elem) => elem._id == id);
  useEffect(() => {
    dispatch(getBookById(id));
  }, [id]);
  useEffect(() => {
    // const cartItems = localStorage.getItem("cart_s_s")
    //   ? JSON.parse(localStorage.getItem("cart_s_s"))
    //   : [];
    const elem = cartItems?.find((elem) => id == elem._id);
    if (elem) setIsInCart(true);
    else setIsInCart(false);
  }, [cartItems]);
  const addHandler = (e) => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(book));
      setIsInCart(true);
    }
    console.log("hey");
  };
  // let link = book.image;
  // useEffect(() => {
  //   if (book) {
  //     const stidx = book.image.indexOf("d/") + 2;
  //     const endidx = book.image.indexOf("/view");
  //     setLink(
  //       `https://drive.google.com/uc?id=${book.image.substring(stidx, endidx)}`
  //     );
  //   }
  // }, [book]);
  const handleNavigation = () => {
    if (book.type === "Book") {
      console.log("book");
      navigate("/books");
    } else navigate("/notes");
  };

  return (
    <Container className="mt-5 pt-5" style={{ minHeight: "80vh" }}>
      {loading && <Spinner />}
      {!loading && !error && book && (
        <Row>
          <Col md={6}>
            <img src={book.image} alt={book.title} className={classes.img} />
          </Col>
          <Col md={6} className="p-4">
            <Button
              type="button"
              variant="outline-dark"
              className={classes.backBtn}
              onClick={handleNavigation}
            >
              &larr; Back to all {book.type === "Book" ? "Books" : "Notes"}
            </Button>
            <div align="left">
              <h1 className={classes.title}>{book.title}</h1>
              <h4 className={classes.author}>{book.author}</h4>
              <p className={classes.price}>
                {`₹ ${book.price} INR`}
                <span style={{ fontSize: "17px", fontWeight: "400" }}>
                  {" "}
                  {`(tax included)`}
                </span>
              </p>

              <ListGroup className="mt-5">
                <ListGroup.Item className={classes.li}>
                  <p>Subject:</p> <p>{book.subject}</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.li}>
                  <p>Course:</p>
                  <p>{book.course}</p>
                </ListGroup.Item>
                <ListGroup.Item className={classes.li}>
                  <p>Semester:</p>
                  <p>{book.semester}</p>
                </ListGroup.Item>
              </ListGroup>
            </div>

            <Button type="button" className={classes.btn} onClick={addHandler}>
              {isInCart ? "GO TO CART" : "ADD TO CART"}
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Product;
