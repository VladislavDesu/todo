import PropTypes from "prop-types";

const ToDoSearch = (props) => {
   const { inputValue, handleChange } = props;

   return (
      <p>
         <label>
            Search
            <input type="text" value={inputValue} onChange={handleChange} />
         </label>
      </p>
   );
};

ToDoSearch.propTypes = {
   inputValue: PropTypes.string,
   handleChange: PropTypes.func,
};

export default ToDoSearch;
