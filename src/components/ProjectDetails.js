import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;
`

const Description = styled.div`
  margin: 1rem 0 2rem 0;
  max-width: 600px;
  font-size: 1em;
  line-height: 1.6;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
    line-height: 1.5;
  }
  a {
    transition: 0.3s;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const Awards = styled.ul`
  margin: 0;
  li {
    list-style: disc;
    list-style-position: inside;
    border: none;
    line-height: 1.5;
    margin: 0 0 0.5rem 0;
  }
`

const Resources = styled.div`
  margin: 1rem 0 2rem 0;
  a {
    transition: 0.2s;
    margin: 0 1rem 0 0;
    &:nth-child(2) {
      margin: 0;
    }
  }
`

const ProjectDetails = props => {
  return (
    <Wrapper>
      <div>
        <Description
          dangerouslySetInnerHTML={{
            __html: props.description.childMarkdownRemark.html,
          }}
        />
        <Awards>
          {props.awards &&
            props.awards.map((award, index) => <li key={index}>{award}</li>)}
        </Awards>
      </div>
      <Resources>
        {props.source && <Button href={props.source}>Source</Button>}
        {props.url && <Button href={props.url}>View Site</Button>}
      </Resources>
    </Wrapper>
  )
}

export default ProjectDetails
