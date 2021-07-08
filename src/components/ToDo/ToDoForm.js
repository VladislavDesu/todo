import { useState } from "react";
import PropTypes from "prop-types";

import ToDoAdd from "./ToDoAdd";
import ToDoSearch from "./ToDoSearch";
import ToDoAddBtn from "./ToDoAddBtn";

const ToDoForm = (props) => {
   const { todoList, setTodoList, setFilter, inputSearch, handleSearch } =
      props;

   const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   };

   const handleAdd = (e) => {
      e.preventDefault();

      // const text = inputValue === "" ? "пусто" : inputValue;

      // setFilter([
      //    ...todoList,
      //    {
      //       id:
      //          todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
      //       text: text,
      //    },
      // ]);
   };

   return (
      <div>
         <ToDoSearch inputSearch={inputSearch} handleSearch={handleSearch} />
         <ToDoAdd inputValue={inputValue} handleChange={handleChange} />
         <ToDoAddBtn handleAdd={handleAdd} />
      </div>
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
   inputSearch: PropTypes.string,
   handleSearch: PropTypes.func,
};

export default ToDoForm;
