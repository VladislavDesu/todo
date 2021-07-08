import { Link } from "react-router-dom";

const HeaderNav = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link to="/counter">Counter</Link>
            </li>
            <li>
               <Link to="/todo">ToDo</Link>
            </li>
         </ul>
      </nav>
   );
};

export default HeaderNav;
