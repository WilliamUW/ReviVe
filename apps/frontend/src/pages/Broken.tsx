import {Flex, Container} from "@chakra-ui/react";
import React from "react";
import {InfoCard, Instructions, Footer, Dropzone} from "../components";

const Broken = () => (
  <div>
    Broken Page
    <>
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
          <Dropzone />
        </Container>
      </Flex>
      <Footer />
    </>
  </div>
);

export default Broken;
