import React from "react";

import Info from "./Info";
import { connect } from "react-redux";

const Cart = (props) => {
  console.log(props.username, props.item);

  let item = JSON.parse(localStorage.getItem("item"));
  console.log(item);

  return (
    <div>
      {item.map((e) => {
        var reciep = [];
        for (var i = 0; i < e.reciepe.length; i++) {
          console.log(e, e.name, e.reciepe[i]);
          reciep.push(e.reciepe[i][0]);
          console.log(reciep);
        }

        return (
          <div>
            <img
              src={e.image}
              style={{
                borderRadius: "1em",
                width: "15%",
                height: "200px",
              }}
            />
            {}
            <Info ingrediants={reciep} name={e.name} price={e.price} />
          </div>
        );
      })}
    </div>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
    item: state.addcart.item,
  };
};
export default connect(mapstateToprops)(Cart);

// {
//   for(i=0;i>6;i++)
//   {
// if(idArray[])
//   }
// }
