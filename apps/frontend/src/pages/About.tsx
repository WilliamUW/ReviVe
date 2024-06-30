import { Flex, Container } from "@chakra-ui/react";
import { InfoCard, Instructions, Footer, Dropzone } from "../components";
import BuyCoffee from "./BuyCoffee";

const About = () => (
  <>
    <BuyCoffee />
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
);

export default About;
