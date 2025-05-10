import React from 'react'
import "tailwindcss"
const Navbar = () => {
  return (
    <div >
      

      <div className=' h-15  flex items-center justify-center gap-40 text-white font-bold text-xl  bg-transparent ' >
      <a href="/"  className='text-3xl bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent'>
        Feedback Tracker 
      </a>
      <a href="/" target='blank'>
        Home
      </a>
      <a href="/" target='blank'>
        About
      </a>
      <a href="/" target='blank'>
        Contact
      </a>
      <a href="/" target='blank'>
        More
      </a>
</div>
    </div>
  )
}

export default Navbar
