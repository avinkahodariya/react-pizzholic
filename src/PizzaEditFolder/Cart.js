import React from "react";

import Info from "./Info";
const Cart = (props) => {
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  var id1 = 0;
  var id2 = 0,
    id3 = 0,
    id4 = 0,
    id5 = 0,
    id6 = 0;

  data.map((e) => {
    switch (e.id) {
      case "1":
        id1++;
        break;
      case "2":
        id2++;
        console.log(id2);
        break;
      case "3":
        id3++;
        break;
      case "4":
        id4++;
        break;
      case "5":
        id5++;
        break;
      case "6":
        id6++;
        break;
    }
  });

  var idArray = [];
  console.log(id2);
  idArray.push({ id1, id2, id3, id4, id5, id6 });
  console.log(idArray);

  return (
    <div>
      {data.map((e) => {
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
            <Info ingrediants={e.ingrediants} name={e.name} price={e.price} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

// {
//   for(i=0;i>6;i++)
//   {
// if(idArray[])
//   }
// }
