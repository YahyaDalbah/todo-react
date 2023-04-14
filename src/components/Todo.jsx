import React, { useState } from 'react'

export default function Todo({id, task, assignee, completed, completeTodo}) {

  let className = completed ? 'task done' : 'task'

  return (
    <div className={className}>
      <div>
        <input type="checkbox" onChange={e => {
          completeTodo(id)
        }} />
        <label htmlFor="">complete</label>
        <p>task: <span>{task}</span></p>
        <p>assignee: <span>{assignee}</span></p>
      </div>
      <div>
        <button className='delete'>delete</button>
      </div>
    </div>
  )
}
