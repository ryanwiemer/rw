import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/general/SEO'
import Container from '../components/general/Container'
import BlogList from '../components/blog/BlogList'
import BlogTile from '../components/blog/BlogTile'

const postsTemplate = ({ pageContext }) => {
  const { posts } = pageContext

  return (
    <>
      <Helmet>
        <body className="page--blog" />
      </Helmet>
      <SEO
        title="Blog"
        description="A sporadic collection of thoughts mostly about the web"
      />
      <Container minHeight>
        <BlogList>
          {posts.map(({ node: post }) => (
            <BlogTile key={post.id} {...post} />
          ))}
        </BlogList>
      </Container>
    </>
  )
}

export default postsTemplate
