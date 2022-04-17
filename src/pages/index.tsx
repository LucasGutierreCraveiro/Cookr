import type { NextPage } from "next";
import Link from "next/link";

import {
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { signUp, SignInGmail } from "../firebase/clientApp";
import { FaGoogle } from "react-icons/fa";

//Todo:
// Lib de formulário (Formik maybe?)
// Deploy
//  login com o firebase

const Home: NextPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Flex p={4}>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Flex height="90vh" alignItems="center" justifyContent="center">
        <Flex
          direction={"column"}
          background={formBackground}
          p={12}
          rounded={6}
        >
          <Heading mb={6} textAlign={"center"}>
            🍪👩‍🍳 Cookr 👨‍🍳🍪
          </Heading>
          <Input
            placeholder={"email@seuprovedor.com.br"}
            variant={"filled"}
            mb={3}
            type={"email"}
          />
          <Input
            placeholder={"********"}
            variant={"filled"}
            mb={6}
            type={"password"}
          />
          <Button colorScheme={"orange"} onClick={() => {}}>
            Login
          </Button>
          <Button colorScheme={"orange"} onClick={SignInGmail} mt={8}>
            <FaGoogle />
            <Text ml={4}>Login com a Google</Text>
          </Button>
          <Text mt={3}>
            Não possuí acesso?{" "}
            <Link href="/">
              <a>Cadastre-se.</a>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
