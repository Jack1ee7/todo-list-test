import React from "react";
import { observer } from "mobx-react-lite";
import todo from "../store/todo";
import popup from "../store/popup";
import "../styles/AddTodoPopup.css";
const AddTodoPopup = observer(() => {
  return (
    <section className="AddTodoPopup">
      <div className="AddTodoPopup__overlay" onClick={() => (popup.closePopup())}></div>
      <form
        onSubmit={() => console.log("starege")}
        className="AddTodoPopup__form"
      >
        <h2 className="AddTodoPopup__form-title">Создать задачу</h2>
        <input
          className="AddTodoPopup__form-input"
          required
          placeholder="title"
          name="title"
          type="text"
          // value={email || ""}
          // onChange={({ target }) => setEmail(target.value)}
        />
        <button type="submit" className="AddTodoPopup__form-submit-button">
          Создать
        </button>
      </form>
    </section>
  );
});

export default AddTodoPopup;
