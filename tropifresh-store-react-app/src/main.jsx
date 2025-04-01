import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/styles/index.css";
import "../src/assets/styles/Header.css";
import "../src/assets/styles/Hero.css";
import "../src/assets/styles/Footer.css";
import "../src/assets/styles/ProductList.css";
// import "../src/assets/styles/Shop.css";
import "../src/assets/styles/About.css";
import "../src/assets/styles/Contact.css";
import "../src/assets/styles/Login.css";
import "../src/assets/styles/Cart.css";
import "../src/assets/styles/Terms.css";
import "../src/assets/styles/PrivacyPolicy.css";
import "../src/assets/styles/ShippingPolicy.css";
import "../src/assets/styles/RefundPolicy.css";
import "../src/assets/styles/CookiePolicy.css";
import "../src/assets/styles/FAQ.css";
import "../src/assets/styles/PaymentMethods.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
