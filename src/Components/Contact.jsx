import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  VStack,
  Flex,
  Text
} from "@chakra-ui/react";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillTelephoneInboundFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

const Contact = () => {
  return (
    <VStack maxW={"1000px"} m="auto" id="contact" gap="10">
      <Heading>Let's get in touch</Heading>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="space-evenly" alignItems={"center"} w={"100%"}>
        <HStack gap={{ base: "5", md: "10" }} my="4">
        
<Flex direction={"column"} gap="10px">

<Flex  gap={"7px"} width={"300px"} height={"40px"} border={"1px"} alignItems={"center"} p={"3px"} pl={"5px"} pr={"5px"} borderRadius={"3px"}>
<Icon as={MdMarkEmailUnread} w={"5"} h={"5"} color="telegram.800" />
<Link href="mailto:rohitsharma4681@gmail.com">rohitsharma4681@gmail.com</Link>
</Flex>

<Flex  gap={"7px"} width={"300px"} height={"40px"} border={"1px"} alignItems={"center"} p={"3px"} pl={"5px"} pr={"5px"} borderRadius={"3px"}>
<Icon as={BsFillTelephoneInboundFill} w={"5"} h={"5"} color="telegram.800" />
<Text href="tel:+91-9451441546">+91-9451441546</Text>
</Flex>

<Flex gap={"7px"}  width={"300px"} height={"40px"} border={"1px"} alignItems={"center"} p={"3px"} pl={"5px"} pr={"5px"} borderRadius={"3px"}>
<Icon as={BsLinkedin} w={"5"} h={"5"} color="telegram.800" />
<Link href="https://www.linkedin.com/in/rohit-kumar-70622123a/" target="_blank">Rohit-Kumaar</Link>
</Flex>

<Flex gap={"7px"}  width={"300px"} height={"40px"} border={"1px"} alignItems={"center"} p={"3px"} pl={"5px"} pr={"5px"} borderRadius={"3px"}>
<Icon as={BsGithub} w={"5"} h={"5"} color="telegram.800" />
<Link href="https://github.com/rohit0985" target="_blank">rohit0985</Link>
</Flex>


</Flex>

        </HStack>
        <Box rounded={"lg"} boxShadow={"lg"} p={6} maxWidth="450px" width={"100%"}>
          <form action="https://formsubmit.co/a46a1cceff413118facedecaed5e9466" method="POST">
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement children={<FaUserTie color="#525252" />} />
                <Input type="text" name="name" placeholder="Enter your name" required />
              </InputGroup>
              <InputGroup>
                <InputLeftElement children={<MdMarkEmailUnread color="#525252" />} />
                <Input type="text" name="email" placeholder="Enter email address" required />
              </InputGroup>
              <FormControl isRequired>
                <Textarea name="message" placeholder="Enter your message....." />
              </FormControl>
              <Stack>
                <Button
                  type="submit"
                  colorScheme="messenger"
                  _hover={{ bg: "blue.500" }}
                  rightIcon={<RiSendPlaneFill />}
                >
                  Send Message
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </VStack>
  );
};

export default Contact;
