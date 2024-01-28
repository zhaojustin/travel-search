import { VStack, Text, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <VStack gap={5}>
      <Text fontSize={36} color="purple.600">
        Header
      </Text>
      <Text fontSize={18}>Description</Text>
    </VStack>
  );
};
