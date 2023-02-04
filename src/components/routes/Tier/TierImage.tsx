import React from 'react'

interface Props {
  image: string
}

export const TierImage: React.FC<Props> = ({ image }) => {
  return (
    <img
      src={image}
      alt="draggable"
      className="cursor-pointer object-fit aspect-square"
    />
  )
}
