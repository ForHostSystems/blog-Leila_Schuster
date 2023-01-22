import React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { TricksContent } from "@/components/Tricks/TricksContent";
import { TricksCover } from "@/components/Tricks/TricksCover";

export function Tricks() {
  return (
    <Layout>
      <Header />
      <TricksCover />
      <TricksContent />
      <Footer />
    </Layout>
  );
}
