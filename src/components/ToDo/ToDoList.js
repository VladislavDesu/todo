import PropTypes from "prop-types";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
   const { filter, todoList, setFilter, setTodoList } = props;

   const handleRemove = (todoItemID) => {
      // const items = todoList.filter((item) => item.id !== todoItemID);
      // setTodoList(items);
   };

   return (
      <ul>
         {filter.map((item) => (
            <ToDoItem
               key={item.id}
               handleRemove={handleRemove}
               todoItem={item}
            />
         ))}
      </ul>
   );
};

ToDoList.propTypes = {
   filter: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   todoList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   setTodoList: PropTypes.func,
};

export default ToDoList;
