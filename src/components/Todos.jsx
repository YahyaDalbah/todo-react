import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Todo from './Todo'
import Inputs from './Inputs'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [searchValue, setSearchValue] = useState('')

  console.log(todos)

  function addTask(task, assignee){
    setTodos([...todos, {
      id: Math.random(),
      task: task,
      assignee: assignee,
      completed: false
    }])
  }

  const displayedToDos = todos.filter(todo => todo.task.toLowerCase().includes(searchValue.toLowerCase())).map(todo => {
    return <Todo key={todo.id} id={todo.id} task={todo.task} assignee={todo.assignee} completed={todo.completed} />
  })
  return (
    <>
      <Inputs addTask={addTask} />
      <main>
          <Searchbar setSearchValue={setSearchValue} />
          <div className="tasks-container">
              {displayedToDos}
          </div>
      </main>
    </>
    
    
    
  )
}
