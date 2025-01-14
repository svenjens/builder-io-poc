import React from 'react'
import Image from 'next/image'

interface FeaturedPostsProps {
  posts: any[]
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {posts.map((post, index) => (
        <div key={index} className="relative">
          <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <span className="text-sm">{post.category}</span>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <span className="text-sm">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedPosts

