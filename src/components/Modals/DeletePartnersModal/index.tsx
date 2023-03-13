import React from "react";

import { Text } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface DeletePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  id: number | null;
}

export const DeletePartnerModal = ({ isOpen, onClose, onConfirm, id }: DeletePartnerModalProps) => {
  const onSave = () => {
    if (id) {
      onConfirm(id);
    }
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onConfirm={onSave} title="Atenção" isCentered>
      <Text fontSize="1.2rem" color="red" fontWeight={500}>
        Tem certeza que deseja deletar essa imagem?
      </Text>
    </BaseModal>
  );
};
