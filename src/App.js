import React from 'react'
import Hero from './pages/hero'
import Target from './pages/target'
import { Route, Routes } from 'react-router-dom'
import Progress from './pages/progress'
import Action from './pages/action'
import ScrollToTop from "./Components/ScrollToTop.jsx"

const App = () => {
  return (
    <>
      <ScrollToTop />

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