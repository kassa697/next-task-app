import React from "react";

const TaskCard = () => {
  return (
    <div>
      <header>
        <h1>Title</h1>
        <div>Task Description</div>
      </header>
      <div>
        <div>
          2024-11-30
          <div>
            <div>{true ? "Completed" : "Incomplete"}</div>
            <div>
              <div>Edit</div>
              <div>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
