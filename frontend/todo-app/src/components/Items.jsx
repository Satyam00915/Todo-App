import React from "react";
import "./Items.css";
const Items = (props) => {
  return (
    <div className="tasks">
      <div className="container text-center">
        <div className="row">
          <div className="col sat">{props.task}</div>
          <div className="col sat">{props.date}</div>
          <div className="col">
            {props.Completed ? (
              <button type="button" className="btn btn-success">
                Completed
              </button>
            ) : (
              <button type="button" className="btn btn-danger">
                Not Done Yet
              </button>
            )}
          </div>
          <div className="col">
          <button type="button" className="btn btn-secondary">Edit Todo</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
