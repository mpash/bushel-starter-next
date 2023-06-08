import { ColorMode, useColorMode as useColorModeBase } from '@chakra-ui/react'
import { useLocalStorageValue } from '@react-hookz/web'
import { useSession } from 'next-auth/react'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'

type ColorModeProviderValues = {
  colorMode: ColorMode | 'auto' | undefined
  setColorMode: (mode: ColorMode | 'auto') => void
  toggleColorMode: () => void
}

const ColorModeProviderContext = createContext<ColorModeProviderValues | null>(
  null
)

export const ColorModeProvider = ({ children }: { children?: ReactNode }) => {
  const { data: session } = useSession()
  const { value: colorMode, set: setColorMode } = useLocalStorageValue<
    ColorMode | 'auto'
  >(`settings.colorMode.${session?.user?.bushelId}`, {
    defaultValue: 'light',
    initializeWithValue: true,
  })
  const { setColorMode: setColorModeChakra } = useColorModeBase()

  const handler = useCallback(
    (e: MediaQueryListEvent) => {
      if (colorMode === 'auto') {
        setColorModeChakra(e.matches ? 'dark' : 'light')
      }
    },
    [colorMode, setColorModeChakra]
  )

  const handleSetColorMode = useCallback(
    (mode: ColorMode | 'auto') => {
      if (mode === 'auto') {
        setColorModeChakra(
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        )
      } else {
        setColorModeChakra(mode)
      }
      setColorMode(mode)
    },
    [setColorMode, setColorModeChakra]
  )

  const toggleColorMode = useCallback(() => {
    if (colorMode === 'auto') {
      handleSetColorMode(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      )
    } else {
      handleSetColorMode(colorMode === 'light' ? 'dark' : 'light')
    }
  }, [colorMode, handleSetColorMode])

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    prefersDarkMode.addEventListener('change', handler)
    return () => {
      prefersDarkMode.removeEventListener('change', handler)
    }
  }, [colorMode, handler, setColorModeChakra])

  const value = useMemo(
    () => ({
      colorMode,
      setColorMode: handleSetColorMode,
      toggleColorMode,
    }),
    [colorMode, handleSetColorMode, toggleColorMode]
  )

  return (
    <ColorModeProviderContext.Provider value={value}>
      {children}
    </ColorModeProviderContext.Provider>
  )
}

const useColorMode = () => {
  const context = useContext(ColorModeProviderContext)
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider')
  }
  return context
}

export default useColorMode
