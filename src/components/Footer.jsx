import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import socials from "../data/socials"
import "../styles/Footer.css"

const Footer = () => {
    const copyright = useRef(null);
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            <div id="info-footer">
                <h3 id="name-footer">Datatactix</h3>
                <div id="socials-footer">
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                    >
                        <img className="social-icon" src={social.icon} alt={social.name}></img>
                    </a>
                ))}
                </div>
            </div>
            <div id="misc-footer">
                <ul id="links-footer">
                    <li><HashLink className="footLinks" to="/#servicios-section" >Servicios</HashLink></li>
                    <HashLink className="footLinks" to="/#contact-section">Contacto</HashLink>
                </ul>
                <p id="copyright-footer" ref={copyright}>Copyright &copy; {year} Datatactix</p>
            </div>
        </footer>
    );
};

export default Footer;