import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Center,
  Image,
  Stack,
  Text,
  Button, Heading,
} from '@chakra-ui/react';
import Abcd from './Abcd';

function App() {

  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const clickHandler= (e)=>{
    setCount(count+1);
    if(count > 5){
      setShow(true);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <div id={"whole"}>
        <div id="heading">
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
                   onClick={clickHandler}


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
            </Box>

          </Box>
        </div>
        <div id={"body"} style={{ height:'50vh'}}>
        {show ?
          <Center backgroundColor="#ebbe7e"
                  padding="50px"
                  paddingY="500px"
          >
            <Image src={require('./puuung.gif')} />
          </Center>
          : <></>

        }
      </div>
      <div id={"footer"} style={{height: '70vh'}}>

      </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
