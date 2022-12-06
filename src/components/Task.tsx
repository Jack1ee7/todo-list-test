import React from "react";
import "../styles/Task.css";
const Task = (task: { text: string; id: number }) => {
  const { text, id } = task;
  return (
    <>
      <button className="Task__check-button"></button>
      <p className="Task__text">{text}</p>
      <button className="Task__button-delete"></button>
    </>
  );
};

export default Task;
