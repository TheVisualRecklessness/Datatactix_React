import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { servicesData } from "../data/servicesMap";
import AccordionContext from "../data/accordionContext";
import { useContext } from "react";

const NavBar = () => {
    const { setBi, setWeb, setIt } = useContext(AccordionContext);
    const navBarRef = useRef(null); //references navbar
    const serviceInfo = useRef(null); //references services info in navbar
    const burgerRef = useRef(null); //references burger menu
    const mobileMenuRef = useRef(null); //references mobile menu
    const servicesMenu = useRef(null); //references services menu for mobile
    const location = useLocation();
    const [toggleInfo, setToggleInfo] = useState(false);
    const [toggleBurger, setToggleBurger] = useState(false);

    useEffect(() => { //resets classes and state when changing pages
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
        const checkScroll = () => {
            if(location.pathname === "/") {
                if(window.scrollY === 0 && (!toggleInfo && !toggleBurger)) {
                    navBarRef.current.classList.remove("nav-background");
                } else if (window.scrollY > 0 && (!toggleInfo && !toggleBurger)){
                    navBarRef.current.classList.add("nav-background");
                    navBarRef.current.classList.add("nav-transition-in");
                }
            } else if(location.pathname !== "/") {
                navBarRef.current.classList.add("nav-background");
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, [navBarRef, location.pathname, toggleInfo, toggleBurger]);

    useEffect(() => { //toggles info section when clicking on services
        const handleClick = () => setToggleInfo(prevToggleInfo => !prevToggleInfo);
    
        const currentServiceInfo = serviceInfo.current;
        currentServiceInfo.addEventListener("click", handleClick);
    
        return () => currentServiceInfo.removeEventListener("click", handleClick);
    }, [toggleInfo]);

    useEffect(() => { // show services list
        if(location.pathname === "/" && toggleInfo) {
            const offsetScroll = (e) => {
                const id = e.target.href.split("#")[1];
                const element = document.getElementById(id);
                const offset = element.offsetTop - (window.innerHeight * 0.1);
                window.scrollTo(0, offset);
                if(id === "bi-home-article") {
                    setBi(true);
                }
                else if(id === "web-home-article") {
                    setWeb(true);
                }
                else if(id === "it-home-article") {
                    setIt(true);
                }
            };
            const navLinks = document.querySelectorAll(".servicios-nav-links");
            navLinks.forEach(link => {
                link.addEventListener("click", offsetScroll);
            });

            return () => {
                navLinks.forEach(link => {
                    link.removeEventListener("click", offsetScroll);
                });
            };
        }
    },[location.pathname, toggleInfo, setBi, setWeb, setIt]);

    useEffect(() => { 
        const offsetScroll = (e) => {
            e.preventDefault();
            const id = e.target.href.split("#")[1];
            const element = document.getElementById(id);
            const offset = element.offsetTop - (window.innerHeight * 0.1);
            window.scrollTo(0, offset);
        };

        const contact = document.querySelectorAll(".contact-link");
        contact.forEach(link => {
            link.addEventListener("click", offsetScroll);
        });

        return () => {
            contact.forEach(link => {
                link.removeEventListener("click", offsetScroll);
            });
        };
    },[]);

    useEffect(() => { // disable toggleInfo when clicking outside
        const closeServicesInfo = (e) => {
            if(toggleInfo && e.target.id !== "servicios-nav") {
                setToggleInfo(false);
            }
        };

        window.addEventListener("click", closeServicesInfo);

        return () => {
            window.removeEventListener("click", closeServicesInfo);
        };
    },[toggleInfo]);

    const preventHashLink = (e) => {
        if(location.pathname === "/") {
            e.preventDefault();
        }
    };

    useEffect(() => { // show mobile navbar list
        const toggleBurgerMenu = () => {
            setToggleBurger(prevToggleBurger => !prevToggleBurger);
        };

        const currentBurger = burgerRef.current;
        currentBurger.addEventListener("click", toggleBurgerMenu);

        return () => currentBurger.removeEventListener("click", toggleBurgerMenu);
    },[toggleBurger, burgerRef]);

    useEffect(() => { // add background to mobile navbar if toggleBurger is true
        const currentNavbar = navBarRef.current;
        if(toggleBurger || toggleInfo) {
            currentNavbar.classList.add("nav-background");
        } else if(!toggleBurger && !toggleInfo && window.scrollY === 0 && location.pathname === "/") {
            currentNavbar.classList.remove("nav-background");
        }
    },[toggleInfo, toggleBurger, location.pathname, navBarRef]);

    useEffect(() => { // scroll to element from services links mobile
        if(location.pathname === "/" && toggleBurger) {
            const offsetScroll = (e) => {
                const id = e.target.href.split("#")[1];
                const element = document.getElementById(id);
                const offset = element.offsetTop - (window.innerHeight * 0.1);
                window.scrollTo(0, offset);
                if(id === "bi-home-article") {
                    setBi(true);
                    console.log(id);
                    console.log(id === "bi-home-article")
                }
                else if(id === "web-home-article") {
                    setWeb(true);
                }
                else if(id === "it-home-article") {
                    setIt(true);
                }
            };

            const mobileNavLinks = document.querySelectorAll(".services-menu-links");
            mobileNavLinks.forEach(link => {
                link.addEventListener("click", offsetScroll);
            });

            return () => {
                mobileNavLinks.forEach(link => {
                    link.removeEventListener("click", offsetScroll);
                });
            }
        }
    },[location.pathname, toggleInfo, toggleBurger, setIt, setWeb, setBi]); //toggleServicesMenu

    useEffect(() => { // close mobile menu when clicking outside
        const closeMobileMenu = (e) => {
            if(toggleBurger && (e.target.id !== "burger-menu-navbar" && e.target.id !== "mobile-menu-navbar"
                && e.target.id !== "mobile-list-navbar" && e.target.id !== "services-names-navbar-mobile"
                && e.target.id !== "services-menu-nav" && e.target.id !== "mobile-services-menu-list"
                && e.target.id !== "services-paragraph-nav")) {
                setToggleBurger(false);
            }
        };

        window.addEventListener("click", closeMobileMenu);

        return () => {
            window.removeEventListener("click", closeMobileMenu);
        };
    },[toggleBurger]);

    return (
        <header ref={navBarRef}>
            <nav>
                {
                    (
                        location.pathname !== "/" &&
                        <Link id="navHome" className="navLink" to="/">Datatactix</Link>
                    )
                    ||
                    (
                        location.pathname === "/" &&
                        <a id="navHome" className="navLink" href="#banner-section">Datatactix</a>
                    )
                }
                <p id="burger-menu-navbar" htmlFor="toggle" ref={burgerRef}>&#9776;</p>
                {
                    toggleBurger &&
                    <div id="mobile-menu-navbar" ref={mobileMenuRef}>
                        <ul id="mobile-list-navbar">
                            <li id="mobile-services-menu-list" className="menu-list">
                                <div ref={servicesMenu} id="services-menu-nav">
                                    <p id="services-paragraph-nav">Servicios</p>
                                </div>
                                <ul id="services-names-navbar-mobile">
                                    {servicesData.map(service => {
                                        return <li key={service.id}><HashLink className="navLink services-menu-links" to={"/#"+service.target} onClick={preventHashLink}>{service.name}</HashLink></li>
                                    })}
                                </ul>
                            </li>
                            <li className="menu-list"><HashLink className="mobile-nav-link contact-link" to="/#contact-section">Contacto</HashLink></li>
                        </ul>
                    </div>
                }
                <ul id="list-navbar">
                    <div id="services-info-navbar">
                        <li ref={serviceInfo} className="navLink" id="servicios-nav">Servicios</li>
                        {
                            toggleInfo && 
                            <ul id="services-names-navbar">
                                {servicesData.map(service => {
                                    return <li key={service.id}><HashLink className="navLink servicios-nav-links" to={"/#"+service.target} onClick={preventHashLink}>{service.name}</HashLink></li>
                                })}
                            </ul>
                        }
                    </div>
                    <li><HashLink className="navLink contact-link" to="/#contact-section">Contacto</HashLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;