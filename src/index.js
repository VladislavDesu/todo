import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter/Counter";
import ToDo from "./components/Todo/ToDo";

ReactDOM.render(
   <>
      <Counter />
      <ToDo />
   </>,
   document.getElementById("root")
);
