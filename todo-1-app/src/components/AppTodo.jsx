import styles from "./AppTodo.module.css/";
function AppTodo() {
  return (
    <div className={`${styles["st"]}`}>
      <div className="row rows">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success dj-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
