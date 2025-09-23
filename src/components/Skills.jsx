import React from 'react'
import { 
  Card,
  CardHeader,
  CardBody,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Grid,
  } from "@chakra-ui/react";
import FullScreenSection from './FullScreenSection';
import { FaHtml5,FaCss3,FaReact,FaJs,FaGithub, FaBootstrap,FaPython} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
        color: "#E34F26",
        percentage: 80
    },
        {
        name: "CSS",
        icon: <FaCss3 />,
        color: "#1572B6",
        percentage: 70
    },
        {
        name: "JavaScript",
        icon: <FaJs />,
        color: "#F7DF1E",
        percentage: 60
    },
        {
        name: "React",
        icon: <FaReact />,
        color: "#61DAFB",
        percentage: 75
    },
        {
        name: "Tailwind",
        icon: <RiTailwindCssFill />,
        color: "#06B6D4",
        percentage: 60
    },
                {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        color: "#7952B3",
        percentage: 70
    },
            {
        name: "Git & Github",
        icon: <FaGithub />,
        color: "#181717",
        percentage: 60
    },
            {
        name: "Python",
        icon: <FaPython />,
        color: "#3776AB",
        percentage: 50
    },

]
const Skills = () => {
  return (
    <FullScreenSection
      backgroundColor= "#e5ecfb"
      borderRadius="1.5% 1.5% 0 0"
      data-scroll data-scroll-section data-scroll-speed="0.001"
   
       
    >
        <Heading as="h1" id="skills-section" textAlign="center">
            Skills & Abilities
        </Heading>
       <Grid  
        display="grid"
        gridTemplateColumns={{
         base: "1fr",           
         md: "repeat(2, 1fr)", 
         lg: "repeat(2, 1fr)",}}
         gap={6}>
        {
            skills.map((skill, index) =>(

                 <Card
        maxW="600px"
        p={0}
        boxShadow="md"
        borderRadius="lg"
        backgroundColor="#0b1a40"
      >
        <CardHeader>
          <Heading size="md" color="white" display="flex" alignItems="center" gap={2} pb={2}>
         {skill.icon} {skill.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <RangeSlider
            value={[skill.percentage]} 
            min={0}
            max={100}
            // h="50px"
            isReadOnly
          >
            <RangeSliderTrack h="10px">
              <RangeSliderFilledTrack  bg={skill.color} />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
          </RangeSlider>
        </CardBody>
      </Card>
            ))
        }
     </Grid>
      </FullScreenSection>
  )
}
export default Skills