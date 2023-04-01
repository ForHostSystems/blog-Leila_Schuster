import React from "react";

import { Text } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface ModalDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  id: number | null;
  text: string;
}

export const ModalDelete = ({ isOpen, onClose, onConfirm, id, text }: ModalDeleteProps) => {
  const onSave = () => {
    if (id) {
      onConfirm(id);
    }
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onConfirm={onSave} title="Atenção" isCentered>
      <Text fontSize="1.2rem" color="red" fontWeight={500}>
        {text}
      </Text>
    </BaseModal>
  );
};
