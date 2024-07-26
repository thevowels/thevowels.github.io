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
  Flex, useBreakpointValue
} from '@chakra-ui/react';
import Abcd from './Abcd';
import ResponsiveLayout from './ResponsiveLayout';

function App() {

  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const clickHandler= ()=>{
    console.log('clicked')
    setCount(count+1);
    if(count > 5){
      setShow(true);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <div id={"whole"}>
        <div id="heading">
          <ResponsiveLayout btnClickHandler={clickHandler}/>
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
