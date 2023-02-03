import React, { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={`lg:max-w-7xl mx-auto px-16 ${className}`}>{children}</div>
  )
}
