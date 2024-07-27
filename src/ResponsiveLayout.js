import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

function ResponsiveLayout({ btnClickHandler }) {
  // Determine the layout based on screen size
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box p={5}>
      {isMobile ? (
        // Stack layout for mobile screens
        <Stack spacing={4}
               borderRadius="15px"
               backgroundColor="#f5f7ff"
               m="10px"
               display="flex"
               justifyContent="center"
               alignItems="center"
        >
          <Image src={require("./profile.png")}
                 alt={"Aung Phyo Htet"}
                 boxSize='300px'
                 objectFit='cover'
                 borderRadius='full'
                 display="flex"
                 onClick={()=>btnClickHandler()}



          />
          <Box   display="flex"
                 justifyContent="center"
                 alignItems="center"
          >
            <Box alignItems={"center"}
                 textAlign={"center"}
            >
              <Heading as="h1" size="lg">Aung Phyo Htet</Heading>
              <br/>
              <Heading as="h3" size={"md"} >Yangon, Myanmar</Heading>
              <br/>
              <Text as='u'>Web Developer</Text>

            </Box>
          </Box>        </Stack>
      ) : (
        // Flex layout for larger screens
        <Flex direction="row" gap={30}
              borderRadius="15px"
              backgroundColor="#f5f7ff"
              m="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
        >
          <Image src={require("./profile.png")}
                 alt={"Aung Phyo Htet"}
                 boxSize='300px'
                 objectFit='cover'
                 borderRadius='full'
                 display="flex"
                 onClick={()=>btnClickHandler()}


          />
          <Box   display="flex"
                 justifyContent="center"
                 alignItems="center"
          >
            <Box alignItems={"center"}
                 textAlign={"center"}
            >
              <Heading as="h1" size="lg">Aung Phyo Htet</Heading>
              <br/>
              <Heading as="h3" size={"md"} >Yangon, Myanmar</Heading>
              <br/>
              <Text as='u'>Web Developer</Text>

            </Box>
          </Box>        </Flex>
      )}
    </Box>
  );
}

export default ResponsiveLayout;
