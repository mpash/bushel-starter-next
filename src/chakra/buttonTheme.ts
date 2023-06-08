import { defineStyleConfig } from '@chakra-ui/react'

const buttonTheme = defineStyleConfig({
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },

  baseStyle: {
    lineHeight: '1rem',
    borderRadius: 'base',
    letterSpacing: '0.01em',
    _active: {
      transform: 'scale(0.95)',
    },
  },

  variants: {
    // SOLID: PRIMARY
    primary: {
      bg: 'blue.400',
      color: 'white',
      _active: {
        bg: 'blue.500',
      },
      _hover: {
        bg: 'blue.500',
        _disabled: {
          bg: 'blue.400',
        },
      },
      _focus: {
        bg: 'blue.600',
        _disabled: {
          bg: 'blue.400',
        },
      },
      _disabled: {
        bg: 'blue.400',
        opacity: '0.4',
      },
      _dark: {
        bg: 'blue.500',
        _hover: {
          bg: 'blue.600',
        },
        _focus: {
          bg: 'blue.600',
        },
        _active: {
          bg: 'blue.700',
        },
        _disabled: {
          bg: 'blue.400',
        },
      },
    },

    // SOLID: SECONDARY
    secondary: {
      bg: 'gray.100',
      color: 'gray.700',

      _active: {
        bg: 'gray.200',
      },
      _hover: {
        bg: 'gray.200',
        _disabled: {
          bg: 'gray.100',
        },
      },
      _focus: {
        bg: 'gray.300',
        _disabled: {
          bg: 'gray.100',
        },
      },
      _disabled: {
        bg: 'gray.100',
        opacity: '0.4',
      },
      _dark: {
        bg: 'darkGray.900',
        color: 'unset',
        _hover: {
          bg: 'darkGray.800',
        },
        _focus: {
          bg: 'darkGray.800',
        },
        _active: {
          bg: 'darkGray.900',
        },
        _disabled: {
          bg: 'darkGray.400',
        },
      },
    },

    // OUTLINE
    blueOutline: {
      bg: 'transparent',
      color: 'blue.400',
      border: '1px solid',
      borderColor: 'blue.400',

      _hover: {
        bg: 'blue.50',
        _disabled: {
          bg: 'transparent',
        },
      },
      _focus: {
        bg: 'blue.100',
        _disabled: {
          bg: 'transparent',
        },
      },
      _active: {
        bg: 'blue.50',
      },
      _disabled: {
        bg: 'transparent',
        opacity: '0.4',
      },
      _dark: {
        borderWidth: 2,
        color: 'blue.400',
        borderColor: 'blue.400',
        _hover: {
          bg: 'blue.500',
          borderColor: 'blue.500',
          color: 'white',
        },
        _focus: {
          bg: 'blue.500',
          borderColor: 'blue.500',
          color: 'white',
        },
        _active: {
          bg: 'blue.600',
          borderColor: 'blue.600',
          color: 'white',
        },
        _disabled: {
          bg: 'transparent',
          color: 'blue.300',
          borderColor: 'blue.300',
        },
      },
    },

    redOutline: {
      bg: 'transparent',
      color: 'red.500',
      border: '1px solid',
      borderColor: 'red.500',

      _hover: {
        bg: 'red.50',
        _disabled: {
          bg: 'transparent',
        },
      },
      _focus: {
        bg: 'red.100',
        _disabled: {
          bg: 'transparent',
        },
      },
      _active: {
        bg: 'red.50',
      },
      _disabled: {
        bg: 'transparent',
        opacity: '0.4',
      },
      _dark: {
        _hover: {
          bg: 'red.500',
          color: 'white',
        },
        _focus: {
          bg: 'red.500',
          color: 'white',
        },
        _active: {
          bg: 'red.600',
          color: 'white',
        },
        _disabled: {
          bg: 'transparent',
          color: 'red.500',
        },
      },
    },

    // GHOST
    blueGhost: {
      bg: 'transparent',
      color: 'blue.400',
      _hover: {
        bg: 'blue.50',
        _disabled: { bg: 'transparent' },
      },
      _focus: {
        bg: 'blue.100',
        _disabled: { bg: 'transparent' },
      },
      _active: { bg: 'blue.50' },
      _disabled: {
        bg: 'transparent',
        opacity: '0.4',
      },
      _dark: {
        _hover: {
          bg: 'blue.500',
          color: 'white',
        },
        _focus: {
          bg: 'blue.500',
          color: 'white',
        },
        _active: {
          bg: 'blue.600',
          color: 'white',
        },
        _disabled: {
          bg: 'transparent',
          color: 'blue.400',
        },
      },
    },

    ghostSecondary: {
      bg: 'transparent',
      color: 'gray.700',

      _hover: {
        bg: 'gray.200',
        _disabled: {
          bg: 'transparent',
        },
      },
      _focus: {
        bg: 'gray.300',
        _disabled: {
          bg: 'transparent',
        },
      },
      _disabled: {
        bg: 'transparent',
        opacity: '0.4',
      },
    },

    ghostDestructive: {
      bg: 'transparent',
      color: 'red.500',

      _hover: {
        bg: 'red.50',
        color: 'red.500',
        _disabled: {
          bg: 'transparent',
        },
      },
      _focus: {
        bg: 'red.100',
        _disabled: {
          bg: 'transparent',
        },
      },
      _active: {
        bg: 'red.50',
      },
      _disabled: {
        bg: 'transparent',
        opacity: '0.4',
      },
      _dark: {
        _hover: {
          bg: 'red.500',
          color: 'white',
        },
        _focus: {
          bg: 'red.500',
          color: 'white',
        },
        _active: {
          bg: 'red.600',
          color: 'white',
        },
      },
    },

    // DESTRUCTIVE
    destructive: {
      bg: 'red.500',
      color: 'white',

      _hover: {
        bg: 'red.600',
        _disabled: {
          bg: 'red.500',
        },
      },
      _focus: {
        bg: 'red.700',
        _disabled: {
          bg: 'red.500',
        },
      },
      _disabled: {
        bg: 'red.500',
        opacity: '0.4',
      },
    },
    // LINK
    link: {
      bg: 'none',
      color: 'blue.400',
      _hover: {
        color: 'blue.500',
        textDecoration: 'none',
      },
      _focus: {
        color: 'blue.600',
      },
      _disabled: {
        opacity: '40%',
        _hover: {
          color: 'blue.400',
          opacity: '40%',
        },
      },
      _active: {
        color: 'blue.600',
      },
    },
  },
})

export default buttonTheme
