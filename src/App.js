import React from 'react';
import {
  ChakraProvider,
  theme,
  Center,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
  Button,
  useDisclosure,

} from '@chakra-ui/react';
import Abcd from './Abcd';
import ResponsiveLayout from './ResponsiveLayout';

function App() {

  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const [gif, setGif] = React.useState(require('./puuung.gif'));
  const { isOpen, onOpen, onClose } = useDisclosure()

  const clickHandler= ()=>{
    setCount(count + 1);
    if(count > 12){
      count % 2 == 0 ? setGif(require('./puuung.gif')): setGif(require('./cuddle.gif'))
      onOpen()
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <div id={"whole"}>
        <div id="heading">
          <ResponsiveLayout btnClickHandler={clickHandler}/>
          <Modal  onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay
              bg='#ebbe7e30'
              backdropFilter='blur(10px)'
            />
            <ModalContent>
              <ModalBody
                bg='#ebbe7e30'
              >
                <Image src={gif}/>
              </ModalBody>
            </ModalContent>
          </Modal>

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
