import React from 'react'

interface Props {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

export const Card: React.FC<Props> = ({
  children,
  as = 'div',
  className = '',
}) => {
  const Component = as
  return (
    <Component className={`bg-slate-100 rounded-md shadow-sm ${className}`}>
      {children}
    </Component>
  )
}
