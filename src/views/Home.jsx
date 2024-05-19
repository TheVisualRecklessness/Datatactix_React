import '../styles/Home.css';
import Logo from "../assets/graph-and-people-svgrepo-com.svg";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";
import { servicesData } from "../data/servicesMap";
import Graph from '../components/Graph';
import AccordionItem from '../components/AccordionItem';
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import { useEffect, useState } from 'react';

const Home = () => {
    const [graph, setGraph] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setGraph(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(document.querySelector('.graph-article'));
        return () => observer.disconnect();
    }, []);

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
                        {/* <ActionButton text="Conoce más" link="/Services" /> */}
                    </article>
                    <article id="greet-image-article">
                        <img 
                            src={Logo}
                            alt="img"
                            id="greetImage"
                        ></img>
                    </article>
                </section>
                <section id="about-section">
                    <article id="about-text-article">
                        <h2 className="section-title">Sobre nosotros</h2>
                        <p className="section-text">
                            Somos profesionales en distintas áreas de la tecnología. Nuestro objetivo es ayudar a toda clase de negocio a sacar el máximo provecho de sus datos,
                            ya sea para mejorar su eficiencia, aumentar sus ventas o consolidar su presencia en Internet. De igual manera, ofrecemos servicios de desarrollo web y
                            e implementación de sistemas de información. Nos adaptamos a las necesidades de cada cliente y ofrecemos soluciones de alto nivel. Colaborando con nosotros
                            podrás tener la seguridad de que tu empresa tendrá un aliado tecnológico de confianza.
                        </p>
                        <div className='graph-article'>
                            {graph && <Graph />}
                        </div>
                    </article>
                </section>
                <section id="servicios-section">
                    <div id="servicios-acordion">
                        {servicesData.map(data => {
                            return <AccordionItem 
                                key={data.id} 
                                data={data}
                            />
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