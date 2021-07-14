import React from "react";
import Pizzanav from "./Pizzanav";
import Pizza_Edit_Portion from "./Pizza_Edit_Portion";
import styles from "./pizzaedit.module.css";

const Pizza_edit = (props) => {
  return (
    <div className={styles.pizzaedit}>
      <div className={styles.pizzanavbar}>
        <Pizzanav
        // ingredients={e.ingredients}
        // price={e.price}
        // name={e.name}
        // id={e.id}
        // image={e.image}
        />
      </div>
      <div className={styles.image}>
        <Pizza_Edit_Portion />
      </div>
    </div>
  );
};

export default Pizza_edit;
