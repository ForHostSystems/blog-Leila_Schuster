import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiFacebook } from "react-icons/tfi";

import { useAuth } from "@/context/auth";
import { useHomeContent } from "@/context/home";
import { useFooter } from "@/hooks/useFooter";
import { Box, Center, Circle, Heading, HStack, SimpleGrid, Text, Flex, Divider, Skeleton } from "@chakra-ui/react";

import { ContactPopover } from "../ContactPopover";
import { PopoverSocialLink } from "../PopoverSocialLink";

export type IconTypes = "instagram" | "facebook" | "youtube" | "twitter";

export const Footer = () => {
  const { authenticated } = useAuth();
  const { data, isLoading } = useHomeContent();
  const {
    handleChangeText,
    handleChangeSocialLink,
    sendDataContact,
    sendDataSocialLinks,
    onCancelContact,
    onCancelSocialLinks,
    isLoading: isLoadingFooter,
  } = useFooter();
  const { contact, socialLinks } = data;

  const renderSocialIcon = {
    instagram: <SlSocialInstagram color="black" size="22px" />,
    facebook: <TfiFacebook color="black" size="22px" />,
    youtube: <AiFillYoutube color="black" size="22px" />,
    twitter: <AiOutlineTwitter color="black" size="22px" />,
  };

  return (
    <Center
      w={{ sm: "98.7vw", xl: "calc(100vw - 20px)" }}
      as="footer"
      flexDirection="column"
      bg="black"
      pos="absolute"
      left={0}
      py="4rem">
      <Flex align="center" justify="center" gap={{ lg: 16, xl: 24 }}>
        <Flex direction="column" align="center" minH="412px">
          <Heading as="h1" fontSize="2.2rem" fontWeight={300} letterSpacing={5} color="white">
            ACOMPANHE
          </Heading>

          <SimpleGrid columns={3} spacing={4} mt={12}>
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
            <Box w="150px" h="150px" bg="white" />
          </SimpleGrid>
        </Flex>

        <Divider w="1px" h="30rem" bg="gray-m" orientation="vertical" />

        <Flex direction="column" align="center" justify="space-between" minH="412px">
          <Heading as="h2" fontSize="2.2rem" fontWeight={300} letterSpacing={2} color="white">
            ENTRE EM CONTATO
          </Heading>

          <Flex direction="column" align="center">
            {authenticated && (
              <ContactPopover
                placement="bottom-start"
                onChangeText={handleChangeText}
                onConfirm={sendDataContact}
                onCancel={onCancelContact}
              />
            )}
            <Text fontSize="1.8rem" fontWeight={300} color="white">
              E-mail
            </Text>
            <Skeleton isLoaded={!isLoading || !isLoadingFooter}>
              <Text fontSize="1.6rem" fontWeight={300} color="white">
                {contact.email}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading || !isLoadingFooter}>
              <Text fontSize="1.6rem" fontWeight={300} color="white">
                {contact.email2}
              </Text>
            </Skeleton>
            <Text fontSize="1.8rem" fontWeight={300} letterSpacing={3} color="white" mt={4}>
              Assessoria
            </Text>
            <Skeleton isLoaded={!isLoading || !isLoadingFooter}>
              <Text fontSize="1.8rem" fontWeight={300} color="white" letterSpacing={1}>
                {contact.telefone}
              </Text>
            </Skeleton>

            <HStack gap={2} mt={10}>
              {socialLinks.map((value, index) => (
                <Flex key={value.id} direction="column" alignItems="center" justify="center" gap={2}>
                  {authenticated && (
                    <PopoverSocialLink
                      position={index}
                      type={value.type as IconTypes}
                      handleChangeSocialLink={handleChangeSocialLink}
                      onConfirm={sendDataSocialLinks}
                      onCancel={onCancelSocialLinks}
                    />
                  )}
                  <Circle as="a" href={value.link} target="_blank" borderRadius="full" bg="white" size="35px" cursor="pointer">
                    {renderSocialIcon[value.type as IconTypes]}
                  </Circle>
                </Flex>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
