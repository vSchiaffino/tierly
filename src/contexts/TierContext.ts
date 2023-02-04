import React from 'react'
import { Category } from '../types/tier'

interface ITierContext {
  editingCategory: Category | null
  onCreateCategory: () => void
  onDeleteEditingCategory: () => void
  setEditingCategory: React.Dispatch<Category | null>
  onCategoryMove: (id: number, direction: 'up' | 'down') => void
  onUpdateEditingCategory: (color: string, title: string) => void
}

const TierContext = React.createContext<ITierContext>(
  null as any as ITierContext
)

export default TierContext