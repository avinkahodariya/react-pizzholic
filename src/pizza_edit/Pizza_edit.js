import React, { useState } from "react";
import Nav from "./Nav";
import Pizzanav from "./Pizzanav";
import Pizza_Edit_Portion from "./Pizza_Edit_Portion";
import styles from "./pizzaedit.module.css";
import Pizzabox from "../Pizzabox";
import { useLocation } from "react-router-dom";
import italian from "../italian.jpg";
const Pizza_edit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const location = useLocation();

  const handleChange = (event) => {
    console.log(checkedItems);
    if (event.target.checked) {
      console.log(checkedItems, event.target.name);
      setCheckedItems([...checkedItems, event.target.name]);
    } else {
      console.log(checkedItems);
      let name = event.target.getAttribute("name");

      setCheckedItems(checkedItems.filter((item) => item !== name));
    }
  };

  console.log(location.state.data);
  return (
    <div className={styles.pizzaedit}>
      <div className={styles.pizzanavbar}>
        {/* <Pizzanav
          ingredients={location.state.data.ingredients}
          price={location.state.data.price}
          name={location.state.data.name}
          id={location.state.data.id}
          image={location.state.data.image}
          handleChange={handleChange}
        /> */}
        <Nav
          ingre={location.state.data.ingredients}
          price={location.state.data.price}
          name={location.state.data.name}
          id={location.state.data.id}
          image={location.state.data.image}
          handleChange={handleChange}
        />
      </div>

      <Pizza_Edit_Portion reciepe={checkedItems} />
    </div>
  );
};

export default Pizza_edit;
