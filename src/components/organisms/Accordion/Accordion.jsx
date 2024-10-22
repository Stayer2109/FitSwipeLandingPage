// Accordion.js
import React, { useState, useRef, useEffect } from 'react';
import './Accordion.scss';  // Import your SCSS file
import { TriangleIcon } from '../../atoms/Icon/Icon';

const Accordion = ({ title, content, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px'); // State for dynamic height
  const contentRef = useRef(null); // Ref to access content height

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Calculate the height of the content when the accordion is opened
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion} style={{ backgroundColor: color ? color : "transparent" }}>
        <h3>{title}</h3>
        {/* Rotate the TriangleIcon based on the isOpen state */}
        <span className={`triangle-icon ${isOpen ? 'open' : ''}`}>
          <TriangleIcon height={"16px"} color={"white"} />
        </span>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{ height: `${height}` }} // Set dynamic height
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
