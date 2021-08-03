import React, { useState, useEffect } from "react";
import NavForIngrediants from "./NavForIngrediants";
import { connect } from "react-redux";
import EditPortion from "./EditPortion";
import styles from "./pizzaedit.module.css";
import Pizzabox from "../compo/Pizzabox";
import { useLocation } from "react-router-dom";
import * as All from "../assets/images";
import Footer from "../global/Footer";
import Button from "../global/Button";
// import cartbutton from "./assets/cart-icon.png";
import addToCart from "./Function/addToCart";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const PizzaEdit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  let { id1 } = useParams();
  var pizzaid = [];
  console.log(id1);

  let pizaadata = JSON.parse(localStorage.getItem("pizzastore"))[0];
  console.log(JSON.parse(localStorage.getItem("pizzastore")));
  pizzaid = pizaadata.filter((e) => {
    // console.log(id, e);
    if (e.id == id1) {
      return e;
    }
    console.log(pizzaid);
  });
  console.log(pizzaid);

  console.log(pizzaid);

  // const location = useLocation();

  const data = {
    ingredients: pizzaid[0].ingredients,
    price: pizzaid[0].price,
    name: pizzaid[0].name,
    id: pizzaid[0].id,
    image: pizzaid[0].image,
    reciepe: checkedItems,
    username: props.username,
  };

  var ingredients = pizzaid[0].ingredients;
  var price = pizzaid[0].price;
  var name = pizzaid[0].name;
  var id = pizzaid[0].id;
  var image = pizzaid[0].image;
  var reciepe = checkedItems;
  var username = props.username;

  const handleChange = (event) => {
    console.log(checkedItems, event);

    if (event.target.checked) {
      console.log(checkedItems);

      console.log(...checkedItems);

      setCheckedItems([
        ...checkedItems,
        [
          event.target.name,
          ingredients.filter((e) => {
            if (event.target.name == e[0]) {
              return e[1];
            }
          }),
        ],
      ]);
    } else {
      let name = event.target.getAttribute("name");

      setCheckedItems(checkedItems.filter((item) => item[0] !== name));
    }
  };

  return (
    <>
      <div className={styles.flex}>
        <p className={styles.pizzatitle}>
          Let`s Crete Your Own Pizza
          <img
            src={All.icon}
            style={{
              width: "50px",
              height: "100%",
              float: "right",
              marginRight: "5px",
              backdropFilter: "bllur(10px)",
              backgroundColor: "#313131",
            }}
          />
        </p>
        <div className={styles.pizzarelative}>
          {" "}
          <EditPortion
            reciepe={checkedItems}
            name={name}
            price={price}
            ingreinfo={ingredients}
          />
        </div>

        <NavForIngrediants
          ingre={ingredients}
          price={price}
          name={name}
          id={id}
          image={image}
          handleChange={handleChange}
        />

        <Button
          name={"Buy Now..."}
          className={styles.center}
          Handleclick={props.buynow}
        />
        <Button
          name={"Add To Cart.."}
          className={styles.center}
          Handleclick={() => addToCart(data)}
        />

        <Footer />
      </div>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
  };
};

export default connect(mapstateToprops)(PizzaEdit);
