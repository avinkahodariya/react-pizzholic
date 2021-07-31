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
const PizzaEdit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const location = useLocation();
  var ingredients = location.state.data.ingredients;
  console.log(props.username);
  const data = {
    ingredients: location.state.data.ingredients,
    price: location.state.data.price,
    name: location.state.data.name,
    id: location.state.data.id,
    price: location.state.data.price,
    image: location.state.data.image,
    reciepe: checkedItems,
    username: props.username,
  };

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

  console.log(location.state.data.ingredients, "dfg");
  return (
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
          name={location.state.data.name}
          price={location.state.data.price}
          ingreinfo={location.state.data.ingredients}
        />
      </div>

      <NavForIngrediants
        ingre={location.state.data.ingredients}
        price={location.state.data.price}
        name={location.state.data.name}
        id={location.state.data.id}
        image={location.state.data.image}
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
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
  };
};

export default connect(mapstateToprops)(PizzaEdit);
