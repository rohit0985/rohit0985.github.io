import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Toggle from "./Components/Toggle/Toggle";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App" style={{backgroundColor:"white", color:"black"}}>
    <Navbar/>
      {/* <Toggle /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
