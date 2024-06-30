import { Flex, Container } from "@chakra-ui/react";
import { Instructions } from "../components";

const CanvaEmbed = () => (
  <>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.25%",
        paddingBottom: 0,
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "1.6em",
        marginBottom: "0.9em",
        overflow: "hidden",
        borderRadius: "8px",
        willChange: "transform",
      }}
    >
      <iframe
        loading="lazy"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          border: "none",
          padding: 0,
          margin: 0,
        }}
        src="https://www.canva.com/design/DAGJjT0jOkc/zbI_qjXO0kiELWwtmTl_sw/view?embed"
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>
    <a
      href="https://www.canva.com/design/DAGJjT0jOkc/zbI_qjXO0kiELWwtmTl_sw/view?utm_content=DAGJjT0jOkc&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
      target="_blank"
      rel="noopener noreferrer"
    >
      ReviVe
    </a>
  </>
);
const About = () => (
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
                <Instructions />

        <CanvaEmbed />
        {/* <InfoCard /> */}
        {/* <Dropzone /> */}
      </Container>
    </Flex>
    {/* <Footer /> */}
  </>
);

export default About;
