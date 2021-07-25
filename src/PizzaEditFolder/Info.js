import React from "react";

const Info = (props) => {
  return (
    <div>
      <p>{props.ingredients}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Info;
