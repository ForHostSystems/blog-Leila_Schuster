import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import { useAuth } from "@/context/auth";
import { usePartners } from "@/hooks/usePartners";
import { PartnersDTO, PartnersOutput } from "@/mocks/mockedPartners";
import { convertToUrl } from "@/utils/convertToUrl";
import { Button, Flex, HStack, Img, Skeleton, useDisclosure } from "@chakra-ui/react";

import { DeletePartnerModal } from "../Modals/DeletePartnersModal";
import { PartnersModal } from "../Modals/PartnersModal";
import { Title } from "../Title";

interface PartnersProps {
  partners: PartnersOutput[];
}

export interface SelectdPartner extends PartnersDTO {
  position: number;
}

export const Partners = ({ partners }: PartnersProps) => {
  const { newPartners, handleChangeImage, sendData, onDeleteImage, isLoading } = usePartners(partners);
  const { authenticated } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectdPartner, setSelectedPartner] = useState<SelectdPartner | null>(null);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [idForDelete, setIdForDelete] = useState<number | null>(null);

  const onOpenPartnerModal = (partner: PartnersDTO, index: number) => {
    if (authenticated) {
      setSelectedPartner({ ...partner, position: index });
      onOpen();
    }
  };

  const onOpenDeletePartnerModal = (id: number) => {
    setIsOpenModalDelete(true);
    setIdForDelete(id);
  };

  const onClosePartnerModal = () => {
    setSelectedPartner(null);
    onClose();
  };

  const onCloseDeletePartnerModal = () => {
    setIsOpenModalDelete(false);
  };

  return (
    <>
      <Title dashWidth="48px" dashHeigth={"7px"} as="h1" fontSize="6rem" fontWeight={900} color="black" ml="4px">
        Parceiros
      </Title>

      {authenticated && (
        <Button colorScheme="blackAlpha" onClick={onOpen}>
          Adicionar Parceiro
        </Button>
      )}
      <HStack w="100%" gap={32} justify="center" mt={20} wrap="wrap">
        {newPartners.map((partner, index) => (
          <HStack w={{ lg: "200px", xl: "250px" }} key={partner.id}>
            <Skeleton as={Flex} isLoaded={!isLoading} flexDirection="column">
              {authenticated && (
                <Button
                  w="fit-content"
                  alignSelf="end"
                  mb={2}
                  mr="-1.25rem"
                  variant="unstyled"
                  onClick={() => onOpenDeletePartnerModal(partner.id)}>
                  <MdDelete size="1.25rem" color="red" />
                </Button>
              )}
              <Img
                border={authenticated ? "1px dashed #777" : ""}
                key={partner.id}
                w="100%"
                src={convertToUrl(partner.imagem_url)}
                filter="grayscale(100%)"
                _hover={{ cursor: "pointer" }}
                onClick={() => onOpenPartnerModal(partner, index)}
              />
            </Skeleton>
          </HStack>
        ))}
      </HStack>

      <DeletePartnerModal
        isOpen={isOpenModalDelete}
        onClose={onCloseDeletePartnerModal}
        onConfirm={onDeleteImage}
        id={idForDelete}
      />

      <PartnersModal
        isOpen={isOpen}
        onClose={onClosePartnerModal}
        onConfirm={sendData}
        partner={selectdPartner}
        handleChangeImage={handleChangeImage}
      />
    </>
  );
};
