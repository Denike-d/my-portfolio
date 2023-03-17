import NavBar from "./component/Navbar/NavBar";
import HeroSection from "./component/HeroSection/HeroSection";
import Skills from "./component/Skills/Skills";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Project from "./component/Project/Project";
import Footer from "./component/Footer/Footer";
import Works from "./component/Works/Works";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Works />
      {/* <Project /> */}
      <Footer />
    </div>
  );
}

export default App;
