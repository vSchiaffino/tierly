import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Tiers } from './routes/Tiers/Tiers'
import { Tier } from './routes/Tier/Tier'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiers" element={<Tiers />} />
      <Route path="/tiers/:slug" element={<Tier />} />
    </Routes>
  )
}
