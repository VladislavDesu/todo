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

   return (
      <div>
         <ToDoTitle />
         <ToDoForm todoList={todoList} setTodoList={setTodoList} />
         <ToDoList todoList={todoList} setTodoList={setTodoList} />
      </div>
   );
};

export default ToDo;
