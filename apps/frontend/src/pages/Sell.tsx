import { Link } from "react-router-dom";
import { VStack, Heading, Button, Box } from "@chakra-ui/react";

export default function SellPage() {
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
        What electronics do you have?
      </Heading>
      <VStack spacing={4} align="stretch" width="256px">
        <Link to="/broken" style={{ textDecoration: 'none' }}>
          <Button
            width="100%"
            height="64px"
            backgroundColor="red.500"
            color="white"
            _hover={{ backgroundColor: "red.600" }}
            transition="background-color 0.2s"
          >
            Broken Electronic
          </Button>
        </Link>
        <Link to="/unused" style={{ textDecoration: 'none' }}>
          <Button
            width="100%"
            height="64px"
            backgroundColor="blue.500"
            color="white"
            _hover={{ backgroundColor: "blue.600" }}
            transition="background-color 0.2s"
          >
            Unused Electronic
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}