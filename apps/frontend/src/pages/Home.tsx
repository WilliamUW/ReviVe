import { Link } from "react-router-dom";
import { Box, VStack, Heading, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box 
      as="main" 
      minHeight="100vh" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      padding={24}
    >
      <Heading as="h1" size="2xl" marginBottom={8}>
        Welcome to ReviVe
      </Heading>
      <VStack spacing={4} align="stretch" width="256px">
        <Link to="/sell" style={{ textDecoration: 'none' }}>
          <Button
            width="100%"
            height="64px"
            backgroundColor="blue.500"
            color="white"
            _hover={{ backgroundColor: "blue.600" }}
            transition="background-color 0.2s"
          >
            I have electronics
          </Button>
        </Link>
        <Link to="/buy" style={{ textDecoration: 'none' }}>
          <Button
            width="100%"
            height="64px"
            backgroundColor="green.500"
            color="white"
            _hover={{ backgroundColor: "green.600" }}
            transition="background-color 0.2s"
          >
            I want electronics
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}