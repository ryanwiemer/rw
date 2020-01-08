export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#292929',
    reverseText: '#ffffff',
    background: '#f3f2f1',
    primary: '#313131',
    secondary: '#dfdedc',
    accent: '#C29967',
    muted: '#e7e6e1',
    code: '#c08946',
    modes: {
      dark: {
        text: '#ffffff',
        reverseText: '#292929',
        background: '#121212',
        primary: '#ffffff',
        secondary: '#292929',
        accent: '#C29967',
        muted: '#292929',
        code: '#292929',
      },
    },
  },
  fonts: {
    body:
      '"Inter var",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    maxWidth: '850px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '80em',
  },
}
