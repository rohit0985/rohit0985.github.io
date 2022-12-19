import { Heading, Image, VStack, Text, Link, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>Statistics</Heading>

      <Flex>

      <Text align="center">
<Link href="https://github.com/rohit0985">
 <Flex gap={"15px"} alignItems={"flex-start"}>
 <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=rohit0985&show_icons=true&theme=buefy&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=rohit0985&layout=compact&langs_count=8&theme=buefy"/>
 </Flex>
</Link>
</Text>

      </Flex>
     
      <GitHubCalendar username="rohit0985" />

      


    </VStack>
  );
};

export default Statistics;
