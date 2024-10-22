import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [editTodoId, setEditTodoId] = useState(null)

  const handleEdit = (id, text) => {
    setInput(text)         
    setEditTodoId(id)       
    setIsEditMode(true)     
  }

  const resetEditMode = () => {
    setInput('')           
    setIsEditMode(false)    
    setEditTodoId(null)     
  }

  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo 
        input={input} 
        setInput={setInput}
        isEditMode={isEditMode} 
        editTodoId={editTodoId}
        resetEditMode={resetEditMode}
      />
      <Todos handleEdit={handleEdit} />
    </>
  )
}

export default App
