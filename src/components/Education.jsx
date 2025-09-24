import { Box, Image, VStack, Text, Heading} from "@chakra-ui/react";
import universityPic from "../images/institiutes-pic/islamia.jpeg"
import collegePic from "../images/institiutes-pic/college.jpeg"
import schoolPic from "../images/institiutes-pic/school.jpeg"
const studies = [
    {
        title: "Bachelor's in Software Engineering",
        duration: "2022-2026 | On-Going",
        institute: "Islamia College University Peshawar",
        img: universityPic
    },
    {
       title: "Fsc pre Engineering",
        duration: "2020-2022| Completed",
        institute: "Capital Degree College Peshawar",
        img: collegePic
    },
     {
       title: "High School",
        duration: "2011-2020 | Completed",
        institute: "Govt High School Regi Lalma Peshawar",
        img: schoolPic
    }

]
const Education = () => {
  return (
    <VStack 
    background="#cdea68"
    borderRadius="1.5% 1.5% 0 0"
    minHeight="100vh"
    width="100%"
  align="stretch"
  textAlign="center"
  py={{ base: 8, md: 16 }}
  px={{ base: 4, md: 8 }}
    data-scroll data-scroll-speed="-.1"
    >
    <Heading id="about-section">My Education </Heading>
    {
        studies.map((study) =>(
    <Box
display="flex"
      flexDirection={{ base: "column", md: "row" }}
      maxW={{ base: "100%", md: "900px" }}
      w="100%"           
      overflow="hidden"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
      shadow="md"
      mx="auto"
      my={8} 
      key={study.title}           
    >
      {/* Image */}
      <Image
        objectFit="cover"
        maxW={{ base: "100%", md: "200px" }}
        src={study.img}
        alt="Caffe Latte"
      />

      {/* Content */}
      <Box p={4} flex="1">
        <VStack align="start" spacing={3}>
          <Heading size="md">{study.title}</Heading>
          <Text>
             {study.institute}
          </Text>
          <Text>
             {study.duration}
          </Text>
        </VStack>
      </Box>
    </Box>
    ))
    }
    </VStack>
  );
};

export default Education;
