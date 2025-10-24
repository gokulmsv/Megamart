import { HashRouter as Router } from 'react-router-dom';
import { GiCardboardBoxClosed } from "react-icons/gi";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Content from "./Components/Content";
import Product from "./Components/Product";
import Brand from "./Components/Brand";
import Footer from "./Components/Footer";
import Collection from "./Components/Collection";
import Cart from "./Components/Cart";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [cartItems, setCartItems] = useState([])
  return (
    <BrowserRouter>
      {/* Top Shipping Bar */}
      <div className="flex bg-black text-white items-center justify-center">
        <GiCardboardBoxClosed className="h-12 w-8" />
        <p className="font-poppins">
          Free Shipping for orders over &#8377;500
        </p>
      </div>
      <ToastContainer position="top-center" autoClose="2000"/>
      <Header cartItems={cartItems}/>

      {/* Define All Routes */}
      <Routes>
        {/* Home Page with Scroll Sections */}
        <Route
          path="/"
          element={
            <div className="font-poppins bg-gradient-to-r from-gray-400 to-teal-800 text-gray-800">
              <section id="slider"><Slider /></section>
              <section id="content"><Content /></section>
              <section id="product"><Product /></section>
              <section id="brand"><Brand /></section>
              <section id="footer"><Footer /></section>
            </div>
          }
        />

        {/* Other Pages */}
        <Route path="/collection" element={<Collection cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
