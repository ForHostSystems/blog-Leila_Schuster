/* eslint-disable react/jsx-key */
import React, { ChangeEvent } from "react";
import { BiEdit } from "react-icons/bi";

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputProps,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

interface TextInputProps extends InputProps {
  label: string;
}

const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </FormControl>
  );
};

interface ContactPopoverProps extends PopoverProps {
  onChangeText: (text: string, field: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ContactPopover = ({ onChangeText, onConfirm, onCancel, ...props }: ContactPopoverProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText((e.target as HTMLInputElement).value, (e.target as HTMLInputElement).name);
  };

  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };

  const onCloseAndCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <Popover {...props} isOpen={isOpen} onOpen={onOpen} onClose={onCloseAndCancel}>
      <PopoverTrigger>
        <IconButton size="sm" icon={<BiEdit />} aria-label="" alignSelf="end" />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        <Stack spacing={4}>
          <TextInput label="Email" name="email" onChange={onChange} />
          <TextInput label="Email2" name="email2" onChange={onChange} />
          <TextInput type="text" label="Telefone" name="telefone" onChange={onChange} />
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
