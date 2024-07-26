import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function MyHeading({ onButtonClick }) {
  return(
    <div>
      <Box p="5"  borderWidth="1px"
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
               marginRight="100px"
               onClick={() => onButtonClick()}


        />
        <Box   display="flex"
               justifyContent="center"
               alignItems="center"
        >
          <Box alignItems={"center"}
               textAlign={"center"}
          >
            <MyHeading as="h1" size="lg">Aung Phyo Htet</MyHeading>
            <br/>
            <MyHeading as="h3" size={"md"} >Yangon, Myanmar</MyHeading>
            <br/>
            <Text as='u'>Web Developer</Text>

          </Box>
        </Box>

      </Box>
    </div>
  )
}