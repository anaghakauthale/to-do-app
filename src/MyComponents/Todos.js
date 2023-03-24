import React from 'react'
import{TodoItem} from '../MyComponents/TodoItem';


export const Todos = (props) => {                                  //Named export ie expo const TODO
  return (
    <div className='container'>
     <h3 className='text-center my-3'>To do List</h3>
   
    {props.todos.map((todo)=>{                                      //map is used to run an array 
    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>          //onDelete is a method  //we r declaring todo here 
    })}
     
    </div>
  )
}
