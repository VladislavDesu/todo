import PropTypes from "prop-types";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
   const { todoList, setTodoList, todoListRemove } = props;

   const handleRemove = (todoItemID) => {
      const items = todoListRemove.filter((item) => item.id !== todoItemID);
      setTodoList(items);
   };

   return (
      <ul>
         {todoList.length === 0 ? (
            <li>Ничего не найдено</li>
         ) : (
            todoList.map((item) => (
               <ToDoItem
                  key={item.id}
                  handleClick={handleRemove}
                  todoItem={item}
               />
            ))
         )}
      </ul>
   );
};

ToDoList.propTypes = {
   todoList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   todoListRemove: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   setTodoList: PropTypes.func,
};

export default ToDoList;
