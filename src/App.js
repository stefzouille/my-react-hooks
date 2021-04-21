import React from "react";
//import "./index.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="container">
      <h1 className="text-center">UseState Hooks</h1>
      <ClassState />
      <hr /> {/* hr --> affiche une ligne de separation*/}
      <FunctionState />
      <hr />

      <Todo />
    </div>
  );
}

export default App;
