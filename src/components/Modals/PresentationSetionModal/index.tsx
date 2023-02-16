import React from "react";

import { Button, ModalBody, ModalFooter, Text } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface PresentationSetionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export const PresentationSetionModal = ({ isOpen, onClose, onConfirm }: PresentationSetionModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Atenção" isCentered>
      <ModalBody>
        <Text fontSize="1.2rem">Tem certeza que deseja cancelar essa ação?</Text>
        <Text fontSize="1.2rem" color="red" fontWeight={500}>
          As alterações não salvas serão perdidas!
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
          Fechar
        </Button>
        <Button colorScheme="blackAlpha" variant="ghost" onClick={onConfirm}>
          Confirmar
        </Button>
      </ModalFooter>
    </BaseModal>
  );
};
