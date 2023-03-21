import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from './components/pages/home/Home';
import Footer from "./components/footer/Footer";
import ProductsList from "./components/pages/products list/ProductsList";
import Produt from "./components/pages/product/Product";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/pages/contact us/ContactUs";
import AboutUs from "./components/pages/AboutUs";
// import { handleInitialData } from "./redux/actions";
import Cart from "./components/pages/Cart";
import ShippingAddress from "./components/pages/ShippingAddress";
import PaymentMethod from "./components/pages/PaymentMethod";
import { products } from "./_Data";
import styled from "styled-components";
import axios from "axios";


const Alert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1100;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-inline: 20vw;
  transform: translateY(-100%);
  transition: all 500ms ease;
  padding-block: 1rem;

  p {
    font-size: 1.1rem;
  }
  button {
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  @media(max-width: 992px) {
    padding-inline: 1rem;
  }
  @media(max-width: 450px) {
    p {
      font-size: 13px;
    }
  }
`

function App() {

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/products`);
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchProducts();
  }, []);
  

  // const dispatch = useDispatch();
  // const productsReducer  = useSelector(state => state.productsReducer);
  // const { products } = productsReducer;


  // useEffect(() => {

  //   dispatch(handleInitialData());
  // }, [dispatch]);

  // const [showAlert, setShowAlert] = useState(false);
  // useEffect(() => {
  //   // setTimeout(() => {
  //   document.getElementById("alert").style.transform = 'translateY(0%)';
  //   // }, 1000)
  // }, []);
  // const hideAlert = () => {
  //   document.getElementById("alert").style.transform = 'translateY(-100%)';
  // }

  return (
    <Router>
      <div className="App">
        {/* <Alert id="alert">
          <p>
            This is just a non-functional frontend template as the backend is temporarily off
          </p>
          <button onClick={hideAlert}>
            close
          </button>
        </Alert> */}
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<ProductsList products={products}  />} />
          <Route path="/products/:cat" element={<ProductsList products={products} />} />
          <Route path="/product/:id" element={<Produt products={products} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-address" element={<ShippingAddress />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;