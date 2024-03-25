import Navbar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;