import {
  Box,
  ModalHeader as ModalHeaderBase,
  ModalHeaderProps,
} from '@chakra-ui/react'

const ModalHeader = ({ children, ...props }: ModalHeaderProps) => (
  <ModalHeaderBase {...props}>
    <Box as="h4" textStyle="h4">
      {children}
    </Box>
  </ModalHeaderBase>
)

export default ModalHeader
