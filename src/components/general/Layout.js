import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import favicon from '../../images/favicon.ico'
import GlobalStyle from '../../styles/global'
import theme from '../../styles/theme'
import { pageFade } from '../../styles/poses'
import Menu from './Menu'
import Footer from './Footer'

const Main = posed('main')(pageFade)

const Skip = styled.a`
  border-radius: 0 !important;
  padding: 1em;
  background: #497ecb;
  color: white;
  z-index: 101;
  position: absolute;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing')
  }
}

class Layout extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.setState({ loaded: true })
    window.addEventListener('keydown', handleFirstTab)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', handleFirstTab)
  }

  renderNoScript() {
    return (
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #content {
                visibility: visible !important;
              }
              #nav {
                opacity: 1 !important;
              }
        `,
          }}
        />
      </noscript>
    )
  }

  render() {
    const props = this.props
    const children = this.props.children
    const { loaded } = this.state

    return (
      <ThemeProvider theme={theme}>
        <div className={`${loaded ? ' loaded' : 'initial'}`}>
          <Helmet>
            <html lang="en" />
            <link rel="icon" href={favicon} />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <Skip href="#content" id="skip-navigation">
            Skip to content
          </Skip>
          <Menu />
          <PoseGroup animateOnMount preEnterPose="initial">
            <Main key={props.location.pathname} id="content" role="main">
              {children}
              <Footer />
              {this.renderNoScript()}
            </Main>
          </PoseGroup>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
