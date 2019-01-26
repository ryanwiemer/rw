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
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
    font-weight: bold;
    margin: 0 0 2rem 0;
  }
  h3 {
    font-size: 1.5em;
  }
  img {
    margin: 0 0 2rem 0;
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
  const { title, cover, date, content, tags } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <>
      <SEO title={title} image={cover} />
      <Hero title={title} image={cover} />
      <Container>
        <ProjectLinks previous={previous} next={next} />
        <Wrapper>
          <Content
            dangerouslySetInnerHTML={{
              __html: content.childContentfulRichText.html,
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
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`

export default PostTemplate
