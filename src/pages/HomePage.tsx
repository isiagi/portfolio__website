import About from "../components/about";
import Experience from "../components/experience/Experience";
import Hero from "../components/hero/Hero";
import Port from "../components/port";
import Services from "../components/services/Services";
import Video from "../components/video/Video";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Video />
      <Port />
    </div>
  );
}

export default HomePage;
