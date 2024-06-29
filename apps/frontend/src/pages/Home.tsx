import React from "react";
import { Link } from "react-router-dom";
import { Dropzone, InfoCard, Instructions } from "../components";
import { Flex, Container, Button, VStack } from "@chakra-ui/react";
import { useUserContext } from "../components/UserContext";

const Home = () => {
  const { listings } = useUserContext();
  
  return (
    <VStack spacing={4} align="center">
      <Link to="/sell" style={{ textDecoration: 'none' }}>
        <Button
          width="256px"
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
          width="256px"
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
  );
};

export default Home;