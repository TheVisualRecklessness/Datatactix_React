import {Link, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <Link id="navHome" className="navLink" to="/">Datatactix</Link>
                    <ul>
                        <li><Link className="navLink" to="/Services">Servicios</Link></li>
                        <li><Link className="navLink" to="/About">Sobre nosotros</Link></li>
                        <li><Link className="navLink" to="/Contact">Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="*" element={<Home />}></Route>
                <Route path="/Services" element={<Services />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
        </>
    );
}

export default NavBar;