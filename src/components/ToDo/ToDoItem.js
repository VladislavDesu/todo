import React from "react";
import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const { todoItem, handleRemove } = props;

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
   setTodoList: PropTypes.func,
};

export default ToDoItem;
