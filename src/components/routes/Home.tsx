import React from 'react'

export const Home = () => {
  return (
    <>
      <div
        className="w-100 h-40 bg-blue-400"
        onDragEnter={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        onDragOver={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        onDrop={(e) => {
          console.log('Hola', e)
        }}
      ></div>
      <div draggable className="bg-red-200 w-20 h-20"></div>
    </>
  )
}
