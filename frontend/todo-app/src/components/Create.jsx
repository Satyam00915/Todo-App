import React, { useCallback, useState } from "react";
import "./Create.css";

const Create = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [taskDone, setTaskdone] = useState(false);
  return (
    <div className="adder">
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          id="dates"
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="checkbox"
          name="task"
          id="task"
          onChange={(e) => {
            setTaskdone(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        <label htmlFor="task">Completed</label>
      </div>
      <div>
        <button
          id="btn"
          onClick={() => {
            fetch("http://localhost:3000/create", {
              method: "POST",
              body: JSON.stringify({
                task: task,
                date: date,
                Completed: taskDone,
              }),
              headers: {
                "Content-type": "application/json",
              },
            });
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Create;
