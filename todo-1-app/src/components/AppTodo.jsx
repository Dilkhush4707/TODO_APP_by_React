import styles from "./AppTodo.module.css/";
import { useState, useContext } from "react";
import { GrAddCircle } from "react-icons/gr";
import TodoItemsApi from "../store/todostore";
function AppTodo() {
  const { addItem } = useContext(TodoItemsApi);
  const [todo, setTodo] = useState({ name: "", dueDate: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };
  const handleButtonClick = () => {
    addItem(todo.name, todo.dueDate);
    setTodo({ name: "", dueDate: "" });
  };
  return (
    <div className={`${styles["todo-containor"]}`}>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Todo here"
            value={todo.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="dueDate"
            value={todo.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            <GrAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
