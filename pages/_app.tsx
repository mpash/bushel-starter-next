import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra/theme'
import type { AppProps } from 'next/app'
import { Inter, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-monsterrat',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={`${montserrat.variable} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
