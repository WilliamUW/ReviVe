import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Fix electronics",
    description: "Repair or refurbish electronics to extend their lifespan.",
  },
  {
    icon: "/steps/2.svg",
    title: "List electronics",
    description: "List your repaired or refurbished electronics for sale.",
  },
  {
    icon: "/steps/3.svg",
    title: "Buy electronics",
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
