import React from "react";

import { EditableText } from "@/components/EditableText";
import { LabelForImage } from "@/components/LabelForImage";
import { Title } from "@/components/Title";
import { Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";

interface BiographyPreviewProps {
  imageTop: string;
  imageBottom: string;
  descriptionValue: string;
  onChangeDescription: (description: string) => void;
  onSaveImage: (file: File, imageKey: string) => void;
  isCancel?: boolean;
}

export const BiographyPreview = ({
  imageTop,
  imageBottom,
  descriptionValue,
  onChangeDescription,
  onSaveImage,
  isCancel = false,
}: BiographyPreviewProps) => {
  return (
    <SimpleGrid as="section" id="biografia" columns={2} spacing={5} w="100%" mt={10}>
      <Stack gap="10px">
        <LabelForImage
          image={imageTop}
          labelRef="imageBioTop"
          labelWidth="100%"
          onSaveImage={onSaveImage}
          imageKey="imagem2_url"
          isCancel={isCancel}
        />
        <LabelForImage
          image={imageBottom}
          labelRef="imageBioBottom"
          labelWidth="100%"
          onSaveImage={onSaveImage}
          imageKey="imagem3_url"
          isCancel={isCancel}
        />
      </Stack>
      <HStack w="100%" align="start" justify="end">
        <Stack w="90%" gap={10} mt={10}>
          <Title
            dashWidth="50px"
            dashHeigth="7px"
            dashDistance={3}
            as="h1"
            fontSize="7rem"
            lineHeight="6rem"
            fontWeight={900}
            ml="10px">
            Sobre
            <br />
            mim
          </Title>
          <Flex maxW="320px" w="100%" justify="end" alignSelf="end">
            <EditableText
              element="Text"
              fontSize="18px"
              fontWeight={500}
              handleChange={onChangeDescription}
              textValue={descriptionValue}
              isCancel={isCancel}
            />
          </Flex>
        </Stack>
      </HStack>
    </SimpleGrid>
  );
};
