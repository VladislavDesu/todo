import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const { handleClick, todoItem } = props;

   return (
      <li>
         <p>{todoItem.text}</p>
         <button
            onClick={() => {
               handleClick(todoItem.id);
            }}
         >
            Remove
         </button>
      </li>
   );
};

ToDoItem.propTypes = {
   todoItem: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
   }),
   handleRemove: PropTypes.func,
};

export default ToDoItem;
