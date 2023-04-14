import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Todo from './Todo'
import Inputs from './Inputs'

export default function Todos() {
  const [todos, setTodos] = useState([])

  console.log(todos)

  function addTask(task, assignee){


    setTodos([...todos, {
      id: Math.random(),
      task: task,
      assignee: assignee,
      completed: false
    }])
  }

  const displayedToDos = todos.map(todo => {
    return <Todo task={todo.task} assignee={todo.assignee} />
  })
  return (
    <>
      <Inputs addTask={addTask} />
      <main>
          <Searchbar />
          <div className="tasks-container">
              {displayedToDos}
          </div>
      </main>
    </>
    
    
    
  )
}
