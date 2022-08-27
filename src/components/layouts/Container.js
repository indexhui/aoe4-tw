import { Flex, Text, VStack } from '@chakra-ui/react';

const Container = props => {
  return (
    <Flex py={{ base: '20px', lg: '32px' }} w="100%" justify="center">
      <Flex
        direction="column"
        justify="center"
        align="center"
        px="24px"
        w={{ base: '100%', lg: '75%', xl: '70%' }}
        {...props}
      ></Flex>
    </Flex>
  );
};

export default Container;
