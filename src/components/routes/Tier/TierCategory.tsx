import React from 'react'
import { Category } from '../../../types/tier'

interface Props {
  category: Category
  showToUp: boolean
  showToDown: boolean
  onDragOver: (category: Category | null) => void
  onMove: (id: number, direction: 'up' | 'down') => void
  openModal: () => void
}

export const TierCategory: React.FC<Props> = ({
  category,
  onDragOver,
  onMove,
  openModal,
  showToDown,
  showToUp,
}) => {
  return (
    <div
      className={`flex flex-row min-h-[5rem] border border-gray-900`}
      onDragLeave={() => onDragOver(null)}
      onDragOver={() => onDragOver(category)}
    >
      <div
        className={`text-center justify-center text-lg font-semibold text-slate-900  items-center flex md:w-32 w-24 bg-${category.color}`}
      >
        <p className="px-2 inline-block w-full align-middle break-words">
          {category.title}
        </p>
      </div>
      <div className="flex-grow bg-slate-800">
        <ul className="grid grid-cols-[repeat(auto-fill,5rem)] grid-rows-[repeat(auto-fill,5rem)] gap-2 ">
          {category.images.map((image) => (
            <li key={image.id} className="h-20 w-20">
              <img
                className="aspect-square object-cover cursor-pointer"
                src={image.src}
                alt={'draggable'}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-900 md:w-24 w-20 items-center flex justify-between px-2">
        <div>
          <img
            onClick={openModal}
            className="cursor-pointer hover:bg-gray-500 rounded-full transition duration-400"
            alt="settings buton"
            src="https://tiermaker.com/images/chart/chart/settings.png"
          />
        </div>
        <div>
          {showToUp && (
            <img
              onClick={() => onMove(category.id, 'up')}
              alt="Move up"
              className="cursor-pointer hover:bg-gray-500 rounded-full transition duration-400"
              src="https://tiermaker.com/images/chart/chart/arrowup.png"
            />
          )}
          {showToDown && (
            <img
              onClick={() => onMove(category.id, 'down')}
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
