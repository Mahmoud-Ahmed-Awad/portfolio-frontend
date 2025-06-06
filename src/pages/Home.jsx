import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </div>
  );
};

export default Home;
