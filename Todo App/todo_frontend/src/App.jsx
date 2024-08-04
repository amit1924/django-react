/* eslint-disable no-unused-vars */
import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",

        overflow: "auto",
      }}
    >
      <TodoList />
    </div>
  );
};

export default App;
