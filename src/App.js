import NavBar from "./component/Navbar/NavBar";
import HeroSection from "./component/HeroSection/HeroSection";
import Skills from "./component/Skills/Skills";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Project from "./component/Project/Project";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;
