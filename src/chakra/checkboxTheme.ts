import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  sizes: {
    md: {
      control: {
        '--checkbox-size': '16px',
      },
      label: { fontSize: 'md' },
      icon: { fontSize: 'xs' },
    },
  },
  icon: {
    color: 'white',
  },
  control: {
    borderColor: 'gray.700',
    _checked: {
      bg: 'blue.400',
      borderColor: 'blue.400',
    },
    _dark: {
      bgColor: 'whiteAlpha.200',
      borderColor: 'whiteAlpha.200',
      _checked: {
        bg: 'blue.500',
        borderColor: 'blue.500',
      },
    },
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })
