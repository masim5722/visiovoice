import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import { ABOUT_ROUTE, PRIVACY_AND_POLICY_ROUTE, PRODUCT_ROUTE } from "../constants/generalConstants";
import Product from "../pages/Product/Product";

// Arrow function component to set up the routes for the application
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />


        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        {/* Route for the Product page */}
        <Route path={PRODUCT_ROUTE} element={<Product />} />
        {/* Route for the About page */}
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={PRIVACY_AND_POLICY_ROUTE} element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
