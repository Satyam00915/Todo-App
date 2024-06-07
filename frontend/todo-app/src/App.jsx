import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Create from "./components/Create";
import Items from "./components/Items";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then((response) => {
    response.json().then((data) => {
      setTodos(data.Todo);
    });
  });
  return (
    <>
      <h1>Todo - App</h1>
      <Create></Create>

      {todos.map((todo) => {
        return (
          <Items
            key={todo._id}
            task={todo.task}
            date={todo.date}
            Completed={todo.Completed}
          ></Items>
        );
      })}
    </>
  );
}

export default App;
