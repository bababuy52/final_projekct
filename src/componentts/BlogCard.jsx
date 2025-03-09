import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={blog.image} alt={blog.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <p className="text-gray-700 text-base">{blog.description}</p>
        <div className="text-sm text-gray-500 mt-2">
          <span>Дата: {blog.date}</span> | <span>Рейтинг: {blog.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
