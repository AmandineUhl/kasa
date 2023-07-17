import React, { useState } from 'react';


function Collapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggleContent = () => {
    setIsContentVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className={`collapse_description ${isContentVisible ? 'open' : ''}`}>
      <div className="collapse_description_title" onClick={handleToggleContent}>
        <span>{props.title}</span>
        <i
          className={`fa-solid fa-chevron-up ${isContentVisible ? 'rotate-chevron' : ''}`}
        ></i>
      </div>
      <div className="collapse_description_content">
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{props.content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
