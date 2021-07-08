import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./components/Counter/Counter";
import ToDo from "./components/ToDo/ToDo";
import HeaderNav from "./components/Header/HeaderNav";

ReactDOM.render(
   <Router>
      <HeaderNav />

      <Switch>
         <Route path="/counter">
            <Counter />
         </Route>
         <Route path="/todo">
            <ToDo />
         </Route>
      </Switch>
   </Router>,
   document.getElementById("root")
);
