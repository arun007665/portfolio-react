import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './screen/Menu'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Pnf from './pages/pnf'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/projects`} element={<Projects/>}/>
        <Route path={`/contact`} element={<Contact/>}/>
        <Route path={`/pnf`} element={<Pnf/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
