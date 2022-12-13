import React from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { LeftButton, RightButton, Provider, Carousel } from "chakra-ui-carousel";

export const Caroussel = () => {
  return (
    <Box w="100%">
      <Provider>
        <Carousel gap={50}>
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </Carousel>
        <LeftButton customIcon={<ArrowLeftIcon />} />
        <RightButton customIcon={<ArrowRightIcon />} />
      </Provider>
    </Box>
  );
};
