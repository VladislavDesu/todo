import { useState } from "react";
import PropTypes from "prop-types";

const ToDoForm = (props) => {
   const { todoList, todoSearchList, setTodoList, setTodoSearchList } = props;

   const [inputValue, setInputValue] = useState("");
   const [inputSearch, setSearchValue] = useState("");

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   };

   const handleSearch = (e) => {
      const value = e.target.value;
      const items = todoSearchList.filter((item) => !item.text.indexOf(value));

      setSearchValue(value);
      setTodoSearchList(value === "" ? todoList : items);
   };

   const handleAdd = (e) => {
      e.preventDefault();
      console.log(todoList);
      setTodoSearchList([
         ...todoList,
         {
            id: todoList[todoList.length - 1].id + 1,
            text: inputValue,
         },
      ]);
      setTodoList([
         ...todoList,
         {
            id: todoList[todoList.length - 1].id + 1,
            text: inputValue,
         },
      ]);
   };

   return (
      <form>
         <p>
            <input type="text" value={inputSearch} onChange={handleSearch} />
         </p>
         <p>
            <input type="text" value={inputValue} onChange={handleChange} />
         </p>
         <button onClick={handleAdd}>Add</button>
      </form>
   );
};

ToDoForm.propTypes = {
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

export default ToDoForm;
