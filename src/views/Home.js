import '../styles/Home.css';
import Logo from "../assets/graph-and-people-svgrepo-com.svg";
import RightArrow from "../assets/right_arrow_svg.svg";
import Services from "./Services";
import {Link, Routes, Route} from "react-router-dom";
import { useContext, useEffect } from 'react';
import { NavBarContext } from '../context/NavBarContext';

const Home = () => {
    const navBarRef = useContext(NavBarContext);

    useEffect(() => {
        navBarRef.current.classList.remove("nav-background");
        const checkScroll = () => {
            if (window.scrollY > 0) {
                navBarRef.current.classList.add("nav-background");
            } else if(window.scrollY === 0) {
                navBarRef.current.classList.remove("nav-background");
            }
        };
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, [navBarRef]);

    return (
        <main>
            <section id="banner-section">
                <article id="greet-article">
                    <h1 className="banner-text">
                        Los datos son el activo más valioso de tu empresa
                    </h1>
                    <p className="banner-text">
                        En <em>Datatactix</em> te ayudamos a sacarles el máximo provecho.
                    </p>
                    <Link to="/Services" className="learn-more-button">
                        Conoce más
                        <img src={RightArrow} alt="right arrow"></img>
                    </Link>
                </article>
                <article id="greet-image-article">
                    <img 
                        src={Logo}
                        alt="img"
                        id="greetImage"
                    ></img>
                </article>
            </section>
            <div style={{height:400}}>

            </div>
            <Routes>
                <Route path="/Services" element={<Services />}></Route>
            </Routes>
        </main>
    );
};

export default Home;