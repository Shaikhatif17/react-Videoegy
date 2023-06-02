import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {
  const {isOpen,onOpen,onClose}= useDisclosure()
  return (
   <>
   <Button
   pos={'fixed'}
   top={"4"}
   left={"4"}
  colorScheme='purple'
  p={"0"}
  h={"10"}
  w={"10"}
  borderRadius={"full"}
  onClick={onOpen}
  >
    <BiMenuAltLeft size={'20'}/>
   </Button>

   <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay/>
    <DrawerContent>
      
      <DrawerCloseButton/>
      <DrawerHeader>VIDEOEGY</DrawerHeader>
      <DrawerBody>
        <VStack alignItems={'flex-start'}>
          <Button variant={'ghost'} colorScheme='"purple'>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={'ghost'} colorScheme='"purple'>
            <Link  to="/videos">Videos</Link>
          </Button>
          <Button variant={'ghost'} colorScheme='"purple'>
            <Link to="/videos?category=free">Free videos</Link>
          </Button>
          <Button variant={'ghost'} colorScheme='"purple'>
            <Link  to="/upload">upload video</Link>
          </Button>
        </VStack>

        <HStack>
          <Button>ok</Button>
        </HStack>
      </DrawerBody>
    </DrawerContent>

   </Drawer>
   </>
  );
};

export default Header;
