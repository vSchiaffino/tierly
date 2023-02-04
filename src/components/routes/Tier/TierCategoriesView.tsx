import React from 'react'
import { Card } from '../../Card'
import { TierCategory } from './TierCategory'
import TierImages from './TierImages'
import { Category, TierImage } from '../../../types/tier'
import TierContext from '../../../contexts/TierContext'

interface Props {
  categories: Category[]
  images: TierImage[]
  onDragOver: (category: Category | null) => void
  onStopDraging: (id: number) => void
  onCategoryMove: (id: number, direction: 'up' | 'down') => void
}

export const TierCategoriesView: React.FC<Props> = ({
  categories,
  images,
  onStopDraging,
  onDragOver,
  onCategoryMove,
}) => {
  const { onCreateCategory } = React.useContext(TierContext)
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
      {categories.map((category, index) => (
        <TierCategory
          category={category}
          key={category.title}
          onDragOver={onDragOver}
          onMove={onCategoryMove}
          showToDown={index !== categories.length - 1}
          showToUp={index !== 0}
        />
      ))}
      <TierImages images={images} onStopDraging={onStopDraging} />
    </Card>
  )
}
