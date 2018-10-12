import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { pageFade } from '../styles/poses'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Transition = posed.div(pageFade)

class Layout extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.setState({ loaded: true })
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
                transform: translateY(0px) !important;
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
            <title>Ryan Wiemer</title>
            <link rel="icon" href={favicon} />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry."
            />
            <meta property="og:title" content="Ryan Wiemer" />
            <meta
              property="og:description"
              content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry."
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Ryan Wiemer" />
            <meta property="og:url" content="https://www.ryanwiemer.com" />
          </Helmet>
          <Menu />
          <PoseGroup animateOnMount preEnterPose="initial">
            <Transition key={props.location.pathname} id="content">
              {children}
              <Footer up={props.location.pathname !== '/'} />
              {this.renderNoScript()}
            </Transition>
          </PoseGroup>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
