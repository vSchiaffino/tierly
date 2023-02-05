import React from 'react'
import { Category } from '../../../types/tier'
import TierContext from '../../../contexts/TierContext'

interface Props {
  category: Category
  showToUp: boolean
  showToDown: boolean
  onMove: (category: Category, direction: 'up' | 'down') => void
}

export const TierCategory: React.FC<Props> = ({
  category,
  showToDown,
  showToUp,
  onMove,
}) => {
  const { setEditingCategory, onDroppedImageInCategory, onStartDraging } =
    React.useContext(TierContext)
  return (
    <div
      className={`flex flex-row min-h-[5rem] border border-gray-900`}
      onDragEnter={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      onDragOver={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      onDrop={() => onDroppedImageInCategory(category)}
    >
      <div
        className={`text-center justify-center text-lg font-semibold text-slate-900  items-center flex md:w-32 w-24 ${category.color}`}
      >
        <p className="px-2 inline-block w-full align-middle break-words">
          {category.title}
        </p>
      </div>
      <div className="flex-grow bg-slate-800">
        <ul className="grid grid-cols-[repeat(auto-fill,5rem)] grid-rows-[repeat(auto-fill,5rem)] gap-5 ">
          {category.images.map((image) => (
            <li key={image.id} className="h-20 w-20">
              <img
                className="aspect-square object-cover cursor-pointer"
                src={image.src}
                draggable
                onDragStart={() => onStartDraging(image)}
                alt={'draggable'}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-900 md:w-24 w-20 items-center flex justify-between px-2">
        <div>
          <img
            onClick={() => setEditingCategory(category)}
            className="cursor-pointer hover:bg-gray-500 rounded-full transition duration-400"
            alt="settings buton"
            src="https://tiermaker.com/images/chart/chart/settings.png"
          />
        </div>
        <div>
          {showToUp && (
            <img
              onClick={() => onMove(category, 'up')}
              alt="Move up"
              className="cursor-pointer hover:bg-gray-500 rounded-full transition duration-400"
              src="https://tiermaker.com/images/chart/chart/arrowup.png"
            />
          )}
          {showToDown && (
            <img
              onClick={() => onMove(category, 'down')}
              alt="Move down"
              className="cursor-pointer hover:bg-gray-500 rounded-full transition duration-400"
              src="https://tiermaker.com/images/chart/chart/arrowdown.png"
            />
          )}
        </div>
      </div>
    </div>
  )
}
