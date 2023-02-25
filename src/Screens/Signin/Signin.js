import classes from "./Signin.module.css";
import img from "./../../assets/signin.svg";
import img2 from "./../../assets/signup.svg";
import Spinner from "./../../Components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../Actions/userActions";
import { Link as RouterLink, useNavigate } from "react-router-dom";
const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const type = props.type;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.type == "signin") {
      dispatch(login({ email, password }));
    } else if (props.type == "signup") {
      dispatch(register({ email, password, name }));
    }
    setEmail("");
    setPassword("");
    setName("");
  };

  useEffect(() => {
    console.log("in useeffect");
    console.log(loading, error, userInfo);
    if (!loading && !error && userInfo) {
      console.log("if");
      navigate("/");
    }
  }, [loading, error, userInfo]);

  return (
    <article
      className={classes.art}
      id="art"
      style={{ flexDirection: type === "signin" ? "row" : "row-reverse" }}
    >
      <div className={classes.div} id="div">
        <h1
          style={{ fontSize: "2.5em", marginBlockEnd: "0.65em" }}
          className={classes.inline}
        >
          {type === "signin" ? "Welcome back" : "Welcome to Study Saathi"}
        </h1>
        <h5
          style={{ margin: 0, fontSize: "0.947em" }}
          className={classes.inline}
        >
          {type === "signin"
            ? "Welcome back! Please enter your details."
            : "Enter details to create account"}
        </h5>
        <form
          style={{ marginTop: "1em", maxWidth: "70%" }}
          onSubmit={submitHandler}
        >
          {props.type === "signup" && (
            <>
              <label
                htmlFor="fname"
                style={{ float: "left", fontWeight: "500" }}
                className="mb-2 mt-4"
              >
                Username
              </label>
              <input
                className={classes.input}
                type="text"
                id="fname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="pass"
                placeholder="Your name"
              />
            </>
          )}

          <label
            htmlFor="email"
            style={{ float: "left", fontWeight: "500" }}
            className="mb-2 mt-4"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            placeholder="Enter your email"
          />

          <label
            htmlFor="fpass"
            style={{ float: "left", fontWeight: "500" }}
            className="mb-2 mt-4"
          >
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            id="fpass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="pass"
            placeholder="Your password"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button className={classes.btn} type="submit">
            {type === "signin" ? "Sign in" : "Sign up"}
          </button>
          {type === "signin" && (
            <h6 style={{ textAlign: "center", fontSize: "1em" }}>
              Don't have an acount?{" "}
              <RouterLink to="/signup">Sign up for free</RouterLink>
            </h6>
          )}
          {type === "signup" && (
            <h6 style={{ textAlign: "center", fontSize: "1em" }}>
              Already have an account?{" "}
              <RouterLink to="/signin">Sign in</RouterLink>
            </h6>
          )}
        </form>
        {loading && <Spinner />}
      </div>
      <div
        className={classes.div}
        style={{ backgroundColor: "#5b21b6", flexBasis: "40%" }}
      >
        <img
          id="img1"
          className={classes.img1}
          src={type === "signin" ? img : img2}
        />
      </div>
    </article>
  );
};
export default Signin;
