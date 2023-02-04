import React from 'react'
import { Heading } from './Heading'
import { Card } from './Card'

interface Props {
  title: string
  open: boolean
  onClose: () => void
  children?: React.ReactNode
}

export const Modal: React.FC<Props> = ({ title, open, children, onClose }) => {
  React.useEffect(() => {
    ;(document.body.style as any) = open ? 'overflow: hidden' : 'overflow: auto'
  }, [open])
  const displayClass = open ? 'block' : 'hidden'
  return (
    <div
      onClick={onClose}
      className={`flex top-0 left-0 bg-black/60 fixed h-full w-full overflow-hidden ${displayClass}`}
    >
      <Card
        className=" md:w-[50%] w-[80%] m-auto min-h-[30em] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Heading
          text={
            <div className="flex flex-row items-center">
              {title}
              <img
                className="cursor-pointer ml-auto flex object-contain h-6 w-6 self-end hover:bg-gray-300 rounded-full"
                onClick={onClose}
                src="https://tiermaker.com/images/chart/chart/close.png"
                alt="close"
              ></img>
            </div>
          }
          className="pb-6 border-b-2"
        />
        {children}
      </Card>
    </div>
  )
}
