import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const NavBar = () => {
    const navBarRef = useRef(null);
    const serviceInfo = useRef(null);
    const location = useLocation();
    const [toggleInfo, setToggleInfo] = useState(false);

    useEffect(() => { //resets classes and state when changing pages
        console.log("routing useEffect")
        setToggleInfo(false);
        window.scrollTo(0, 0);
        if (location.pathname !== "/") { //if page is not home
            navBarRef.current.classList.add("nav-background");
            navBarRef.current.classList.remove("test");
        } else { //if page is home
            navBarRef.current.classList.remove("nav-background");
        }
    }, [location.pathname, navBarRef]);

    useEffect(() => { //changes header class when scrolling home page
        console.log("scrolling useEffect");
        const checkScroll = () => {
            if(location.pathname === "/") {
                if(window.scrollY === 0 && !toggleInfo) {
                    navBarRef.current.classList.remove("nav-background", "test");
                } else if (window.scrollY > 0 && !toggleInfo){
                    navBarRef.current.classList.add("nav-background");
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
            if(location.pathname === "/" && window.scrollY === 0) {
                if(navBarRef.current.classList.contains("nav-background")) {
                    navBarRef.current.classList.remove("nav-background");
                } else {
                    navBarRef.current.classList.add("nav-background");
                }
            }
            setToggleInfo(prevToggleInfo => {
                const newToggleInfo = !prevToggleInfo;
                return newToggleInfo;
            });
        };
    
        const currentServiceInfo = serviceInfo.current;
        currentServiceInfo.addEventListener("click", handleClick);
    
        return () => {
            currentServiceInfo.removeEventListener("click", handleClick);
        };
    }, [navBarRef, serviceInfo, location.pathname]);

    return (
        <header ref={navBarRef}>
            <nav>
                <Link id="navHome" className="navLink" to="/">Datatactix</Link>
                <ul>
                    <li ref={serviceInfo} className="navLink" id="servicios-nav">Servicios</li>
                    <li><Link className="navLink" to="/About">Sobre nosotros</Link></li>
                    <li><Link className="navLink" to="/Contact">Contacto</Link></li>
                </ul>
            </nav>
            <section id="info-section-header" style={{ display: toggleInfo ? "block" : "none" }}>
                <div id="info-header" >
                    <h3>Services summary</h3>
                </div>
            </section>
        </header>
    );
}

export default NavBar;