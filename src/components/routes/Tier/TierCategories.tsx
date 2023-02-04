import React, { useState } from 'react'
import { Category } from '../../../types/tier'
import { Card } from '../../Card'
import { TierCategory } from './TierCategory'
import { TierModal } from './TierModal'

interface Props {
  categories: Category[]
}

export const TierCategories: React.FC<Props> = () => {
  const initialValue = [
    {
      id: 1,
      title: 'Love',
      color: 'red-500',
    },
    {
      id: 2,
      title: 'Like',
      color: 'orange-500',
    },
    {
      id: 3,
      title: 'Neutral',
      color: 'orange-200',
    },
    {
      id: 4,
      title: 'Dislike',
      color: 'yellow-500',
    },
    {
      id: 5,
      title: 'Hate',
      color: 'green-500',
    },
  ]
  const [categories, setCategories] = useState(initialValue)
  const [idEditing, setIdEditing] = useState<number | null>(null)
  const open = idEditing !== null
  const onModalClose = (color: string, title: string) => {
    setIdEditing(null)
    const editedCategoryIndex = categories.findIndex(
      (category) => category.id === idEditing
    )
    let newCategories = [...categories]
    newCategories[editedCategoryIndex] = { color, title, id: idEditing || 1 }
    setCategories(newCategories)
  }
  const onModalOpen = (id: number) => {
    setIdEditing(id)
  }
  const selectedCategory = categories.find(
    (category) => category.id === idEditing
  )
  return (
    <Card className="p-10">
      <TierModal
        open={open}
        onClose={onModalClose}
        initialColor={selectedCategory?.color || ''}
        initialTitle={selectedCategory?.title || ''}
      />
      {categories.map((category) => (
        <TierCategory
          category={category}
          key={category.title}
          openModal={() => onModalOpen(category.id)}
        />
      ))}
    </Card>
  )
}
