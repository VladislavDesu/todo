import PropTypes from "prop-types";

const ToDoAddBtn = (props) => {
   const { handleAdd } = props;
   return (
      <>
         <button onClick={handleAdd}>Add</button>
      </>
   );
};

ToDoAddBtn.propTypes = {
   handleAdd: PropTypes.func,
};

export default ToDoAddBtn;
