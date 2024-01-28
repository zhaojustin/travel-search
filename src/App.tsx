import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import { theme } from "./theme";
import { Wrapper } from "./home/Wrapper";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Wrapper />
    </Box>
  </ChakraProvider>
);
