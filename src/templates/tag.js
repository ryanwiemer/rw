import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import orderBy from 'lodash/orderBy'
import Container from '../components/Container'
import BlogList from '../components/BlogList'
import SEO from '../components/SEO'

const TagTemplate = ({ data }) => {
  const { title } = data.contentfulTag
  const posts = orderBy(
    data.contentfulTag.post,
    // eslint-disable-next-line
    [object => new moment(object.dateISO)],
    ['desc']
  )

  return (
    <>
      <SEO title={title} />
      <Container />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        dateISO: date(formatString: "YYYY-MM-DD")
      }
    }
  }
`

export default TagTemplate
