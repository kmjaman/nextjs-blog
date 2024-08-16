import React from 'react'

const Card = ( post: any ) => {
  return (
    <div className='card hover:shadow-lg'> 
        <img className='w-full h-32 sm:h-48 object-cover' src={post.image} alt={post.title} />
               
        <div className='m-4'>
            <span className='font-bold'>{post.title}</span>
            <span className='block text-gray-500 text-sm'>{post.content}</span>
        </div>
    </div>
  )
}

export default Card