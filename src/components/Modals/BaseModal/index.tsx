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
}

export const BaseModal = ({ isOpen, onClose, onConfirm, title, children, ...props }: BaseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent bg="background" transition="0.1s">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button colorScheme="green" variant="ghost" onClick={onConfirm}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
