import React from 'react'

interface Props {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  onClick?: (e: React.BaseSyntheticEvent) => void
}

export const Card: React.FC<Props> = ({
  children,
  as = 'div',
  className = '',
  onClick,
}) => {
  const Component = as
  return (
    <Component
      onClick={onClick}
      className={`${className} bg-slate-100 rounded-md shadow-sm `}
    >
      {children}
    </Component>
  )
}
