import { popoverAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(popoverAnatomy.keys)

const baseStyle = definePartsStyle({
  content: {
    boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.2)',
    _dark: {
      bgColor: 'darkGray.700',
      borderColor: 'darkGray.700',
    },
  },
  footer: {
    borderRadius: '0 0 var(--chakra-radii-md) var(--chakra-radii-md)',
    _dark: {
      borderTop: 0,
      bgColor: 'darkGray.900',
    },
  },
})

export const popoverTheme = defineMultiStyleConfig({ baseStyle })
