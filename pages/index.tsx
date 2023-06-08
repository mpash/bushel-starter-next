import { Box, HStack, Link, Stack } from '@chakra-ui/react'
import bushelLogo from '@public/bushel.svg'
import chakraLogo from '@public/chakra.svg'
import nextLogo from '@public/next.svg'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bushel Starter</title>
        <meta name="description" content="Bushel Starter Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="grid"
        placeItems="center"
        h="100svh"
        // bgColor="gray.300"
        background="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);"
        backgroundSize="400% 400%"
        animation="gradient 15s ease infinite"
        sx={{
          '@keyframes gradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
        }}
      >
        <Stack spacing={8} alignItems="center">
          <Box textStyle="preTitle">Made with</Box>
          <HStack spacing={4} bgColor="whiteAlpha.200" p={5} borderRadius="lg">
            <Image src={nextLogo} alt="NextJS Logo" height={40} />
            <Box as="strong" fontSize="2xl">
              +
            </Box>
            <Image src={chakraLogo} alt="Chakra UI Logo" height={40} />
            <Box as="strong" fontSize="2xl">
              +
            </Box>
            <Image src={bushelLogo} alt="Bushel Icon" height={40} />
          </HStack>
          <Box>
            Use this template to get started with{' '}
            <Link
              href="https://nextjs.org/docs"
              target="blank"
              textStyle="preTitle"
            >
              NextJS
            </Link>{' '}
            and{' '}
            <Link
              href="https://chakra-ui.com/getting-started"
              target="blank"
              textStyle="preTitle"
            >
              Chakra UI
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
