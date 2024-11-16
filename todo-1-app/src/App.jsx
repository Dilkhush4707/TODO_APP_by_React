import { useState } from "react";
import WelcomeMsg from "./welcomemsg";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItemsApi from "./store/todostore";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItems from "./components/Todoitems";
function App() {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const addItem = (itemName, itemdueDate) => {
    const addNewItem = [...todoItems, { name: itemName, duedate: itemdueDate }];
    setTodoItems(addNewItem);
  };
  const deleteItem=()=>{
    const deletetodu=todoItems.filter((item)=>todoItemName);
    setTodoItems(deleteItem);
  }

  return (
    <TodoItemsApi.Provider value={{ todoItems, addItem, deleteItem }}>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo></AppTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsApi.Provider>
  );
}

export default App;
