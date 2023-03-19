import React, { ChangeEvent } from "react";
import { BiEdit } from "react-icons/bi";

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { IconTypes } from "../Footer";

interface PopoverSocialLinkProps {
  position: number;
  type: IconTypes;
  handleChangeSocialLink: (position: number, link: string) => void;
  onConfirm: (position: number) => void;
  onCancel: () => void;
}

export const PopoverSocialLink = ({ position, type, handleChangeSocialLink, onConfirm, onCancel }: PopoverSocialLinkProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeSocialLink(position, (e.target as HTMLInputElement).value);
  };

  const onConfirmAndClose = () => {
    onConfirm(position);
    onClose();
  };

  const onCloseAndCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <Popover placement="top" isOpen={isOpen} onOpen={onOpen} onClose={onCloseAndCancel}>
      <PopoverTrigger>
        <IconButton size="xs" icon={<BiEdit />} aria-label="" />
      </PopoverTrigger>
      <PopoverContent p={5} m="0 !important">
        <PopoverArrow />
        <PopoverCloseButton />
        <Stack spacing={4}>
          <FormControl>
            <FormLabel textTransform="capitalize">{type}</FormLabel>
            <Input type="text" name={type} onChange={onChange} />
          </FormControl>
          <ButtonGroup size="sm">
            <Button variant="outline" onClick={onCloseAndCancel}>
              Fechar
            </Button>
            <Button colorScheme="green" onClick={onConfirmAndClose}>
              Confirmar
            </Button>
          </ButtonGroup>
        </Stack>
      </PopoverContent>
    </Popover>
  );
};
