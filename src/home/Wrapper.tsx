import { Container, Box, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";

export const Wrapper = () => {
  return (
    <Container maxW="4xl">
      <Box mt={20}>
        <Header />
      </Box>

      <Box mt={20}>
        <Search />
      </Box>
    </Container>
  );
};
