import { makeAutoObservable } from "mobx";

class Todo {
    todos = []
  constructor() {
    makeAutoObservable(this);
  }

  getTodos() {
    fetch("http://localhost:3002/tasks", { method: "GET", headers: { "Content-Type": "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        this.todos = data
        console.log(this.todos)
      })
  }
}

export default new Todo();