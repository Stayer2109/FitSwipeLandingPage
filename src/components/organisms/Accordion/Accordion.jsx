import { useState, useRef, useEffect } from 'react';
import './Accordion.scss';  // Import your SCSS file
import { TriangleIcon } from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';

const Accordion = ({ data, isEmpty, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);
  const hasSetInitialHeight = useRef(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const paddingToSet = 30;

    if (isOpen) {
      // Only add padding if it's the first time calculating the open height
      if (!hasSetInitialHeight.current) {
        setHeight(`${contentRef.current.scrollHeight + paddingToSet}px`);
        hasSetInitialHeight.current = true;
      } else {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    } else {
      setHeight('0px');
      hasSetInitialHeight.current = false; // Reset when closing
    }
  }, [isOpen]);

  return (
    <>
      {
        !isEmpty && data.length > 0 ? (
          <div className={`${isOpen ? "open" : ""} accordion`}>
            {
              data.map((item, index) => (
                <div key={index}>
                  <div className="accordion-header" onClick={toggleAccordion} style={{ backgroundColor: color ? color : "transparent" }}>
                    <h3>{item.title}</h3>
                    <span className={`triangle-icon ${isOpen ? 'open' : ''}`}>
                      <TriangleIcon height={"16px"} color={"white"} />
                    </span>
                  </div>
                  <div
                    ref={contentRef}
                    className="accordion-content"
                    style={{ height: `${height}` }}
                  >
                    {
                      item.subtitle ? (
                        <>
                          <h4>{item.subtitle.title}</h4>
                          <ul className='subtitle-content'>
                            {item.subtitle.content.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <ul className='content-content'>
                          {
                            item.content.map((contentItem, contentIndex) => (
                              <li key={contentIndex}>{contentItem}</li>
                            ))
                          }
                        </ul>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        ) : null
      }
    </>
  );
};

// propTypes
Accordion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.arrayOf(PropTypes.string)
    }),
    content: PropTypes.arrayOf(PropTypes.string)
  })),
  isEmpty: PropTypes.bool,
  color: PropTypes.string
};

Accordion.defaultProps = {
  data: [],
  isEmpty: false,
  color: "#6FB700"
};

export default Accordion;
