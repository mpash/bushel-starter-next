import { modalAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys)

const baseStyle = definePartsStyle({
  dialog: {
    boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.2)',
    _dark: {
      bgColor: 'darkGray.900',
      borderColor: 'darkGray.900',
    },
  },
  closeButton: {
    top: ['15px', null, '18px'],
    right: '24px',
    _hover: { bgColor: 'gray.200' },
  },
})

export const modalTheme = defineMultiStyleConfig({ baseStyle })
