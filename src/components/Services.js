import ServicesArticles from "./ServicesArticles";
import '../Services.css';
import { React, Suspense } from "react";
import { biArray, webDevArray, itArray } from "../servicesInformationArray";

const Services = () => {
    return (
        <main>
            <section id="section-bi" className="section-services">
                <Suspense fallback={<div>Loading...</div>}>
                    <ServicesArticles
                        servicesHeader="Inteligencia de Negocios"
                        styles= {{
                            color: "white",
                            backgroundImage: "url(https://analytics.hbs.edu/wp-content/uploads/sites/15/2020/10/BizAnalytics_vs_Intelligence-Hero.jpg)"
                        }}
                        arrayData={biArray}
                    />
                </Suspense>
            </section>
            <section id="section-web" className="section-services">
                <Suspense fallback={<div>Loading...</div>}>
                    <ServicesArticles
                        servicesHeader="Desarrollo Web"
                        styles={{
                            color: "white",
                            backgroundImage: "url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                        }}
                        arrayData={webDevArray}
                    />
                </Suspense>
            </section>
            <section id="section-it" className="section-services">
                <Suspense fallback={<div>Loading...</div>}>
                    <ServicesArticles
                        servicesHeader="Tecnologías de la Información"
                        styles = {{
                            color: "white",
                            backgroundImage: "url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }}
                        arrayData={itArray}
                    />
                </Suspense>
            </section>
        </main>
    );
};

export default Services;