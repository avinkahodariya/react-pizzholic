import React from "react";

const Button = (props) => {
  console.log("asdfghj");
  return (
    <>
      <button onClick={props.Handleclick} className={props.className}>
        <p>{props.name} </p>
      </button>
    </>
  );
};

export default Button;
