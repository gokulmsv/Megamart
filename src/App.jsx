import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GiCardboardBoxClosed } from "react-icons/gi";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthContextProvider } from "./Context/AuthContext";
import Contact from "./Components/Contact";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Content from "./Components/Content";
import Product from "./Components/Product";
import Brand from "./Components/Brand";
import Footer from "./Components/Footer";
import Collection from "./Components/Collection";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <AuthContextProvider>
        {/* Top Shipping Bar */}
        <div className="flex bg-black text-white items-center justify-center">
          <GiCardboardBoxClosed className="h-12 w-8" />
          <p className="font-poppins">
            Free Shipping for orders over &#8377;500
          </p>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={1000}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header cartItems={cartItems} />

        {/* Routes */}
        <Routes>
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Collection */}
          <Route
            path="/collection"
            element={
              <ProtectedRoute>
                <Collection cartItems={cartItems} setCartItems={setCartItems} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist cartItems={cartItems} setCartItems={setCartItems} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <div className="font-poppins bg-gradient-to-r from-gray-400 to-teal-800 text-gray-800">
                <section id="slider">
                  <Slider />
                </section>
                <section id="content">
                  <Content />
                </section>
                <section id="product">
                  <Product />
                </section>
                <section id="contact">
                  <Contact/>
                </section>
                <section id="brand">
                  <Brand />
                </section>
                <section id="footer">
                  <Footer />
                </section>
              </div>
            }
          />

          {/* <Route
          path="/collection"
          element={
            <Collection cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        /> */}
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
