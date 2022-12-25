import React, { ChangeEvent, FormEvent, useState } from "react";

import { Button, Center, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

import { Layout } from "../../components/Layout";
import { useAuth } from "../../context/auth";

export const Login = () => {
  const { signIn, isLoading } = useAuth();

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn(formFields);
  };

  return (
    <Layout>
      <Center w="100%" h="100vh">
        <Flex w={400} h={500} direction="column" justify="center" align="center" bg="white" boxShadow="lg" borderRadius={7} p={4}>
          <Heading color="black" textDecoration="underline" mb={10}>
            LOGIN
          </Heading>

          <form style={{ width: "90%" }} onSubmit={onSubmit}>
            <FormControl isRequired mb={4}>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail..."
                colorScheme="blackAlpha"
                value={formFields.email}
                onChange={onChange}
              />
            </FormControl>

            <FormControl isRequired mb={8}>
              <FormLabel htmlFor="psw">Senha</FormLabel>
              <Input
                id="psw"
                type="password"
                name="password"
                placeholder="Senha..."
                colorScheme="blackAlpha"
                value={formFields.password}
                onChange={onChange}
              />
            </FormControl>

            <Button w="full" colorScheme="blackAlpha" color="white" type="submit" isLoading={isLoading}>
              ENTRAR
            </Button>
          </form>
        </Flex>
      </Center>
    </Layout>
  );
};
