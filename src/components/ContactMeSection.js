import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName:"",
      email: "",
      type: "",
      comment: ""

    },
   onSubmit: async (values, { resetForm }) => {
  await submit("/fake-api", values); 

  if (response?.type === "success") {
    onOpen("success", response.message);
    resetForm(); 
  } else if (response?.type === "error") {
    onOpen("error", response.message);
  }
},
    validationSchema: Yup.object({
         firstName: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        type: Yup.string().required("Type is required"),
        comment: Yup.string().required("comment is required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      alignItems="center"
      py={16}
      spacing={8}
      data-scroll data-scroll-speed="-.01"
      borderRadius="1.5% 1.5% 0 0"
    >
      <VStack 
        w={{ base: "95vw", md: "90vw", lg: "1024px" }}
       p={{ base: 4, md: 8, lg: 32 }}

      alignItems="center"
      >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl  isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                   value={formik.values.firstName}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl  isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
               isInvalid={formik.touched.type && Boolean(formik.errors.type)}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                id="type" 
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                 <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl  
              isInvalid={formik.touched.comment && Boolean(formik.errors.comment)} 
             >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}

                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button 
              type="submit" 
              colorScheme="purple" 
              width="full"
              isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
