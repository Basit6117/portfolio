import { Heading,Card as ChakraCard,HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc,livePreview }) => {
  return(
  
    <ChakraCard  boxShadow="md" borderRadius="lg" overflow="hidden">
       <Image
        src={imageSrc}
    width="100%"
    height="200px"   // fixed height
    objectFit="cover" // makes the image cover the area
    objectPosition="center" // adjust which part is shown
       />
      <VStack spacing={3}  p={4} align="stretch">
        <Heading>{title}</Heading>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                 {description}
        </Text>
          <HStack>
        <Text>
           <a target="blank" href={livePreview}>Live preview</a>
          </Text>
         <FontAwesomeIcon icon={faArrowRight} size="1x" />
         </HStack>
       </VStack>
  </ChakraCard>
  )
};

export default Card;
