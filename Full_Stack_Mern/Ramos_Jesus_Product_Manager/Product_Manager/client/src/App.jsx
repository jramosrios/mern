import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router -dom'
import Homepage from './views/Homepage'
import DisplayOne from './components/DisplayOneProduct'
import UpdateProduct from './components/UpdateProduct'

function App() {

  return (
    <>
      <h1>Product Manager</h1>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/oneProduct/:id' element={<DisplayOne />} />
        <Route path='/edit/:id' element={<UpdateProduct />} />
      </Routes>
    </>
  )
}

export default App
