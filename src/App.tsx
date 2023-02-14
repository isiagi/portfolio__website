import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";

type Props = {};

function App({}: Props) {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
