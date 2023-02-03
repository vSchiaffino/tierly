import React from 'react'

interface Props {
  text: string
  className?: string
}

export const Heading: React.FC<Props> = ({ text, className = '' }) => {
  return (
    <h2 className={`text-4xl text-slate-900 font-bold ${className}`}>{text}</h2>
  )
}
