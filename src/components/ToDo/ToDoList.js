import { Switch, Route, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";

import ToDoItem from "./ToDoItem";
import ToDoItemInfo from "./ToDoItemInfo";

const ToDoList = (props) => {
   const { todoList, setTodoList, todoListRemove } = props;

   const match = useRouteMatch();

   const handleRemove = (todoItemID) => {
      const items = todoListRemove.filter((item) => item.id !== todoItemID);
      setTodoList(items);
   };

   return (
      <Switch>
         <Route path={`${match.path}/:topicId`}>
            <ToDoItemInfo />
         </Route>
         <Route path={match.path}>
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
         </Route>
      </Switch>
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
