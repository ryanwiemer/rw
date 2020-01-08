import React from 'react'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import Switch from '../../icons/Switch.js'

const Wrapper = styled.button`
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transform: scaleX(${props => (props.flip ? '1' : '-1')});
  svg {
    fill: ${props => props.theme.colors.text};
    width: 1.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      width: 1.4rem;
    }
  }
`

const ColorSwitch = props => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === 'default' ? 'dark' : 'default'
  return (
    <Wrapper
      onClick={() => setColorMode(nextColorMode)}
      flip={colorMode === 'dark'}
    >
      <Switch />
    </Wrapper>
  )
}

export default ColorSwitch
