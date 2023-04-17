import React, { ChangeEvent, useState } from "react";

import { ImageLabel } from "@/components/ImageLabel";
import { Textfield } from "@/components/Textfield";
import { useTricks } from "@/context/tricks";
import { TricksDTO } from "@/interfaces/tricks";
import { Flex, FormLabel, Text, Textarea, VStack } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface TricksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => {
  return (
    <FormLabel fontWeight={600} fontSize="1.25rem">
      {text}
    </FormLabel>
  );
};

export const TricksModal = ({ isOpen, onClose, onConfirm }: TricksModalProps) => {
  const { sendData } = useTricks();
  const [fields, setFields] = useState({} as TricksDTO);

  const onChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    if (key.includes("url") && e.target?.files) {
      setFields({ ...fields, [key]: e.target.files[0] });
    } else {
      setFields({ ...fields, [key]: e.target.value });
    }
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFields({ ...fields, description: e.target.value });
  };

  const handleSaveTrick = () => {
    sendData(null, fields);
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onConfirm={handleSaveTrick} title="Dicas" scrollBehavior="inside" size="xl">
      <VStack align="start">
        <Label text="Capa:" />
        <ImageLabel htmlFor="imagem1_url" previewFile={fields.imagem1_url} onChangeImage={(e) => onChange(e, "imagem1_url")} />
        <Label text="Foto:" />
        <ImageLabel
          w="150px"
          htmlFor="imagem2_url"
          previewFile={fields.imagem2_url}
          onChangeImage={(e) => onChange(e, "imagem2_url")}
        />
        <Label text="Título:" />
        <Textfield type="text" onChange={(e) => onChange(e, "title")} value={fields.title} />
        <Label text="Subtítulo:" />
        <Textfield type="text" onChange={(e) => onChange(e, "revue")} value={fields.revue} />
        <Label text="Descrição:" />
        <Textarea
          onChange={onChangeDescription}
          value={fields.description}
          borderColor="blackAlpha.300"
          _hover={{ borderColor: "blackAlpha.400" }}
        />
        <Flex align="center">
          <Label text="PDF:" />
          <FormLabel htmlFor="arquivo_url" bg="gray.300" p="0.25rem" borderRadius="0.25rem" cursor="pointer">
            Importar PDF
            <input id="arquivo_url" type="file" accept="application/pdf" hidden onChange={(e) => onChange(e, "arquivo_url")} />
          </FormLabel>
          {fields.arquivo_url && <Text ml="0.625rem">{(fields.arquivo_url as File).name}</Text>}
        </Flex>
        <Label text="Edição:" />
        <Textfield type="text" onChange={(e) => onChange(e, "edition")} value={fields.edition} />
        <Label text="Logo:" />
        <ImageLabel
          htmlFor="revue_imagem_url"
          previewFile={fields.revue_imagem_url}
          onChangeImage={(e) => onChange(e, "revue_imagem_url")}
        />
      </VStack>
    </BaseModal>
  );
};
