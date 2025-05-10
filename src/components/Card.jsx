import React from 'react'
import sheriyans from "../images/sheriyans.jpeg"
import harkirat from "../images/harkirat.png"
import hitesh from "../images/hitesh.jpg"
import StarRating from './StarRating'
import Button from './Button'
const Card = () => {
  return (

    
    <div>
        <h1 className='text-5xl font-bold flex justify-center items-center  bg-gradient-to-l from-sky-400  to-green-500 mt-5 text-transparent bg-clip-text '>Web Developement Tutors</h1>
    <div className='flex flex-wrap  mt-10 '>
      <div className='h-100 w-80 ml-30 rounded-lg bg-green-400 shadow-black shadow-2xl  border-2 border-black '>
            <img src={sheriyans} className='object-cover flex  mt-2 ml-8 h-60 w-60 rounded-xl  '></img>
            <h1 className='text-white font-bold text-2xl items-center flex justify-center '>Sheriyans Coding School</h1>
            <p className='pl-5 text-gray-900 font-monobold  '>
                The Teaching Style is so funny & He uses slang language to
                make things easy and relatable/understandable
                
            </p>
            <div className='pl-5 pt-3'>

            <StarRating />
            </div>
      </div>
       <div className='h-100 w-80 ml-30 rounded-lg bg-green-400  shadow-black shadow-xl border-2 border-black '>
            <img src={harkirat} className='object-cover   mt-2 flex  ml-8 h-60 w-60 rounded-xl '></img>
            <h1 className='text-white font-bold text-2xl items-center flex justify-center  '>Harkirat Singh</h1>
            <p className='pl-7   text-gray-900 font-monobold   '>
                He Teaches everything indepth and you will
                become a pro developer after learning from him
            </p>
            <div className='pl-7 pt-3'>

            <StarRating  />
           </div>
      </div>
      <div className='h-100 w-80 ml-30 rounded-lg bg-green-400 shadow-black border-black border-2 shadow-2xl   '>
            <img src={hitesh} className='object-cover flex   mt-2 ml-8 h-60 w-60 rounded-xl '></img>
            <h1 className='text-white font-bold text-2xl items-center flex justify-center'>Hitesh Chaudhary</h1>
            <p className='pl-6  text-gray-900 font-monobold  '>
                Hitesh is a excellent teacher and he teaches amazing concepts
                while drinking his chai & using his amazing humour
            </p>
            <div className='ml-5 mt-2 '>
            
            <StarRating />
           

            
            </div>
            
      </div>
    </div>
    </div>
  )
}

export default Card
