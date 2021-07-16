import React from "react";
import Ingrediants from "./Ingrediants";

const Nav = (props) => {
  console.log(props.ingre);
  return (
    <div>
      <div>
        <Ingrediants
          ingre={props.ingre}
          image={props.image}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default Nav;
