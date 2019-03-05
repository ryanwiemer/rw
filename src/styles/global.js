import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  /* Site Specific Globals */
  body {
    background: #121212;
    color: white;
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  a {
    text-decoration: none;
    color: white;
  }

  /* NProgress stles */
  .nprogress-busy {
    cursor: wait;
  }

  #nprogress .peg {
    display: none !important;
  }

  #nprogress .bar {
    height: 4px !important;
  }


  /* Loading for mounting the Layout component */
  .initial {
    #content {
      visibility: hidden;
    }
    #nav {
      opacity: 0;
    }
  }

  .loaded {
    #content {
      visibility: visible;
    }
    #nav {
      opacity: 1;
    }
  }

  /*
    Manually styling active nav links.
    There was an issue with reach-router
    and react-pose interfering with each other.
  */
  .page--about .link--about,
  .page--work .link--work,
  .page--blog .link--blog,
  .page--contact .link--contact {
    border-color: white;
  }

  /* Web Accessibility Stuff */

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus,
  body:not(.user-is-tabbing) a:focus  {
    outline: none;
  }

  button,
  input,
  textarea,
  select {
    color: #121212;
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: 3px solid #497ecb;
    }
  }
  a:focus {
    outline: 3px solid #497ecb;
  }

  /* Emoji Styling */

  img.emoji {
    display: inline-block;
    height: 1em;
    width: 1em;
    margin: 0 .05em 0 .1em;
    vertical-align: -0.1em;
  }

`

export default GlobalStyle
