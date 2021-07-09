import PropTypes from "prop-types";

const ToDoAddBtn = (props) => {
   const { todoList, setTodoList, inputValue } = props;

   const handleClick = (e) => {
      const text = inputValue === "" ? "Пусто" : inputValue;

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
      <>
         <button onClick={handleClick}>Add</button>
      </>
   );
};

ToDoAddBtn.propTypes = {
   todoList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         text: PropTypes.string,
      })
   ),
   setTodoList: PropTypes.func,
   inputValue: PropTypes.string,
};
export default ToDoAddBtn;
