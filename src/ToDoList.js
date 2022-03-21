import React from 'react'
import Todo from './Todo'

export default function ToDoList({todos, toggleTodo}) {
  return (
      todos.map((todo) => {
        return (
        <div className='listItem'><Todo key={todo.id} toggleTodo={toggleTodo} todo = {todo}/></div>
        );
      }
      )
     // <ul>
       // {todos.map((item) => (
          //<li key={item.id}>
            //<span>
             // {item.name}
           // </span>

         // </li>
        //))}
     // </ul>
  )
}
