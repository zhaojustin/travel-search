import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";

import { LuPlane } from "react-icons/lu";

export const Search = () => {
  return (
    <Box>
      <SimpleGrid columns={3}>
        <BudgetInput />
        <Airport />
        <DatePicker />
      </SimpleGrid>
    </Box>
  );
};

const BudgetInput = () => {
  return (
    <VStack alignItems="left">
      <Text color="gray.500" fontSize={16}>
        Total Budget
      </Text>

      {/* input budget */}
      <InputGroup bg="gray.100" borderWidth={0} width={250} borderRadius={15}>
        <InputLeftElement pointerEvents="none" color="gray.300">
          $
        </InputLeftElement>
        <Input placeholder="Enter amount" borderWidth={0} borderRadius={15} />
      </InputGroup>
    </VStack>
  );
};

const Airport = () => {
  return (
    <VStack alignItems="left">
      <Text color="gray.500" fontSize={16}>
        Home Airport
      </Text>

      {/* input budget */}
      <InputGroup bg="gray.100" borderWidth={0} width={250} borderRadius={15}>
        <InputLeftElement pointerEvents="none" color="gray.300">
          <Icon as={LuPlane} />
        </InputLeftElement>
        <Input placeholder="Home Airport" borderWidth={0} borderRadius={15} />
      </InputGroup>
    </VStack>
  );
};

const DatePicker = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  return (
    <VStack alignItems="left">
      <Text color="gray.500" fontSize={16}>
        Dates
      </Text>

      {/* input budget */}
      <RangeDatepicker
        selectedDates={selectedDates}
        onDateChange={setSelectedDates}
      />
    </VStack>
  );
};
