import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...todoList, inputValue];
    setTodoList(newList);
    event.target.value = "";
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (itemToDelete) => {
    const newList = todoList.filter((item) => item !== itemToDelete);
    setTodoList(newList);
  };

  return (
    <div className="add-item">
      <AddItem
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <ToDoList todoList={todoList} deleteFunction={handleDelete} />
    </div>
  );
}

function AddItem({ handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-box"
        placeholder="Add Todo: "
        id="itemToAdd"
        onChange={handleInputChange}
      ></input>
      <input className="add-item-button" type="submit" value="Add Item"></input>
    </form>
  );
}

function ToDoItem({ text, itemKey, deleteFunction }) {
  return (
    <li key={itemKey}>
      <div className="todo-item-container">
        <p className="todo-item-text">{text}</p>
        <button
          className="todo-item-delete-button"
          onClick={() => deleteFunction(text)}
        >
          X
        </button>
      </div>
    </li>
  );
}

function ToDoList({ todoList, deleteFunction }) {
  return (
    <ol className="todo-list">
      {todoList.map((task, index) => {
        return (
          <ToDoItem
            itemKey={index}
            text={task}
            deleteFunction={deleteFunction}
          />
        );
      })}
    </ol>
  );
}
export default App;
