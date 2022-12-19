import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectData";


const Projects = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>My Projects</Heading>
      {projectsData.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </VStack>
  );
};

export default Projects;
