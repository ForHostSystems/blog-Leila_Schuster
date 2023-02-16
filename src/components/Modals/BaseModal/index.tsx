import React from "react";

import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from "@chakra-ui/react";

interface BaseModalProps extends ModalProps {
  onConfirm?: () => void;
  title?: string;
}

export const BaseModal = ({ isOpen, onClose, onConfirm, title, children, ...props }: BaseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
};
