import React from "react";
import "../styles/Main.css";
import Task from "./Task";
const Main = () => {

  const tasks = [{text: 'Task 1', id: 1}, {text: 'Task 2', id: 2}, {text: 'Task 3', id: 3}];
  return (
    <section className="Main">
      <button className="Main__button-open-popup"></button>
      <ul className="Main__list">
        {tasks.map((task) => Task(task))}
      </ul>
    </section>
  );
};

export default Main;
