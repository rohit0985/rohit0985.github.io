import { Avatar, Image, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../assets/rohit_kumar_profile_photo.jpg";

const Home = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap="5%"
      minH={"90vh"}
      bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
      bg="gray"
      color="white"
      id="home"
    >
    <Image
  borderRadius='20px'
  height={"300px"}
  width={"270px"}
  // border={"1px"}
  border="1px"
  p={"2px"}
  src={profilePic}
  alt='Rohit Kumar'
/>
      {/* <Avatar width="300px" height="300px" border={"0px"} name="Rohit Kumar" src={profilePic}  /> */}
      <VStack alignItems={"flex-start"} spacing="5" w={{ base: "90%", md: "60%" }}>
        <Heading>Hi,</Heading>
        <Heading>I am Rohit Kumar</Heading>
        <Heading pb={6} fontSize="2xl">
          <Typewriter
            options={{
              strings: ["I'm a Full Stack Web Developer.", "MERN developer."],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Home;
