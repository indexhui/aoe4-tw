import { Flex, Text, Box, AspectRatio } from '@chakra-ui/react';

import Container from 'components/layouts/Container';
const Learn = () => {
  return (
    <Container>
      <Flex h="32px" w="70%" position="relative" align="center" mb="32px">
        <Box w="100%" h="1px" bg="white" />
        <Flex
          w="200px"
          h="32px"
          bg="main.500"
          position="absolute"
          margin="0 auto"
          left="0"
          right="0"
          top="0"
          justify="center"
          align="center"
        >
          <Text fontSize="20px" letterSpacing="0.1em">
            各文明開局介紹
          </Text>
        </Flex>
      </Flex>
      <Flex w={{ base: '100%', lg: '75%' }}>
        <AspectRatio w="100%" ratio={16 / 9}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/9M0reyWh2v4"
            allowFullScreen
          />
        </AspectRatio>
      </Flex>
    </Container>
  );
};

export default Learn;
