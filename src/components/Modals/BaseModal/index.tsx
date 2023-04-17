import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

interface BaseModalProps extends ModalProps {
  onConfirm?: () => void;
  title?: string;
  isPreview?: boolean;
  blogPage?: boolean;
}

export const BaseModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  isPreview = false,
  blogPage = false,
  children,
  ...props
}: BaseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent bg="background" transition="0.1s">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
            {isPreview ? "Voltar" : "Fechar"}
          </Button>
          <Button colorScheme="green" variant="ghost" onClick={onConfirm}>
            {!isPreview && blogPage ? "Preview" : "Confirmar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
