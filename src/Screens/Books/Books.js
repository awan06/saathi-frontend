import classes from "./Books.module.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../Actions/bookActions";
import BookCard from "./../../Components/BookCard/BookCard";
import Spinner from "./../../Components/Spinner/Spinner";
//import data from "./../../Data/books";
const Books = () => {
  const [title, setTitle] = useState("");
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    dispatch(getBooks(title));
  };
  useEffect(() => {
    setTitle("");
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <main>
      <form onSubmit={submitHandler} className={classes.form}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search by book title"
            aria-label="Search by book title"
            aria-describedby="search"
            value={title}
            className={`p-3 ${classes.search}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            className={`ps-5 pe-5 ${classes.btn}`}
            id="search"
            type="submit"
          >
            <FaSearch className={classes.icon} />
            Search
          </Button>
        </InputGroup>
      </form>
      <Container>
        <Row style={{ minHeight: "50vh" }}>
          {loading && <Spinner />}
          {!loading &&
            !error &&
            books?.map((elem) => {
              return (
                <Col md={3}>
                  <BookCard data={elem} key={elem._id} />
                </Col>
              );
            })}
          {!loading && !error && books?.length === 0 && (
            <p className="mt-5" style={{ fontSize: "24px" }}>
              No books found.
            </p>
          )}
          {!loading && error && (
            <p className="mt-5" style={{ fontSize: "24px" }}>
              Something went wrong!
            </p>
          )}
        </Row>
      </Container>
    </main>
  );
};
export default Books;
