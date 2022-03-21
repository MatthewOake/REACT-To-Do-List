import React, {useState, useRef, useEffect} from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function HandleAdd(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name : name, complete : false}]
    })
    todoNameRef.current.value = null
  }
  
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

  }

  return (
    <>
    <header><h1>ToDo List</h1></header>
    <br></br>
    <ToDoList todos = {todos} toggleTodo={toggleTodo} className="todoArray" />
    <br></br>
    <input ref={todoNameRef} type="text" className="inputText" placeholder="Enter Task Here"/>
    <button onClick={HandleAdd} className="addButton">Add</button>
    <button onClick={handleClearTodos} className="clearButton">Hide Completed</button>
    <br></br><br></br>
    <div className="remaining">Items remaining: {todos.filter(todo => !todo.complete).length}</div>
    <br></br><br></br>
    <div className="info">Simple ToDo list application</div>
    <div className="info">Made with REACT JavaScript library</div>
    <div className="info">Matthew Oake 2022</div>
    </>
  )
}

export default App;
