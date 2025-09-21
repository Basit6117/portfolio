import { VStack } from "@chakra-ui/react";
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack 
     maxWidth="1280px"
    minHeight="100vh"   // keeps full height
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
