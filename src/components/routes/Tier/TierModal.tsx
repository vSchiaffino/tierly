import React from 'react'
import { Modal } from '../../Modal'
import { useEffect } from 'react'

interface Props {
  open: boolean
  initialColor: string
  initialTitle: string
  onDelete: () => void
  onClose: (color: string, title: string) => void
}

export const TierModal: React.FC<Props> = ({
  open,
  initialColor,
  initialTitle,
  onDelete,
  onClose,
}) => {
  useEffect(() => {
    setColor(initialColor)
    setTitle(initialTitle)
  }, [initialColor, initialTitle])
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-orange-200',
  ]
  const [color, setColor] = React.useState('')
  const [title, setTitle] = React.useState('')
  return (
    <Modal
      title="Changing tier category"
      open={open}
      onClose={() => onClose(color, title)}
    >
      <div className="flex flex-col mt-5 gap-5">
        <div>
          <label className=" block mb-2 text-lg font-semibold text-slate-800">
            Title:
          </label>
          <input
            maxLength={40}
            className="border-2 p-4 rounded-md w-[50%]"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text-lg font-semibold text-slate-800">Color:</label>
          <div className="mt-4 flex flex-row gap-5">
            {colors.map((_color) => (
              <div
                key={_color}
                onClick={() => setColor(_color.substring(3))}
                className={`hover:scale-125 hover:brightness-110 transition-all duration-200 cursor-pointer w-10 h-10 ${_color} rounded-full box-border border-slate-800 ${
                  'bg-' + color === _color ? 'border-4' : ''
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <button
            className="w-40 py-4 bg-blue-600 hover:bg-blue-800 transition-all hover:scale-105 duration-300 text-lg text-white rounded-md mt-10"
            onClick={() => onClose(color, title)}
          >
            Close
          </button>
          <button
            onClick={onDelete}
            className="w-40 py-4 bg-red-600 hover:bg-red-800 transition-all hover:scale-105 duration-300 text-lg text-white rounded-md mt-10"
          >
            Delete category
          </button>
        </div>
      </div>
    </Modal>
  )
}
