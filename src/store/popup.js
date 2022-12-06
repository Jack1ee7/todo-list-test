import { makeAutoObservable } from "mobx";

class AddTodoPopup {
    isOpen = false
  constructor() {
    makeAutoObservable(this);
  }

  openPopup() {
    this.isOpen = true;
  }
  closePopup() {
    this.isOpen = false;
  }
}

export default new AddTodoPopup();