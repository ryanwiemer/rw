import React, { useState } from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

const Wrapper = styled.div`
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
  }
`

const Header = styled.div`
  margin: 0 0 2em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0 0 2em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5em;
  }
`

const Title = styled.h1`
  line-height: 1.15;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.488em;
    grid-column: span 12;
    margin: 0 0 4rem 0;
  }
`

const Row = styled.div`
  grid-column: span 12;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`

const Button = styled(motion.button)`
  position: relative;
  cursor: pointer;
  padding: 0;
  margin: 0 2rem 0 0;
  padding: 1rem 0;
  transition: 0.3s color;
  color: ${(props) => props.theme.colors.text};
  transform: translate3d(0px 0px 0px) !important;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (hover: none) {
    color: ${(props) => props.theme.colors.text} !important;
  }
`

const Underline = styled(motion.div)`
  background: ${(props) => props.theme.colors.accent};
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
`

const List = styled.ul`
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.75em;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5em;
  }
`

const Item = styled(motion.li)`
  margin: 0 0 2em 0;
`

const Heading = styled.h2`
  transition: 0.3s color;
  margin: 1rem 0 0 0;
  font-size: 1.296em;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: 1.15;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.44em;
  }
`

const Description = styled.p`
  transition: 0.3s opacity;
  margin: 1em 0 0 0;
`

const Category = styled.span`
  display: block;
  margin: 1rem 0 0 0;
  font-size: 0.9em;
  opacity: 0.5;
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    h2 {
      color: ${(props) => props.theme.colors.accent};
    }
    p {
      opacity: 0.5;
    }
  }
  @media (hover: none) {
    h2 {
      color: ${(props) => props.theme.colors.text} !important;
    }
    p {
      opacity: 1 !important;
    }
  }
`

const WorkList = (props) => {
  const [projects, setProjects] = useState(props.projects)
  const [selected, setSelected] = useState('All')

  const filter = (value) => {
    setSelected(value)
    value != 'All'
      ? setProjects(
          props.projects.filter((project) => project.node.category === value)
        )
      : setProjects(props.projects)
  }

  const categories = [
    ...new Set(props.projects.map((item) => item.node.category).reverse()),
  ]

  return (
    <Wrapper>
      <Header>
        <Title>Selected Work</Title>
        <Row>
          <AnimateSharedLayout>
            <AnimatePresence>
              <Button onClick={() => filter('All')}>
                All
                {selected == 'All' && <Underline layoutId="underline" />}
              </Button>
              {categories.map((category, index) => (
                <Button onClick={() => filter(category)} key={index}>
                  {category}
                  {selected == category && <Underline layoutId="underline" />}
                </Button>
              ))}
            </AnimatePresence>
          </AnimateSharedLayout>
        </Row>
      </Header>
      <List>
        {projects.map(({ node: project }) => (
          <Item key={project.id}>
            <ProjectLink to={`/${project.slug}/`}>
              <Img
                alt={project.cover.title}
                fluid={{
                  ...project.cover.fluid,
                  aspectRatio: 1 / 1,
                }}
              />
              <Heading>{project.title}</Heading>
              <Description>
                {project.content.childMarkdownRemark.excerpt}
              </Description>
              <Category>{project.category}</Category>
            </ProjectLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default WorkList
