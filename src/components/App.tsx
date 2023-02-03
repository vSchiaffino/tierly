import React from 'react'
import { Nav } from './Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './Routes'

function App() {
  return (
    <div className="bg-slate-600 h-[100vh]">
      <Router>
        <Nav />
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
