//Imports
import { useState } from "react";
import { longList } from "./data.js";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

//Carousel component
const Carousel = () => {
  //State managing
  const [person, setPerson] = useState(longList);
  const [index, setIndex] = useState(0);

  //Function to go to previous slide
  const prevSlide = () => {
    setIndex((index) => (index - 1 + person.length) % person.length);
  };

  //Function to go to next slide
  const nextSlide = () => {
    setIndex((index) => (index + 1) % person.length);
  };

  return (
    <div className="slider-container">
      {person.map((singlePerson, ind) => {
        //Destructuring the singlePerson object
        const { id, image, name, title, quote } = singlePerson;
        console.log(ind + " " + index);

        //Html for displaying the single person
        return (
          <div
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (ind - index)}%)`,
              opacity: `${index === ind ? 1 : 0}`,
              overflow: "hidden",
            }}
          >
            <img src={image} alt={name} className="image" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteLeft className="icon" />
          </div>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next " onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
