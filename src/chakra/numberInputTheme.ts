import { numberInputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    _focusVisible: {},
    _dark: {
      _placeholder: { color: 'whiteAlpha.400' },
    },
    _placeholder: { color: 'gray.300' },
  },
})

export const numberInputTheme = defineMultiStyleConfig({ baseStyle })
