import React from "react";
import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const handleRemove = props.handleRemove;
   const todoItem = props.todoItem;

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
   todoItem: PropTypes.object,
   setTodoList: PropTypes.func,
};

export default ToDoItem;
