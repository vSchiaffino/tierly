import React from 'react'
import { Category } from '../../../types/tier'

interface Props {
  category: Category
  showToUp: boolean
  showToDown: boolean
  onMove: (id: number, direction: 'up' | 'down') => void
  openModal: () => void
}

export const TierCategory: React.FC<Props> = ({
  category,
  onMove,
  openModal,
  showToDown,
  showToUp,
}) => {
  return (
    <div className={`flex flex-row h-24 border border-gray-900`}>
      <div
        className={`text-center justify-center text-lg font-semibold text-slate-900  items-center flex md:w-32 w-24 bg-${category.color}`}
      >
        <p className="px-2 inline-block w-full align-middle break-words">
          {category.title}
        </p>
      </div>
      <div className="flex-grow images bg-slate-800">
        ACA IRIAN LAS IMAGENES
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
