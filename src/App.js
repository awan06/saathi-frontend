import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Product from "./Screens/Product/Product";
import Cart from "./Screens/Cart/Cart";
import Signin from "./Screens/Signin/Signin";
import Order from "./Screens/Orders/Orders";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Provider } from "react-redux";
// import store from "./store";
import { useSelector } from "react-redux";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            userInfo?.token ? (
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            ) : (
              <Signin type="signin" />
            )
          }
        />
        <Route
          path="/books/:id"
          element={
            <>
              <Header />
              <Product />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Order />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<Signin type="signin" />} />
        <Route path="/signup" element={<Signin type="signup" />} />
      </Routes>
    </div>
    // </Provider>
  );
}

export default App;
