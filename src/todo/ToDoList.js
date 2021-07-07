import PropTypes from "prop-types";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
   const todoList = props.todoList;
   const setTodoList = props.setTodoList;

   return (
      <ul>
         {todoList.map((item) => (
            <ToDoItem
               key={item.id}
               setTodoList={setTodoList}
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
