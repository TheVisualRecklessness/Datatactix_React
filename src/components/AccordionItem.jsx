import Arrow from '../assets/right_arrow_head.svg';
import { useState, useEffect, useRef, useContext } from 'react';
import accordionContext from "../data/accordionContext";

const AccordionBody = ({ isOpen, steps }) => {
  return (
    <div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
        {steps.map(step => {
          return (
            <div key={step.stepId} className="service-individual">
              <img src={step.image} alt={step.stepName} />
              <h3>{step.stepName}</h3>
              <p>{step.stepDescription}</p>
            </div>
          );
        })}
    </div>
  );
};

const AccordionItem = ({ data }) => {
  const { setBi, bi, setWeb, web, setIt, it } = useContext(accordionContext);
  const [isOpen, setIsOpen] = useState(false);
  const accordionArrow = useRef(null);
  const buttonRef = useRef(null);

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
    const handleClick = () => {
      setIsOpen(isOpen ? false : true);
    };
    const button = buttonRef.current;

    button.addEventListener('click', handleClick);
    return () => {
      button.removeEventListener('click', handleClick);
    };
  },[isOpen]);

  useEffect(() => {
    if(data.target === "bi-home-article") {
      setBi(isOpen);
    } else if(data.target === "web-home-article") {
      setWeb(isOpen);
    } else if(data.target === "it-home-article") {
      setIt(isOpen);
    }
  }, [isOpen, setBi, setWeb, setIt, data.target]);

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
