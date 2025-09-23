import { Avatar, Heading, VStack, Flex,Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { ReactTyped as Typed } from "react-typed";
const bio1 = "Hi There,";
const bio2 = "I'm Abdul Basit";
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    color= "red"
    data-scroll data-scroll-section  data-scroll-speed="-.2"

  >
    <Flex
  width="100%"
  direction={{ base: "column", md: "row" }}
  align="stretch"
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
        <Heading as="h1" size="3xl" id="home-section">
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
  typeSpeed={50}
  backSpeed={30}
  loop
/>
</Text>
      </VStack>

      <VStack
    flex={1}
    align="center"
    justify="center" 
      >
        <Avatar
          name="avatar"
          src="profile.jpg"
          boxSize={{ base: "180px", md: "500px" }}   
          borderRadius="50%"
          
        />
      </VStack>
    </Flex>
  </FullScreenSection>
);

export default LandingSection;
