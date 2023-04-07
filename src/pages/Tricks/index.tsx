import React from "react";
import { Helmet } from "react-helmet-async";

import { TricksContent } from "@/components/Tricks/TricksContent";
import { TricksCover } from "@/components/Tricks/TricksCover";

export function Tricks() {
  return (
    <>
      <Helmet>
        <title>Dicas | Leila Schuster</title>
      </Helmet>
      <TricksCover />
      <TricksContent />
    </>
  );
}
