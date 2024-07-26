import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Flex,
  Image,
  Badge,
  Button,
} from '@chakra-ui/react';
import {MdStar} from 'react-icons/all';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div id={"whole"}>
        <div id="spacing" style={{height:'30px'}}>

        </div>
        <div id="heading">
          <Box p="5"  borderWidth="1px"
               borderRadius="15px"
               backgroundColor="#f5f7ff"
               marginLeft="10px"
               marginRight="10px"
          >
              <Image src={require("./profile.png")}
                     alt={"Aung Phyo Htet"}
                     boxSize='300px'
                     objectFit='cover'
                     borderRadius='full'
                     marginLeft='10%'


              />
            <Center maxW={"500px"}>

            </Center>
          </Box>
        </div>
      <div id={"body"} style={{ height:'50vh'}}>
      </div>
      <div id={"footer"} style={{height: '70vh'}}>

      </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
