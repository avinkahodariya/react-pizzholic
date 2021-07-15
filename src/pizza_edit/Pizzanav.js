import React from "react";
import styles from "./pizzaedit.module.css";
import italian from "../italian.jpg";

const Pizzanav = (props) => {
  console.log(props);
  return (
    <div>
      <div className={styles.navtitle}>
        <div>{props.name}</div>
      </div>
      <div className={styles.navimage}>
        <img src={props.image} />
      </div>
      <div className={styles.navcheck}>
        <div className={styles.navingre}>
          {" "}
          {props.ingredients.map((ingre) => {
            return (
              <div className={styles.ingre}>
                {ingre}
                <input type="checkbox" value={ingre} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pizzanav;
