import React from 'react'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import LetterHero from '../components/letter/LetterHero'
import LetterIntro from '../components/letter/LetterIntro'
import LetterAbout from '../components/letter/LetterAbout'
import LetterMain from '../components/letter/LetterMain'

const letterTemplate = ({ pageContext }) => {
  const { title, position, body, color, images, logo } = pageContext

  return (
    <>
      <SEO
        title={title}
        description={`My cover letter for the position of ${position} at ${title}`}
      />
      <LetterHero logo={logo} brandColor={color} />
      <Container minHeight>
        <LetterIntro company={title} position={position} brandColor={color} />
        <LetterAbout images={images} />
        <LetterMain company={title} body={body} brandColor={color} />
      </Container>
    </>
  )
}

export default letterTemplate
