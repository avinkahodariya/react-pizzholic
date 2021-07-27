import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleclick} className={props.classname}>
        <p>{props.name} </p>
      </button>
    </>
  );
};

export default Button;
