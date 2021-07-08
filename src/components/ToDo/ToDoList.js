import PropTypes from "prop-types";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
   const { todoList, todoSearchList, setTodoList, setTodoSearchList } = props;

   const handleRemove = (todoItemID) => {
      const items = todoList.filter((item) => item.id !== todoItemID);
      setTodoSearchList(items);
      setTodoList(items);
   };

   return (
      <ul>
         {todoSearchList.length === 0 ? (
            <li>Пусто</li>
         ) : (
            todoSearchList.map((item) => (
               <ToDoItem
                  key={item.id}
                  handleRemove={handleRemove}
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
   todoSearchList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   setTodoList: PropTypes.func,
   setTodoSearchList: PropTypes.func,
};

export default ToDoList;
