import SimpleSlider from "./SimpleSlider";

const ServicesArticles = props => {
    return (
        <>
            <div className="services-header" style={props.styles}>
                <h2>{props.servicesHeader}</h2>
            </div>
            <article className="services-information">
                <div className="services-slider">
                    <SimpleSlider services={props.arrayData}/>
                </div>
            </article>
        </>
    );
};

export default ServicesArticles;