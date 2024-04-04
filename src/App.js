import './navBar.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
