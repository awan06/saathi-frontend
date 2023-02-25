import classes from "./Footer.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./../../assets/Study Saathi-1.jpg";
import { Container } from "react-bootstrap";
import { BiColorFill, BiHelpCircle } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { MdStars } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import image from "./../../assets/creditcards.svg";
const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <Row className={classes.row}>
        <Col md={10}>
          <Row>
            <Col md={3}>
              <img style={{ width: "200px", height: "100px" }} src={logo} />
            </Col>
            <Col md={5}>
              <p>
                Study Saathi is commited to providing books and notes to
                everyone at as low price as possible.We want to guide donor's
                books to the reader's destiny. We want to assure :"You are just
                one click away from your books!"
              </p>
            </Col>
            <Col md={2}>
              <h6 className={classes.colHeading}>ABOUT</h6>
              <ul className={classes.list}>
                {["Contact Us", "About Us", "Stories"].map((elem) => (
                  <li className={classes.listItem} key={elem}>
                    {elem}
                  </li>
                ))}
              </ul>
            </Col>

            {/* <Col md={3}>
              <h6 className={classes.colHeading}>HELP</h6>
              <ul className={classes.list}>
                {["Payment", "Shipping", "FAQ"].map((elem) => (
                  <li className={classes.listItem} key={elem}>
                    {elem}
                  </li>
                ))}
              </ul>
            </Col> */}
            {/* <Col md={3}>
              <h6 className={classes.colHeading}>POLICY</h6>
              <ul className={classes.list}>
                {["Terms Of Use", "Security", "Privacy"].map((elem) => (
                  <li className={classes.listItem} key={elem}>
                    {elem}
                  </li>
                ))}
              </ul>
            </Col> */}
            <Col md={2}>
              <h6 className={classes.colHeading}>SOCIAL</h6>
              <ul className={classes.list}>
                {["Facebook", "Twitter", "Youtube"].map((elem) => (
                  <li className={classes.listItem} key={elem}>
                    {elem}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={2} className={classes.address}>
          <h6 className={classes.colHeading}>Mail Us At:</h6>
          <p>studysaathi@example.com</p>
        </Col>

        {/* <Col md={6} offset={1}>
              <h6 className={classes.colHeading}>
                {" "}
                Registered Office Address:{" "}
              </h6>
              <address className={classes.colContent}>
                Shopkart Internet Private Limited,
                <br /> Sahajeevan 4, Shraddhanand Rd,
                <br /> Vile Parle East Mumbai Maharashtra,
                <br /> India Zip Code: 400057
                <br />
                <span> Phone number : </span>
                <a
                  style={{ textDecoration: "none", color: "#ed213b" }}
                  href="tel: 02226188528"
                >
                  02226188528
                </a>
              </address>
            </Col> */}
      </Row>
      <Row className={classes.rowBottom}>
        {/* <Col md={4}> */}
        <span>Copyright &copy; 2022 Study Saathi</span>
        {/* </Col> */}
        {/* <Col md={8}>
          <img src={image} alt="" className={classes.img} />
        </Col> */}
      </Row>
    </footer>
  );
};
export default Footer;
