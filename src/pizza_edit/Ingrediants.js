import React from "react";
import Capsicum from "./capsicum.png";
import Corn from "./corn.png";
import Olive from "./olive.png";
import Tometo from "./tometo.png";
import Mozzarella from "./Mozzarella.png";
import Masroom from "./masroom.png";
import Onion from "./onion.png";
import Brokoli from "./brokoli.png";
import pizzaedit from "./pizza-edit.png";
import styles from "./pizzaedit.module.css";

const Ingrediants = (props) => {
  let reciepeArray = props.ingre;
  console.log(props.ingre);
  let i = [];
  for (var j = 0; j < reciepeArray.length; j++) {
    if (reciepeArray[j] == "Capsicum") {
      console.log(j);
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img
              src={Capsicum}
              // className={styles.imagespan}
              className={styles.pizzaingreimage}
            />
          </label>

          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Corn") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img src={Corn} className={styles.pizzaingreimage} />
          </label>
          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Mozzarella") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img
              src={Mozzarella}
              // className={styles.imagespan}
              className={styles.pizzaingreimage}
            />
          </label>
          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Brokoli") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img src={Brokoli} className={styles.pizzaingreimage} />
          </label>

          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Olive") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img
              src={Olive}
              className={styles.pizzaingreimage}
              // className={styles.imagespan}
            />
          </label>
          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Tomato") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img
              src={Tometo}
              className={styles.pizzaingreimage}
              // className={styles.imagespan}
            />
          </label>
          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Mushroom") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img
              src={Masroom}
              className={styles.pizzaingreimage}
              // className={styles.imagespan}
            />
          </label>
          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
    if (reciepeArray[j] == "Onion") {
      i.push(
        <div className={styles.subingreimage}>
          <label>
            <img
              src={Onion}
              className={styles.pizzaingreimage}
              // className={styles.imagespan}
            />
          </label>

          <input
            type="checkbox"
            name={reciepeArray[j]}
            id={props.ingre}
            onChange={props.handleChange}
          />
        </div>
      );
    }
  }
  return <div className={styles.mainingreimagecheckbox}>{i}</div>;
};

export default Ingrediants;
