import '../styles/About.css';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
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
            <Footer />
        </>
    );
};

export default About;