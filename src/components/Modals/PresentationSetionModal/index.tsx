import React from "react";

import { Text } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface PresentationSetionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export const PresentationSetionModal = ({ isOpen, onClose, onConfirm }: PresentationSetionModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Atenção" isCentered>
      <Text fontSize="1.2rem">Tem certeza que deseja cancelar essa ação?</Text>
      <Text fontSize="1.2rem" color="red" fontWeight={500}>
        As alterações não salvas serão perdidas!
      </Text>
    </BaseModal>
  );
};
