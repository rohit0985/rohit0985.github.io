import React from "react";
import "../index.css";
import { chakra, Box, Flex, HStack, Button, useDisclosure, VStack, IconButton, Avatar, Link } from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Link as ReachLink } from "react-scroll";
import resume from "../assets/Rohit_Kumar_Resume.pdf";
// import logo from "../assets/ay-logo.jpg";
const navItem = [
  { path: "home", name: "Home" },
  { path: "about", name: "About Me" },
  { path: "skills", name: "Skills" },
  { path: "projects", name: "Projects" },
  { path: "contact", name: "Contact" },
];

// const secondryColor = "#2442d7";

 const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        pos={"sticky"}
        top="0"
        zIndex={10}
        // bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
        bg="gray"
        color="white"
      >
        <Flex justifyContent="space-between" mx="auto">
          <chakra.a href="/" title="Rohit Kumar" display="flex" alignItems="center">
            {/* <Avatar size="sm" name="Rohit Kumar" src={logo} _hover={{ transform: "rotate(90deg)" }} /> */}
          </chakra.a>
          <HStack spacing={3} display={{ base: "none", md: "flex" }} gap="6">
            {navItem.map((item, i) => {
              return (
                <Link
                  as={ReachLink}
                  key={item.path}
                  activeClass={"active"}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={item.path === "skills" ? -180 : -60}
                  duration={700}
                  fontSize="18"
                  _hover={{ color: "#0078ff" }}
                >
                  {item.name}
                </Link>
              );
            })}
          </HStack>
          <Link
            display={{ base: "none", md: "flex" }}
            target="_blank"
            href={resume}
            download="Rohit_Kumar_Resume"
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger" _hover={{backgroundColor:"#28324c", color:"#dcd0ce"}}>
              Download Resume
            </Button>
          </Link>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              colorScheme={"blackAlpha"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
            />
            <VStack
              pos="absolute"
              left={0}
              right={0}
              top={16}
              display={isOpen ? "flex" : "none"}
              pb="6"
              rounded="sm"
              shadow="sm"
              bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
              // bg="black"
              color="white"
            >
              {navItem.map((item) => {
                return (
                  <Link
                    fontSize="xl"
                    fontWeight="500"
                    key={item.path}
                    as={ReachLink}
                    activeClass={"active"}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={item.path === "skills" ? -180 : -60}
                    duration={700}
                    onClick={isOpen ? onClose : onOpen}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link target="_blank" href={resume} download="Rohit_Kumar_resume" _hover={{ textDecoration: "none" }}>
                <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger">
                  Download Resume
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Navbar