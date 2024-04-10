import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { biInfoArray, webInfoArray, itInfoArray } from "../data/servicesInformationArray";
import ArrowHead from "../assets/right_arrow_head.svg";

const NavBar = () => {
    const navBarRef = useRef(null);
    const serviceInfo = useRef(null);
    const biRef = useRef(null);
    const webRef = useRef(null);
    const itRef = useRef(null);
    const location = useLocation();
    const [toggleInfo, setToggleInfo] = useState(false);
    const [servicesInfo, setServicesInfo] = useState(biInfoArray);

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

    useEffect(() => { //reset info section state when changing pages
        const  currentBiRef = biRef.current;
        const currentWebRef = webRef.current;
        const currentItRef = itRef.current;

        return () => {
            setServicesInfo(biInfoArray);
            currentBiRef.classList.add("service-selected-header");
            currentWebRef.classList.remove("service-selected-header");
            currentItRef.classList.remove("service-selected-header");
        };
    }, [location.pathname]);

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
            if(toggleInfo) {
                setToggleInfo(false);
            } else {
                setToggleInfo(true);
            }
        };
    
        const currentServiceInfo = serviceInfo.current;
        currentServiceInfo.addEventListener("click", handleClick);
    
        return () => {
            currentServiceInfo.removeEventListener("click", handleClick);
        };
    }, [navBarRef, serviceInfo, location.pathname, toggleInfo]);

    useEffect(() => { //closes service info section when clicking outside of header
        const handleClickOutside = (e) => {
            if(!navBarRef.current.contains(e.target)) {
                setToggleInfo(false);
                if(location.pathname === "/Datatactix_React/" && window.scrollY === 0) {
                    navBarRef.current.classList.remove("nav-background");
                }
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    },[navBarRef, location.pathname]);

    useEffect(() => { //changes info section content when clicking on services
        const biClick = () => {
            setServicesInfo(biInfoArray);
            currentBiRef.classList.add("service-selected-header");
            currentWebRef.classList.remove("service-selected-header");
            currentItRef.classList.remove("service-selected-header");
        };
        const webClick = () => {
            setServicesInfo(webInfoArray);
            currentBiRef.classList.remove("service-selected-header");
            currentWebRef.classList.add("service-selected-header");
            currentItRef.classList.remove("service-selected-header");
        };
        const itClick = () => {
            setServicesInfo(itInfoArray);
            currentBiRef.classList.remove("service-selected-header");
            currentWebRef.classList.remove("service-selected-header");
            currentItRef.classList.add("service-selected-header");
        };

        const currentBiRef = biRef.current;
        const currentWebRef = webRef.current;
        const currentItRef = itRef.current;
        currentBiRef.addEventListener("click", biClick);
        currentWebRef.addEventListener("click", webClick);
        currentItRef.addEventListener("click", itClick);

        return () => {
            currentBiRef.removeEventListener("click", biClick);
            currentWebRef.removeEventListener("click", webClick);
            currentItRef.removeEventListener("click", itClick);
        };
    },[biRef, webRef, itRef]);

    return (
        <header ref={navBarRef}>
            <nav>
                <Link id="navHome" className="navLink" to="/Datatactix_React/">Datatactix</Link>
                <ul>
                    <li ref={serviceInfo} className="navLink" id="servicios-nav">Servicios</li>
                    <li><Link className="navLink" to="/About">Sobre nosotros</Link></li>
                    <li><Link className="navLink" to="/Contact">Contacto</Link></li>
                </ul>
            </nav>
            <section id="info-section-header" style={{ display: toggleInfo ? "flex" : "none" }}>
                <article id="info-header">
                    <div id="options-header">
                        <Link className="option-link-header" to="/Services">
                            Conoce nuestros servicios
                        </Link>
                    </div>
                    <div className="vertical-line"></div>
                    <div id="info-titles-header">
                        <h3 ref={biRef} className="service-header service-selected-header">
                            Inteligencia de negocios
                            <img src={ArrowHead} alt="Right arrow head" />
                        </h3>
                        <h3 ref={webRef} className="service-header">
                            Desarrollo web
                            <img src={ArrowHead} alt="Right arrow head" />
                        </h3>
                        <h3 ref={itRef} className="service-header">
                            Soluciones IT
                            <img src={ArrowHead} alt="Right arrow head" />
                        </h3>
                    </div>
                    <div className="vertical-line"></div>
                    <div id="info-service-header">
                        {servicesInfo.map(service => {
                            return (
                                <div key={service.id} className="service-description-header">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </article>
            </section>
        </header>
    );
}

export default NavBar;