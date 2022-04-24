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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useToast, Button, Menu, MenuItem, MenuList, MenuButton, Image, Alert, AlertIcon, AlertDescription, AlertTitle, CloseButton, Heading } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md';
import hanuman from './wp2796642.jpg' 

function HanumanChalisaDoha() {
  const topic = "दोहा";
  const message = [
    "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।",
    "बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥",
    "",    
    "बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार ।",
    "बल बुधि विद्या देहु मोहि, हरहु कलेश विकार ॥"
  ];
  return(<>{topic}<p>{message}</p></>);
}

function IconExample() {
  return <Icon as={MdSettings} color="blue.500"/>
}

function ToastExample() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

function MenuExample() {
  return (
    <Menu>
      <MenuButton as={Button}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}

function AlertExample() {
  return(
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
      <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      <CloseButton position='absolute' right='8px' top='8px' />
    </Alert>
  );
}

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
            {/*<Logo h="20vmin" pointerEvents="none" />*/}
            <Heading>Hanuman Chalisa</Heading>
            
            <Box textAlign="center" fontSize="xl">
              <MenuExample /> <Button ><IconExample/>{' '}Settings</Button>   
              </Box>     
            <BoxImage />
            <HanumanChalisaDoha />
            <ToastExample />
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
