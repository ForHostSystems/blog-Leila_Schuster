import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Box, BoxProps } from "@chakra-ui/react";

import "./styles.css";

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PreviewPDFProps extends BoxProps {
  file: string;
  pages: number;
  pageNumber?: number;
}

export const PreviewPDF = ({ file, pages, pageNumber, ...props }: PreviewPDFProps) => {
  return (
    <Box
      {...props}
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#cfcfcf",
          borderRadius: "24px",
        },
      }}>
      <Document file={file}>
        {Array.from(new Array(pages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={pageNumber ?? index + 1} />
        ))}
      </Document>
    </Box>
  );
};
