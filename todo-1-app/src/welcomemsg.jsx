import { useContext } from "react";
import TodoItemsApi from "./store/todostore";

const WelcomeMsg = () => {
  const { todoitems } = useContext(TodoItemsApi);
  return (
    <>
      <p>welcome enjoy your day</p>
    </>
  );
};
export default WelcomeMsg;
