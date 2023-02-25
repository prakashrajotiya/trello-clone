import React from 'react'

const Card = ({cardInfo}) => {
  return (
    <div className='bg-white p-2 mt-2 shadow-md rounded-md'>{cardInfo.title} <button title="Delete Card" className="text-red-600 float-right font-bold">x</button></div>
  )
}

export default Card