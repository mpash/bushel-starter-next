import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  track: {
    _dark: {
      _checked: {
        bgColor: 'blue.500',
      },
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })
