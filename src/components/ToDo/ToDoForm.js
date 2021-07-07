import { useState } from "react";
import PropTypes from "prop-types";

const ToDoForm = (props) => {
   const { todoList, setTodoList } = props;

   const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   };

   const handleAdd = (e) => {
      e.preventDefault();
      setTodoList([
         ...todoList,
         { id: todoList[todoList.length - 1].id + 1, text: inputValue },
      ]);
   };

   return (
      <form>
         <input type="text" value={inputValue} onChange={handleChange} />
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
};

export default ToDoForm;
