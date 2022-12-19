import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>Statistics</Heading>
     
      <GitHubCalendar username="rohit0985" />
    </VStack>
  );
};

export default Statistics;
