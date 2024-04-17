import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { servicesData } from "../data/servicesMap";

const NavBar = () => {
    const navBarRef = useRef(null);
    const serviceInfo = useRef(null);
    const location = useLocation();
    const [toggleInfo, setToggleInfo] = useState(false);

    useEffect(() => { //resets classes and state when changing pages
        setToggleInfo(false);
        window.scrollTo(0, 0);
        if (location.pathname !== "/Datatactix_React/") { //if page is not home
            navBarRef.current.classList.add("nav-background");
            navBarRef.current.classList.remove("test");
        } else { //if page is home
            navBarRef.current.classList.remove("nav-background");
        }
    }, [location.pathname, navBarRef]);

    useEffect(() => { //changes header class when scrolling home page
        const checkScroll = () => {
            if(location.pathname === "/Datatactix_React/") {
                if(window.scrollY === 0 && !toggleInfo) {
                    navBarRef.current.classList.remove("nav-background");
                } else if (window.scrollY > 0 && !toggleInfo){
                    navBarRef.current.classList.add("nav-background");
                    navBarRef.current.classList.add("nav-transition-in");
                }
            }
        };
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, [navBarRef, location.pathname, toggleInfo]);

    useEffect(() => { //toggles info section when clicking on services
        const handleClick = () => {
            if(location.pathname === "/Datatactix_React/" && window.scrollY === 0) {
                if(navBarRef.current.classList.contains("nav-background")) {
                    navBarRef.current.classList.remove("nav-background");
                } else {
                    navBarRef.current.classList.add("nav-background");
                }
            }
            setToggleInfo(toggleInfo ? false : true);
        };
    
        const currentServiceInfo = serviceInfo.current;
        currentServiceInfo.addEventListener("click", handleClick);
    
        return () => currentServiceInfo.removeEventListener("click", handleClick);
    }, [navBarRef, serviceInfo, location.pathname, toggleInfo]);

    return (
        <header ref={navBarRef}>
            <nav>
                {(location.pathname !== "/Datatactix_React/" &&
                    <Link id="navHome" className="navLink" to="/Datatactix_React/">Datatactix</Link>)
                    ||
                    (location.pathname === "/Datatactix_React/" &&
                    <a id="navHome" className="navLink" href="#banner-section">Datatactix</a>)
                }
                <ul id="list-navbar">
                    <div id="services-info-navbar">
                        <li ref={serviceInfo} className="navLink" id="servicios-nav">Servicios</li>
                        {
                            toggleInfo && 
                            <ul id="services-names-navbar">
                                {servicesData.map(service => {
                                    return <li key={service.id}><HashLink className="navLink" to={"/Datatactix_React/#"+service.target}>{service.name}</HashLink></li>
                                })}
                            </ul>
                        }
                    </div>
                    <li><Link className="navLink" to="/About">Sobre nosotros</Link></li>
                    <li><HashLink className="navLink" to="/Datatactix_React/#contact-section">Contacto</HashLink></li>
                </ul>
                
            </nav>
        </header>
    );
}

export default NavBar;