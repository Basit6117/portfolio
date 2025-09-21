import React from "react";
import { Avatar, Heading, VStack, Flex,Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { ReactTyped as Typed } from "react-typed";

const bio1 = "Hi There,";
const bio2 = "I'm Abdul Basit";
const greeting = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aspernatur temporibus minima, dolorum ratione id.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Flex
  width="100%"
  direction={{ base: "column", md: "row" }}
  align="stretch"          // both columns stretch full height
  justify="space-between"
  gap={12}
  px={8}
  py={16}
    >
      <VStack 
      align="flex-start"
      flex={1}
      spacing={6}
      >
        <Heading as="h1" size="3xl">
          {bio1}
          <br />
  <Text as="span"color="#63B3ED">
  {bio2}
</Text>
        </Heading>
        <Text fontSize="xl">
        <Typed
    strings={[
        "Final-Year Software Engineering Student",
        "Frontend Developer skilled in React",
        "Building projects with the MERN Stack",
        "Exploring AI and modern web technologies",
        "Creating clean, responsive, professional UIs"
  ]}
  typeSpeed={50}      // typing speed
  backSpeed={30}      // deleting speed
  loop                // keep repeating
/>
</Text>
      </VStack>

      <VStack
    flex={1}
    align="center"         // centers Avatar vertically
    justify="center" 
      >
        <Avatar
          name="avatar"
          src="profile.jpg"
          boxSize={{ base: "180px", md: "400px" }}  // bigger & responsive  
          borderRadius="2xl" 
        />
      </VStack>
    </Flex>
  </FullScreenSection>
);

export default LandingSection;
