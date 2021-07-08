import PropTypes from "prop-types";

const ToDoSearch = (props) => {
   const { inputSearch, handleSearch } = props;

   return (
      <p>
         <label>
            Search
            <input type="text" value={inputSearch} onChange={handleSearch} />
         </label>
      </p>
   );
};

ToDoSearch.propTypes = {
   inputSearch: PropTypes.string,
   handleSearch: PropTypes.func,
};

export default ToDoSearch;
