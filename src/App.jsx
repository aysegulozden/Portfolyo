import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>© 2026 Ayşegül Özden — kod ve kahve ile.</p>
      </footer>
    </div>
  );
}

export default App;
