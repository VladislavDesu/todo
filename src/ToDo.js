import { useState } from "react";

const data = [
   { id: 1, text: "first" },
   { id: 2, text: "second" },
   { id: 3, text: "third" },
];

const ToDo = () => {
   const [todoList, setTodoList] = useState(data);
   const [inputValue, setInputValue] = useState("");

   const handleRemove = (todoItemID) => {
      const items = todoList.filter((item) => item.id !== todoItemID);
      setTodoList(items);
   }

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   }

   function handleAdd(e) {
      e.preventDefault();
      console.log(todoList);
      setTodoList([
         ...todoList,
         { id: todoList[todoList.length - 1].id + 1, text: inputValue },
      ]);
   }

   return (
      <div>
         <h1>ToDo List</h1>
         <form>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
         </form>
         <ul>
            {todoList.map((todoList) => (
               <li key={todoList.id}>
                  <p>{todoList.text}</p>
                  <button
                     onClick={() => {
                        handleRemove(todoList.id);
                     }}
                  >
                     Remove
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ToDo;
