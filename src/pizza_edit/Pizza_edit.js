import React from "react";
import Pizzanav from "./Pizzanav";
import Pizza_Edit_Portion from "./Pizza_Edit_Portion";
import styles from "./pizzaedit.module.css";
import Pizzabox from "../Pizzabox";
import { useLocation } from "react-router-dom";
import italian from "../italian.jpg";
const Pizza_edit = (props) => {
  const location = useLocation();
  console.log(location.state.data);
  return (
    <div className={styles.pizzaedit}>
      <div className={styles.pizzanavbar}>
        <Pizzanav
          ingredients={location.state.data.ingredients}
          price={location.state.data.price}
          name={location.state.data.name}
          id={location.state.data.id}
          image={location.state.data.image}
        />
      </div>
      <div className={styles.pizzaimage}>
        <Pizza_Edit_Portion />
      </div>
    </div>
  );
};

export default Pizza_edit;
