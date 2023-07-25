import React from "react";

function Tags(props) {
  return (
    <div className="apartment_badges">
      {props.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
