import { Link, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const { handleClick, todoItem } = props;

   const match = useRouteMatch();

   return (
      <li>
         <Link to={`${match.url}/${todoItem.text.toLowerCase()}`}>
            {todoItem.text}
         </Link>
         <button
            onClick={() => {
               handleClick(todoItem.id);
            }}
         >
            Remove
         </button>
      </li>
   );
};

ToDoItem.propTypes = {
   todoItem: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
   }),
   handleRemove: PropTypes.func,
};

export default ToDoItem;
