import classes from "./HomePage.module.css";
import bgimage from "./../../assets/bgimage2.jpeg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Book from "./../Books/Books";
import Notes from "./../Notes/Notes";
const HomePage = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/books", { replace: true });
  }, []);
  return (
    <>
      <div className={classes.heroSection}>
        <img className={classes.home_bgimage} src={bgimage} />
        <div className={classes.home_imageText}>
          <quote className={classes.quote}>
            “Literacy is a bridge from misery to hope.”
            <br /> -Kofi Annan
          </quote>
          <p className={classes.text}>
            Explore our collection of discounted books and study material.
          </p>
        </div>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navbar_ul}>
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
        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<Book />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
};

export default HomePage;
