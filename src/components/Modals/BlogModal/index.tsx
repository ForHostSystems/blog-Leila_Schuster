import React, { ChangeEvent, KeyboardEvent, memo, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiImage } from "react-icons/bi";

import { BlogContent } from "@/components/Blog/BlogContent";
import Editor from "@/components/Editor";
import { useBlog } from "@/context/blog";
import { BlogListDTO } from "@/mocks/mockedBlogContent";
import { IBlog } from "@/services/Blog";
import { theme } from "@/styles/theme";
import { convertToUrl } from "@/utils/convertToUrl";
import { Box, Flex, FormLabel, Heading, HStack, IconButton, Img, Input, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

import { BaseModal } from "../BaseModal";

interface BlogModalProps {
  post?: BlogListDTO | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ImageLabelProps {
  previewFile: File | string | null;
  image: "image1" | "image2";
  onChangeImage: (e: ChangeEvent<HTMLInputElement>, image: "image1" | "image2") => void;
}

const ImageLabel = ({ previewFile, image, onChangeImage }: ImageLabelProps) => {
  return (
    <FormLabel
      as="label"
      w="48%"
      border="1px dashed #777"
      htmlFor={image}
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center">
      {previewFile != null ? (
        <Img w="100%" cursor="pointer" objectFit="cover" alt="" src={convertToUrl(previewFile)} />
      ) : (
        <BiImage size="7rem" color="gray" />
      )}
      <input id={image} type="file" accept="image/*" hidden onChange={(e) => onChangeImage(e, image)} />
    </FormLabel>
  );
};

memo(ImageLabel);

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type PostFields = {
  imagem1_url: File | string | null;
  imagem2_url: File | string | null;
  title: string;
  content: string;
  tags: string;
};

export const BlogModal = ({ post = null, isOpen, onClose }: BlogModalProps) => {
  const { sendData } = useBlog();
  const { sm, md, lg, xl } = theme.breakpoints;
  const [fields, setFields] = useState<PostFields>({
    imagem1_url: null,
    imagem2_url: null,
    title: "",
    content: "",
    tags: "",
  });
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>, image: "image1" | "image2") => {
    if (e.target?.files != null) {
      const file = e.target.files[0];
      if (image == "image1") {
        setFields({ ...fields, imagem1_url: file });
      } else if (image == "image2") {
        setFields({ ...fields, imagem2_url: file });
      }
      e.target.value = "";
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };

  const handleChangeContent = (html: string) => {
    setFields({ ...fields, content: html });
  };

  const addTags = () => {
    if (tag) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      addTags();
    }
  };

  const removeTag = (position: number) => {
    tags.splice(position, 1);
    setTags([...tags]);
  };

  const onConfirm = () => {
    if (!isPreview) {
      setIsPreview(true);
    } else {
      const body = { ...fields, tags: tags.join(",") };
      if (post) {
        sendData({ ...body, id: post.id } as IBlog, true);
      } else {
        sendData(body as IBlog, true);
      }
    }
  };

  const handleClose = () => {
    if (!isPreview) {
      onClose();
    } else {
      setIsPreview(false);
    }
  };

  useEffect(() => {
    if (post) {
      const { imagem1_url, imagem2_url, title, content, tags } = post;
      setFields({
        imagem1_url,
        imagem2_url,
        title,
        content,
        tags,
      });

      setTags(tags.split(","));
    }
  }, [post]);

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose} size="full" title="Blog" isPreview={isPreview} onConfirm={onConfirm}>
      {!isPreview ? (
        <>
          <Heading>Imagens de capa:</Heading>
          <Flex gap="2.5rem" mt={4}>
            <ImageLabel previewFile={fields.imagem1_url} image="image1" onChangeImage={onChangeImage} key="image1" />
            <ImageLabel previewFile={fields.imagem2_url} image="image2" onChangeImage={onChangeImage} key="image2" />
          </Flex>
          <Heading my={4}>Título do POST:</Heading>
          <Input
            type="text"
            name="title"
            value={fields.title}
            onChange={onChange}
            borderColor="blackAlpha.300"
            _hover={{ borderColor: "blackAlpha.400" }}
          />
          <Heading my={4}>Conteúdo do POST:</Heading>
          <Editor editorHtml={fields.content} handleChange={handleChangeContent} />
          <Heading my={4}>Tags:</Heading>
          <Flex direction="column" align="end" gap={2}>
            <Input
              type="text"
              name="tags"
              colorScheme="orange"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyDown={onKeyPress}
              borderColor="blackAlpha.300"
              _hover={{ borderColor: "blackAlpha.400" }}
            />
            <IconButton aria-label="" icon={<AiOutlineCheck color="green" />} width="fit-content" onClick={addTags} />
          </Flex>
          <HStack wrap="wrap" gap={2}>
            {tags.map((value, index) => (
              <Tag size="md" key={index}>
                <TagLabel>{value}</TagLabel>
                <TagCloseButton onClick={() => removeTag(index)} />
              </Tag>
            ))}
          </HStack>
        </>
      ) : (
        <Flex w="100%" direction="column" justify="center" align="center" bg="background">
          <Box w="100%" maxW={{ sm, md, lg, xl }} p="20px">
            <BlogContent blog={{ ...fields, id: 0, home_id: 1, tags: tags.join(",") } as BlogListDTO} isFirst />
          </Box>
        </Flex>
      )}
    </BaseModal>
  );
};
