import React from 'react'
import Image from 'next/image'

interface RecentPostsProps {
  posts: any[]
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          <Image src={post.image} alt={post.title} width={300} height={200} className="w-full md:w-1/3 h-48 object-cover" />
          <div className="w-full md:w-2/3 md:pl-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-500">{post.category}</span>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
            <span className="text-sm text-gray-500 mt-2 block">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentPosts

