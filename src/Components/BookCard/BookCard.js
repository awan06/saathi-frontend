import classes from "./BookCard.module.css";
import Card from "react-bootstrap/Card";
import { Link as RouterLink } from "react-router-dom";
const BookCard = ({ data }) => {
  // let link = data.image;
  // const stidx = link.indexOf("d/") + 2;
  // const endidx = link.indexOf("/view");
  // link = `https://drive.google.com/uc?id=${link.substring(stidx, endidx)}`;

  return (
    <Card
      style={{
        width: "17rem",
        margin: "20px 0",
        border: "none",
        boxShadow: "0px 0px 6px #ccc",
      }}
    >
      <RouterLink to={`/books/${data._id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={data.image} style={{ height: "280px" }} />
        <Card.Body align="left">
          <Card.Title className={classes.title} style={{ color: "#5b21b6" }}>
            {data.title}
          </Card.Title>
          <Card.Text style={{ color: "#aaa", fontWeight: "500" }}>
            {data.author}
          </Card.Text>
          <div className={classes.ribbon}>
            <span className={classes.ribbonText}>{`₹${data.price}`}</span>
          </div>
        </Card.Body>
      </RouterLink>
    </Card>
  );
};
export default BookCard;
