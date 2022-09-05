import { Flex, Text, Box } from '@chakra-ui/react';

const Title = props => {
  const golfGradient =
    'linear-gradient(90deg,rgba(184,134,45,0),#b8862d,#ffdf91,#b8862d,rgba(184,134,45,0))';
  return (
    <Flex h="32px" w="70%" position="relative" align="center" mb="32px">
      <Box w="100%" h="1px" bg={golfGradient} />
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
        <Text
          fontSize="20px"
          letterSpacing="0.2em"
          bgGradient="linear(to-l, #ffdf91, #cda351)"
          bgClip="text"
        >
          {props.children}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Title;
