import React from "react";
import Pizza_Navbar from "./Pizza_Navbar";
import Pizza_Edit_Portion from "./Pizza_Edit_Portion";

const Pizza_edit = (props) => {
  return (
    <div>
      <div>
        <Pizza_Navbar
        // ingredients={e.ingredients}
        // price={e.price}
        // name={e.name}
        // id={e.id}
        // image={e.image}
        />
      </div>
      <div>
        <Pizza_Edit_Portion />
      </div>
    </div>
  );
};

export default Pizza_edit;
