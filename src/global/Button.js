import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleclick} className={props.classname}>
        {props.name}{" "}
      </button>
    </>
  );
};

export default Button;
