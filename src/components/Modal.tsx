import React from 'react'
import { Heading } from './Heading'
import { Card } from './Card'

interface Props {
  title: string
  open: boolean
  onClose: () => void
  children?: React.ReactNode
}

export const Modal: React.FC<Props> = ({ title, open, children, onClose }) => {
  const displayClass = open ? 'block' : 'hidden'
  return (
    <div
      onClick={onClose}
      className={`flex top-0 left-0 bg-black/60 fixed h-full w-full ${displayClass}`}
    >
      <Card
        className=" md:w-[50%] w-[80%] m-auto min-h-[30em] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Heading text={title} className="pb-6 border-b-2" />
        {children}
      </Card>
    </div>
  )
}
