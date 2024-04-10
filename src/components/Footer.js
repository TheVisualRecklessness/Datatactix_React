import { useState, useEffect, useRef } from "react";
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
            <p id="copyright-footer" ref={copyright}>Copyright &copy; {year}</p>
        </footer>
    );
};

export default Footer;