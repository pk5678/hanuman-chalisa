import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Image, Heading } from '@chakra-ui/react';
import hanuman from './hanuman-image.jpg';
import Doha1 from './Doha1';
import Doha2 from './Doha2';
import Chopai from './Chopai';

function BoxImage() {
  return(
    <Box boxSize='xxl'>
      {/*<Image src='https://wallpapercave.com/wp/wp2796642.jpg' alt='Jai Hanuman' />*/}
      <Image src={hanuman} alt='Jai Hanuman' />
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>Hanuman Chalisa</Heading>            
            <BoxImage />
            <Doha1 />
            <Chopai />
            <Doha2 />
            <Heading>Pramod Kumar. Year 2022</Heading>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
