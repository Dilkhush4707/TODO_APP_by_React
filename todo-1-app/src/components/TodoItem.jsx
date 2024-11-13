import style from './TodoItem.module.css'
function Todoitem({ todoName, todoDate,ondelete }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button"
           className="btn btn-danger dj-button"
           onClick={ondelete}>
            
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
