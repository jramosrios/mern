import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import DisplayOnePet from './components/DisplayOnePet'
import EditPet from './components/editPet'
import PetForm from './components/FormPets'
import Homepage from './views/Homepage'

function App() {

  return (
    <>
      <div className='wrapper'>
        <h1>Pet Shelter</h1>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/petForm' element={<PetForm />} />
          <Route path='/editPet/:id' element={<EditPet />} />
          <Route path='/onePet/:id' element={<DisplayOnePet />} />
        </Routes>
      </div>
    </>
  )
}

export default App
