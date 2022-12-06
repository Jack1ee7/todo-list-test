import React from 'react';
import '../styles/Task.css'
const Task = (task: { text: string; id: number; }) => {
  const { text, id } = task;
  return (
    <li className='Task' key={id} >
        <button className='Task__check-button'></button>
        <p className='Task__text'>{text}</p>
        <button className='Task__button-delete'></button>
    </li>
  );
}

export default Task;
