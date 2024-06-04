import { Box, Flex } from "@chakra-ui/react";
import * as home_components from "./Components";

export function Home() {
  return <Box>
    <home_components.CarrouselSection/>
  <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{base: '0', md: '6' }}
      width="100%"
      pt={'6'}
    >
      <Box
        flex={{ base: '1 1 auto', md: '3 1 0%' }}
        width={{ base: '100%', md: '75%' }}
      >
        <home_components.BlogsSection />
      </Box>
      <Box
        flex={{ base: '1 1 auto', md: '1 1 0%' }}
        width={{ base: '100%', md: '25%' }}
        alignSelf={{ base: 'flex-start', md: 'stretch' }}
      >
        <home_components.AboutSection />
      </Box>
    </Flex>
  </Box>;
}
