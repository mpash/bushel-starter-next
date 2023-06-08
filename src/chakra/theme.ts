import { extendTheme } from '@chakra-ui/react'
import buttonTheme from './buttonTheme'
import { checkboxTheme } from './checkboxTheme'
import colors from './colors'
import { modalTheme } from './modalTheme'
import { numberInputTheme } from './numberInputTheme'
import { popoverTheme } from './popoverTheme'
import { switchTheme } from './switchTheme'
import textStyles from './textStyles'

const theme = extendTheme({
  colors,
  textStyles,
  components: {
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    Modal: modalTheme,
    Popover: popoverTheme,
    Switch: switchTheme,
    NumberInput: numberInputTheme,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Montserrat, sans-serif',
    mono: 'Menlo, monospace',
  },
  letterSpacings: {
    heading: '-0.02em',
    preTitle: '.08em',
  },
  styles: {
    global: {
      body: {
        color: 'gray.700',
        bgColor: 'gray.50',
        _dark: {
          color: 'whiteAlpha.800',
          bgColor: 'darkGray.700',
        },
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '72px',
  },
  shadows: {
    xs: '0px 2px 3px rgba(45, 55, 72, 0.2), 0px 0px 2px rgba(45, 55, 72, 0.15)',
    sm: '0px 2px 3px rgba(45, 55, 72, 0.2), 0px 0px 2px rgba(45, 55, 72, 0.15)',
    md: '0px 6px 12px rgba(45, 55, 72, 0.22), 0px 2px 6px rgba(45, 55, 72, 0.15)',
    lg: '0px 10px 20px rgba(45, 55, 72, 0.24), 0px 2px 10px rgba(45, 55, 72, 0.17)',
    xl: '0px 16px 32px rgba(45, 55, 72, 0.26), 0px 8px 20px rgba(45, 55, 72, 0.2)',
    button:
      '0px 3px 4px rgba(74, 144, 226, 0.2), 0px 0px 2px rgba(74, 144, 226, 0.15)',
  },
})

export default theme
