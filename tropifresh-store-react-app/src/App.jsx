import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";
// import Shop from "./components/Shop.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Terms from "./components/Terms.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import ShippingPolicy from "./components/ShippingPolicy.jsx";
import RefundPolicy from "./components/RefundPolicy.jsx";
import CookiePolicy from "./components/CookiePolicy.jsx";
import Faq from "./components/Faq.jsx";
import PaymentMethods from "./components/PaymentMethods.jsx";

function App() {
  return (
    <>
      <section className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Shop" element={<ProductList />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
            <Route path="/RefundPolicy" element={<RefundPolicy />} />
            <Route path="/CookiePolicy" element={<CookiePolicy />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/PaymentsMethods" element={<PaymentMethods />} />
          </Routes>
          <Footer />
        </Router>
        {/* <Hero /> */}

        {/* <ProductList /> */}
      </section>
    </>
  );
}

export default App;
