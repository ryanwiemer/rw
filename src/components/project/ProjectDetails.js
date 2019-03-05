import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Twemoji from 'react-twemoji'
import { appear, delayChildren } from '../../styles/poses'

import Button from './Button'

const Wrapper = styled(posed.div(delayChildren))`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 1rem 0;
`

const Overflow = styled.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
`

const Info = posed.div(appear)

const Description = styled.div`
  padding: 1rem 0 2rem 0;
  max-width: 718px;
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
  margin: 0 0 1.5rem 0;
  li {
    list-style: disc;
    list-style-position: inside;
    border: none;
    line-height: 1.5;
    margin: 0 0 0.5rem 0;
  }
`

const Role = styled.ul`
  margin: 2rem 0 1rem 0;
  li {
    background: ${props => props.theme.colors.tertiary};
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: 2px;
    display: inline-block;
    line-height: 1.5;
    margin: 0 0.5rem 0.5rem 0;
    font-size: 1em;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.1em;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 1rem 0;
  }
`

const Resources = styled(posed.div(appear))`
  padding: 0 0 1rem 0;
  a {
    transition: 0.2s;
    margin: 0 1rem 0 0;
    &:last-child {
      margin: 0;
    }
  }
`

const ProjectDetails = props => {
  return (
    <Wrapper>
      <Info>
        {props.role && (
          <Role>
            <Twemoji options={{ className: 'emoji' }} noWrapper>
              {props.role.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </Twemoji>
          </Role>
        )}
        <Description
          dangerouslySetInnerHTML={{
            __html: props.description.childMarkdownRemark.html,
          }}
        />
        {props.awards && (
          <Awards>
            {props.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </Awards>
        )}
      </Info>
      {props.url && (
        <Overflow>
          <Resources>
            {props.source && <Button href={props.source}>Source</Button>}
            {props.url && <Button href={props.url}>View Site</Button>}
          </Resources>
        </Overflow>
      )}
    </Wrapper>
  )
}

export default ProjectDetails
