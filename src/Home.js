import { Box, Flex, Heading, Image, Stack, Text, useBreakpointValue, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import MyCard from './MyCard';


export default function Home(){
  const isMobile = useBreakpointValue({ base: true, md: false });

  return(
    <Box p={5}>
        <Flex direction="row" gap={30}
              borderRadius="15px"
              backgroundColor="#f5f7ff"
              m="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
        >
          <Box p={5}>
            {/* Create a responsive grid layout */}
            <Grid
              templateColumns={{
                base: "1fr",        // 1 column on mobile
                md: "1fr 1fr",      // 2 columns on small screens
                xl: "repeat(3, 1fr)", // 3 columns on medium screens
              }}
              gap={6} // Adjust space between items
            >
              {/* Grid items (MyCard component) */}
              <GridItem>
                <MyCard Title={"Current Site"} description={"Serve as my portfolio site and built using react and Chakra UI. Mainly focus on statefulness and responsiveness. I'm not good at design"} to={"/"} />
              </GridItem>
              <GridItem>
                <MyCard  Title={"Shadcn Finance"} description={"Finance tracking App using Shadcn UI, built with react. Using various addons and extensions such as Clerk for authorization, Neon database, and graphs to display the daily expenses and Incomes"} to={"https://shadcn-finance.vercel.app"}/>
              </GridItem>
              <GridItem>
                <MyCard  Title={"Vowels Movies"} description={"Movie site for myself. I've found a provider which will allow me to watch moves without subscription fees. Currently, I'm using that feature only on localhost due to you-know-why reasons. I don't have plan to make it public though."} to={"https://vowels-movie.vercel.app/"}/>
              </GridItem>
              <GridItem>
                <MyCard Title={"Coming Soon"} description={"I'm currently under busy schedule to create a one fit for this slot. This slot is added to show the responsiveness. Resize the screen. I'm using Grid layout."}/>
              </GridItem>
              {/* You can add more items or components here */}
            </Grid>
          </Box>

        </Flex>

    </Box>
  )
}