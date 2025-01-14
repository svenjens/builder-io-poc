import React from 'react'
import FeaturedPosts from './FeaturedPosts'
import RecentPosts from './RecentPosts'
import Sidebar from './Sidebar'

interface HomeProps {
  featuredPosts?: any[]
  recentPosts?: any[]
}

const Home: React.FC<HomeProps> = ({ featuredPosts = [], recentPosts = [] }) => {
  return (
    <div className="container mx-auto px-4">
      <FeaturedPosts posts={featuredPosts} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-0 md:pr-4">
          <RecentPosts posts={recentPosts} />
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Home

