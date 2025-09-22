import { VStack } from "@chakra-ui/react";
import { motion } from 'framer-motion'

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      {...boxProps}
    >
      <VStack
        maxWidth="1280px"
        minHeight="100vh" 
        width="100%"
        align="stretch"
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
