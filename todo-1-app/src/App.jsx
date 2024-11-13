import { useState } from "react";
import WelcomeMsg from "./welcomemsg";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItems from "./components/Todoitems";
function App() {
  const initialTodoItems = [
  ];
  const deleteItem=()=>{
    console.log("delete todo item");
  }
  const [todoItems, setTodoItemss] = useState(initialTodoItems);
  const handleNewItem=(itemName,itemdueDate)=>{
  
    const addNewItem=[...todoItems,{name:itemName,duedate:itemdueDate}];
    setTodoItemss(addNewItem);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo onNewItem={handleNewItem}></AppTodo>
    {todoItems.length===0&&<WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItems={todoItems} ondelete={deleteItem}></TodoItems>
    </center>
  );
}

export default App;
