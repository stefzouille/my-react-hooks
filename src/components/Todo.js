import React, { useState } from "react";
//import uuid from "uuid";
import AddTodoForm from './AddTodoForm'
let { uuid } = require("uuid")

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
{/*fct a laquelle on passe une data qui proviens de addTodoForm*/}
const addNewTodo = (newTodo) => {
    setTodos([...todos, {
        id: uuid(),
        todo: newTodo
    

    }])
}

  return (
  
  <div>
    <h1 className='text-center'> {todos.length }To-do</h1>

    <ul className="list-group">
      {myTodos}
    </ul>
    <AddTodoForm addNewTodo={addNewTodo} />
  </div>
  )
};

export default Todo;
