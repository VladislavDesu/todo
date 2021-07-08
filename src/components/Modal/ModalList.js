import { Switch, Route, Link } from "react-router-dom";
import ModalItem from "./ModalItem";
const ModalList = () => {
   return (
      <div>
         <ul>
            <Link to="/modal/1">Modal 1</Link>
         </ul>

         <Switch>
            <Route path="/modal/1">
               <ModalItem />
            </Route>
         </Switch>
      </div>
   );
};

export default ModalList;
