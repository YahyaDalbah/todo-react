import React from 'react'

export default function Todo({id, task, assignee, completed}) {
  return (
    <div className='task'>
      <div>
        <input type="checkbox" />
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
