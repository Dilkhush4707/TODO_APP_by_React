import Todoitem from "./TodoItem";
import { useContext } from "react";
import TodoItemsApi  from "../store/todostore";
const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsApi);

  return (
    <div>
      {todoItems.map((item) => (
        <Todoitem
          key ={item.name}
          todoDate={item.duedate}
          todoName={item.name}
        />
      ))}
    </div>
  );
};
export default TodoItems;
