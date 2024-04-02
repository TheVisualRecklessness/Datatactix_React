import {Link, Routes, Route} from "react-router-dom";
import React, { useEffect } from "react";
import { Events, scrollSpy } from 'react-scroll';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const NavBar = () => {

    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log('begin', arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log('end', arguments);
        });
        scrollSpy.update();
    }, []);

    const onscroll = () => {
        const header = document.querySelector('Header');
        const navLinks = document.querySelectorAll('.navLink');
        if(window.scrollY > 0){
            header.classList.add('navHomeScrolled');
            navLinks.forEach(navLink => {
                navLink.classList.remove('staticColorNav');
            });
        }
        else {
            header.classList.remove('navHomeScrolled');
            navLinks.forEach(navLink => {
                navLink.classList.add('staticColorNav');
            });
        }
    };

    window.addEventListener('scroll', onscroll);

    return (
        <>
            <header>
                <nav>
                    <Link id="navHome" className="navLink staticColorNav" to="/">Datatactix</Link>
                    <ul>
                        <li><Link className="navLink staticColorNav" to="/Services">Servicios</Link></li>
                        <li><Link className="navLink staticColorNav" to="/About">Sobre nosotros</Link></li>
                        <li><Link className="navLink staticColorNav" to="/Contact">Contacto</Link></li>
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