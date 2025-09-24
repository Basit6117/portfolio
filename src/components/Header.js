import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Flex, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:imbasitkh@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Basit6117",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/abdul-basit-42a927239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

  };

  return (
<Flex
  as="nav"
  position="fixed"
  top={0}
  left={0}
  right={0}
  backgroundColor="#18181b"
  color="white"
  zIndex={1000}
  py={4}
>
  <Box maxW="1280px" mx="auto" w="100%" px={{ base: 4, md: 16 }}>
    <HStack
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        {socials.map((element, index) => (
          <a target="blank" key={index} href={element.url}>
            <FontAwesomeIcon icon={element.icon} size="2x" />
          </a>
        ))}
      </HStack>

      {/* Menu links */}
      <HStack
        spacing={6}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "flex-end" }}
        w={{ base: "100%", md: "auto" }}
      >
        <a href="#home-section">Home</a>
        <a href="#about-section">About</a>
        <a href="#skills-section">Skills</a>
        <a onClick={(e) => {
          e.preventDefault();
          handleClick("projects")(); 
          }} 
          href="#projects-section">Projects</a>
        <a href="#contactme-section">Contact</a>
      </HStack>

      {/* Mobile socials below menu */}
      <HStack
        spacing={4}
        display={{ base: "flex", md: "none" }}
        justifyContent="center"
        w="100%"
        mt={4}
      >
        {socials.map((element, index) => (
          <a key={index} href={element.url}>
            <FontAwesomeIcon icon={element.icon} size="2x" />
          </a>
        ))}
      </HStack>
    </HStack>
  </Box>
</Flex>

  );
};
export default Header;
