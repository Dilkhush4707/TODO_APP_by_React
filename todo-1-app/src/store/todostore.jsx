import { createContext } from "react";
const TodoItemsApi = createContext({
  TodoItems:[],
  addItem:()=>{},
  deleteItem:()=>{}
});
export default TodoItemsApi;