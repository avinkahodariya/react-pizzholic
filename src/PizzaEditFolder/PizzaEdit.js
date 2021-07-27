import React, { useState, useEffect } from "react";
import NavForIngrediants from "./NavForIngrediants";
import EditPortion from "./EditPortion";
import styles from "./pizzaedit.module.css";
import Pizzabox from "../compo/Pizzabox";
import { useLocation } from "react-router-dom";
import * as All from "../assets/images";
import Footer from "../global/Footer";
// import cartbutton from "./assets/cart-icon.png";
const PizzaEdit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const location = useLocation();
  var ingredients = location.state.data.ingredients;
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

  const AddToCart = () => {
    console.log(location.state.data.id, location.state.data.price);
    let data = JSON.parse(localStorage.getItem("data"));
    if (data == undefined || data == null) {
      data = [];
    }
    data.push({
      ingredients: location.state.data.ingredients,
      price: location.state.data.price,
      name: location.state.data.name,
      id: location.state.data.id,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  };
  {
    window.scrollTo(0, 0);
  }
  console.log(location.state.data.ingredients, "dfg");
  return (
    <div>
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
        AddToCart={AddToCart}
      />

      <Footer />
    </div>
  );
};

export default PizzaEdit;
