import React from 'react'
import Hero from './pages/hero'
import Target from './pages/target'
import { Route, Routes } from 'react-router-dom'
import Progress from './pages/progress'
import Action from './pages/action'
import ScrollToTop from "./Components/ScrollToTop.jsx"
import Navbar from './Components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const App = () => {
return (
  <>
    <ScrollToTop />
    <Navbar />
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/target" element={<Target />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </>
  )
}

export default App