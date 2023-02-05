import React, { useState } from 'react'
import { Category, TierImage } from '../../../types/tier'
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

  const onDeleteEditingCategory = () => {
    if (!editingCategory) return
    setEditingCategory(null)
    setCategories(categories.filter((c) => editingCategory.id !== c.id))
  }

  const onCategoryMove = (category: Category, direction: 'up' | 'down') => {
    const index = categories.indexOf(category)
    const modifier = direction === 'up' ? -1 : 1
    const otherIndeex = index + modifier
    let newCategories = [...categories]
    const temp = newCategories[index]
    newCategories[index] = newCategories[otherIndeex]
    newCategories[otherIndeex] = temp
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
    setCategories(
      categories.map((category) =>
        category.id === editingCategory.id
          ? { ...editingCategory, color, title }
          : category
      )
    )
  }
  const [draggedImage, setDraggedImage] = useState<TierImage | null>(null)
  const onStartDraging = (image: TierImage) => {
    setDraggedImage(image)
  }
  const onDroppedImageInCategory = (categoryAffected: Category) => {
    if (!draggedImage) return
    const isDuplicating = categoryAffected.images.includes(draggedImage)
    if (isDuplicating) return

    setCategories(
      categories.map((category) => ({
        ...category,
        images:
          category.id === categoryAffected.id
            ? [...category.images, draggedImage]
            : category.images.filter((image) => image.id !== draggedImage.id),
      }))
    )
    setImages(images.filter((image) => image.id !== draggedImage.id))
  }

  const onDroppedImageInImages = () => {
    const isAlreadyInImages = images.includes(draggedImage as TierImage)
    if (!draggedImage || isAlreadyInImages) return
    
    setCategories(
      categories.map((category) => ({
        ...category,
        images: category.images.filter((image) => image.id !== draggedImage.id),
      }))
    )
    setImages([...images, draggedImage])
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
        onStartDraging,
        onDroppedImageInCategory,
        onDroppedImageInImages,
      }}
    >
      <TierModal />
      <TierCategoriesView categories={categories} images={images} />
    </TierContext.Provider>
  )
}
