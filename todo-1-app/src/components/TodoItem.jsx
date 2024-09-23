function Todoitem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row rows">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger dj-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
