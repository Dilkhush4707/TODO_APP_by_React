import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItems from "./components/Todoitems";
function App() {
  const todoItems = [
    {
      name: "BUY MILK",
      duedate: "30/08/2024",
    },
    {
      name: "GO TO COLLEGE",
      duedate: "30/08/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
