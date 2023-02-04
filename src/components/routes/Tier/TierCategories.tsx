import React, { useState } from 'react'
import { Category } from '../../../types/tier'
import { TierModal } from './TierModal'
import { TierCategoriesView } from './TierCategoriesView'
import useImages from '../../../hooks/useImages'
import useCategories from '../../../hooks/useCategories'
import TierContext from '../../../contexts/TierContext'

interface Props {
  categories: Category[]
}

export const TierCategories: React.FC<Props> = () => {
  const [images, setImages] = useImages()
  const [categories, setCategories] = useCategories()
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [draggingOn, setDraggingOn] = useState<Category | null>(null)

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

  const onDeleteEditingCategory = () => {
    if (!editingCategory) return
    setEditingCategory(null)
    setCategories(
      categories.filter((category) => editingCategory.id !== category.id)
    )
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
    const id = categories.length + 1
    const newCategory = {
      id,
      title: 'New category',
      color: 'blue-500',
      images: [],
    }
    setCategories([...categories, newCategory])
    setEditingCategory(newCategory)
  }

  const onUpdateEditingCategory = (color: string, title: string) => {
    if (!editingCategory) return
    let newCategories = [...categories]
    let edited = newCategories.find(
      (category) => category.id === editingCategory.id
    )
    if (!edited) return

    edited.color = color
    edited.title = title

    setCategories(newCategories)
  }

  return (
    <TierContext.Provider
      value={{
        editingCategory,
        onCategoryMove,
        onUpdateEditingCategory,
        onDeleteEditingCategory,
        onCreateCategory,
        setEditingCategory,
      }}
    >
      <TierModal />
      <TierCategoriesView
        categories={categories}
        images={images}
        onDragOver={onDragOver}
        onStopDraging={onStopDraging}
      />
    </TierContext.Provider>
  )
}
