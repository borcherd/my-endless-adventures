import { Box, Flex , Text, Divider, Grid, GridItem} from "@chakra-ui/react";
import * as home_components from "./Components";

export function Home() {
  return <Box><home_components.CarrouselSection/>
 <Grid
      templateColumns={{
        base: "1fr",       // 1 column for small screens
        sm: "3fr 1fr"      // 75% and 25% columns for larger screens
      }}
      templateRows={{
        base: "repeat(2, 1fr)", // 2 rows for small screens
        sm: "1fr"               // 1 row for larger screens
      }}
      gap={6} // Adjust the gap between grid items as needed
      width="100%" // Ensure the grid takes full width of its container
    >
    
    <GridItem>       <home_components.BlogsSection/>
</GridItem>
    <GridItem>       <home_components.AboutSection/>

      </GridItem>
  </Grid>
  </Box>;
}
