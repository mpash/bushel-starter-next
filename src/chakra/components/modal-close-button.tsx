import { CloseIcon } from '@chakra/icons'
import { ModalCloseButton as ModalCloseButtonBase } from '@chakra-ui/react'

const ModalCloseButton = () => (
  <ModalCloseButtonBase>
    <CloseIcon boxSize="32px" />
  </ModalCloseButtonBase>
)

export default ModalCloseButton
