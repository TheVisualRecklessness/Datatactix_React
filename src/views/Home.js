import '../styles/Home.css';
import Logo from "../assets/graph-and-people-svgrepo-com.svg";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";
import ActionButton from "../components/ActionButton";

const Home = () => {
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
                    <ActionButton text="Conoce más" link="/Services" />
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