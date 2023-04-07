import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import { useAuth } from "@/context/auth";
import { Box, Button, HStack, Input } from "@chakra-ui/react";

interface EditableVideoProps {
  url: string;
  positionValue?: number | null;
  handleChange: (text: string, field: string, position: number | null) => void;
}

export const EditableVideo = ({ url, positionValue = null, handleChange }: EditableVideoProps) => {
  const { authenticated } = useAuth();
  const [link, setLink] = useState(url);
  const [linkToShow, setLinkToShow] = useState(url);

  const formatVideoLink = (videoLink: string) => {
    return videoLink.replace("youtube", "youtube-nocookie").replace("watch?v=", "embed/");
  };

  const onSave = () => {
    setLinkToShow(link);
    handleChange(link, "video_url", positionValue);
  };

  const resetValue = () => {
    handleChange(url, "video_url", positionValue);
    setLink(url);
    setLinkToShow(url);
    onSave();
  };

  return (
    <Box w="58%" textAlign="center">
      {authenticated && (
        <>
          <Input
            type="text"
            placeholder="URL do video..."
            mb={4}
            borderColor="gray.400"
            _hover={{ borderColor: "gray.600" }}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <HStack justify="end">
            <Button>
              <RiCloseLine onClick={resetValue} color="#f00" size="1rem" />
            </Button>
            <Button>
              <AiOutlineCheck onClick={onSave} color="#0f0" size="1rem" />
            </Button>
          </HStack>
        </>
      )}
      <Box
        as="iframe"
        w="100%"
        h="30rem"
        title="YouTube - Leila Schuster"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        src={formatVideoLink(linkToShow)}
      />
    </Box>
  );
};
