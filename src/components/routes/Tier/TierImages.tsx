import React from 'react'
import { TierImage } from './TierImage'

interface Props {
  images: { id: number; src: string }[]
  onStopDraging: (id: number) => void
}

const TierImages: React.FC<Props> = ({ images, onStopDraging }) => {
  return (
    <ul className="grid grid-cols-6 gap-2">
      {images.map((image) => (
        <li key={image.id} draggable onDragEnd={() => onStopDraging(image.id)}>
          <TierImage image={image.src} />
        </li>
      ))}
    </ul>
  )
}

export default TierImages
