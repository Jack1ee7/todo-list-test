import React from "react";
import { Route, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "../styles/App.css";
import Header from "../components/Header";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import AddTodoPopup from "./AddTodoPopup";
import popup from "../store/popup";
const App = observer(() => {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Main />} />
        </Routes>
        {popup.isOpen && <AddTodoPopup />}
      </div>
    </div>
  );
});

export default App;
