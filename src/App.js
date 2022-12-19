import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Statistics from './Components/Statistics';
import Contact from './Components/Contact';




function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Statistics/>
    <Contact/>
    </div>
  );
}

export default App;
