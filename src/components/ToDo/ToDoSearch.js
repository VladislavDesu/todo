import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const ToDoSearch = (props) => {
   const { todoList, setTodoList, searchToDoList } = props;
   const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
      const item = searchToDoList.filter((item) => {
         if (item.text.indexOf(inputValue) !== -1) {
            console.log(item.text.indexOf(inputValue));
            return item;
         }
      });
      setTodoList(item);
      const value = e.target.value;
      setInputValue(value);
   };

   return (
      <p>
         <input type="text" value={inputValue} onChange={handleChange} />
      </p>
   );
};

ToDoSearch.propTypes = {
   todoList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   setTodoList: PropTypes.func,
};

export default ToDoSearch;
