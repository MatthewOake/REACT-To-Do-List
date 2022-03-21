import React from 'react'

export default function Todo({todo, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
    <div>
        <label className='todoLabel'>
            <input type="checkbox" checked = {todo.complete} onChange={handleTodoClick}  className='todoItem'></input>
            {todo.name}
        </label>
    </div>
  )
}
