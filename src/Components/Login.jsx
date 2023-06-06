import { Container, Heading, VStack, Input, Button, Link } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={'96'}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
         / >
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link top={'/forgetpassword'}forget password></Link>
          </Button>
          <Button colorScheme={'purple'} type='submit'>Log In</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
