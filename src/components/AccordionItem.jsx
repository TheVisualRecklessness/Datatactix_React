import Arrow from '../assets/right_arrow_head.svg';
import { useState, useEffect, useRef, useContext } from 'react';
import Card from "./Card";
import accordionContext from "../data/accordionContext";

const AccordionBody = ({ isOpen, steps }) => {
  return (
    <div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
        {steps.map(step => {
          return (
            <Card
              key={step.stepId}
              image={step.image}
              title={step.stepName}
              description={step.stepDescription}
              id={step.stepId}
            />
          );
        })}
    </div>
  );
};

const AccordionItem = ({ data }) => {
  const { bi, web, it } = useContext(accordionContext);
  const [isOpen, setIsOpen] = useState(false);
  const accordionArrow = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      setIsOpen(isOpen ? false : true);
    };
    const button = buttonRef.current;

    button.addEventListener('click', handleClick);
    return () => {
      button.removeEventListener('click', handleClick);
    };
  },[isOpen]);

  useEffect (() => {
    if(data.target === "bi-home-article") {
      setIsOpen(bi);
    } else if(data.target === "web-home-article") {
      setIsOpen(web);
    } else if(data.target === "it-home-article") {
      setIsOpen(it);
    }
  }, [bi, web, it, data.target]);

  useEffect(() => {
    const arrow = accordionArrow.current;
    if(isOpen) {
        arrow.classList.add("acordion-head-open");
    } else {
        arrow.classList.remove("acordion-head-open");
    }
  }, [isOpen]);

  return (
    <article id={data.target} className="acordion-item">
      <div className="acordion-boton" ref={buttonRef}>
        <h2>{data.name}</h2>
        <img ref={accordionArrow} src={Arrow} alt="right arrow" />
      </div>
      <AccordionBody steps={data.steps} isOpen={isOpen} />
    </article>
  );
};

export default AccordionItem;
