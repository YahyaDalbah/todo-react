import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Todo from './Todo'
import Inputs from './Inputs'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [hidden,setHidden] = useState(false)

  console.log(todos)

  function addTask(task, assignee){
    setTodos([...todos, {
      id: Math.random(),
      task: task,
      assignee: assignee,
      completed: false
    }])
  }

  function hideTodos(){
    setHidden(prev => !prev)
  }

  function completeTodo(id){
    const newTodos = todos.map(todo => {
      if(todo.id != id)return todo
      return {
        ...todo,
        completed: !todo.completed
      }
    })
    setTodos(newTodos)
  }

  const displayedToDos = todos.filter(todo => todo.task.toLowerCase().includes(searchValue.toLowerCase())).map(todo => {
    return <Todo key={todo.id} id={todo.id} task={todo.task} assignee={todo.assignee} completed={todo.completed} completeTodo={completeTodo} />
  })
  return (
    <>
      <Inputs addTask={addTask} />
      <main>
          <Searchbar setSearchValue={setSearchValue} hideTodos={hideTodos} hidden={hidden}/>
          <div className="tasks-container">
              {!hidden && displayedToDos}
          </div>
      </main>
    </>
    
    
    
  )
}
