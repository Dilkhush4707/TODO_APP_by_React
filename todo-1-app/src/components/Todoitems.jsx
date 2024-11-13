import Todoitem from "./TodoItem";
const TodoItems = ({ todoItems = [], ondelete }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <Todoitem
          key={item.id}
          todoDate={item.duedate}
          todoName={item.name}
          ondelete={ondelete(item.id)}
        />
      ))}
    </div>
  );
};
export default TodoItems;
