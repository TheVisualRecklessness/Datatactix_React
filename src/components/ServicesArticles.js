import Carousel from './Carousel';
import '../services-carousel.css';

const ServicesArticles = props => {
    
    return (
        <>
            <div className="services-header" style={props.styles}>
                <h2>{props.servicesHeader}</h2>
            </div>
            <article className="services-information">
                <h3>information</h3>
                <Carousel />
            </article>
        </>
    );
};

export default ServicesArticles;