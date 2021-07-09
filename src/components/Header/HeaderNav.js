import { Link } from "react-router-dom";

const HeaderNav = () => {
   return (
      <>
         <nav>
            <ul>
               <li>
                  <Link to="/">Counter</Link>
               </li>
               <li>
                  <Link to="/todo">ToDo</Link>
               </li>
               <li>
                  <Link to="/modal">Modal</Link>
               </li>
            </ul>
         </nav>
         <hr />
      </>
   );
};

export default HeaderNav;
