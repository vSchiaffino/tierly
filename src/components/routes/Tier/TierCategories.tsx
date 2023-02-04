import React, { useState } from 'react'
import { Category } from '../../../types/tier'
import { Card } from '../../Card'
import { TierCategory } from './TierCategory'
import { TierModal } from './TierModal'
import TierImages from './TierImages'
import { TierCategoriesView } from './TierCategoriesView'

interface Props {
  categories: Category[]
}

export const TierCategories: React.FC<Props> = () => {
  const initialValue: Category[] = [
    {
      id: 1,
      title: 'Love',
      color: 'red-500',
      images: [],
    },
    {
      id: 2,
      title: 'Like',
      color: 'orange-500',
      images: [],
    },
    {
      id: 3,
      title: 'Neutral',
      color: 'orange-200',
      images: [],
    },
    {
      id: 4,
      title: 'Dislike',
      color: 'yellow-500',
      images: [],
    },
    {
      id: 5,
      title: 'Hate',
      color: 'green-500',
      images: [],
    },
  ]
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
  const [categories, setCategories] = useState(initialValue)
  const [idEditing, setIdEditing] = useState<number | null>(null)
  const [draggingOn, setDraggingOn] = useState<Category | null>(null)
  const open = idEditing !== null
  const onStopDraging = (id: number) => {
    if (draggingOn !== null) {
      const editedCategoryIndex = categories.findIndex(
        (category) => category.id === draggingOn.id
      )
      let newCategories = [...categories]
      const image = images.find((image) => image.id === id)
      if (!image) return
      newCategories[editedCategoryIndex] = {
        ...draggingOn,
        images: [...draggingOn.images, image],
      }
      setCategories(newCategories)
      setImages(images.filter((image) => image.id !== id))
    }
  }

  const onDragOver = (category: Category | null) => {
    if (draggingOn !== category) setDraggingOn(category)
  }
  const onModalClose = (color: string, title: string) => {
    setIdEditing(null)
    const editedCategoryIndex = categories.findIndex(
      (category) => category.id === idEditing
    )
    let newCategories = [...categories]
    newCategories[editedCategoryIndex] = {
      color,
      title,
      id: idEditing || 1,
      images: [],
    }
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
      images: [],
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
    <>
      <TierModal
        open={open}
        onDelete={onCategoryDelete}
        onClose={onModalClose}
        initialColor={selectedCategory?.color || ''}
        initialTitle={selectedCategory?.title || ''}
      />
      <TierCategoriesView
        categories={categories}
        images={images}
        onCreateCategory={onCreateCategory}
        onModalOpen={onModalOpen}
        onCategoryMove={onCategoryMove}
        onDragOver={onDragOver}
        onStopDraging={onStopDraging}
      />
    </>
  )
}
