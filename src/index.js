import React from "react";
import ReactDOM from "react-dom";

import Counter from "./counter/Counter";
import ToDo from "./todo/ToDo";

ReactDOM.render(
   <>
      <Counter />
      <ToDo />
   </>,
   document.getElementById("root")
);
