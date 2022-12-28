import React from "react";

import { Box, Divider } from "@chakra-ui/react";

import { BiographyContent } from "../../components/BiographyContent";
import { BiographyHeader } from "../../components/BiographyHeader";
import { Layout } from "../../components/Layout";

export const Biography = () => {
  return (
    <Layout>
      <BiographyHeader />
      <Divider w="83%" h="3px" bg="black" mt={10} />
      <BiographyContent />
    </Layout>
  );
};
