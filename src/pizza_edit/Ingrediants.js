import React from "react";
import styles from "./pizzaedit.module.css";

const Ingrediants = (props) => {
  console.log(props.ingre);
  let i = [];

  i = props.ingre.map((e) => {
    return (
      <div className={styles.subingreimage}>
        <label>
          <img
            src={e[1]}
            name={e[0]}
            onClick={props.handleChange}
            className={styles.pizzaingreimage}
          />
          <input type="checkbox" name={e[0]} onChange={props.handleChange} />
        </label>
      </div>
    );
  });

  return <div className={styles.mainingreimagecheckbox}>{i}</div>;
};

export default Ingrediants;
