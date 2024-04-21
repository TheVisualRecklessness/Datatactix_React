import Arrow from '../assets/right_arrow_head.svg';
import { useState } from 'react';
import Card from "./Card";

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
  const [ isOpen, setIsOpen ] = useState(true);
  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <article id={data.target} className="acordion-item">
      <div className="acordion-boton" onClick={handleClick}>
        <h2>{data.name}</h2>
        <img src={Arrow} alt="right arrow" />
      </div>
      <AccordionBody steps={data.steps} isOpen={isOpen} />
    </article>
  );
};

export default AccordionItem;
