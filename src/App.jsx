import React from 'react'
import Navbar from './components/Navbar'
import "tailwindcss";
import Card from './components/Card';




const App = () => {
  return (
    <div className="h-screen bg-[url('.//images/purple_blue_gradient.jpg')] bg-cover bg-center ">
      <Navbar />
      
      <Card/>
      
      
      
      

    </div>
  )
}

export default App
