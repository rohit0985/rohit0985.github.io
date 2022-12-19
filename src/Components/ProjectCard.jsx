import { Box, Flex, Heading, HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { GrGithub, GrView } from "react-icons/gr";
import CarouselCard from "./CarouselCard";

const ProjectCard = (project) => {
  return (
    <Flex
      alignItems="center"
      height={{ base: "100%", md: "300px" }}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      rounded={"lg"}
      flexDirection={{ base: "column-reverse", md: "row" }}
      // bg="#7a94b4"
      bg="#ffff"
      p="2"
    >
      <VStack width={{ base: "100%", md: "50%" }} gap={"2"}>
        <Heading>{project.title}</Heading>
        <Text>{project.description}</Text>
        <Heading size="sm">
          Tech Stack: <span>{project.techStack.join(", ")}</span>
        </Heading>
        <HStack gap="4">
          <Link href={project.deployedURL} target={"_blank"}>
            <IconButton aria-label="Go to website" icon={<GrView />} />
          </Link>
          <Link href={project.githubURL} target={"_blank"}>
            <IconButton aria-label="Show Code" icon={<GrGithub />} />
          </Link>
        </HStack>
      </VStack>
      <Box width={{ base: "100%", md: "50%" }}>
        <CarouselCard images={project.images} />
      </Box>
    </Flex>
  );
};

export default ProjectCard;
