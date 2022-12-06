import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
const Register = () => {
  // const handeleCreateUser = ()
  return (
    <section className="Register">
      <h2 className="Register__form-title">Регистрация</h2>
      <form
        onSubmit={() => console.log("starege")}
        className="Register__form"
      >
        <input
          className="Register__form-input"
          required
          placeholder="Email"
          name="email"
          type="email"
          // value={email || ""}
          // onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className="Register__form-input"
          required
          placeholder="Пароль"
          name="password"
          type="password"
          // value={password || ""}
          // onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="Register__form-submit-button">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="Register__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </section>
  );
};

export default Register;
