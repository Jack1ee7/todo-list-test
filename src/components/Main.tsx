import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import todo from "../store/todo";
import popup from "../store/popup";
import "../styles/Main.css";
import Task from "./Task";

const Main = observer(() => {
  useEffect(() => {
    todo.getTodos();
  }, []);

  return (
    <section className="Main">
      <button className="Main__button-open-popup" onClick={() => (popup.openPopup())}></button>
      <ul className="Main__list">
        {todo.todos.map((task) => (
          <li className="Task" key={task.postId}>
            {Task(task)}
          </li>
        ))}
      </ul>
    </section>
  );
});

export default Main;
