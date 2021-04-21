import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "acheter du lait" },
    { id: 2, todo: "acheter du pain" },
    { id: 3, todo: "acheter du fromage"}
  ]);

const myTodos = todos.map( todo => {
  return (
    <li className="list-group-item" key={todo.id}>{todo.todo}</li>
  )
})

  return (
  
  <div>
    <h1 className='text-center'> {todos.length }To-do</h1>

    <ul>
      {myTodos}
    </ul>
  </div>
  )
};

export default Todo;
