import React from 'react'


export const TodoItem = ({todo,onDelete}) => {                                                     //Named export ie expo const TODO
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
         <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>    {/*    //we have called  a seperate onclick arrow fn to pass the fn onDelete along with task todo todo */}
    </div>
  )
}
