import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   const handleCountPlus = () => {
       setCount(count + 1)
   }

   const handleCountMinus = () => {
       setCount(count - 1)
   }

   return (
      <div>
         <p>{count}</p>
         <button onClick={handleCountPlus}>+</button>
         <button onClick={handleCountMinus}>-</button>
      </div>
   );
}

export default Counter