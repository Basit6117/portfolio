import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading,SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Tenzies Game",
    description:
      "A simple yet engaging game built with React: hold and match dice numbers to win in Tenzie. Fun for kids!",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Movie Searching App",
    description:
      "Movie search app where we can search movies and see movies rating etc built with react and tailwind",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
    { title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={8}
      borderRadius="1.5% 1.5% 0 0"
      data-scroll data-scroll-section data-scroll-speed="0.001"
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
        {/* <SimpleGrid  columns={{ base: 1, md: 2, lg: 3 }} spacing={6}> */}
      <Box
        display="grid"
        gridTemplateColumns={{
         base: "1fr",           
         md: "repeat(2, 1fr)", 
         lg: "repeat(3, 1fr)",
       }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
      {/* </SimpleGrid> */}
    </FullScreenSection>
  );
};

export default ProjectsSection;
