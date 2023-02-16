import React from "react";

import { TricksContent } from "@/components/Tricks/TricksContent";
import { TricksCover } from "@/components/Tricks/TricksCover";

export function Tricks() {
  return (
    <>
      <TricksCover />
      <TricksContent />
    </>
  );
}
