import '../styles/About.css';
import { useContext, useEffect } from 'react';
import { NavBarContext } from '../context/NavBarContext';

const About = () => {
    const navBarRef = useContext(NavBarContext);

    useEffect(() => {
        navBarRef.current.classList.add("nav-background");
    }, [navBarRef]);

    return (
        <main>
            <section className='about-section'>
                <h2>¿Quiénes somos?</h2>
                <p>
                    Somos una empresa de consultoría en tecnologías de la información
                    que busca ayudar a las empresas a crecer y adaptarse a las
                    nuevas tecnologías.
                </p>
            </section>
        </main>
    );
};

export default About;