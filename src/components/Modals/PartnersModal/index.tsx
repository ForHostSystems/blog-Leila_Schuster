import React, { ChangeEvent, useEffect, useState } from "react";
import { BiImage } from "react-icons/bi";

import { SelectdPartner } from "@/components/Partners";
import { CreateNewPartnerProps } from "@/services/Home/partners";
import { convertToUrl } from "@/utils/convertToUrl";
import { FormLabel, Img } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface PartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (position?: number, partner?: CreateNewPartnerProps) => void;
  partner: SelectdPartner | null;
  handleChangeImage: (image: File, imageKey: string, position: number | null) => void;
}

export const PartnersModal = ({ isOpen, onClose, onConfirm, partner, handleChangeImage }: PartnersModalProps) => {
  const [previewFile, setPreviewFile] = useState<File | string | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files != null) {
      setPreviewFile(e.target.files[0]);
      e.target.value = "";
    }
  };

  const onConfirmModal = () => {
    if (previewFile != null && typeof previewFile != "string") {
      if (partner) {
        handleChangeImage(previewFile, "imagem_url", partner.position);
      }
      onConfirm(partner?.position, { imagem_url: previewFile as File });
    }
    onCloseModal();
  };

  const onCloseModal = () => {
    setPreviewFile(null);
    onClose();
  };

  useEffect(() => {
    if (partner?.imagem_url) {
      setPreviewFile(partner.imagem_url);
    }
  }, [partner]);

  return (
    <BaseModal isOpen={isOpen} onClose={onCloseModal} onConfirm={onConfirmModal} title="Parceiros">
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
          <Img w="100%" border="1px dashed #777" cursor="pointer" src={convertToUrl(previewFile)} />
        ) : (
          <BiImage size="7rem" color="gray" />
        )}
        <input id="partner" type="file" accept="image/*" hidden onChange={onChangeImage} />
      </FormLabel>
    </BaseModal>
  );
};
