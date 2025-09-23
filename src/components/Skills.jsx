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
  Text,} from "@chakra-ui/react";
import FullScreenSection from './FullScreenSection';
import { FaHtml5 } from "react-icons/fa";
const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
        color: "orange",
        percentage: 80
    },
        {
        name: "CSS",
        icon: <FaHtml5 />,
        color: "blue",
        percentage: 70
    },
        {
        name: "Java Script",
        icon: <FaHtml5 />,
        color: "yellow",
        percentage: 60
    },
        {
        name: "React",
        icon: <FaHtml5 />,
        color: "blue",
        percentage: 75
    },
]
const Skills = () => {
  return (
    <FullScreenSection
      backgroundColor= "#e5ecfb"
      borderRadius="1.5% 1.5% 0 0"
      data-scroll data-scroll-section data-scroll-speed="0.001"
    >
        <Heading as="h1" id="projects-section">
            Skills & Abilities
        </Heading>
        {
            skills.map((skill, index) =>(
                 <Card
        maxW="500px"
        p={0}
        boxShadow="md"
        borderRadius="lg"
        backgroundColor="#05001f"
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
            colorScheme={skill.color}
          >
            <RangeSliderTrack h="10px">
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
          </RangeSlider>
        </CardBody>
      </Card>
            ))
        }
     
      </FullScreenSection>
  )
}
export default Skills