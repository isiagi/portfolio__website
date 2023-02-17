import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import AboutPage from "./about/AboutPage";
import HomePage from "./HomePage";
import Portfolio from "./portfolio/Portfolio";
import NotFound from "./notFound/NotFound";
import Port from "../components/port/Port";
import You from "../components/youtube/You";

function index() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<Portfolio />} path="/portfolio">
            <Route element={<Port />} index />
            <Route element={<Port />} index path="projects" />
            <Route element={<You />} path="youtube" />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default index;
