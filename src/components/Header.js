import { Flex, Image, Link, Box, HStack, Text } from '@chakra-ui/react';
import logo from 'assets/images/logo.png';
import joinDiscord from 'assets/images/joinDiscord.png';
import pattern from 'assets/images/pattern.png';

const Header = () => {
  const bgGradient = 'linear-gradient(90deg,#181c29,#394766 40%,#181c29)';
  const golfGradient =
    'linear-gradient(90deg,rgba(184,134,45,0),#b8862d,#ffdf91,#b8862d,rgba(184,134,45,0))';
  return (
    <Flex
      bg={bgGradient}
      // bgImage={pattern}
      w="100%"
      justify="center"
      py="8px"
      px="24px"
      position="relative"
    >
      <Box position="absolute" top="0" w="100%" h="2px" bg={golfGradient} />
      <Box position="absolute" bottom="0" w="100%" h="2px" bg={golfGradient} />
      <Flex w={{ base: '100%', lg: '75%' }} justify="space-between">
        <Image w="240px" objectFit="contain" src={logo} />
        {/* <HStack>
          <Text>八強表演賽</Text>
          <Text>文明講解</Text>
        </HStack> */}
        <Link href="https://discord.gg/XUZfGgDgjn" isExternal>
          <Image h="50px" objectFit="contain" src={joinDiscord} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
