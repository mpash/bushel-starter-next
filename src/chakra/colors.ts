import { ColorHues } from '@chakra-ui/react'

// Order of data colors here is important for things like donut charts
export const dataColors = {
  lightgray: '#C1CED7',
  mediumgray: '#698197',
  darkgray: '#2A3C47',
  mediumblue: '#3272E3',
  mediumblue2: '#12469e',
  yellow: '#F2BC23',
  yellow2: '#a97f06',
  green: '#0FB867',
  green2: '#004826',
  red: '#F95B3B',
  red2: '#ad2205',
  violet: '#9854E0',
  violet2: '#9854E0',
  lightblue: '#63A1E7',
  lightblue2: '#63A1E7',
  orange: '#F27F20',
  orange2: '#aa5208',
  teal: '#00B2A8',
  teal2: '#008078',
} as const

export type DataColorOption = keyof typeof dataColors

// This was generated from the Bushel Design System Figma document
// CSS colors exported with: https://www.figma.com/community/plugin/816737626312049592/Export-styles-to-CSS-variables
//
// The values are fixed up with a find/replace regex
//
// search:
// ^--([a-z]*)(?:(?:---([a-z]*)--)|(?:---))([a-z]*)(?:-([0-9]+))?(?: ([a-z ]*))?: (#[A-F0-9]{6});$
//
// replace:
// $4: '$6', // $1, $2, $3, $4, $5, $6
//
// After search and replace, manual objects of colors will need to be created.
//
const colors = {
  black: '#232323', // default, , black, , , #232323
  white: '#FFFFFF', // default, , white, , , #FFFFFF
  data: dataColors,
  gray: {
    900: '#171923', // gray, , gray, 900, , #171923
    800: '#1A202C', // gray, , gray, 800, , #1A202C
    700: '#2D3748', // gray, , gray, 700, primary, #2D3748
    600: '#4A5568', // gray, , gray, 600, , #4A5568
    500: '#718096', // gray, , gray, 500, , #718096
    400: '#A0AEC0', // gray, , gray, 400, secondary, #A0AEC0
    300: '#CBD5E0', // gray, , gray, 300, , #CBD5E0
    200: '#E2E8F0', // gray, , gray, 200, , #E2E8F0
    100: '#EDF2F7', // gray, , gray, 100, , #EDF2F7
    50: '#F7FAFC', // gray, , gray, 50, , #F7FAFC
  },
  darkGray: {
    // 900: '#171717',
    // 800: '#191919',
    // 700: '#1b1b1b',
    // 600: '#1d1d1d',
    // 500: '#1f1f1f',
    // 400: '#212121',
    // 300: '#232323',
    // 200: '#252525',
    // 100: '#272727',
    // 50: '#292929',
    900: '#171717',
    800: '#1e1e1e',
    700: '#252525',
    600: '#2c2c2c',
    500: '#343434',
    400: '#3c3c3c',
    300: '#434343',
    200: '#4c4c4c',
    100: '#545454',
    50: '#5c5c5c',
  },
  blue: {
    900: '#000D1D', // blue, , blue, 900, , #000D1D
    800: '#022446', // blue, , blue, 800, , #022446
    700: '#0B3C70', // blue, , blue, 700, , #0B3C70
    600: '#15549B', // blue, , blue, 600, , #15549B
    500: '#206CC6', // blue, , blue, 500, , #206CC6
    400: '#4A90E2', // blue, , blue, 400, primary, #4A90E2
    300: '#63A1E7', // blue, , blue, 300, , #63A1E7
    200: '#8EBCF0', // blue, , blue, 200, , #8EBCF0
    100: '#B8D7F9', // blue, , blue, 100, , #B8D7F9
    50: '#E0F3FF', // blue, , blue, 50, , #E0F3FF
  },
  yellow: {
    900: '#1B1200', // yellow, , yellow, 900, , #1B1200
    800: '#4A3600', // yellow, , yellow, 800, , #4A3600
    700: '#795A01', // yellow, , yellow, 700, , #795A01
    600: '#AA7F05', // yellow, , yellow, 600, , #AA7F05
    500: '#DAA30B', // yellow, , yellow, 500, , #DAA30B
    400: '#F4BD27', // yellow, , yellow, 400, primary, #F4BD27
    300: '#F6CB53', // yellow, , yellow, 300, , #F6CB53
    200: '#FADA83', // yellow, , yellow, 200, , #FADA83
    100: '#FCE9B0', // yellow, , yellow, 100, , #FCE9B0
    50: '#FFF8DC', // yellow, , yellow, 50, , #FFF8DC
  },
  navy: {
    900: '#010F16', // navy, , navy, 900, , #010F16
    800: '#152935', // navy, , navy, 800, primary, #152935
    700: '#284759', // navy, , navy, 700, , #284759
    600: '#39637D', // navy, , navy, 600, , #39637D
    500: '#4A7E9F', // navy, , navy, 500, primary button, #4A7E9F
    400: '#6398B9', // navy, , navy, 400, , #6398B9
    300: '#84AEC8', // navy, , navy, 300, , #84AEC8
    200: '#A7C6D9', // navy, , navy, 200, , #A7C6D9
    100: '#C8DDE9', // navy, , navy, 100, , #C8DDE9
    50: '#E7F5FD', // navy, , navy, 50, , #E7F5FD
  },
  red: {
    900: '#63171B', // red, , red, 900, , #63171B
    800: '#822727', // red, , red, 800, , #822727
    700: '#9B2C2C', // red, , red, 700, , #9B2C2C
    600: '#C53030', // red, , red, 600, , #C53030
    500: '#E53E3E', // red, , red, 500, error primary, #E53E3E
    400: '#F56565', // red, , red, 400, , #F56565
    300: '#FC8181', // red, , red, 300, , #FC8181
    200: '#FEB2B2', // red, , red, 200, , #FEB2B2
    100: '#FED7D7', // red, , red, 100, , #FED7D7
    50: '#FFF5F5', // red, , red, 50, , #FFF5F5
  },
  green: {
    900: '#1C4532', // green, , green, 900, , #1C4532
    800: '#22543D', // green, , green, 800, , #22543D
    700: '#276749', // green, , green, 700, , #276749
    600: '#2F855A', // green, , green, 600, , #2F855A
    500: '#38A169', // green, , green, 500, success primary, #38A169
    400: '#48BB78', // green, , green, 400, , #48BB78
    300: '#68D391', // green, , green, 300, , #68D391
    200: '#9AE6B4', // green, , green, 200, , #9AE6B4
    100: '#C6F6D5', // green, , green, 100, , #C6F6D5
    50: '#F0FFF4', // green, , green, 50, , #F0FFF4
  },
  orange: {
    900: '#1E0900', // orange, , orange, 900, , #1E0900
    800: '#4A2200', // orange, , orange, 800, , #4A2200
    700: '#793904', // orange, , orange, 700, , #793904
    600: '#AA5208', // orange, , orange, 600, , #AA5208
    500: '#D9690D', // orange, , orange, 500, , #D9690D
    400: '#F27F20', // orange, , orange, 400, , #F27F20
    300: '#F69E55', // orange, , orange, 300, , #F69E55
    200: '#F9BA85', // orange, , orange, 200, , #F9BA85
    100: '#FED5B2', // orange, , orange, 100, , #FED5B2
    50: '#FFEFDD', // orange, , orange, 50, , #FFEFDD
  },
} as const

export default colors satisfies Record<
  string,
  Partial<ColorHues> | string | Record<string, string>
  // Color pack 50-900, color by itself, or another object of color values (single deep)
>
