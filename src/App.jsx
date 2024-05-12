import './styles/navBar.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import accordionContext from "./data/accordionContext";
import { useState } from 'react';
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";

function App() {

  const [bi, setBi] = useState(false);
  const [web, setWeb] = useState(false);
  const [it, setIt] = useState(false);

  return (
    <accordionContext.Provider value={{bi, setBi, web, setWeb, it, setIt}}>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
        </Routes>
    </Router>
  </accordionContext.Provider>
  );
}

export default App;
