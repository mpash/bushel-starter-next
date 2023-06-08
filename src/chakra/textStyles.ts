import { defineStyle } from '@chakra-ui/react'

const h1 = defineStyle({
  fontSize: ['5xl', null, '6xl'],
  fontFamily: 'heading',
  fontWeight: 'bold',
  letterSpacing: 'heading',
})

const h2 = defineStyle({
  fontSize: ['4xl', null, '5xl'],
  fontFamily: 'heading',
  fontWeight: 'bold',
  letterSpacing: 'heading',
})

const h3 = defineStyle({
  fontSize: ['2xl', null, '3xl'],
  fontFamily: 'heading',
  fontWeight: 'bold',
  letterSpacing: 'heading',
})

const h4 = defineStyle({
  fontSize: ['xl', null, '2xl'],
  fontFamily: 'heading',
  fontWeight: 'bold',
  letterSpacing: 'heading',
})

const h5 = defineStyle({
  fontSize: ['lg', null, 'xl'],
  fontFamily: 'heading',
  fontWeight: 'bold',
  letterSpacing: 'heading',
})

const h6 = defineStyle({
  fontSize: ['md', null, 'lg'],
  fontFamily: 'heading',
  fontWeight: 'bold',
  letterSpacing: 'heading',
})

const textStyles = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body: {
    fontWeight: 400,
    fontSize: 'md',
  },
  preTitle: {
    fontSize: 'xs',
    fontWeight: 'bold',
    letterSpacing: 'preTitle',
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 'md',
    color: 'blue.400',
    _dark: {
      color: 'blue.500',
    },
  },
  subText: {
    fontSize: 'sm',
    color: 'gray.500',
    _dark: {
      color: 'whiteAlpha.500',
    },
  },
}

export default textStyles
