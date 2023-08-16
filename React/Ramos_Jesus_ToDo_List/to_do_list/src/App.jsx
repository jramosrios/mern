import React, { useState } from 'react'
import './App.css'
import Form from './components/newToDo'
import Display from './components/toDoList'

function App() {
  const [dos, setDos] = useState([]);
  return (
    <>
      <h1>To-Do List</h1>
      <Form
        dos={dos}
        setDos={setDos}
      />
      <Display
        dos={dos}
        setDos={setDos}
      />
    </>
  )
}

export default App
