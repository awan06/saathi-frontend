import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classes from "./Notes.module.css";
import { getNotes } from "../../Actions/notesActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "./../../Components/Spinner/Spinner";
import BookCard from "../../Components/BookCard/BookCard";
import { FaSearch } from "react-icons/fa";
const Notes = () => {
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const { notes, loading, error } = useSelector((state) => state.notes);
  console.log(notes);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(subject, course);
    if (course === "Select Course" || course == undefined)
      dispatch(getNotes(subject, ""));
    else dispatch(getNotes(subject, course));
  };
  const coursesList = [
    "Ph.D.",
    "M.Sc.",
    "M.F.Sc.",
    "M.tech.",
    "MBA",
    "MCA",
    "B.Sc.",
    "B.V.Sc.",
    "B.F.Sc.",
    "B.Tech",
  ];
  // const semesterList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  return (
    <main>
      <form onSubmit={submitHandler} className={classes.form}>
        {/* <InputGroup className="mb-3">
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
        </InputGroup> */}
        <Row>
          <Col md={5}>
            <Form.Select
              aria-label="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className={`p-3 ${classes.input}`}
            >
              <option selected>Select Course</option>
              {coursesList.map((elem) => {
                return (
                  <option value={elem} key={elem}>
                    {elem}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          {/* <Col md={3}>
            <Form.Select
              aria-label="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className={`p-3 ${classes.input}`}
            >
              <option selected>Select Semester</option>
              {semesterList.map((elem) => {
                return (
                  <option value={elem} key={elem}>
                    {elem}
                  </option>
                );
              })}
            </Form.Select>
          </Col> */}
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Enter Subject Name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`p-3 ${classes.input}`}
            />
          </Col>
          <Col md={2}>
            <Button size="lg" type="submit" className={classes.btn}>
              <FaSearch className="me-3" /> Search
            </Button>
          </Col>
        </Row>
      </form>
      <Container>
        <Row style={{ minHeight: "50vh" }}>
          {loading && <Spinner />}
          {!loading &&
            !error &&
            notes?.map((elem) => {
              return (
                <Col md={3}>
                  <BookCard data={elem} key={elem._id} />
                </Col>
              );
            })}
          {!loading && !error && notes?.length === 0 && (
            <p style={{ fontSize: "22px", marginTop: "40px" }}>
              No notes found.
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
export default Notes;
