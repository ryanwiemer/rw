import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import posed from 'react-pose'
import Hero from '../components/Hero'
import TagList from '../components/TagList'
import Container from '../components/Container'
import ProjectLinks from '../components/ProjectLinks'
import SEO from '../components/SEO'
import { appear, delayChildren } from '../styles/poses'
require('prismjs/themes/prism-tomorrow.css')

const Wrapper = styled(posed.div(delayChildren))`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`

const Content = styled(posed.div(appear))`
  margin: 1rem 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 65%;
  }
  p {
    font-size: 1em;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.1em;
    }
  }
  a {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    transition: 0.3s border-color;
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
  h1,
  h2,
  h3 {
    font-size: 1.5em;
    line-height: 1.2;
    font-weight: bold;
    margin: 0 0 2rem 0;
  }
  strong,
  b {
    font-weight: bold;
  }
  del {
    text-decoration: line-through;
  }
  em {
    font-style: italic;
  }
  blockquote {
    font-style: italic;
    font-weight: bold;
    margin: 0 0 2rem 0;
  }
  ul,
  ol {
    margin: 0 0 2rem 0;
  }
  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  pre {
    margin: 0 0 2em 0 !important;
    border-radius: 2px;
    span {
      background: inherit !important;
    }
  }
`

const SideBar = styled(posed.div(appear))`
  padding: 1rem 0 2rem;
  position: sticky;
  top: 1rem;
  font-size: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
`

const Date = styled.div`
  margin: 0 0 1rem 0;
  color: gray;
`

const PostTemplate = ({ data, pageContext }) => {
  const { title, cover, date, body, tags } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <>
      <SEO
        title={title}
        image={cover}
        description={body.childMarkdownRemark.excerpt}
      />
      <Hero title={title} image={cover} />
      <Container>
        <ProjectLinks previous={previous} next={next} />
        <Wrapper>
          <Content
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />
          <SideBar>
            <Date>Posted on {date}</Date>
            {tags && <TagList tags={tags} />}
          </SideBar>
        </Wrapper>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      date(formatString: "MMMM DD, YYYY")
      tags {
        title
        id
        slug
      }
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`

export default PostTemplate
