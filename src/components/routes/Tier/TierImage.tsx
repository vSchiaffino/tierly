import React from 'react'
import TierContext from '../../../contexts/TierContext'
import { TierImage as ITierImage } from '../../../types/tier'

interface Props {
  image: ITierImage
}

export const TierImage: React.FC<Props> = ({ image }) => {
  const { onStartDraging } = React.useContext(TierContext)
  return (
    <img
      src={image.src}
      onDragStart={() => onStartDraging(image)}
      draggable
      alt="draggable"
      className="cursor-pointer object-fit aspect-square w-full h-full bg-transparent"
    />
  )
}
