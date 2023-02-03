import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Tiers } from './routes/Tiers/Tiers'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiers" element={<Tiers />} />
    </Routes>
  )
}
