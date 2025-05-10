import React from 'react'

const Button = ({ text = "Submit" }) => {
  return (
    <div className='bg-blue-500 hover:bg-blue-600 rounded-xl shadow-md px-4 py-2 transform transition-all duration-300 hover:scale-105 border border-blue-400 w-40 text-center'>
      <button className="text-white font-medium">{text}</button>
    </div>
  )
}

export default Button
