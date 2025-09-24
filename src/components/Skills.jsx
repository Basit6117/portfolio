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
        id: 1,
        icon: <FaHtml5 />,
        color: "#E34F26",
        percentage: 80
    },
        {
        name: "CSS",
        id: 2,
        icon: <FaCss3 />,
        color: "#1572B6",
        percentage: 70
    },
        {
        name: "JavaScript",
        id: 3,
        icon: <FaJs />,
        color: "#F7DF1E",
        percentage: 60
    },
        {
        name: "React",
        id: 4,
        icon: <FaReact />,
        color: "#61DAFB",
        percentage: 75
    },
        {
        name: "Tailwind",
        id: 5,
        icon: <RiTailwindCssFill />,
        color: "#06B6D4",
        percentage: 60
    },
                {
        name: "Bootstrap",
        id: 6,
        icon: <FaBootstrap />,
        color: "#7952B3",
        percentage: 70
    },
            {
        name: "Git & Github",
        id: 7,
        icon: <FaGithub />,
        color: "#181717",
        percentage: 60
    },
            {
        name: "Python",
        id: 8,
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
           templateColumns={{
            base: "1fr",        
            md: "repeat(2, 1fr)"
            }}
            gap={{ base: 4, md: 6 }}
            justifyContent="center"
            px={{ base: 4, md: 16 }}
          >
        {
            skills.map((skill) =>(
                 <Card
        w="100%"  
        maxW={{ base: "100%", md: "500px", lg: "550px" }} 
        mx="auto"
        p={{ base: 4, md: 6 }}
        boxShadow="md"
        borderRadius="lg"
        backgroundColor="#0b1a40"
        key={skill.id}
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