import PropTypes from "prop-types";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
   const todoList = props.todoList;
   const setTodoList = props.setTodoList;

   const handleRemove = (todoItemID) => {
      const items = todoList.filter((item) => item.id !== todoItemID);
      setTodoList(items);
   };

   return (
      <ul>
         {todoList.map((item) => (
            <ToDoItem
               key={item.id}
               handleRemove={handleRemove}
               todoList={todoList}
               todoItem={item}
            />
         ))}
      </ul>
   );
};

ToDoList.propTypes = {
   todoList: PropTypes.array,
   setTodoList: PropTypes.func,
};

export default ToDoList;
