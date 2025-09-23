import { Box, Image, VStack, Text, Heading} from "@chakra-ui/react";
const studies = [
    {
        title: "Bachelor's in Computer Science",
        duration: "2022-2026 | On-Going",
        institute: "Islamia College University Peshawar",
        img: "data:image/jpeg;base64,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"
    },
    {
       title: "Fsc pre Engineering",
        duration: "2020-2022| Completed",
        institute: "Capital Degree College Peshawar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8x01QESYOIxOAcIEr9SOdtEY4RHe9KvwEQ&s"
    },
     {
       title: "High School",
        duration: "2011-2020 | Completed",
        institute: "Govt High School Regi Lalma Peshawar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8x01QESYOIxOAcIEr9SOdtEY4RHe9KvwEQ&s"
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
    data-scroll data-scroll-speed="-.1"
    >
    <Heading>My Education </Heading>
    {
        studies.map((element, index) =>(
    <Box
display="flex"
  flexDirection={{ base: "column", md: "row" }}
  maxW={{ base: "90%", md: "900px" }}  // increase width
  w="100%"                             // take full width on small screens
  overflow="hidden"
  borderWidth="1px"
  borderRadius="lg"
  background="white"
  shadow="md"
  mx="auto"                             // center horizontally
  my={8}            
    >
      {/* Image */}
      <Image
        objectFit="cover"
        maxW={{ base: "100%", md: "200px" }}
        src={element.img}
        alt="Caffe Latte"
      />

      {/* Content */}
      <Box p={4} flex="1">
        <VStack align="start" spacing={3}>
          <Heading size="md">{element.title}</Heading>
          <Text>
             {element.institute}
          </Text>
          <Text>
             {element.duration}
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
