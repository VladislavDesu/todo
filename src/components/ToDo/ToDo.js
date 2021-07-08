import { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoTitle from "./ToDoTitle";

const data = [
   { id: 1, text: "first" },
   { id: 2, text: "second" },
   { id: 3, text: "third" },
];

const ToDo = () => {
   const [todoList, setTodoList] = useState(data);

   const [inputSearch, setSearchValue] = useState("");
   const [filter, setFilter] = useState(data);

   const handleSearch = (e) => {
      const value = e.target.value;
      setSearchValue(value);

      const lowercasedFilter = inputSearch.toLowerCase();
      const filteredData = todoList.filter((item) => {
         return Object.keys(item).some((key) => {
            return item.text.toLowerCase().includes(lowercasedFilter);
         });
      });
      setFilter(filteredData);
   };

   return (
      <div>
         <ToDoTitle />
         <ToDoForm
            todoList={todoList}
            setTodoList={setTodoList}
            inputSearch={inputSearch}
            handleSearch={handleSearch}
         />
         <ToDoList todoList={filter} setTodoList={setTodoList} />
      </div>
   );
};

export default ToDo;
