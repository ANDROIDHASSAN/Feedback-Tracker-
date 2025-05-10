import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';

const App = () => {
  return (
    <div className="min-h-screen bg-[url('.//images/purple_blue_gradient.jpg')] bg-cover bg-center bg-fixed">
      <Navbar />
      <div className="container mx-auto px-4 py-24 animate-fadeIn">
        <Card />
      </div>
    </div>
  )
}

export default App
