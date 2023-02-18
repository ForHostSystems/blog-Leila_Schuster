import React, { useState } from "react";

import { TricksPreviewContent } from "@/components/Tricks/TricksPreview/TricksPreviewContent";
import { TricksPreviewOutput } from "@/mocks/mockedTricks";
import { Button, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface TricksPreviewModalProps {
  content: TricksPreviewOutput[0];
  order: number;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export const TricksPreviewModal = ({ content, order, isOpen, onClose, onConfirm }: TricksPreviewModalProps) => {
  const [selectedOption, setSelectedOption] = useState<"video" | "pdf" | null>(null);

  const onCloseModal = () => {
    onClose();
    setSelectedOption(null);
  };
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onCloseModal}
      onConfirm={onConfirm}
      title="Editando: Dicas LS"
      size={selectedOption != null ? "6xl" : "md"}
      isCentered={selectedOption == null}>
      {selectedOption == null && (
        <>
          <Heading fontSize="1.4rem" fontWeight={500}>
            Qual ação deseja tomar?
          </Heading>
          <UnorderedList listStyleType="none" mt={6} spacing={4}>
            <ListItem>
              <Button fontSize="1.2rem" fontWeight={400} variant="ghost" onClick={() => setSelectedOption("pdf")}>
                Inserir ou editar PDF
              </Button>
            </ListItem>
            <ListItem>
              <Button fontSize="1.2rem" fontWeight={400} variant="ghost" onClick={() => setSelectedOption("video")}>
                Inserir ou editar video
              </Button>
            </ListItem>
          </UnorderedList>
        </>
      )}

      {selectedOption != null && (
        <>
          <Button variant="link" onClick={() => setSelectedOption(null)}>
            Voltar
          </Button>

          <TricksPreviewContent content={content} order={order} />
        </>
      )}
    </BaseModal>
  );
};
