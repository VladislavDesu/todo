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
   const [todoSearchList, setTodoSearchList] = useState(data);
   return (
      <div>
         <ToDoTitle />
         <ToDoForm
            todoList={todoList}
            setTodoList={setTodoList}
            setTodoSearchList={setTodoSearchList}
         />
         <ToDoList
            todoList={todoList}
            todoSearchList={todoSearchList}
            setTodoList={setTodoList}
            setTodoSearchList={setTodoSearchList}
         />
      </div>
   );
};

export default ToDo;
