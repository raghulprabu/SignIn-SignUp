import React from 'react'
import Header from './Component/Header'
import Login from './Component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Component/Register'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
