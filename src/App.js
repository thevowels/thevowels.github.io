import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import {
  ChakraProvider,
  theme,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Flex,
  Box,
} from '@chakra-ui/react';

import ResponsiveLayout from './ResponsiveLayout';
import { getCurrentGif } from './gifFunction';



import Abcd from './Abcd';
import Home from './Home';

function App() {

  const [count, setCount] = React.useState(0);
  const [gif, setGif] = React.useState(require('./gifs/puuung.gif'));
  const { isOpen, onOpen, onClose } = useDisclosure()

  const hourIntervals = {
    'midnight_to_early_morning': [0, 1, 2, 3, 4],
    'early_morning_to_morning': [5, 6, 7, 8, 9],
    'morning_to_afternoon': [10, 11, 12, 13, 14],
    'afternoon_to_evening': [15, 16, 17, 18, 19],
    'evening_to_midnight': [20, 21, 22, 23]
  };
  let  imageArr = []

  const getGif = () =>{
    let hour = new Date().getHours()
    // let hour = 26;

    switch (true) {
      case hourIntervals.midnight_to_early_morning.includes(hour):
        // return 'midnight_to_early_morning';
        imageArr = [require('./gifs/puuung.gif'), require('./gifs/cuddle.gif'), require('./gifs/cuddling.webp')]
        return;
      case hourIntervals.early_morning_to_morning.includes(hour):
        // return 'early_morning_to_morning';
        imageArr =[require('./gifs/2_1.gif'),
          require('./gifs/2_2.gif'),
          require('./gifs/2_3.gif'),
        ]
        return;
      case hourIntervals.morning_to_afternoon.includes(hour):
        imageArr =[require('./gifs/3_1.gif'), require('./gifs/3_2.gif'), require('./gifs/3_3.gif')]
        // return 'early_morning_to_morning';
        return
      case hourIntervals.afternoon_to_evening.includes(hour):
        // return 'afternoon_to_evening';
        imageArr =[require('./gifs/4_1.gif'), require('./gifs/4_2.gif')]
        return
      case hourIntervals.evening_to_midnight.includes(hour):
        // return 'evening_to_midnight';
        imageArr = [require('./gifs/puuung.gif'), require('./gifs/cuddle.gif'), require('./gifs/cuddling.webp'), require('./mp4/eve.mp4')]
        return
      default:
      // return 'unknown_interval';
    }

  }
  getGif();

  const clickHandler= ()=>{
    setCount(count + 1);
    if(count > 12){
      setGif(getCurrentGif(imageArr))
      onOpen()
    }
  }

  return (
    <Router>
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
                <Flex justify="center" align="center" height="100%">
                  { gif.endsWith('.mp4') ?
                    <Box
                      as="video"
                      src={gif}
                      autoPlay
                      loop
                      width="100%"
                      height="auto"
                      objectFit="cover"
                      onClick={clickHandler}
                    />
                    :
                    <Image src={gif} onClick={clickHandler}/>

                  }
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>


        </div>
        <Routes>
          <Route exact path="/" element={<Home />}  />
          {/*<Route exact path="/abc" element={<Abcd/>}/>*/}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        {/*<div id={"footer"} style={{height: '70vh'}}>*/}

        {/*</div>*/}
      </div>
    </ChakraProvider>
    </Router>
  );
}

export default App;
