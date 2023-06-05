import React from 'react';
import { Heading, Stack, VStack, Text } from '@chakra-ui/react';

const Videos = () => {
  return (
    <Stack direction={['colum' ,'row']} h={'100vh'}>
<VStack w={'full'}>
    <video 
    controls 
    controlsList='nodownload'
    src='' 
    style={{
        width:"100%",
    }}></video>
    <VStack>
        <Heading>sample video 1</Heading>
        <Text> this is a sample video for testing and demo. this is called description
 </Text>
    </VStack>
</VStack>
<VStack w={['full','xl']}>

</VStack>
    </Stack>

  );};
  

export default Videos
