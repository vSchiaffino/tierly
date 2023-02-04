import React, { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={`lg:max-w-7xl md:px-16 mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}
