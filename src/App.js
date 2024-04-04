import './styles/navBar.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import { NavBarContext } from './context/NavBarContext';
import { useRef } from 'react';

function App() {
  const navBarRef = useRef();

  return (
    <NavBarContext.Provider value={navBarRef}>
      <Router>
        <NavBar />
        <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
    </Router>
    </NavBarContext.Provider>
  );
}

export default App;
