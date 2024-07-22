import React from 'react'
import Contact from './pages/contact'
import About from './pages/about'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
