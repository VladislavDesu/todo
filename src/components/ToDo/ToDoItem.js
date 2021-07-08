import React from "react";
import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const { handleRemove, todoItem } = props;

   return (
      <li>
         <p>{todoItem.text}</p>
         <button
            onClick={() => {
               handleRemove(todoItem.id);
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
