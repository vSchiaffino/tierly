import React from 'react'
import { Nav } from './Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './Routes'

function App() {
  return (
    <div className="bg-slate-200 h-[100%]">
      <Router>
        <Nav />
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
