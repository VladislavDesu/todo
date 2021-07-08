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
   const [filter, setFilter] = useState();
   const [inputSearch, setSearchValue] = useState("");

   const handleSearch = (e) => {
      const value = e.target.value;
      setSearchValue(value);

      const lowercasedFilter = value.toLowerCase();
      const filteredData = todoList.filter((item) =>
         item.text.toLowerCase().includes(lowercasedFilter)
      );
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
            setFilter={setFilter}
         />
         <ToDoList
            filter={filter}
            setFilter={setFilter}
            setTodoList={setTodoList}
            todoList={todoList}
         />
      </div>
   );
};

export default ToDo;
