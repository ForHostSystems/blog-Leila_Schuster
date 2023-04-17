import React from "react";

import { Input, InputProps } from "@chakra-ui/react";

export const Textfield = (props: InputProps) => {
  return <Input {...props} borderColor="blackAlpha.300" _hover={{ borderColor: "blackAlpha.400" }} />;
};
