import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "38 Electronics Fixed",
    description: "Repair or refurbish electronics to extend their lifespan.",
  },
  {
    icon: "/steps/2.svg",
    title: "58 Electronics Listed",
    description: "List your repaired or refurbished electronics for sale.",
  },
  {
    icon: "/steps/3.svg",
    title: "25 Electronics Bought",
    description: "Purchase repaired or refurbished electronics from others.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 4 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
