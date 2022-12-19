import { Heading, HStack, Image, VStack, Flex } from "@chakra-ui/react";
import React from "react";
 import {frontend_backend, frameWork_tools} from "./skilldata.js"


const Skills = () => {
  console.log(frontend_backend)
  let skills = frontend_backend.map((item) => {
    return (
      <VStack
        key={item.name}
        shadow={"md"}
        py="6"
        px="3"
        width="100px"
        height={"100px"}
        justifyContent="flex-end"
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
        rounded={"lg"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
        }}
        bg="white"
        color="black"
        id="skills"
      >
        <Image src={item.icon} size={"xl"} height="80%" />
        <Heading size={"sm"}>{item.name}</Heading>
      </VStack>
    );
  });
  let tools = frameWork_tools.map((item) => {
    return (
      <VStack
        key={item.name}
        shadow={"md"}
        py="6"
        px="3"
        width="100px"
        height={"100px"}
        justifyContent="flex-end"
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
        rounded={"lg"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
        }}
        bg="white"
        color="black"
        id="skills"
      >
        <Image src={item.icon} size={"xl"} height="80%" />
        <Heading size={"sm"}>{item.name}</Heading>
      </VStack>
    );
  });

  return (
    <VStack
      p="8"
      height={{ base: "100%", md: "90vh" }}
      alignItems={"center"}
      bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
      bg={"gray"}
      color="white"
    >
      <Heading my={6}>My Skills and Tools </Heading>
      <Flex gap={"15px"}>
      <VStack gap={"10px"}>
        <Heading size={"lg"}>Frontend / Backend</Heading>
        <HStack flexWrap={"wrap"} gap="3" maxW={"850px"} justifyContent="center">
        {skills}
      </HStack>
      </VStack>
      <VStack gap={"10px"}>
        <Heading size={"lg"}>Framework / Tools</Heading>
        <HStack flexWrap={"wrap"} gap="3" maxW={"850px"} justifyContent="center">
        {tools}
      </HStack>
      </VStack>
      </Flex>
    </VStack>
  );
};

export default Skills;
