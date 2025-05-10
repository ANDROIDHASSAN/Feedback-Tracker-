import React from 'react'
import sheriyans from "../images/sheriyans.jpeg"
import harkirat from "../images/harkirat.png"
import hitesh from "../images/hitesh.jpg"
import StarRating from './StarRating'
import Button from './Button'

const Card = () => {
  return (
    <div className="pt-10">
      <h1 className='text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>
        Web Development Tutors
      </h1>
      
      <div className='flex flex-wrap justify-center gap-8 mt-8'>
        {/* Card Template - all cards use the same structure */}
        {[
          {
            image: sheriyans,
            name: "Sheriyans Coding School",
            description: "The teaching style is so engaging & uses relatable language to make complex concepts easy to understand."
          },
          {
            image: harkirat,
            name: "Harkirat Singh",
            description: "He teaches everything in depth and you will become a pro developer after learning from him."
          },
          {
            image: hitesh,
            name: "Hitesh Chaudhary",
            description: "Hitesh is an excellent teacher who explains complex concepts while enjoying his chai with amazing humor."
          }
        ].map((tutor, index) => (
          <div 
            key={index}
            className='w-80 rounded-xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col'
          >
            <div className="p-4 flex justify-center">
              <img 
                src={tutor.image} 
                className='h-60 w-60 rounded-xl object-cover shadow-md' 
                alt={tutor.name} 
              />
            </div>
            <div className="p-6 pt-2 flex-1 flex flex-col">
              <h2 className='text-white font-bold text-2xl mb-3 text-center'>{tutor.name}</h2>
              <p className='text-gray-100 mb-4 text-center flex-1'>
                {tutor.description}
              </p>
              <div className='flex justify-center mb-4'>
                <StarRating />
              </div>
              <div className='flex justify-center mt-auto'>
                <Button text="Submit Feedback" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
