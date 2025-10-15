import { GiCardboardBoxClosed } from "react-icons/gi";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Slider from "./Components/Slider";
import Content from "./Components/Content";
import Product from "./Components/Product";
import Brand from "./Components/Brand";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex bg-black text-white items-center justify-center">
          <GiCardboardBoxClosed className="h-12 w-8" />
          <p className="font-poppins">
            Free Shipping for orders over &#8377;500
          </p>
        </div>

        <div className="font-poppins bg-linear-to-r/shorter from-gray-400 to-teal-800 text-gray-800 ">
          <Header />
          <section id="slider">
            <Slider />
          </section>
          <section id="content">
            <Content />
          </section>
          <section id="product">
            <Product />
          </section>
          <section id="brand">
            <Brand />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
