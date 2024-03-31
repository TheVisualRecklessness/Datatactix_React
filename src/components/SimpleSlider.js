import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function SimpleSlider(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        onhover: false
    };
    return (
        <>
            <Slider {...settings}>
                {props.services.map(service => (
                    <Card 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </Slider>
        </>
    );
}

export default SimpleSlider;