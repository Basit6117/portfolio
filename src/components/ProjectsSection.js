import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Tenzies Game",
    description:
      "A simple yet engaging game built with React: hold and match dice numbers to win in Tenzie. Fun for kids!",
    getImageSrc: () => require("../images/photo11.png"),
    livePreview: "https://radiant-meringue-151684.netlify.app"
  },
  {
    title: "Movies Searching App",
    description:
      "Movie search app where we can search movies and see movies rating etc built with react and tailwind",
    getImageSrc: () => require("../images/photo2.png"),
    livePreview: "https://basit6117.github.io/movie-app/"

  },
  {
    title: "Assembly Endgame",
    description:
      "Assembly Endgame is a fun word-guessing game built with React, where you guess a hidden word within limited attempts using clues.",
    getImageSrc: () => require("../images/photo3.png"),
     livePreview: "https://assembly-end-game-word-guess.netlify.app/"
  },
  {
    title: "Jobs Finding module",
    description:
      "Job Finder Module – Built with React, this module allows users to search and filter jobs by location, type, and other criteria to quickly find the right opportunity.",
    getImageSrc: () => require("../images/photo4.png"),
    livePreview: "https://jobs-finding-module.netlify.app/"
  },
    { title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.png"),
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
            livePreview = {project.livePreview}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
