import ServicesArticles from "./ServicesArticles";
import React from "react";

const Services = () => {
    return (
        <main>
            <section id="section-bi" className="section-services">
                <ServicesArticles
                    servicesHeader="Business Intelligence"
                    styles= {{
                        color: "white",
                        backgroundImage: "url(https://analytics.hbs.edu/wp-content/uploads/sites/15/2020/10/BizAnalytics_vs_Intelligence-Hero.jpg)"
                    }}
                />
            </section>
            <section id="section-web" className="section-services">
                <ServicesArticles
                    servicesHeader="Web Development"
                    styles={{
                        color: "white",
                        backgroundImage: "url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    }}
                />
            </section>
            <section id="section-it" className="section-services">
                <ServicesArticles
                    servicesHeader="Information Technology"
                    styles = {{
                        color: "white",
                        backgroundImage: "url(https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }}
                />
            </section>
        </main>
    );
};

export default Services;