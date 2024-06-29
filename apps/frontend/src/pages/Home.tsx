import React from "react";
import { Link } from "react-router-dom";
import { Dropzone, InfoCard, Instructions } from "../components";
import { Flex, Container, Button } from "@chakra-ui/react";

const Home = () => (
  <div className="space-y-4">
    <Flex flex={1}>
      <Container
        mt={{ base: 4, md: 10 }}
        maxW={"container.xl"}
        mb={{ base: 4, md: 10 }}
        display={"flex"}
        flex={1}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <InfoCard />
        <Instructions />
        <Link
          to="/sell"
          className="block w-64 p-4 text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <Button>I have electronics</Button>
        </Link>
        <Link
          to="/buy"
          className="block w-64 p-4 text-center bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          <Button>I want electronics</Button>
        </Link>
      </Container>
    </Flex>
  </div>
);

export default Home;
