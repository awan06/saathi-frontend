import classes from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import logo from "../../assets/Study Saathi-1.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Actions/userActions";
const Header = (props) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("cart_s_s")) {
  //     const items = JSON.parse(localStorage.getItem("cart_s_s"));
  //     setNoOfItems(items.length);
  //   }
  // });
  return (
    <header className={classes.header}>
      <div className={classes.nav_container}>
        <div className={classes.navbar_brand}>
          <RouterLink to="/">
            <img className={classes.logo} src={logo} alt="Study Saathi" />
          </RouterLink>
        </div>
        <nav className={classes.nav}>
          {/* <ul className={classes.navbar_ul}>
          <li className={classes.navbar_li}>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }
            >
              BOOKS
            </NavLink>
          </li>
          <li className={classes.navbar_li}>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }
            >
              NOTES
            </NavLink>
          </li>
        </ul> */}
          <ul className={classes.navbar_ul}>
            <li className={classes.navbar_li}>
              <RouterLink to="/cart" style={{ color: "#5b21b6" }}>
                <FaShoppingCart />
                {cartItems.length > 0 && (
                  <div className={classes.number}>{cartItems.length}</div>
                )}
              </RouterLink>
            </li>
            <li className={classes.navbar_li}>
              <RouterLink
                style={{
                  color: "#5b21b6",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginLeft: "15px",
                }}
                to="/orders"
              >
                My Orders
              </RouterLink>
            </li>
            <li
              className={classes.navbar_li}
              style={{
                fontWeight: "800",
                marginLeft: "30px",
                cursor: "pointer",
              }}
            >
              <AiOutlinePoweroff
                onClick={(e) => {
                  dispatch(logout());
                  navigate("/signin", { replace: "true" });
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
