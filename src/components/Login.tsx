import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
const Login = () => {
  return (
    <section className="Login">
      <h2 className="Login__form-title">Войти</h2>
      <form
        onSubmit={() => console.log("starege")}
        className="Login__form"
      >
        <input
          className="Login__form-input"
          required
          placeholder="Email"
          name="email"
          type="email"
          // value={email || ""}
          // onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className="Login__form-input"
          required
          placeholder="Пароль"
          name="password"
          type="password"
          // value={password || ""}
          // onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="Login__form-submit-button">
          Войти
        </button>
        <Link to="/signup" className="Login__link">
          Не зарегестрированы? Регистрация
        </Link>
      </form>
    </section>
  );
};

export default Login;
