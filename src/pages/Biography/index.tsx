import React from "react";

import { Divider } from "@chakra-ui/react";

import { BiographyContent } from "../../components/BiographyContent";
import { BiographyHeader } from "../../components/BiographyHeader";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";

export const Biography = () => {
  return (
    <Layout>
      <Header />
      <BiographyHeader />
      <Divider w="83%" h="3px" bg="black" mt={10} />
      <BiographyContent />
      <Footer />
    </Layout>
  );
};
