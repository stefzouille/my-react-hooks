import React from "react";
import "./index.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {
  return (
    <div className="text-center">
      <h1>UseState Hooks</h1>
      <ClassState />
      <hr /> {/* hr --> affiche une ligne de separation*/}
      <FunctionState />
    </div>
  );
}

export default App;
