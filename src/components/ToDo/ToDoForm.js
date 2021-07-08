import { useState } from "react";
import PropTypes from "prop-types";

const ToDoForm = (props) => {
   const { todoList, setTodoList, setTodoSearchList } = props;

   const [inputValue, setInputValue] = useState("");
   const [inputSearch, setSearchValue] = useState("");

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   };

   const handleSearch = (e) => {
      const value = e.target.value;
      const items = todoList.filter((item) =>
         item.text.indexOf(value) >= 0 ? true : false
      );

      console.log(items);

      setSearchValue(value);
      setTodoSearchList(value.length <= 0 ? todoList : items);
   };

   const handleAdd = (e) => {
      e.preventDefault();

      const text = inputValue === "" ? "пусто" : inputValue;

      setTodoSearchList([
         ...todoList,
         {
            id:
               todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
            text: text,
         },
      ]);

      setTodoList([
         ...todoList,
         {
            id:
               todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
            text: text,
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
   setTodoList: PropTypes.func,
   setTodoSearchList: PropTypes.func,
};

export default ToDoForm;
