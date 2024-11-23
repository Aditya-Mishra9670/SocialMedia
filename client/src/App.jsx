import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './components/Register'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}
