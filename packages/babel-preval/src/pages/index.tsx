import NextLink from 'next/link'
import React from 'react'

import { posts } from '~/helpers/preval'

const Index = () => {
  return (
    <React.Fragment>
      <div>Index</div>
      {posts.map(post => (
        <div key={post.slug}>
          <NextLink href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </NextLink>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Index
