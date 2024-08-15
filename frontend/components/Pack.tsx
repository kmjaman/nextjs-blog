import React from 'react'

const Pack = ( post: any ) => {
  return (
    <div>
        <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
        </div>
    </div>
  )
}

export default Pack