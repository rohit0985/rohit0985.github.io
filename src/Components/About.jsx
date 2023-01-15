import { Flex, Heading, Image, Text, VStack, Link, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/Rohit_Kumar_Resume.pdf";



const About = () => {
  return (
    // <Container maxW={"900px"} height={"80vh"}>
    <VStack
      spacing="5"
      maxW={"1000px"}
      m="auto"
      height={{ base: "100%", md: "90vh" }}
      justifyContent="center"
      alignItems="center"
      p="8"
      id="about"
    >
      <Heading>About Me</Heading>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Image
          w={{ base: "50%", md: "40%" }}
          src="https://messengerbot.app/wp-content/uploads/2021/08/User-Interface-USER-INTERFACE-OF-MOBILE-APPS.png"
        />
      <Flex direction={"column"} alignItems={"flex-start"}>
      <Text fontSize={"20px"} textAlign={"left"}>
      Observant and intuitive problem-solver, aspiring full-stack
developer with a specialization in MERN stack from Masai
School. Having a passion for coding and the ability to develop
Web Applications with Frontend and Backend. Looking for a
Job opportunity in a tech-driven organization that helps me in
Improving my skills in future.
        </Text>
        <Link mt={"20px"} target="_blank" href={resume} download="Rohit_Kumar_resume" _hover={{ textDecoration: "none" }}>
                <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger">
                  Download 
                </Button>
              </Link>
      </Flex>
      </Flex>
    </VStack>
    // </Container>
  );
};

export default About;
