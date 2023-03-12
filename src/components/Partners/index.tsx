import React, { useState } from "react";

import { useAuth } from "@/context/auth";
import { usePartners } from "@/hooks/usePartners";
import { PartnersDTO, PartnersOutput } from "@/mocks/mockedPartners";
import { convertToUrl } from "@/utils/convertToUrl";
import { orderById } from "@/utils/orderById";
import { Button, HStack, Img, Skeleton, useDisclosure } from "@chakra-ui/react";

import { PartnersModal } from "../Modals/PartnersModal";
import { Title } from "../Title";

interface PartnersProps {
  partners: PartnersOutput[];
}

export interface SelectdPartner extends PartnersDTO {
  position: number;
}

export const Partners = ({ partners }: PartnersProps) => {
  const { newPartners, handleChangeImage, sendData, isLoading } = usePartners(partners);
  const { authenticated } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectdPartner, setSelectedPartner] = useState<SelectdPartner | null>(null);

  const onOpenModal = (partner: PartnersDTO, index: number) => {
    setSelectedPartner({ ...partner, position: index });
    onOpen();
  };

  const onCloseModal = () => {
    setSelectedPartner(null);
    onClose();
  };

  return (
    <>
      <Title dashWidth="48px" dashHeigth={"7px"} as="h1" fontSize="6rem" fontWeight={900} color="black" ml="4px">
        Parceiros
      </Title>

      {authenticated && <Button onClick={onOpen}>Adicionar Parceiro</Button>}
      <HStack w="100%" gap={32} justify="center" mt={20}>
        {newPartners.sort(orderById).map((partner, index) => (
          <HStack w={{ lg: "200px", xl: "250px" }} key={partner.id}>
            <Skeleton isLoaded={!isLoading}>
              <Img
                key={partner.id}
                w="100%"
                src={convertToUrl(partner.imagem_url)}
                filter="grayscale(100%)"
                _hover={{ cursor: "pointer" }}
                onClick={() => onOpenModal(partner, index)}
              />
            </Skeleton>
          </HStack>
        ))}
      </HStack>

      <PartnersModal
        isOpen={isOpen}
        onClose={onCloseModal}
        onConfirm={sendData}
        partner={selectdPartner}
        handleChangeImage={handleChangeImage}
      />
    </>
  );
};
