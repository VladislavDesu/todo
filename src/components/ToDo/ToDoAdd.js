import PropTypes from "prop-types";

const ToDoAdd = (props) => {
   const { inputValue, handleChange } = props;

   return (
      <p>
         <label>
            Add ToDo
            <input type="text" value={inputValue} onChange={handleChange} />
         </label>
      </p>
   );
};

ToDoAdd.propTypes = {
   inputValue: PropTypes.string,
   handleChange: PropTypes.func,
};

export default ToDoAdd;
