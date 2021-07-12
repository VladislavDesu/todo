import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
   const selectCount = (state) => state.count;
   const count = useSelector(selectCount);
   const dispatch = useDispatch();

   return (
      <div>
         <p>{count}</p>
         <button
            onClick={() => {
               dispatch({ type: "counter/incremented" });
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch({ type: "counter/decremented" });
            }}
         >
            -
         </button>
      </div>
   );
};

export default Counter;
