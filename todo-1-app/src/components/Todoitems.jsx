import Todoitem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-containor">
      {todoItems.map((item) => (
        <Todoitem todoDate={item.duedate} todoName={item.name}></Todoitem>
      ))}
    </div>
  );
};
export default TodoItems;
