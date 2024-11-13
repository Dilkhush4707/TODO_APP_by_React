import styles from "./AppTodo.module.css/";
import { useState } from "react";
function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [duedate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonClick = () => {
    onNewItem(todoName, duedate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className={`${styles["todo-containor"]}`}>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          value={duedate}
           onChange={handleDueDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
