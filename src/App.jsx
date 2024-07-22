import React from 'react'
import Contact from './pages/contact'
import About from './pages/about'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
