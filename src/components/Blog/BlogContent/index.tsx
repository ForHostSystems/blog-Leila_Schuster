import "quill/dist/quill.snow.css";
import "./style.css";

import React, { useState } from "react";
import { AiFillTag } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { BlogModal } from "@/components/Modals/BlogModal";
import { ModalDelete } from "@/components/Modals/ModalDelete";
import { MostRead } from "@/components/MostRead";
import { useAuth } from "@/context/auth";
import { useBlog } from "@/context/blog";
import { BlogListDTO } from "@/mocks/mockedBlogContent";
import { convertToUrl } from "@/utils/convertToUrl";
import { Box, ButtonGroup, Divider, Flex, IconButton, Img, Text, useDisclosure } from "@chakra-ui/react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

interface BlogContentProps {
  blog: BlogListDTO;
  isFirst?: boolean;
  blogOnly?: boolean;
  position?: number;
}
export const BlogContent = ({ blog, isFirst = false, blogOnly = false, position }: BlogContentProps) => {
  const { authenticated } = useAuth();
  const { onDeletePost } = useBlog();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const { id, title, content, imagem1_url, imagem2_url, tags } = blog;

  const htmlFrom = (htmlString: string) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true } });
    const html = parse(cleanHtmlString);
    return html;
  };

  const Presentation = () => (
    <>
      <Text fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt={!blogOnly ? "2.5rem" : 0} textTransform="uppercase">
        14 DE FEVEREIRO DE 2022
      </Text>
      <Text fontSize="2.5rem" lineHeight="3rem" mt="15px" fontWeight={400} textTransform="uppercase">
        {title}
      </Text>
    </>
  );

  const onOpenModalDelete = () => {
    setIsOpenModalDelete(true);
  };

  const onCloseModalDelete = () => {
    setIsOpenModalDelete(false);
  };

  return (
    <>
      {!blogOnly && <Divider w="100%" h="0.063rem" bg="black" mt={12} />}

      <Box w="100%" mt="2.5rem" mb={blogOnly ? "3rem" : 0} _last={{ mb: "3rem" }}>
        {authenticated && (
          <ButtonGroup mb={4}>
            <IconButton aria-label="" icon={<MdDelete />} colorScheme="red" onClick={onOpenModalDelete} />
            <IconButton aria-label="" icon={<BiEdit />} colorScheme="green" onClick={onOpen} />
          </ButtonGroup>
        )}
        {blogOnly && <Presentation />}
        <Flex justify="space-between" gap="2.5rem" mt={blogOnly ? "2.5rem" : 0}>
          <Img key="imagem1" src={convertToUrl(imagem1_url)} w="48%" />
          <Img key="imagem2" src={convertToUrl(imagem2_url)} w="48%" />
        </Flex>
        <Flex gap={10} w="100%">
          <Box w="70%" className="ql-snow">
            {!blogOnly && <Presentation />}
            <Box mt={!blogOnly ? "1.25rem" : "3rem"} className="ql-editor">
              {htmlFrom(content)}
            </Box>
            <Flex align="end" gap="5px">
              <Box mr="5px">
                <AiFillTag />
              </Box>
              {tags.split(",").map((item, index) => (
                <Text key={index} fontSize="1rem" lineHeight="1.5rem" fontWeight={700} mt="20px">
                  {item}
                </Text>
              ))}
            </Flex>
          </Box>
          <Flex visibility={isFirst || blogOnly ? "visible" : "hidden"} w="30%" gap={10}>
            <Divider orientation="vertical" w="0.125rem" h="58.75rem" bg="#000" mt="64px" />
            <MostRead />
          </Flex>
        </Flex>
      </Box>
      {position != undefined && <BlogModal post={blog} isOpen={isOpen} onClose={onClose} />}
      <ModalDelete
        isOpen={isOpenModalDelete}
        onClose={onCloseModalDelete}
        onConfirm={onDeletePost}
        id={id}
        text="Tem certeza que deseja deletar esse post?"
      />
    </>
  );
};
