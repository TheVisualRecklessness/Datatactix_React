import './navBar.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
