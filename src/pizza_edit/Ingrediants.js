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
        <div>
          <img
            src={Capsicum}
            // className={styles.imagespan}
            style={{ width: "30%", height: "30%" }}
          />
          <div>
            {reciepeArray[j]}{" "}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Corn") {
      i.push(
        <div>
          <img src={Corn} style={{ width: "30%", height: "30%" }} />{" "}
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Mozzarella") {
      i.push(
        <div>
          <img
            src={Mozzarella}
            // className={styles.imagespan}
            style={{ width: "30%", height: "30%" }}
          />{" "}
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Brokoli") {
      i.push(
        <div>
          <img
            src={Brokoli}
            style={{ width: "30%", height: "30%" }}
            // className={styles.imagespan}
          />{" "}
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Olive") {
      i.push(
        <div>
          <img
            src={Olive}
            style={{ width: "30%", height: "30%" }}
            // className={styles.imagespan}
          />{" "}
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Tomato") {
      i.push(
        <div>
          <img
            src={Tometo}
            style={{ width: "30%", height: "30%" }}
            // className={styles.imagespan}
          />{" "}
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Masroom") {
      i.push(
        <div>
          <img
            src={Masroom}
            style={{ width: "30%", height: "30%" }}
            // className={styles.imagespan}
          />{" "}
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
    if (reciepeArray[j] == "Onion") {
      i.push(
        <div>
          <img
            src={Onion}
            style={{ width: "30%", height: "30%" }}
            // className={styles.imagespan}
          />
          <div>
            {reciepeArray[j]}
            <input
              type="checkbox"
              name={reciepeArray[j]}
              id={props.ingre}
              onChange={props.handleChange}
            />
          </div>
        </div>
      );
    }
  }
  return (
    <div className={styles.newnavingre}>
      <div>{i}</div>
      {/* <div>
        <p>{props.ingre}</p>
      </div> */}
      {/* <div>
        <input
          type="checkbox"
          name={props.ingre}
          id={props.ingre}
          onChange={props.handlechange}
        />
      </div> */}
    </div>
  );
};

export default Ingrediants;
