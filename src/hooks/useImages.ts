import { useState } from 'react'
import { TierImage } from '../types/tier'

export default function useImages(): [
  TierImage[],
  React.Dispatch<TierImage[]>
] {
  const initialImages = [
    {
      id: 1,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/1200px-fulhamfcshieldsvgpng',
    },
    {
      id: 2,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/1png',
    },
    {
      id: 3,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/2png',
    },
    {
      id: 4,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/afcbournemouth2013svgpng',
    },
    {
      id: 5,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/crystalpalacepng',
    },
    {
      id: 6,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/defdpng',
    },
    {
      id: 7,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/dezeeneverton-fc-new-badge1ajpg',
    },
    {
      id: 8,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/downloadjpg',
    },
    {
      id: 9,
      src: 'https://tiermaker.com/images/chart/chart/premier-league-clubs-22139/downloadpng',
    },
  ]
  const [images, setImages] = useState(initialImages)
  return [images, setImages]
}
