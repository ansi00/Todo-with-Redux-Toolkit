import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo , updateTodo } from '../features/todo/todoSlice.js';


export default function Todos({handleEdit}) {
const todos = useSelector(state => state.todos)
const dispatch = useDispatch()

  return (
    <>
    <div>
     Todos
    </div>
    <ul className='list-none'>
    {todos.map((todo)=>(
      <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
       key={todo.id}>
       <div className='text-white'>{todo.text}</div>
       <div className=''>
       <button className='text-white bg-green-500 borer-0 py-1 me-3 px-4 focus:outline-none hover:bg-green-600 rounded text-md' 
       onClick={() => handleEdit(todo.id, todo.text)}>I</button>
      <button className='text-white bg-red-500 borer-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md' 
      onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
      </div>
      </li>     
    ))}
    </ul>
    </>
  )
}
