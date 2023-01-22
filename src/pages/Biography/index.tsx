import React from "react";

import { BiographyContent } from "@/components/Biography/BiographyContent";
import { BiographyHeader } from "@/components/Biography/BiographyHeader";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Divider } from "@chakra-ui/react";

export function Biography() {
  return (
    <Layout>
      <Header />
      <BiographyHeader />
      <Divider w="83%" h="3px" bg="black" mt={10} />
      <BiographyContent />
      <Footer />
    </Layout>
  );
}
