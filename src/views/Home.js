import '../styles/Home.css';
import Logo from "../assets/graph-and-people-svgrepo-com.svg";
import RightArrow from "../assets/right_arrow_svg.svg";
import Services from "./Services";
import {Link, Routes, Route} from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section id="banner-section">
                <article id="greet-article">
                    <h1>
                        Los datos son el activo más valioso de tu empresa
                    </h1>
                    <p>
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
            <Routes>
                <Route path="/Services" element={<Services />}></Route>
            </Routes>
        </main>
    );
};

export default Home;