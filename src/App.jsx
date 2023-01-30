import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from './components/pages/home/Home';
import Footer from "./components/footer/Footer";
import ProductsList from "./components/pages/products list/ProductsList";
import Produt from "./components/pages/product/Product";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/pages/contact us/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import { handleInitialData } from "./redux/actions";
import Cart from "./components/pages/Cart";
import ShippingAddress from "./components/pages/ShippingAddress";
import PaymentMethod from "./components/pages/PaymentMethod";
import { products } from "./_Data";




function App() {


  // const dispatch = useDispatch();
  // const productsReducer  = useSelector(state => state.productsReducer);
  // const { products } = productsReducer;
  
  
  // useEffect(() => {

  //   dispatch(handleInitialData());
  // }, [dispatch]);
  


  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<ProductsList products={products} />} />
          <Route path="/products/:id" element={<Produt products={products} />} />
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