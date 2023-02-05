import React from 'react'
import { TierImage } from './TierImage'
import TierContext from '../../../contexts/TierContext'

interface Props {
  images: { id: number; src: string }[]
}

const TierImages: React.FC<Props> = ({ images }) => {
  const { onDroppedImageInImages } = React.useContext(TierContext)
  return (
    <ul
      onDragEnter={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      onDragOver={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      onDrop={() => onDroppedImageInImages()}
      className="min-h-[5rem] bg-white rounded-md shadow-sm mt-10 grid 2xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 grid-cols-3 sm:gap-2 gap-12"
    >
      {images.map((image) => (
        <li key={image.id} className="w-full h-full bg-transparent">
          <TierImage image={image} />
        </li>
      ))}
    </ul>
  )
}

export default TierImages
