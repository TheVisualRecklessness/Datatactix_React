import "../Home.css";
import Logo from "../assets/graph-and-people-svgrepo-com.svg";

const Home = () => {
    return (
        <main>
            <section id="banner">
                <article id="greet">
                    <h1>
                        ¡Haz crecer tu negocio y adapta las mejores
                        prácticas y soluciones para crecer en tu área!
                    </h1>
                    <h2>
                        Comienza a aprovechar en tu propia compañia las
                        herramientas que las grandes empresas usan.
                    </h2>
                </article>
                <article id="greetImageArticle">
                    <img 
                        src={Logo}
                        alt="img"
                        id="greetImage"
                    >
                    </img>
                </article>
            </section>
        </main>
    );
};

export default Home;