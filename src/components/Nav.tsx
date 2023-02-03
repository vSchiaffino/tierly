import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'

interface Props {}

export const Nav: React.FC<Props> = () => {
  return (
    <nav className="h-16 bg-slate-800 block shadow-md">
      <Container className="h-full">
        <ul className="h-full flex flex-row text-gray-100 items-center">
          <li className="font-bold text-3xl">
            <Link to={'/'}>
              <h1>Tierly</h1>
            </Link>
          </li>
          <li className="ml-auto flex">
            <Link to={'/tiers'}>Tiers</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
