import { useState } from 'react'
import { Category } from '../types/tier'

export default function useCategories(): [
  Category[],
  React.Dispatch<Category[]>
] {
  const initialValue: Category[] = [
    {
      id: 1,
      title: 'Love',
      color: 'bg-red-500',
      images: [],
    },
    {
      id: 2,
      title: 'Like',
      color: 'bg-orange-500',
      images: [],
    },
    {
      id: 3,
      title: 'Neutral',
      color: 'bg-orange-200',
      images: [],
    },
    {
      id: 4,
      title: 'Dislike',
      color: 'bg-yellow-500',
      images: [],
    },
    {
      id: 5,
      title: 'Hate',
      color: 'bg-green-500',
      images: [],
    },
  ]
  const [categories, setCategories] = useState(initialValue)
  return [categories, setCategories]
}
