import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { servicesData } from "../data/servicesMap";
// import right_arrow_head from "../assets/right_arrow_head.svg";

const NavBar = () => {
    const navBarRef = useRef(null); //references navbar
    const serviceInfo = useRef(null); //references services info in navbar
    const burgerRef = useRef(null); //references burger menu
    const mobileMenuRef = useRef(null); //references mobile menu
    const servicesMenu = useRef(null); //references services menu for mobile
    const location = useLocation();
    const [toggleInfo, setToggleInfo] = useState(false);
    const [toggleBurger, setToggleBurger] = useState(false);
    // const [toggleServicesMenu, setToggleServicesMenu] = useState(false);

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
                if(window.scrollY === 0 && (!toggleInfo && !toggleBurger)) {
                    navBarRef.current.classList.remove("nav-background");
                } else if (window.scrollY > 0 && (!toggleInfo && !toggleBurger)){
                    navBarRef.current.classList.add("nav-background");
                    navBarRef.current.classList.add("nav-transition-in");
                }
            } else if(location.pathname !== "/Datatactix_React/") {
                navBarRef.current.classList.add("nav-background");
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, [navBarRef, location.pathname, toggleInfo, toggleBurger]);

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

    useEffect(() => { // show services list
        if(location.pathname === "/Datatactix_React/" && toggleInfo) {
            const offsetScroll = (e) => {
                const id = e.target.href.split("#")[1];
                const element = document.getElementById(id);
                const offset = element.offsetTop - (window.innerHeight * 0.1);
                window.scrollTo(0, offset);
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
    },[location.pathname, toggleInfo]);

    const preventHashLink = (e) => {
        if(location.pathname === "/Datatactix_React/") {
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
        if(toggleBurger) {
            currentNavbar.classList.add("nav-background");
        } else if(!toggleBurger && window.scrollY === 0 && location.pathname === "/Datatactix_React/") {
            currentNavbar.classList.remove("nav-background");
        }
    },[toggleBurger, location.pathname, navBarRef]);

    // useEffect(() => { // show services mobile list menu
    //     if (toggleBurger) {
    //         const currentServicesMenu = servicesMenu.current;
    //         const toggleServices = () => {
    //             setToggleServicesMenu(prevToggleServicesMenu => !prevToggleServicesMenu);
    //         };

    //         currentServicesMenu.addEventListener("click", toggleServices);

    //         return () => currentServicesMenu.removeEventListener("click", toggleServices);
    //     }
    // },[toggleBurger]);

    useEffect(() => { // scroll to element from services links mobile
        if(location.pathname === "/Datatactix_React/" && toggleBurger) {
            const offsetScroll = (e) => {
                const id = e.target.href.split("#")[1];
                const element = document.getElementById(id);
                const offset = element.offsetTop - (window.innerHeight * 0.1);
                window.scrollTo(0, offset);
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
    },[location.pathname, toggleInfo, toggleBurger]); //toggleServicesMenu

    useEffect(() => { // close mobile menu when clicking outside
        const closeMobileMenu = (e) => {
            if(toggleBurger && (e.target.id !== "burger-menu-navbar" && e.target.id !== "mobile-menu-navbar"
                && e.target.id !== "mobile-list-navbar" && e.target.id !== "services-names-navbar-mobile"
                && e.target.id !== "services-menu-nav" )) {
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
                        location.pathname !== "/Datatactix_React/" &&
                        <Link id="navHome" className="navLink" to="/Datatactix_React/">Datatactix</Link>
                    )
                    ||
                    (
                        location.pathname === "/Datatactix_React/" &&
                        <a id="navHome" className="navLink" href="#banner-section">Datatactix</a>
                    )
                }
                <p id="burger-menu-navbar" htmlFor="toggle" ref={burgerRef}>&#9776;</p>
                {
                    toggleBurger &&
                    <div id="mobile-menu-navbar" ref={mobileMenuRef}>
                        <ul id="mobile-list-navbar">
                            <li className="menu-list">
                                <div ref={servicesMenu} id="services-menu-nav">
                                    <p>Servicios</p>
                                    {/* <img src={right_arrow_head} alt="right arrow head"></img> */}
                                </div>
                                {
                                    true && //toggleServicesMenu
                                    <ul id="services-names-navbar-mobile">
                                        {servicesData.map(service => {
                                            return <li key={service.id}><HashLink className="services-menu-links mobile-nav-link" to={"/Datatactix_React/#"+service.target} onClick={preventHashLink}>{service.name}</HashLink></li>
                                        })}
                                    </ul>
                                }
                            </li>
                            <li className="menu-list"><Link className="mobile-nav-link" to="/About">Sobre nosotros</Link></li>
                            <li className="menu-list"><HashLink className="mobile-nav-link" to="/Datatactix_React/#contact-section">Contacto</HashLink></li>
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
                                    return <li key={service.id}><HashLink className="navLink servicios-nav-links" to={"/Datatactix_React/#"+service.target} onClick={preventHashLink}>{service.name}</HashLink></li>
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