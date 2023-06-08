import { useToast as useToastBase } from '@chakra-ui/react'

const useToast = () =>
  useToastBase({
    isClosable: true,
    position: 'top-right',
    containerStyle: { width: '448px' },
  })

export default useToast
