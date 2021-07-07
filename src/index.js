import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";
import ToDo from "./ToDo";

ReactDOM.render(
   <div>
      <Counter />
      <ToDo />
   </div>,
   document.getElementById("root")
);
