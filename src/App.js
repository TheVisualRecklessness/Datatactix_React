import './styles/navBar.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/Datatactix_React//*" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/About" element={<About />}></Route>
      </Routes>
  </Router>
  );
}

export default App;
