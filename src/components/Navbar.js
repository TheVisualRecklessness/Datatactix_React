import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";

const NavBar = () => {
    const navBarRef = useContext(NavBarContext);

    return (
        <header ref={navBarRef}>
            <nav>
                <Link id="navHome" className="navLink" to="/">Datatactix</Link>
                <ul>
                    <li><Link className="navLink" to="/Services">Servicios</Link></li>
                    <li><Link className="navLink" to="/About">Sobre nosotros</Link></li>
                    <li><Link className="navLink" to="/Contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;