import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Experience />
    </div>
  );
}

export default HomePage;
