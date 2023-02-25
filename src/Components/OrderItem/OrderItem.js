import classes from "./OrderItem.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const OrderItem = ({ data }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <Card.Body className="p-4">
          <Card.Title className={classes.title}>
            Order ID: <br />
            <span>{data._id}</span>
          </Card.Title>
          <Card.Text>
            <div>
              <h6 className={classes.field}>Payment Status:</h6>
              <span
                className={classes.value}
                style={{
                  color: data.isPaid ? "green" : "#ed213b",
                }}
              >
                {!data.isPaid
                  ? "Not Paid"
                  : `Paid on ${new Date(
                      data.paidAt
                    )?.toLocaleDateString()} at ${new Date(
                      data.paidAt
                    )?.toLocaleTimeString()}`}
              </span>
            </div>
            <div>
              <h6 className={classes.field}>Delivery Status:</h6>
              <span
                className={classes.value}
                style={{
                  color: data.isDelivered ? "green" : "#ed213b",
                }}
              >
                {!data.isDelivered
                  ? "Not Delivered"
                  : `Delivered on ${new Date(
                      data.deliveredAt
                    ).toLocaleDateString()} at ${new Date(
                      data.deliveredAt
                    ).toLocaleTimeString()}`}
              </span>
            </div>
            <Row className="align-items-end">
              {/* <Col xs={7}>
                {/* <Link to={`/order/${data._id}`} className={classes.link}> */}
              {/* View Details &gt; */}
              {/* </Link> */}
              {/* </Col> */}
              <Col xs={7} />
              <Col xs={5}>
                <div className={classes.price}>
                  <h6 className={classes.field} style={{ fontSize: "13px" }}>
                    Total Amount:
                  </h6>
                  <span>
                    &#8377;
                    {data.amount?.toLocaleString("en-In")}
                  </span>
                </div>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default OrderItem;
