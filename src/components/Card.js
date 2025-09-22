import { Heading,Card as ChakraCard,HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <ChakraCard maxW="lg" boxShadow="md" borderRadius="lg" overflow="hidden">
       <Image
        src={imageSrc}
        alt="Green double couch with wooden legs"
       />
      <VStack spacing={3}  p={4} align="stretch">
        <Heading>{title}</Heading>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                 {description}
        </Text>
          <HStack>
        <Text>
           <a target="blank" href="https://radiant-meringue-151684.netlify.app">Live preview</a>
          </Text>
         <FontAwesomeIcon icon={faArrowRight} size="1x" />
         </HStack>
       </VStack>
  </ChakraCard>
  )
};

export default Card;
