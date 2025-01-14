'use client'

import { useState, useEffect } from 'react'
import { BuilderComponent as Builder, useIsPreviewing } from '@builder.io/react'
import { registerComponents } from '@/lib/builder-registry'
import { RootComponentProps } from '@/types/builder'
import { useApi } from '@/hooks/useApi'

// Register all components
registerComponents()

export default function BuilderComponent() {
  const [content, setContent] = useState<RootComponentProps | null>(null)
  const isPreviewing = useIsPreviewing()
  const { data: innerBlogData, error: innerBlogError } = useApi('/api/content?type=inner-blog')
  const { data: homeSixData, error: homeSixError } = useApi('/api/content?type=home-six')
  const { data: homeThreeData, error: homeThreeError } = useApi('/api/content?type=home-three')

  useEffect(() => {
    if (innerBlogData && homeSixData && homeThreeData) {
      setContent({
        title: 'Builder.io POC',
        content: [
          { component: { name: 'RecentPost', options: { data: homeThreeData.filter(item => item.page === 'editor_post') } } },
          { component: { name: 'BlogDetailsContent', options: { data: innerBlogData.filter(item => item.page === 'blog_1')[0] } } },
          { 
            component: { 
              name: 'LatestPostSidebar', 
              options: {
                avatarImage: 'https://cdn.builder.io/api/v1/image/assets/default-avatar.jpg',
                avatarName: 'Hi, I\'m Jenny!',
                avatarDescription: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                avatarShapeOne: 'https://cdn.builder.io/api/v1/image/assets/shape-1.svg',
                avatarShapeTwo: 'https://cdn.builder.io/api/v1/image/assets/shape-2.svg'
              } 
            } 
          },
          { component: { name: 'FooterNews', options: {} } },
        ],
      })
    }
  }, [innerBlogData, homeSixData, homeThreeData])

  if (innerBlogError || homeSixError || homeThreeError) {
    return <div>Error loading content</div>
  }

  return (
    <div className="w-full max-w-4xl">
      <Builder
        model="page"
        content={content}
        options={{ includeRefs: true }}
      >
        {(BuilderContent, props) => {
          if (!BuilderContent) {
            return <div>Loading...</div>
          }
          return <BuilderContent {...props} />
        }}
      </Builder>
      {isPreviewing && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-2 text-center">
          <p className="text-sm">You are previewing content. Publish to make changes live.</p>
        </div>
      )}
    </div>
  )
}

