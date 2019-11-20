/*
  Schema Customization

  Rather than define the entire data structue only a
  single field is defined for each major type of content.
  The reason for this is to allow a much simplier test query
  to be run to determine whether or not a corresponding page
  should be created in gatsby-node.js. In essence this allows
  for "optional" types of data in Contentful to be ignored and
  not break the build.
*/

module.exports = ({ actions }) => {
  actions.createTypes(`
    type ContentfulProject implements Node @infer {
      title: String
    }
    type ContentfulPost implements Node @infer {
      title: String
    }
    type ContentfulTag implements Node @infer {
      title: String
    }
    type ContentfulLetter implements Node @infer {
      title: String
    }

  `)
}
