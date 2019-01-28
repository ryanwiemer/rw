import React from 'react'
import Helmet from 'react-helmet'

const defaultTitle = 'Ryan Wiemer'
const defaultDescription =
  'Web developer and designer based in Oakland, California'
const defaultImage = 'https://www.ryanwiemer.com/icon.png'

const SEO = props => (
  <Helmet>
    <title>
      {props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    </title>
    <meta
      name="description"
      content={props.description ? props.description : defaultDescription}
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={defaultTitle} />
    <meta
      property="og:title"
      content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    />
    <meta
      property="og:description"
      content={props.description ? props.description : defaultDescription}
    />
    {typeof window !== `undefined` && (
      <meta property="og:url" content={location.href} />
    )}
    <meta
      property="og:image"
      content={props.image ? props.image.ogimg.src : defaultImage}
    />

    {props.image ? (
      <meta property="og:image:width" content={props.image.ogimg.width} />
    ) : null}
    {props.image ? (
      <meta property="og:image:height" content={props.image.ogimg.height} />
    ) : null}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@ryanwiemer" />
    <meta
      name="twitter:title"
      content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    />
    <meta
      name="twitter:image"
      content={props.image ? props.image.fluid.src : defaultImage}
    />
    <meta
      name="twitter:description"
      content={props.description ? props.description : defaultDescription}
    />
  </Helmet>
)

export default SEO
