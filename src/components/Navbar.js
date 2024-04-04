import {Link} from "react-router-dom";

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
        </>
    );
}

export default NavBar;