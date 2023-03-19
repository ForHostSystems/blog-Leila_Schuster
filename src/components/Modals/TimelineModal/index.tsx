import React, { ChangeEvent, useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";

import { SelectedMoment } from "@/components/TimelineCarrossel";
import { useTimeline } from "@/context/timeline";
import { convertToUrl } from "@/utils/convertToUrl";
import { Text, VStack, Img, Input, Textarea, FormLabel, useToast } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  moment?: SelectedMoment | null;
  isDelete?: boolean;
  momentToDelete?: number | null;
}

export const TimelineModal = ({ isOpen, onClose, moment = null, isDelete = false, momentToDelete }: TimelineModalProps) => {
  const toast = useToast();
  const { handleChangeImage, handleChangeText, sendData, onDeleteMomment } = useTimeline();
  const [previewFile, setPreviewFile] = useState<File | string | null>(null);
  const [fields, setFields] = useState({
    year: "",
    description: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({
      ...fields,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files != null) {
      setPreviewFile(e.target.files[0]);
      e.target.value = "";
    }
  };

  const onCloseModal = () => {
    setPreviewFile(null);
    onClose();
  };

  const onSave = () => {
    if (!isDelete) {
      if (moment) {
        if (fields.year) {
          handleChangeText(fields.year, moment.position, "year");
        }
        if (fields.description) {
          handleChangeText(fields.description, moment.position, "description");
        }
        if (previewFile != null && typeof previewFile != "string") {
          handleChangeImage(previewFile, moment.position);
        }

        sendData(moment.position);
        onCloseModal();
      } else {
        if (fields.year && fields.description && typeof previewFile == "object") {
          const body = {
            ...fields,
            imagem_url: previewFile as File,
          };
          sendData(undefined, body);
          onCloseModal();
        } else {
          toast({
            title: "Atenção",
            description: "Todas as informações precisam estar preenchidas",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    } else {
      if (momentToDelete != null && momentToDelete != undefined) {
        onDeleteMomment(momentToDelete);
      }
      onCloseModal();
    }
  };

  useEffect(() => {
    if (moment?.imagem_url) {
      setPreviewFile(moment.imagem_url);
    }
  }, [moment]);

  return (
    <BaseModal isOpen={isOpen} onClose={onCloseModal} onConfirm={onSave} title="Linha do tempo" isCentered>
      {!isDelete ? (
        <VStack textAlign="center">
          <Input
            type="text"
            name="year"
            placeholder="Ano"
            defaultValue={moment?.year}
            color="#b5b5b5"
            fontWeight={900}
            fontSize={45}
            textAlign="center"
            onChange={onChange}
          />
          <FormLabel
            as="label"
            w="100%"
            border="1px dashed #777"
            htmlFor="partner"
            cursor="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center">
            {previewFile != null ? (
              <Img
                w={{ lg: "310px", xl: "330px" }}
                h={{ lg: "310px", xl: "330px" }}
                cursor="pointer"
                objectFit="cover"
                alt={moment?.description}
                src={convertToUrl(previewFile)}
              />
            ) : (
              <BiImage size="7rem" color="gray" />
            )}
            <input id="partner" type="file" accept="image/*" hidden onChange={onChangeImage} />
          </FormLabel>
          <Textarea
            placeholder="Descrição"
            name="description"
            defaultValue={moment?.description}
            color="black"
            textAlign="center"
            onChange={onChange}
          />
        </VStack>
      ) : (
        <Text fontSize="1.2rem" color="red" fontWeight={500}>
          Tem certeza que deseja deletar esse momento?
        </Text>
      )}
    </BaseModal>
  );
};
