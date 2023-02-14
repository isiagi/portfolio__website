import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import HomePage from "./HomePage";

function index() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default index;
