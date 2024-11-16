import style from './TodoItem.module.css'
import { useContext } from 'react';
import TodoItemsApi from "../store/todostore";

import { MdDeleteForever } from 'react-icons/md';
function Todoitem({ todoName, todoDate}) {
  const {deleteItem} =useContext(TodoItemsApi);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button"
           className="btn btn-danger dj-button"
           onClick={()=>deleteItem(todoName)}>
            
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;