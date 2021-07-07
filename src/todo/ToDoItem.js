import React from "react";
import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const todoList = props.todoList;
   const setTodoList = props.setTodoList;
   const todoItem = props.todoItem;

   const handleRemove = (todoItemID) => {
      const items = todoList.filter((item) => item.id !== todoItemID);
      setTodoList(items);
   };

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
   todoList: PropTypes.array,
   todoItem: PropTypes.object,
   setTodoList: PropTypes.func,
};

export default ToDoItem;
