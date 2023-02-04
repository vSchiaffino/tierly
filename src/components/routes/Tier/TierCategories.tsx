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
  const onCategoryDelete = () => {
    // Deletes the current editing category
    const editedCategoryIndex = categories.findIndex(
      (category) => category.id === idEditing
    )
    let newCategories = [...categories]
    newCategories.splice(editedCategoryIndex, 1)
    setIdEditing(null)
    setCategories(newCategories)
  }

  const onCategoryMove = (id: number, direction: 'up' | 'down') => {
    const editedCategoryIndex = categories.findIndex(
      (category) => category.id === id
    )
    let newCategories = [...categories]
    const modifier = direction === 'up' ? -1 : 1
    const otherCategoryToMoveIndex = editedCategoryIndex + modifier
    const otherCategoryToMove = newCategories[otherCategoryToMoveIndex]
    newCategories[otherCategoryToMoveIndex] = newCategories[editedCategoryIndex]
    newCategories[editedCategoryIndex] = otherCategoryToMove
    setCategories(newCategories)
  }

  const onCreateCategory = () => {
    const newId = categories.length + 1
    const newCategory = {
      id: newId,
      title: 'New category',
      color: 'blue-500',
    }
    setCategories([...categories, newCategory])
    setIdEditing(newId)
  }

  const onModalOpen = (id: number) => {
    setIdEditing(id)
  }
  const selectedCategory = categories.find(
    (category) => category.id === idEditing
  )
  return (
    <Card className="p-10">
      <div className="mb-10 flex flex-row gap-10">
        <button className="py-4 bg-slate-800 text-gray-100 rounded-md shadow-sm w-40 font-semibold text-lg hover:-translate-y-1 transition-transform duration-500">
          Save
        </button>
        <button
          onClick={onCreateCategory}
          className="w-40 py-4 text-lg font-semibold border-slate-800 border-2 text-slate-800 rounded-md shadow-md hover:-translate-y-1  transition-transform duration-500"
        >
          Add category
        </button>
      </div>

      <TierModal
        open={open}
        onDelete={onCategoryDelete}
        onClose={onModalClose}
        initialColor={selectedCategory?.color || ''}
        initialTitle={selectedCategory?.title || ''}
      />
      {categories.map((category, index) => (
        <TierCategory
          category={category}
          key={category.title}
          onMove={onCategoryMove}
          openModal={() => onModalOpen(category.id)}
          showToDown={index !== categories.length - 1}
          showToUp={index !== 0}
        />
      ))}
    </Card>
  )
}
