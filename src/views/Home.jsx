import '../styles/Home.css';
import Logo from "../assets/graph-and-people-svgrepo-com.svg";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";
import ActionButton from "../components/ActionButton";
// import { generalServicesInfo } from "../data/servicesInformationArray";
import { servicesData } from "../data/servicesMap";
// import Card from "../components/Card";
import AccordionItem from '../components/AccordionItem';
import Contact from "../components/Contact";
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
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
                {/* <section id="que-hacemos-section">
                    <h2 className="section-title">
                        ¿Cómo te ayuda Datatactix?
                    </h2>
                    <div id="que-hacemos-container">
                        {generalServicesInfo.map(info => {
                            return <Card
                                key={info.id}
                                image={info.image}
                                title={info.title}
                                description={info.description}
                            />
                        })}
                    </div>
                </section> */}
                <section id="servicios-section">
                    <div id="servicios-acordion">
                        {servicesData.map(data => {
                            return <AccordionItem key={data.id} data={data}/>
                        })}
                    </div>
                </section>
                <Contact />
                <Routes>
                    <Route path="/Services" element={<Services />}></Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default Home;