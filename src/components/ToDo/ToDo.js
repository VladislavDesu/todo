import { useState } from "react";

import ToDoList from "./ToDoList";
import ToDoTitle from "./ToDoTitle";
import ToDoAdd from "./ToDoAdd";
import ToDoSearch from "./ToDoSearch";
import ToDoAddBtn from "./ToDoAddBtn";

const data = [
   { id: 1, text: "first" },
   { id: 2, text: "second" },
   { id: 3, text: "third" },
];

const ToDo = () => {
   const [todoList, setTodoList] = useState(data);
   const [inputSearch, setSearchValue] = useState("");
   const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   };

   const handleSearch = (e) => {
      const value = e.target.value;
      setSearchValue(value);
   };

   const lowercasedFilter = inputSearch.toLowerCase();
   const filteredData = todoList.filter((item) =>
      item.text.toLowerCase().includes(lowercasedFilter)
   );

   return (
      <div>
         <ToDoTitle />
         <ToDoSearch inputValue={inputSearch} handleChange={handleSearch} />
         <ToDoAdd inputValue={inputValue} handleChange={handleChange} />
         <ToDoAddBtn
            setTodoList={setTodoList}
            todoList={todoList}
            inputValue={inputValue}
         />
         <ToDoList
            setTodoList={setTodoList}
            todoList={filteredData}
            todoListRemove={todoList}
         />
      </div>
   );
};

export default ToDo;
