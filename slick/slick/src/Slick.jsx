import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { longList } from "./data.js";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SlickCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="slick-container">
      {longList.map((singlePerson) => {
        //Destructuring the singlePerson object
        const { id, image, name, title, quote } = singlePerson;

        //Html for displaying the single person
        return (
          <div key={id}>
            <img src={image} alt={name} className="image" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteLeft className="icon" />
          </div>
        );
      })}
    </Slider>
  );
};

export default SlickCarousel;
