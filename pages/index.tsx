import { Box } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Bushel Starter Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Box as="h1" textStyle="h1">Hello World</Box>
        <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet labore porro atque, asperiores velit cumque aliquam repellat eaque debitis voluptatibus, quae molestiae vel harum aspernatur molestias rem ipsa quidem.</Box>
      </div>
    </>
  )
}
